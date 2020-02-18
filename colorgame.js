var nu = 6;
var colors= colorarraymaker(nu);
var squares= document.querySelectorAll(".square");
var textdisplay= document.querySelector("#textdisplay");
var hardb= document.querySelector("#hardb");
var easyb= document.querySelector("#easyb");
var panc= document.querySelector("#panc");
var h1 = document.querySelector("h1");
var resultdisplay= document.querySelector("#resultdisplay");
var selectedcolor = selectcolor();

textdisplay.textContent= selectedcolor;
assign(); 
var clickedcolor;

hardb.classList.add("selected");

easyb.addEventListener("click", function(){

	allgone();

	easyb.classList.add("selected");
	hardb.classList.remove("selected");
	nu = 3;
	reset();
	
	


})



hardb.addEventListener("click", function(){


	easyb.classList.remove("selected");
	hardb.classList.add("selected");
	nu = 6;
	reset();


})

for(var i=0 ; i<squares.length; i++){

	squares[i].addEventListener("click", function(){


	clickedcolor= this.style.background;
	if(clickedcolor === selectedcolor){
		for(var i=0; i<squares.length; i++ ){
				panc.textContent = "PLAY AGAIN";

				resultdisplay.textContent = "CORRECT"
				resultdisplay.style.color = "green";
				squares[i].style.background = selectedcolor;
				h1.style.background = selectedcolor;
			}
		}
	else{

		this.style.background = "black";
		resultdisplay.textContent = "TRY AGAIN";
		}
	})

}



function colorarraymaker(num){
	var colorarray= [] ;

	for(var i=0; i< num; i++){

		colorarray.push(colormaker());
	}
	return colorarray;
}

function colormaker(){

 	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return  "rgb(" + r + ", " + g + ", " + b + ")";
}


panc.addEventListener("click", function(){

	reset();
})

function selectcolor(){
	return colors[Math.floor(Math.random()*nu)];
}

function assign(){

for (var i = 0; i < nu; i++) {
	squares[i].style.background = colors[i];
	}

}


function colorarraymaker(num){
	var colorarray= [] ;

	for(var i=0; i< num; i++){

		colorarray.push(colormaker());
	}
	return colorarray;
}




function reset()
{	
	resultdisplay.textContent = " CLICK ON COLORS ";
	allback();
	colors= colorarraymaker(nu);
	assign();
	selectedcolor = selectcolor();
	panc.textContent = "NEW COLORS";
	textdisplay.textContent= selectedcolor;
	h1.style.background = "#00FF00";

}


function allgone(){

	for (i=0; i<6; i++){

 squares[i].style.display = 'none';
}
}



function allback(){

	for (i=0; i<nu; i++){

 squares[i].style.display = 'block';
}
}