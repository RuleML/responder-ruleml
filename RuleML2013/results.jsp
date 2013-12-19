<%@ page language="java"
	import="java.util.*,de.csw.fu.similarity.comparison.*,ils.ace2rrml.interfaces.*"
	contentType="text/html; charset=utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
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
	var obj = '';
	var nX, nY;
	document.onmouseup = MUp;
	document.onmousemove = MMove;
	function MDown(Object) {
		obj = Object.id;
		document.all(obj).setCapture();
		nX = event.x - document.all(obj).style.pixelLeft;
		nY = event.y - document.all(obj).style.pixelTop;
	}
	function MMove() {
		if (obj != '') {
			document.all(obj).style.left = event.x - nX;
			document.all(obj).style.top = event.y - nY;
		}
	}
	function MUp() {
		if (obj != '') {
			document.all(obj).releaseCapture();
			obj = '';
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

.STYLE16 {
	font-family: "Times New Roman", Times, serif
}

.STYLE18 {
	font-size: x-large;
	font-family: Georgia, "Times New Roman", Times, serif;
}
-->
</style>
</head>

<body>

	<table width="80%" height="270" border="0" align="center"
		cellspacing="5" bordercolor="#E8AB78" bgcolor="FFFFFF"
		style="border: 0px #000000 solid; border-right: none; border-bottom: none">
		<tr>
				  <td height="70" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			      <div align="left"><span class="STYLE18">&nbsp;<a href="index.jsp" ><img src="ruleml2013.jpg" width="442" height="73" border="0"></a></span></div></td>
		          <td><div align="right"><a href="http://ruleml.org/" ><img src="logo.jpg" width="224" height="72" border="0"></a></div></td>
		  </tr>
		  
		   <tr>
          <td  colspan="2" height="75">
            <div align="left">Steps of sending a query to SymposiumPlanner:<br/><br/><img src="s2.jpg" width="725" height="37" border="0"><br/><br/></div></td>
        </tr>
		<tr>
			<td height="30" valign="middle" colspan="2">
				<div align="left">
					&nbsp;Results of <font color="red"><b>"<%=request.getParameter("ace")%>"</b>.</font>
				</div>
			</td>
		</tr>
		
		<%
			List list = new SimilarityComparison()
					.similarityComparison(request);
		    boolean tag = false;
			for (int i = 0; i < list.size(); i++) {
				Map.Entry entry = (Map.Entry) list.get(i);
				ProvaInterface provaInterface = ProvaInterfaceParser.INSTANCE.getProvaInterface(entry.getKey().toString());
				if(Float.parseFloat(entry.getValue().toString())!=0){
					tag = true;
		%>
		<tr>
			<td height="45" valign="bottom" colspan="2">
				<div align="left">
					&nbsp;&nbsp;&nbsp;&nbsp;<%=i+1%>. Interface Name: &nbsp;<b><%=provaInterface.getName()%></b>
					&nbsp;&nbsp;&nbsp;Relevance: <font color="red"><%=entry.getValue()%>     &nbsp;&nbsp;&nbsp;<a
						href="interface.jsp?name=<%=entry.getKey()%>">Select</a></font>
				</div>
			</td>
		</tr>
		
		<tr>
			<td height="25" colspan="2">

				<div align="left">
				<% 
				String annotation = "";
				String temp = provaInterface.getAnnotation().trim();
				if(temp.endsWith("."))
					annotation = temp;
				else
					annotation += temp+".";
				%>
					&nbsp;&nbsp;&nbsp;&nbsp;Description: <%=annotation%>
				</div>
			</td>
		</tr>
		
		<tr>
			<td height="25" colspan="2">
				<div align="left">
					&nbsp;&nbsp;&nbsp;&nbsp;Agent: <font color="green"><%=provaInterface.getAgentName()%></font>
				</div>
			</td>
		</tr>
		<%
				}
				
			}
			if (tag==false){%>
			
			<tr>
		<td height="25" colspan="2">
			<div align="left">
				&nbsp;&nbsp;&nbsp;&nbsp;No relevant interface is found.</font>
			</div>
		</td>
	</tr>
		<%}%>
	</table>
	</form>

</body>
</html>
