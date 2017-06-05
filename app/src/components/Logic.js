import React, { Component } from 'react';
var maxvarnr=0; // used by the rename_vars_in_formula
var printlen=0; // used while printing
var printlst=[]; // used while printing
var printarray=[];  // used while printing the truth table
var process_html_id="process"; // output location in html
var result_html_id="result"; // output location in html
var syntax_html_id="syntax"; // syntax description location in html
var n1 = 0;
var n0 = 0;
// set by solver as it starts: used for printing to html
var start_time=0;
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
        nv=parseInt(sv);
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
    var isneg,exp,op,node,tmp;
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
      else if (this.parse_isatpos(txt,pos,"+")===true) { op="+"; pos++; }
      else if (this.parse_isatpos(txt,pos,"xor")===true) { op="+"; pos+=3; }
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
    var c,n,j,v,tmp,exp,found,isneg;
    pos=this.parse_skip(txt,pos);
    isneg=false;
    if (this.parse_isatpos(txt,pos,"-")) { isneg=true; pos++; pos=this.parse_skip(txt,pos); }
    else if (this.parse_isatpos(txt,pos,"~")) { isneg=true; pos++; pos=this.parse_skip(txt,pos); }
    j=pos;
    found=false;
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
    n1 = 0;
    n0 = 0;
    this.build_aux(txt);
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
    if(Math.pow(2, maxvarnr) == n1){
      console.log("TAUTOLOGIA");
    }else if(Math.pow(2, maxvarnr) == n0){
      console.log("CONTRADICCIÓN");
    }else{
      console.log("CONTINGENCIA");
    }
    this.show_result("<tt>"+res.replace(/\n/g,"<br>")+"</tt>");
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
    var res,tmp;
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
    var rowcount,v,val,i,j,k,n,r,s,s2,frmstr,row;
    var varvals;
    var reslst,res;
    varvals=new Int32Array(maxvarnr+1);
    reslst=[];
    v=[];
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
      frmstr=frmstr.replace(/\"/g, ""); // remove "
      printarray=[];
      for(i=0;i<frmstr.length;i++) printarray.push("&nbsp;"); // used for each rowprint
    }
    // push varnames
    for(k=1;k<=maxvarnr;k++) v.push(origvars[k]);
    s=v.join(" ")+" | "+frmstr;
    reslst.push(s);
    // push horizontal line
    s2="";
    for(k=0;k<s.length;k++) s2+="&ndash;";
    reslst.push(s2);
    // push values to valuation lists and print
    rowcount=Math.pow(2,maxvarnr);
    console.log("primisias: "+maxvarnr)
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
        s="";
        for(k=0;k<origvars[j].length;k++) s+="&nbsp;";
        v.push(s);
      }
      if (syntax=="dpll") {
        console.log("entro dpll");
        val=this.print_eval_dpll(frm,varvals);
        s=val;
      } else {
        console.log("no entro dpll");
        val=this.print_eval_formula(frm,varvals,0);
        s=printarray.join("");
      }
      v.push("&#124; ");
      v.push(s);
      reslst.push(v.join(""));
    }
    // print resulting table
    console.log("print result:: ");
    console.log(reslst);
    res=reslst.join("\n");
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
    console.log("print eval formula");
    var op,oppos,j,tmp,tmp2,res;
    tmp=typeof frm;
    if (tmp==="number") return varvals[frm];
    op=frm[0];
    oppos=frm[1];
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
    } else if (op==="+") {
      tmp=this.print_eval_formula(frm[2],varvals,depth+1);
      tmp2=this.print_eval_formula(frm[3],varvals,depth+1);
      tmp=tmp+tmp2;
      if (tmp===1) res=1;
      else res=0;
      printarray[oppos]=this.valfmt(res,depth);
      return res;
    }
    return -1; // error: should not happen
  }
  valfmt(s,depth) {
    if(depth>0){
      return String("");
    }else{
      if(s){
        n1 += 1
      }else{
        n0 += 1
      }
      return "<b>"+String(s)+"</b>";
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      propinput: ''
    };
  }
  handleChange(event) {
    this.setState({propinput: event.target.value});
  }
  handleClick2(str, event){
    this.setState(function(prevState, props) {
      return {
        propinput: prevState.propinput + str
      };
    });
  }
  render() {
    return (
      <div className="fadeIn animated">
        <h1 className="text-center">Logica</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-offset-2 col-md-8 text-center">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control text-logic" id="propinput" placeholder="Ingrese una proposición lógica... (p & q)" value={this.state.propinput} onChange={this.handleChange.bind(this)}/>
                    <div className="input-group-addon btn btn-primary" onClick={this.handleClick.bind(this)}>Resolver</div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " &")}>&</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " -")}>-</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " ->")}>-></button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " |")}>|</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " <->")}>{"<->"}</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " xor")}>{"xor"}</button></div>
                </div>
                <br/><br/>
                <div className="form-group">
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " p")}>p</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " q")}>q</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " r")}>r</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " s")}>s</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " t")}>t</button></div>
                  <div className="col-md-2"><button className="btn btn-default btn-block" onClick={this.handleClick2.bind(this, " u")}>u</button></div>
                </div>
              </div>

              <div className="col-md-12">
                <h2>Result</h2>
                <div className="wiblock">
                  <div id="result"></div>
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
