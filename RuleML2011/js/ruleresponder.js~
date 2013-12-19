
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
function createHtml() {
	if (document.form1.interface.value == "") {
		alert("The interface cannot be null!");
		form1.interface.focus();
		return;
	}

	var interface = document.form1.interface.value;
	createXMLHttpRequest();
	XMLHttpReq.open("GET", "GenerateHTMLServlet?interface=" + interface);
	XMLHttpReq.onreadystatechange = processResponse;
	XMLHttpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	XMLHttpReq.send(null);
}
function processResponse() {
	if (XMLHttpReq.readyState == 4) {
		if (XMLHttpReq.status == 200) {
			document.getElementById("result").innerHTML = XMLHttpReq.responseText;
		} else {
			window.alert("Parsing Error!");
		}
	}
}


function changeInterfaces(obj) {
        var pames = "?agent=" + document.all.agent.value;
        var tourl = "index.jsp" + pames;
        window.location = tourl;
}


