import React, { Component } from 'react';
var maxvarnr=0; // used by the rename_vars_in_formula
var printlen=0; // used while printing
var printlst=[]; // used while printing
var printarray=[];  // used while printing the truth table
class Logic extends Component {
  show_result(txt) {
    console.log(txt);
    this.append_to_place(txt,'result');
  }
  show_process(txt){
    console.log("Mostrar proceso...");
    console.log(txt);
  }
  append_to_place(txt,placeid) {
    console.log("append to place");
    var place=document.getElementById(placeid);
    var newcontent=document.createElement('div');
    newcontent.innerHTML=txt;
    while (newcontent.firstChild) {
      place.appendChild(newcontent.firstChild);
    }
  }
  parse(txt){
    console.log("parse");
    var tmp;
    tmp=this.parse_dimacs(txt);
    if (tmp[0]!==0 && tmp.length>1) {
      console.log(tmp[0]);
      // possibly dimacs
      if (tmp[1].length>0) return tmp;
    }
    // here we assume non-dimacs, parse as formula
    console.log("no entra: "+tmp[0]);
    tmp=this.parse_formula(txt);
    return tmp;
  }
  parse_dimacs(txt) {
    console.log("parse dimacs");
    var clauses,clause,lines,line,spl,i,j,sv,nv,anv,maxv;
    clauses=[];
    maxv=0;
    lines=txt.split("\n");
    for(i=0;i<lines.length;i++) {
      line=lines[i].trim();
      if (!line || line.lastIndexOf("c",0)===0 || line.lastIndexOf("p",0)===0) continue;
      clause=[];
      spl=line.split(" ");
      for(j=0;j<spl.length;j++) {
        sv=spl[j];
        if (!sv) continue;
        nv=parseInt(sv, 10);
        if (isNaN(nv)) continue;
        if (nv===0) break;
        anv=nv;
        if (anv<0) anv=anv * -1;
        if (anv>maxv) maxv=anv;
        clause.push(nv);
      }
      if (clause) clauses.push(clause);
    }
    clauses.unshift(maxv); // prepend to clause list
    return clauses;
  }
  parse_formula(txt) {
    console.log("parse formula");
    var tmp,exp,pos;
    tmp=this.parse_expression_tree(txt,0);
    if (this.err_data(tmp)) return tmp;
    exp=tmp[0];
    console.log("exp: "+exp);
    pos=tmp[1];
    console.log("pos: "+pos);
    tmp=this.parse_skip(txt,pos);
    if (tmp<txt.length)
      return (this.parse_error("remaining text at "+txt.substring(pos)));
    else
      return exp;
  }
  parse_expression_tree(txt,pos) {
    console.log("parse expretion tree");
    var isneg,exp,op,tmp;
    pos=this.parse_skip(txt,pos);
    isneg=false;
    if (this.parse_isatpos(txt,pos,"-")) { isneg=true; pos++;}
    else if (this.parse_isatpos(txt,pos,"~")) { isneg=true; pos++;}
    tmp=this.parse_term_tree(txt,pos);
    if (this.err_data(tmp)) return tmp;
    exp=tmp[0];
    pos=tmp[1];
    if (isneg) exp=["-",exp];
    pos=this.parse_skip(txt,pos);
    while(true) {
      op=null;
      if (this.parse_isatpos(txt,pos,"&")===true) { op="&"; pos++; }
      else if (this.parse_isatpos(txt,pos,"and")===true) { op="&"; pos+=3; }
      else if (this.parse_isatpos(txt,pos,"^")===true) { op="&"; pos++; }
      else if (this.parse_isatpos(txt,pos,"xor")===true) { op="xor"; pos+=3; }
      else if (this.parse_isatpos(txt,pos,"+")===true) { op="V"; pos++; }
      else if (this.parse_isatpos(txt,pos,"|")===true) { op="V"; pos++; }
      else if (this.parse_isatpos(txt,pos,"v")===true) { op="V"; pos++; }
      else if (this.parse_isatpos(txt,pos,"V")===true) { op="V"; pos++; }
      else if (this.parse_isatpos(txt,pos,"or")===true) { op="V"; pos+=3; }
      else if (this.parse_isatpos(txt,pos,"->")===true) { op="->"; pos+=2; }
      else if (this.parse_isatpos(txt,pos,"=>")===true) { op="->"; pos+=2; }
      else if (this.parse_isatpos(txt,pos,"<->")===true) { op="<->"; pos+=3; }
      else if (this.parse_isatpos(txt,pos,"<=>")===true) { op="<->"; pos+=3; }
      if (op===null) break;
      tmp=this.parse_term_tree(txt,pos);
      if (this.err_data(tmp)) return tmp;
      exp=[op,exp,tmp[0]];
      pos=tmp[1];
      pos=this.parse_skip(txt,pos);
      if (pos>=txt.length) break;
    }
    return [exp,pos];
  }
  parse_term_tree(txt,pos) {
    console.log("parse term tree");
    var c,n,j,v,tmp,exp,isneg;
    pos=this.parse_skip(txt,pos);
    isneg=false;
    if (this.parse_isatpos(txt,pos,"-")) { isneg=true; pos++; pos=this.parse_skip(txt,pos); }
    else if (this.parse_isatpos(txt,pos,"~")) { isneg=true; pos++; pos=this.parse_skip(txt,pos); }
    j=pos;
    v=null;
    while(true) {
      c=txt.charAt(j);
      n=txt.charCodeAt(j);
      // numbers and letters
      if (j<txt.length && ((n>=48 && n<=57) || (n>=65 && n<=122))) { j++; continue; }
      // not a number or a letter or at the end of text
      if (j>pos) {
        // a var was found
        v=txt.substring(pos,j);
        if (isneg) return [["-",v],j];
        return [v,j];
      }
      break;
    }
    if (c==="(") {
      pos++;
      tmp=this.parse_expression_tree(txt,pos);
      if (this.err_data(tmp)) return tmp;
      exp=tmp[0];
      pos=tmp[1];
      pos=this.parse_skip(txt,pos);
      if (txt.charAt(pos)!==")")
        return(this.parse_error("right parenthesis missing"));
      pos++;
      if (isneg) return [["-",exp],pos];
      return[exp,pos];
    } else if (c===")") {
      return(this.parse_error("extra right parenthesis at "+txt.substring(pos)));
    } else {
      return(this.parse_error("unexpected text "+c+" encountered at "+txt.substring(pos)));
    }
  }
  parse_isatpos(txt,pos,str) {
    console.log("parse isatpos");
    if(str.length===1) {
      if(txt.charAt(pos)===str) return true;
      else return false;
    } else {
      if(txt.substr(pos,str.length)===str) return true;
      else return false;
    }
  }
  parse_skip(txt,pos) {
    console.log("parse skip");
    var c;
    while(pos<txt.length) {
      c=txt.charAt(pos);
      if (c===" " || c==="\t" || c==="\n" || c==="\r") pos++;
      else break;
    }
    return pos;
  }
  parse_error(txt) {
    console.log("parse error");
    return ["error",txt];
  }
  err_data(data) {
    console.log("err data");
    if (typeof data!== "string" && data[0]==="error") return true;
    else return false;
  }
  saySomething(something) {
      console.log(something);
  }
  build(txt){
    console.log("build");
    document.getElementById('result').innerHTML = "";
    this.build_aux(txt);
  }
  handleClick(e) {
    var txt = document.getElementById('propinput').value;
    this.build(txt);
  }

  print_truthtable(data) {
    console.log("print truth Table");
    var tmp,count,frm,syntax,origvars,res;
    if (!data) return "";
    if (typeof data[0]==="number") {
      syntax="dpll";
      data.shift();
      tmp=this.rename_vars_in_clauses(data);
    } else {
      syntax="formula";
      tmp=this.rename_vars_in_formula(data);
    }
    count=tmp[0];
    frm=tmp[1];
    origvars=tmp[2];
    res=this.truthtable(frm,syntax,count,origvars);
    return res;
  }
  rename_vars_in_clauses(clauses) {
    console.log("rename vars in clauses");
    var renamedvars={}, origvars=[];
    var i,j,clause,lit,nr,neg,count=0;
    for (i=0; i<clauses.length; i++) {
      clause=clauses[i];
      for (j=0; j<clause.length; j++) {
        lit=clause[j];
        neg=false;
        if (typeof lit === "string") {
          if (lit.lastIndexOf("-",0)===0) { nr=lit.substring(1); neg=true}
          else nr=lit;
        } else if (typeof lit === "number") {
          if (lit<0) { nr=0-lit; neg=true}
          else nr=lit;
        } else if (lit.length===2 && lit[0]==="-") {
          nr=lit[1];
          neg=true;
        } else {
          return [0,"error: not a clause list",[]];
        }
        if (! renamedvars[nr]) {
          count++;
          renamedvars[nr]=count;
          origvars[count]=nr;
          nr=count;
        } else {
          nr=renamedvars[nr];
        }
        if (neg) clause[j]=0-nr;
        else clause[j]=nr;
      }
    }
    return [count,clauses,origvars];
  }
  rename_vars_in_formula(tree) {
    console.log("rename vars in formula");
    var renamedvars={}, origvars=[];
    maxvarnr=0;
    if (typeof tree==="number" || typeof tree==="string") {
      // the tree is just a single variable
      return [1,1,[0,tree]];
    } else {
      // any normal case: not just a single variable
      this.rename_vars_in_formula_aux(tree,origvars,renamedvars);
      return [maxvarnr,tree,origvars];
    }
  }
  rename_vars_in_formula_aux(tree,origvars,renamedvars) {
    console.log("rename vars in formula aux");
    var i,el,tmp;
    for(i=1;i<tree.length;i++) {
      // loop over all term arguments
      el=tree[i];
      tmp=typeof el;
      if (tmp==="number" || tmp==="string") {
        // el is a variable
        if (! renamedvars[el]) {
          maxvarnr++;
          renamedvars[el]=maxvarnr;
          origvars[maxvarnr]=el;
          tree[i]=maxvarnr;
        } else {
          tree[i]=renamedvars[el];
        }
      } else {
        // el is a term
        this.rename_vars_in_formula_aux(el,origvars,renamedvars);
      }
    }
  }

  truthtable(frm,syntax,maxvarnr,origvars) {
    console.log("truth table");
    var rowcount,v,val,i,j,k,n,r,s,frmstr;
    var varvals;
    var res;
    varvals=new Int32Array(maxvarnr+1);
    v=[];
    rowcount=Math.pow(2,maxvarnr);
    var resultArr = new Array(rowcount+1);
    // make a special formula version with visual position at each op
    printlst=[]; // global used by add_print_pos_to_formula
    printlen=0;  // global used by add_print_pos_to_formula
    // frm is augmented with op poses
    if (syntax==="dpll") {
      frmstr="value";
      for(i=1;i<origvars.length;i++) origvars[i]=String(origvars[i]);
    } else {
      frm=this.add_print_pos_to_formula(frm,origvars,0);
      frmstr=printlst.join(""); // printlst is just an ordinary printed frm
      frmstr=frmstr.replace(/"/g, ""); // remove "
      printarray=[];
    }
    // push varnames
    for(k=1;k<=maxvarnr;k++){
      console.log("v.push: "+ origvars[k])
      v.push(origvars[k]);
    }
    v.push(frmstr);
    resultArr[0] = v;
    // push values to valuation lists and print
    if (rowcount>1024)
      return "Table would contain "+rowcount+" rows: our printing limit is 1024 rows.";
    for(i=0;i<rowcount;i++) {
      v=[];
      n=i;
      for(j=1;j<=maxvarnr;j++) {
        n=i>>>(maxvarnr-j);
        r=n%2;
        if (!r) varvals[j]=1;
        else varvals[j]=0;
        v.push(varvals[j]);
      }
      if (syntax === "dpll") {
        console.log("entro dpll");
        val=this.print_eval_dpll(frm,varvals);
        s=val;
      } else {
        console.log("no entro dpll");
        val=this.print_eval_formula(frm,varvals,0);
        s=printarray.join("");
      }
      v.push(s);
      resultArr[i+1] = v;
    }
    res=resultArr;
    console.log("res:"+ res[0]);
    return res;
  }

  add_print_pos_to_formula(data,origvars,depth) {
    console.log("add print pos to formula");
    var tmp,nr,s,op,i,lst,oppos;
    tmp=typeof data;
    if (!data) return;
    // first check if data is a literal
    if (tmp==="number") {
      nr=data;
      if (data<0) {
        printlst.push("-");
        printlen++;
        nr=0-data;
      }
      tmp=origvars[nr];
      if (tmp) { nr=tmp }
      s=String(nr);
      printlst.push(s);
      printlen+=s.length;
      return data;
    } else if (tmp==="string") {
      printlst.push(data);
      printlen+=data.length;
      return data;
    }
    // here data is a list
    if (data.length<2) return null; // should not happen
    op=data[0];
    if (op==="-") {
      // negation op is printed as prefix and has only one argument
      printlst.push("-");
      oppos=printlen;
      printlen++;
      tmp=typeof data[1];
      return ["-",oppos,this.add_print_pos_to_formula(data[1],origvars,depth+1)];
    } else {
      // here ops are infix and may have many args
      // print surrounding ( ) only if not on top level
      lst=[op,0];
      if (depth>0) { printlst.push("("); printlen+=1; }
      for(i=1;i<data.length;i++) {
        lst.push(this.add_print_pos_to_formula(data[i],origvars,depth+1));
        if (i<data.length-1) {
          printlst.push(" "+op+" ");
          oppos=printlen+1;
          printlen+=op.length+2;
        }
      }
      if (depth>0) { printlst.push(")"); printlen+=1; }
      lst[1]=oppos;
      return lst;
    }
  }
  print_eval_formula(frm,varvals,depth) {
    console.log("frm"+ frm);
    console.log("varvals"+ varvals);
    console.log("depth"+ depth);
    console.log("print eval formula");
    var op,oppos,j,tmp,tmp2,res;
    tmp=typeof frm;
    if (tmp==="number") return varvals[frm];
    op=frm[0];
    oppos=frm[1];
    console.log("opps": oppos);
    console.log("op": op);
    if (op==="-") {
      tmp=this.print_eval_formula(frm[2],varvals,depth+1);
      if (tmp===1) res=0;
      else res=1;
      printarray[oppos]=this.valfmt(res,depth);
      return res;
    } else if (op==="V") {
      res=0;
      for(j=2;j<frm.length;j++) {
        tmp=this.print_eval_formula(frm[j],varvals,depth+1);
        if (tmp===1) res=1;
      }
      printarray[oppos]=this.valfmt(res,depth);
      return res;
    } else if (op==="&") {
      res=1;
      for(j=2;j<frm.length;j++) {
        tmp=this.print_eval_formula(frm[j],varvals,depth+1);
        if (tmp===0) res=0;
      }
      printarray[oppos]=this.valfmt(res,depth);
      return res;
    } else if (op==="->") {
      res=0;
      for(j=2;j<frm.length-1;j++) {
        tmp=this.print_eval_formula(frm[j],varvals);
        if (tmp===0) res=1;
      }
      tmp=this.print_eval_formula(frm[frm.length-1],varvals,depth+1);
      if (tmp===1) res=1;
      printarray[oppos]=this.valfmt(res,depth);
      return res;
    } else if (op==="<->") {
      res=1;
      tmp=this.print_eval_formula(frm[2],varvals,depth+1);
      for(j=3;j<frm.length;j++) {
        tmp2=this.print_eval_formula(frm[j],varvals,depth+1);
        if (tmp!==tmp2) res=0;
      }
      printarray[oppos]=this.valfmt(res,depth);
      return res;
    } else if (op==="xor") {
      tmp=this.print_eval_formula(frm[2],varvals,depth+1);
      tmp2=this.print_eval_formula(frm[3],varvals,depth+1);
      tmp=tmp+tmp2;
      if (tmp===1) res=1;
      else res=0;
      printarray[oppos]=this.valfmt(res,depth);
      return res;
    }
    return -1;
  }
  valfmt(s,depth) {
    if(depth>0){
      return String("");
    }else{
      return String(s);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      data: [["p", "q", "p & q"],[1, 1, 1],[1, 0, 0],[0, 1, 0],[0, 0, 0]],
      propinput: ''
    };
  }
  build_aux(txt) {
    console.log("build aux");
    this.show_process("starting to parse");
    if (!txt) {
      this.show_result("No input.");
      return;
    }
    var res=this.parse(txt);
    if (res[0]==="error") {
      this.show_result("Parse error: "+res[1]);
      return;
    }
    if (typeof res[0]==="number") {
      this.show_process("parsed, detected dimacs syntax");
    } else {
      this.show_process("parsed, detected formula syntax");
    }
    res=this.print_truthtable(res);
    this.show_process("finished");
    var n1 = 0;
    var n2 = 0;
    var tt = '<table id="tableR" class="table table-bordered table-striped animated fadeIn"><tbody id="tbodyR">';
    for(var i = 0; i < res.length; i++){
      if(i === 0){
        tt += '<tr class="info">';
        for(var j = 0; j < res[i].length; j++){
          if(j === res[i].length-1){
            tt += '<td>'+res[i][j]+'</td>';
          }else{
            tt += '<td class="td-logic">'+res[i][j]+'</td>';
          }
        }
        tt += '</tr>';
      }else{
        tt += '<tr>';
        for(j = 0; j < res[i].length; j++){
          if(j === res[i].length-1){
            var f = res[i][j].split("");
            tt += '<td>'+f[f.length-1]+'</td>';
            if(f[f.length-1] === "1"){
              n1 += 1;
            }else{
              n2 += 1;
            }
          }else{
            tt += '<td>'+res[i][j]+'</td>';
          }
        }
        tt += '</tr>';
      }
    }
    tt += '</tbody></table>';
    document.getElementById('titleR').innerHTML = "Resultado";
    if(Math.pow(2, maxvarnr) === n1){
      document.getElementById('typeR').innerHTML = "La proposición lógica es una <strong>Tautologia</strong>";
    }else if(Math.pow(2, maxvarnr) === n2){
      document.getElementById('typeR').innerHTML = "La proposición lógica es una <strong>Contradicción</strong>";
    }else{
      document.getElementById('typeR').innerHTML = "La proposición lógica es una <strong>Contingencia</strong>";
    }
    console.log(tt);
    document.getElementById('result').innerHTML = tt;
  }

  handleChange(event) {
    this.setState({
      propinput: event.target.value
    });
  }

  handleClick2(str, event){
    var el = document.getElementById('propinput');
    var val = el.value;
    console.log(val.slice(0, el.selectionStart).length);
    val = val.substring(0, val.slice(0, el.selectionStart).length) + str + val.substring(val.slice(0, el.selectionStart).length);
    this.setState({
      propinput: val
    });
  }
  handleClick3(str, event){
    this.setState(function(prevState, props) {
      return {
        propinput: str
      };
    });
  }
  render() {
    return (
      <div className="fadeIn animated">
        <p className="text-center">Calculadora Lógica Proposicional</p>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-xs-offset-2 col-xs-8 text-center">
                <div className="form-group">
                  <div className="input-group">
                    <input autoFocus ref={(input) => { this.propInput = input; }} type="text" className="form-control text-logic" id="propinput" placeholder="Ingrese una proposición lógica... (p & q)" value={this.state.propinput} onChange={this.handleChange.bind(this)}/>
                    <div className="input-group-addon btn btn-primary" onClick={this.handleClick.bind(this)}>Resolver</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="col-xs-offset-2 col-xs-8 text-center">
                <div className="form-group">
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " [")}>[</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " ]")}>]</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " (")}>(</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " )")}>)</button></div>
                  <div className="col-xs-4 col-sm-4"><button className="btn btn-danger btn-block" onClick={this.handleClick3.bind(this, " ")}>{"Eliminar"}</button></div>
                  <br/><br/>
                  <div className="col-xs-4 col-sm-2"><button title="CONYUCTIVA" className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " &")}>&</button></div>
                  <div className="col-xs-4 col-sm-2"><button title="NEGACIÓN" className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " ~")}>~</button></div>
                  <div className="col-xs-4 col-sm-2"><button title="CONDICIONAL" className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " ->")}>&rArr;</button></div>
                  <div className="col-xs-4 col-sm-2"><button title="DISYUNTIVA" className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " |")}>|</button></div>
                  <div className="col-xs-4 col-sm-2"><button title="BICONDICIONAL" className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " <->")}>&hArr;</button></div>
                  <div className="col-xs-4 col-sm-2"><button title="XOR" className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " xor")}>&#8891;</button></div>
                  <br/><br/>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " p")}>p</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " q")}>q</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " r")}>r</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " s")}>s</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " t")}>t</button></div>
                  <div className="col-xs-4 col-sm-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " u")}>u</button></div>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="col-xs-offset-4 col-xs-4">
                <hr/>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="col-xs-offset-2 col-xs-8 text-center">
                <div className="form-group">
                  <p id="titleR"></p>
                  <p id="typeR"></p>
                  <div id="result">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logic;
