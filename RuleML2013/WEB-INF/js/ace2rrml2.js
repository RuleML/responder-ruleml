
var XMLHttpReq;
function createXMLHttpRequest() {
	if (window.XMLHttpRequest) {
		XMLHttpReq = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
			try {
				XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try {
					XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e) {
				}
			}
		}
	}
}
function analyse() {
	if (document.form2.oid.value == "") {
		alert("The oid cannot be null!");
		form2.oid.focus();
		return;
	}
	
	if (document.form2.ace.value == "") {
		alert("The ace text cannot be null!");
		form2.ace.focus();
		return;
	}
	var oid = document.form2.oid.value;
	var ace = document.form2.ace.value;
	var ulexfile = document.form2.ulexfile.value;
	
	createXMLHttpRequest();
	XMLHttpReq.open("GET", "ACE2RRuleMLServlet?oid=" + oid+"&ace="+ace+"&ulexfile="+ulexfile, true);
	XMLHttpReq.onreadystatechange = processAnalyseResponse;
	XMLHttpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	XMLHttpReq.send(null);
}
function processAnalyseResponse() {
	if (XMLHttpReq.readyState == 4) {
		if (XMLHttpReq.status == 200) {
			document.form2.rrulleml.value= XMLHttpReq.responseText;
		} else {
			window.alert("Parsing Error!");
		}
	}
}


