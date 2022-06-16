document.getElementById('factDisplay').innerHTML="Facts will display here.";

var fact1 = "About 94 percent of the earth’s wildlife is found in the ocean.";
var fact2 = "Earth is a terrestrial planet.";
var fact3 = "A snail can sleep for three years.";
var fact4 = "Some plants such as orchids do not need soil to grow-they get all of their nutrients from the air.";
var fact5 = "When the moon is directly overhead, you will weigh slightly less.";

var facta = document.querySelector('#factarea');
facta.a.addEventListener("click",factA);
function factA(){
	document.getElementById('factDisplay').innerHTML=fact1;
	document.getElementById('factDisplay').style.color="white";
	document.getElementById('factDisplay').style.fontWeight="bold";
	document.querySelector('body').style.backgroundColor = "#44E5E7";
	document.getElementById('factarea').style.borderColor="#0000A0";
	document.getElementById('factDisplay').style.backgroundColor="#4A8FE7";
	document.getElementById('factDisplay').style.borderColor="#73FBD3";
	document.getElementById('factDisplay').style.backgroundImage="url('images/fish.jpg')";
	document.getElementById('factDisplay').style.backgroundSize="750px";
	document.getElementById('factDisplay').style.fontSize="20px";
	document.getElementById('factDisplay').style.fontFamily="Comic Sans MS";
}

var factb = document.querySelector('#factarea');
factb.b.addEventListener("click",factB);
function factB(){
	document.getElementById('factDisplay').innerHTML=fact2;
	document.getElementById('factDisplay').style.color="black";
	document.getElementById('factDisplay').style.fontWeight="bold";
	document.querySelector('body').style.backgroundColor = "#E7E579";
	document.getElementById('factarea').style.borderColor="#FF8C00";
	document.getElementById('factDisplay').style.borderColor="#D3AC4A";
	document.getElementById('factDisplay').style.backgroundColor="#D5C534";
	document.getElementById('factDisplay').style.backgroundImage="url('images/rock.jpg')";
	document.getElementById('factDisplay').style.backgroundSize="750px";
	document.getElementById('factDisplay').style.fontSize="25px";
	document.getElementById('factDisplay').style.fontFamily="Comic Sans MS";
}

var factc = document.querySelector('#factarea');
factc.c.addEventListener("click",factC);
function factC(){
	document.getElementById('factDisplay').innerHTML=fact3;
	document.getElementById('factDisplay').style.color="white";
	document.getElementById('factDisplay').style.fontWeight="bold";
	document.querySelector('body').style.backgroundColor = "#347C17";
	document.getElementById('factDisplay').style.backgroundColor="#98FF98";
	document.getElementById('factDisplay').style.borderColor="#5FFB17";
	document.getElementById('factarea').style.borderColor="ForestGreen";
		document.getElementById('factDisplay').style.backgroundImage="url('images/snake.jpg')";
	document.getElementById('factDisplay').style.backgroundSize="730px";
	document.getElementById('factDisplay').style.fontSize="25px";
	document.getElementById('factDisplay').style.fontFamily="Comic Sans MS";
}

var factd = document.querySelector('#factarea');
factd.d.addEventListener("click",factD);
function factD(){
	document.getElementById('factDisplay').innerHTML=fact4;
	document.getElementById('factDisplay').style.color="white";
	document.getElementById('factDisplay').style.fontWeight="bold";
	document.querySelector('body').style.backgroundColor = "#F433FF";
	document.getElementById('factDisplay').style.backgroundColor="#B666D2";
	document.getElementById('factDisplay').style.borderColor="#7F38EC";
	document.getElementById('factarea').style.borderColor="Fuchsia";
	document.getElementById('factDisplay').style.backgroundImage="url('images/flower.jpg')";
	document.getElementById('factDisplay').style.backgroundSize="750px";
	document.getElementById('factDisplay').style.fontSize="25px";
	document.getElementById('factDisplay').style.fontFamily="Comic Sans MS";
}

var facte = document.querySelector('#factarea');
facte.e.addEventListener("click",factE);
function factE(){
	document.getElementById('factDisplay').innerHTML=fact5;
	document.getElementById('factDisplay').style.color="white";
	document.getElementById('factDisplay').style.fontWeight="bold";
	document.querySelector('body').style.backgroundColor = "black";
	document.getElementById('factDisplay').style.backgroundColor="white";
	document.getElementById('factDisplay').style.borderColor="aqua";
	document.getElementById('factarea').style.borderColor="aqua";
	document.getElementById('factDisplay').style.backgroundImage="url('images/moon.jpg')";
	document.getElementById('factDisplay').style.backgroundSize="700px";
	document.getElementById('factDisplay').style.fontFamily="Comic Sans MS";
	
	document.getElementById('factDisplay').style.fontSize="25px";
}