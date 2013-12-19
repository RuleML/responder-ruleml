<%@ page language="java" import="java.util.*,ils.ace2rrml.interfaces.*"
	contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Symposium Planner 2011</title>
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

<form name="form1" method="post" action="rruleml.jsp">
	<table width="80%" border="0" align="center" cellspacing="0"
				bordercolor="#CCCCCC" bgcolor="FFFFFF"
				style="border: 1px #000000 solid; border-right: none; border-bottom: none">
	
		
			
				<tr>
				  <td height="70" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			      <div align="left"><span class="STYLE18">&nbsp;<a href="#" ><img src="ruleml2011.jpg" width="442" height="73" border="0"></a></span></div></td>
		          <td><div align="right"><a href="http://ruleml.org/" ><img src="logo.jpg" width="224" height="72" border="0"></a></div></td>
		  </tr>
				<tr>
					<td width="7%" height="70" colspan="2" class="downline-gud1">
						<p>
							&nbsp;&nbsp;Symposium Planner 2011 uses
							<a href="http://www.mulesoft.org/">Mule ESB 3.0</a> and latest
							<a href="http://www.prova.ws/"> Prova 3.1.3</a> in it.
							Distributed rule agents in Symposium Planner 2011 consist of
							Prova Agent and OO jDREW Agent. Symposium Planner 2011 consults
							the knowledge not only from its knowledge repository, but also
							from
							<a href="http://data.semanticweb.org/">Semantic Web Dog Food
								Corpus</a>.						</p>					</td>
				</tr>
				<tr>
					<td height="30" colspan="2" class="downline-gud1">
						<strong>&nbsp;&nbsp;Solution 1: Selecting Queries Defined by Organizational
							Agents Interfaces </strong>&nbsp;&nbsp;&nbsp;<a href="conf/prova-interfaces.xml" target="blank">Query Interfaces Decription File</a>					</td>
				</tr>
				<tr>
					<td height="30" class="downline-gud1">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organizational Agents:
						&nbsp;&nbsp;&nbsp;
						<select name="agent" class="input1"
							ONCHANGE="changeInterfaces(this)">

							<%
								String agent = "All";
								agent = request.getParameter("agent");
								if (agent == null) {
									agent = "All";
							%>
							<option selected>
								All Prova Organizational Agents
							</option>
							<%
								}

								List agents = ProvaInterfaceParser.INSTANCE.getAgents();
								for (int i = 0; i < agents.size(); i++) {
									if (agent.equalsIgnoreCase(agents.get(i).toString())) {
							%>
							<option value='<%=agents.get(i)%>' selected>
								<%=agents.get(i)%>
							</option>
							<%
								} else {
							%>
							<option value='<%=agents.get(i)%>'><%=agents.get(i)%></option>
							<%
								}
								}
							%>
						</select>
					</td>
				</tr>
				<tr>
					<td height="30" class="downline-gud1">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public Interfaces:
						&nbsp;&nbsp;&nbsp;
						<select name="interface" class="input1" ONCHANGE="createHtml()">
							<option selected>
								Please select the interface
							</option>
							<%
								List<ProvaInterface> interfaces1 = ProvaInterfaceParser.INSTANCE
										.getProvaInterfaces(agent);
								for (int j = 0; j < interfaces1.size(); j++) {
							%>
							<option value='<%=interfaces1.get(j).getAgentName()%>:<%=interfaces1.get(j).getName()%>'><%=interfaces1.get(j).getAgentName()%>:<%=interfaces1.get(j).getName()%></option>
							<%
								}
							%>
						</select>
					</td>
				</tr>

				<tr>
					<td height="20" colspan="3" class="downline-gud1">
						<span id="result"></span>					</td>
				</tr>
	</form>
				<form name="form2" method="get"
					action="http://de.dbpedia.org/redirects/holk/">
				<tr>

					<td height="30" colspan="3" class="downline-gud1">
						&nbsp;&nbsp;
						<strong>Solution 2: Using Attempto Controlled English</strong>   &nbsp;&nbsp;&nbsp;&nbsp;<a href="http://attempto.ifi.uzh.ch/site">Attempto Project</a>					</td>
				</tr>
				<tr>
					<td height="40" colspan="3" class="downline-gud1">

						&nbsp;&nbsp;
					    <strong>Examples:</strong><br><br>
						&nbsp;&nbsp;&nbsp;&nbsp;1. What is the contactInformation of the general-chair-of-RuleML-2011-IJCAI?<br>
						&nbsp;&nbsp;&nbsp;&nbsp;2. Which full papers are accepted?<br>
						&nbsp;&nbsp;&nbsp;&nbsp;3. Who are the authors of "Rule-based Distributed and Agent Systems"?					</td>
				</tr>
				<tr>

					<td height="30" colspan="2" class="downline-gud1">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Receiver: &nbsp;&nbsp;&nbsp;
						<input name="oid" type="text" class="input1" size="30"
							value="RuleML-2011-IJCAI">					</td>
				</tr>
				<tr>
					<td height="30" colspan="2" class="downline-gud1">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<p><font color="#FF0000"><b><a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011/ruleml2011.prog">&nbsp;&nbsp;&nbsp;Lexicon URL</a></b></font>:
						&nbsp;&nbsp;&nbsp;

						<input name="ulexfile" type="text" class="input1" size="60"
							value="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011/ruleml2011.prog"> (Note: this link needs to be accessd by the external APE engine.)
					  </p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;						</br>
					(Reload user lexicons that take preference over APE's built-in lexicon)			        </p></td>
				</tr>
<div id="message_box">
			<div class="message">
				<div class="header" onMouseDown="MDown(message_box)">
					<div style="display: inline; width: 150px; position: absolute;">
						Important Lexicon for Rule Responder.					</div>
					<span
						onclick="message_box.style.visibility='hidden';"
						style="float: right; display: inline; cursor: hand;">×</span>				</div>
				<ul style="margin-right: 25px;">
					Nouns:
					
					<li>general-chair-of-RuleML-2011-IJCAI</li>
					
					<li>publicity-chair-of-RuleML-2011-IJCAI</li>
					
					<li>liaison-chair-of-RuleML-2011-IJCAI</li>
					
					<li>program-chair-of-RuleML-2011-IJCAI</li>

					
					<li>contactInformation</li>
					
					<li>general-chair-of-RuleML-2011-BRF</li>
					
					<li>publicity-chair-of-RuleML-2011-BRF</li>
					
					<li>liaison-chair-of-RuleML-2011-BRF</li>
					
					<li>program-chair-of-RuleML-2011-BRF</li>
				</ul>
			</div>
		</div>
				<tr>
					<td height="30" colspan="2" valign="top" class="downline-gud1">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="150" valign="top">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACE Text:&nbsp;&nbsp;								</td>
								<td>
									&nbsp;&nbsp;
									<textarea name="ace" cols="100" rows="3"
										onfocus="message_box.style.visibility='visible';">Who are the authors of "Rule-based Distributed and Agent Systems"?</textarea>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<input type="button" name="Submit2" class="button-submit"
										onClick="analyse()" value="Analyse">								</td>
							</tr>
						</table>					</td>
				</tr>
				<tr>
					<td height="30" colspan="2" valign="top" class="downline-gud1">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="155" valign="top">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RRuleML:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;								</td>
								<td  height="50" >
									&nbsp;&nbsp;
									<textarea name="rrulleml" cols="100" rows="20"></textarea>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<input value="Send Message" type="submit" />								</td>
							</tr>
						</table>					</td>
				</tr>



<tr><td height="30" colspan="2"  valign="top" class="downline-gud1">

  <h3>&nbsp;<br>
    &nbsp;Sources Used by SymposiumPlanner-2011</h3>
  <div style="height:25">&nbsp;&nbsp;1. SymposiumPlanner-2011 Organizational Agent: (1) Prova Knowledge Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011/SymposiumPlanner2011.prova">Prova</a>], (2)Role Assignment Matrix [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011/SymposiumPlannerSystem.owl">OWL</a>]</div>
<div style="height:25">  &nbsp;&nbsp;2. RuleML-2011@IJCAI Organizational Agent: Prova Knowledge Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011/RuleML-2011-IJCAI-Responder.prova">Prova</a>], (2) Role Assignment Matrix [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011IJCAI/IJCAI-2011.owl">OWL</a>]</div>
<div style="height:25">  &nbsp; 3. RuleML-2011@IJCAI General Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011IJCAI/generalChairIJCAI-2011.posl">POSL</a>]</div>

<div style="height:25">  &nbsp; 4. RuleML-2011@IJCAI Publicity Chair Agent: (1) Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011IJCAI/publicityChairIJCAI-2011.posl">POSL</a>], (2) Taxonomy [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011IJCAI/publicityChairOntologyIJCAI-2011.rdf">RDF</a>]</div>
<div style="height:25">  &nbsp; 5. RuleML-2011@IJCAI Liaison Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011IJCAI/liaisonChairIJCAI-2011.posl">POSL</a>]</div>
<div style="height:25">  &nbsp;&nbsp;6. RuleML-2011@IJCAI Program Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011IJCAI/programChairIJCAI-2011.posl">POSL</a>]</div>
<div style="height:25">  &nbsp;&nbsp;7. RuleML-2011@IJCAI Web Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011IJCAI/programChairIJCAI-2011.posl">POSL</a>]</div>
<div style="height:25">  &nbsp;&nbsp;8. RuleML-2011@BRF Organizational Agent: (1) Prova Knowledge Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/RuleML-2011-BRF-Responder.prova">Prova</a>], (2) Role Assignment Matrix [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/RuleML-2011-BRF.owl">OWL</a>]</div>
<div style="height:25">  &nbsp;&nbsp;9. RuleML-2011@BRF General Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/generalChairBRF-2011.posl">POSL</a>]</div>

<div style="height:25">  &nbsp;&nbsp;10. RuleML-2011@BRF Publicity Chair Agent: (1) Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/publicityChairBRF-2011.posl">POSL</a>], (2) Taxonomy [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/publicityChairOntologyBRF-2011.rdf">RDF</a>]</div>
<div style="height:25">  &nbsp;&nbsp;11. RuleML-2011@BRF Liaison Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/liaisonChairBRF-2011.posl">POSL</a>]</div>
<div style="height:25">&nbsp;&nbsp;12. RuleML-2011@BRF Program Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/programChairBRF-2011.posl">POSL</a>]&nbsp;&nbsp;RuleML-2011@BRF Web Chair Agent: Rule Base [<a href="http://de.dbpedia.org/redirects/hhs/RuleResponder/RuleML2011BRF/programChairBRF-2011.posl">POSL</a>]</div>
</td>
</tr>
	</table></form>
		
</body>
</html>
