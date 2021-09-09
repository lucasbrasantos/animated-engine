/*///////////////////////////////////////////////////
   ___                  _____           _       _   
  |_  |                /  ___|         (_)     | |  
    | | __ ___   ____ _\ `--.  ___ _ __ _ _ __ | |_ 
    | |/ _` \ \ / / _` |`--. \/ __| '__| | '_ \| __|
/\__/ / (_| |\ V / (_| /\__/ / (__| |  | | |_) | |_ 
\____/ \__,_| \_/ \__,_\____/ \___|_|  |_| .__/ \__|
                                         | |        
                                         |_|        

/*///////////////////////////////////////////////////

var colors = [
	c1 = "#719DED",
	c2 = "#EB3C3C",
	c3 = "#FAEB84",
	c4 = "#4EE592"
];
var values = [
	v0 = document.getElementById('v0').value,
	v1 = document.getElementById('v1').value,
	v2 = document.getElementById('v2').value,
	v3 = document.getElementById('v3').value,
	v4 = document.getElementById('v4').value,
	v5 = document.getElementById('v5').value
];

var select = document.getElementById('select');
var text = document.getElementById('text');



function Byellow(){
	text.style.color = c3;
}
function Bblue(){
	text.style.color = c1;
}
function Bred(){
	text.style.color = c2;
}
function Bdefault(){
	text.style.color = "black";
}


function ColorSelect(){
	text.style.color = select.value;

	if (select.value == v4){
		text.style.background = 'linear-gradient(45deg, rgba(100, 130, 200, 60%), rgba(100, 170, 190, 60%)70%)';
	}else if (select.value == v3){
		text.style.background = 'linear-gradient(45deg, rgba(50, 50, 60, 80%), rgba(20, 20, 20, 80%)100%)';
	}
	else if (select.value == v2){
		text.style.background = 'linear-gradient(45deg, rgba(50, 80, 80, 90%), rgba(20, 20, 50,70%)100%)';
	}
	else if (select.value == v1){
		text.style.background = 'linear-gradient(45deg, rgba(40, 0, 70, 80%), rgba(20, 40, 80, 80%)70%)';
	}
	else if (select.value == v5){
		text.style.background = 'linear-gradient(45deg, rgba(140, 10, 170, 60%), rgba(220, 40, 90, 40%)70%)';
	}
	else if (select.value == v0){
		text.style.background = 'linear-gradient(45deg, rgba(120, 130, 200, 60%), rgba(30, 140, 190, 60%)80%)';
	}
}