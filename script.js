
function btnus(){
	document.getElementById('text-us').style.display="block";
	document.getElementById('text-in').style.display="none";
	document.querySelector('.up').style.background="#00d265";
	document.querySelector('.in').style.background="#ffffff";
}
function btnin(){
	document.getElementById('text-us').style.display="none";
	document.getElementById('text-in').style.display="block";
	document.querySelector('.in').style.background="#00d265";
	document.querySelector('.up').style.background="#ffffff";
}

var dark=false;
function darkmode(){
	dark=!dark;
	if(dark==true){
	document.getElementById('form').style.background="#2f4858";
	document.getElementById('container-1').style.background="#2f4858";
	document.getElementById('container-2').style.background="#2f4858";
	document.getElementById('container-3').style.background="#2f4858";
	document.getElementById('moon').style.visibility='hidden';
	document.getElementById('sun').style.visibility='visible';
	}
	else{
		
		document.getElementById('form').style.background=" rgba( 255, 255, 255, 0.65 )";
		document.getElementById('container-1').style.background="white";
		document.getElementById('container-2').style.background="white";
		document.getElementById('container-3').style.background="white";	
		document.getElementById('moon').style.visibility='visible';
		document.getElementById('sun').style.visibility='hidden';
}
}
const year=document.getElementById('dates')
year.innerHTML= new Date().getFullYear();

