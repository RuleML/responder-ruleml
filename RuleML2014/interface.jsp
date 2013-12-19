<%@ page language="java"
	import="java.util.*,ils.ace2rrml.util.*,ils.ace2rrml.interfaces.*"
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

<title>Symposium Planner 2014 Client</title>
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
		cellspacing="0" bordercolor="#E8AB78" bgcolor="FFFFFF"
		style="border: 0px #000000 solid; border-right: none; border-bottom: none">
		<tr>
			<td height="70">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div align="left">
					<span class="STYLE18">&nbsp;<a href="index.jsp"><img
							src="ruleml2014.jpg" width="442" height="73" border="0"></a></span>
				</div>
			</td>
			<td><div align="right">
					<a href="http://ruleml.org/"><img src="logo.jpg" width="224"
						height="72" border="0"></a>
				</div></td>
		</tr>
		<form name="form1" method="post" action="rruleml.jsp">
			<tr>
				<td height="70" colspan="2">
					<%
						String interfaceName = request.getParameter("name");
						String interfaceDefinition = ProvaInterfaceParser.INSTANCE
								.provaInterface2Html(interfaceName);
						out.print(interfaceDefinition);
					%>
				</td>
			</tr>
			<tr>
				<td height="50" colspan="2">
					<div align="center">
						<input value="Generate Reaction RuleML" type="submit" />
					</div>
				</td>
			</tr>
			<input name="interface" type="hidden" value="<%=interfaceName%>">
		</form>
</body>
</html>
