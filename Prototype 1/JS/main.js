/**********************\
|  zaio - Prototype 1  |
|      >> J.B. <<      |
|        04/19         |
\**********************/

var sInputs = document.getElementsByTagName("input");
var sButton = document.getElementsByTagName("button")[0];

sButton.onmousedown = function(){
	this.style.backgroundImage = "linear-gradient(#82caff, white)";	
};

for(i = 0; i < sInputs.length; i++){
	sInputs[i].onfocus = function(){
		this.classList.add("focus");
	};
	sInputs[i].onblur = function(){
		this.classList.remove("focus");
	};	
};

function filled(){
	for(j = 0; j < sInputs.length; j++){
		if(sInputs[j].value == ""){ return false; };
	}
	return true;
}

sButton.onclick = function(){
	this.style.backgroundImage = "linear-gradient( white, #82caff)";	
	var sPassword = document.getElementById("ipassword").value;
	var sConfirm = document.getElementById("iconfirm-password").value;

	if(sPassword != sConfirm){
		alert('Your passwords do not match!');
	} else if(filled() == false){
		alert("All fields are mandatory!");
	}else {
		alert("Success!");
	};
}


