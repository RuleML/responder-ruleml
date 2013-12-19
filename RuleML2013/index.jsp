<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Symposium Planner 2013 Client</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="pragma" content="no-cache">

		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link href="css/ClassAll.css" rel="stylesheet" />
		<script language="javascript" src="js/ruleresponder.js"
			type="text/javascript" charset="gb2312"></script>

		<script language="javascript" type="text/javascript" charset="gb2312">			
			var obj='';
var nX,nY;
document.onmouseup=MUp;
document.onmousemove=MMove;
function MDown(Object){
 obj=Object.id;
 document.all(obj).setCapture();
 nX=event.x-document.all(obj).style.pixelLeft;
 nY=event.y-document.all(obj).style.pixelTop;
}
function MMove(){
 if(obj!=''){
  document.all(obj).style.left=event.x-nX;
  document.all(obj).style.top=event.y-nY;
 }
}
function MUp(){
 if(obj!=''){
  document.all(obj).releaseCapture();
  obj='';
 }
}

</script>
<script language="javascript" src="js/ace2rrml2.js"
			type="text/javascript" charset="gb2312"></script>

		<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<style type="text/css">
<!--
body,td,th {
	font-size: 13px;
}
body {
	background-color: #ac4d00;
}
.STYLE16 {font-family: "Times New Roman", Times, serif}
.STYLE18 {
	font-size: x-large;
	font-family: Georgia, "Times New Roman", Times, serif;
}
-->
</style>
</head>

	<body>

<form name="form1" method="post" action="results.jsp">
	<table width="80%" border="0" align="center" cellspacing="5"
				bordercolor="#CCCCCC" bgcolor="FFFFFF"
				style="border: 1px #000000 solid; border-right: none; border-bottom: none">
				<tr>
				  <td height="70" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			      <div align="left"><span class="STYLE18">&nbsp;<a href="#" ><img src="ruleml2013.jpg" width="442" height="73" border="0"></a></span></div></td>
		          <td><div align="right"><a href="http://ruleml.org/" ><img src="logo.jpg" width="224" height="72" border="0"></a></div></td>
		  </tr>
		  
		  <tr>
          <td  colspan="2" height="75">
            <div align="left">Steps of sending a query to SymposiumPlanner:<br/><br/><img src="s1.jpg" width="725" height="37" border="0"><br/><br/></div></td>
        </tr>
        
				<tr>
          <td  colspan="2">
		    <div align="left">&nbsp;&nbsp;&nbsp;<input name="ace" height="100 px" class="input1" size="70" value="I would like to contact the general chair.">&nbsp;<input value="   Search   " type="submit" /> &nbsp;&nbsp;&nbsp;Back to <a href="http://2013.ruleml.org/">RuleML 2013</a></div></td>
        </tr>
        
        <tr>
          <td  colspan="2">
            <div align="left">  &nbsp;&nbsp;&nbsp;<h3 class="ce_headline">You should know:</h3></div>
            <p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;1. <a href="http://responder.ruleml.org/SymposiumPlanner/SymposiumPlanner.html">SymposiumPlanner</a> is a series of <a href="http://responder.ruleml.org">Rule Responder</a> instantiations for the <b>Questions&Answers (Q&A)</b> sections of the official websites of the <a href="http://ruleml.org/" >RuleML</a> Symposia since 2007. Each committee chair has a Personal Agent (PA) that acts in a rule-based manner on behalf of the chair. </p>
            <p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;2. Each PA publishes the functions implemented to answer queries as <b>public interfaces</b>. This client enables users to narrow down the interfaces available in SymposiumPlanner 2013 with <b>natural English</b> (e.g., I would like to contact general chair) or <b>keywords</b> separated by 
whitespaces (e.g. "chair contact"). </p>
            <p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;3. The interface search is based on the <b>semantic similarity analysis</b> between the keywords in users' queries and SymposiumPlanner interface descriptions, and the similarity is calculated by <a href="http://www.linguatools.de/disco/disco_en.html">DISCO</a> - a Java class that allows to retrieve the semantic similarity between arbitrary words. </p>
            <p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;4. The keywords in user's input are identified by <b><a href="http://cst.dk/online/pos_tagger/uk/">CST POS-tagger</a></b>, which marks each word in a text with information about word class and morphological feature.</p>
<h3 class="ce_headline">Common queries to RuleML Symposia:</h3>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;1. I would like to contact the general chair.</p>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;2. Which media partners does the conference have?</p>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;3. Could you tell me the important dates?</p>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;4. I would like to sponsor the conference. </p>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;5. Which benefits could I have if I sponsor the conference?</p>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;6. Which papers are accepted?</p>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;7. Which sponsors does the conference have?</p>
<p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;8. I would like to know the authors of an accepted paper.</p>

<h3 class="ce_headline">Sources Used by SymposiumPlanner-2013 Q&A:</h3>
<div>
SymposiumPlanner Organizational Agent:
<ul>
<li>Prova Knowledge Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/SymposiumPlanner2013.prova">Prova</a>]</li>

<li>Role Assignment Matrix [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/SymposiumPlanner2013.owl">OWL</a>]</li>
</ul>
</div>
<div>
RuleML 2013 Organizational Agent:

<ul>
<li>Prova Knowledge Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/RuleML-2013-Responder.prova">Prova</a>]</li>
<li>Role Assignment Matrix [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/RuleML-2013.owl">OWL</a>]</li>

<li>RuleML 2013 Metadata [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/ruleml2013.rdf">RDF</a>]</li>
</ul>
</div>
<div>
RuleML 2013 General Chair Agent:

<ul>
<li>Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/generalChairRuleML-2013.posl">POSL</a>]</li>
</ul>
</div>

<div>
RuleML 2013 Publicity Chair Agent:
<ul>
<li>Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/publicityChairRuleML-2013.posl">POSL</a>]</li>
<li>Taxonomy [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/publicityChairOntologyRuleML-2013.rdf">RDF</a>]</li>

</ul>
</div>
<!-- <div>
RuleML 2013 Liaison Chair Agent:
<ul>
<li>Rule Base [<a href="../RuleML-2013/liaisonChair-2013.posl">POSL</a>]</li>
</ul>
</div> -->
<div>

RuleML 2013 Program Chair Agent:
<ul>
<li>Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/programChairRuleML-2013.posl">POSL</a>]</li>
</ul>
</div>
<!-- <div>
RuleML 2013 Web Chair Agent:
<ul>
<li>Rule Base [<a href="../RuleML2013/programChair2013.posl">POSL</a>]</li>
</ul>
</div> -->
</ul>
</div>
<div>
RuleML-Structure Technical Group Agent:
<ul>
<li>Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/RuleMLStructTGAgent.posl">POSL</a>]</li>
<li>Prova Knowledge Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/RuleML2013-STRUCT-Responder.prova">Prova</a>]</li>
<li>Role Assignment Matrix [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2013/RuleML2013-STRUCT.owl">OWL</a>]</li>

</div>

  <div>
    <BR>
  Maintained by: <A href="mailto:zhili@inf.fu-berlin.de">Zhili Zhao</a></A>
  </div>

           </td>
        </tr>
	</table></form>
	
	

	
		
</body>
</html>
