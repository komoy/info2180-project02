window.onload= function(){
	var puzzlePieces= document.getElementsByClassName("puzzlepiece");
	picture();
	document.getElementById("shufflebutton").onclick=shuffle(puzzlePieces)
	
}

 function picture()
 {
 	let x=0,
 	y=0,
 	top=0,
 	left=0,
 	count=1;
 		var puzzleArea=document.getElementById("puzzlearea").childNodes;


	for (var i = 0; i < puzzleArea.length; i++) {
		if (puzzleArea[i].nodeName=="DIV"){
			puzzleArea[i].className="puzzlepiece";

		}
	}

 	var puzzlePieces= document.getElementsByClassName("puzzlepiece");

 	for( var i=0; i< puzzlePieces.length; i++){

 		puzzlePieces[i].setAttribute("style",`background-position: ${x}px ${y}px; top: ${top}px; left: ${left}px;`);
 		
 		x-=100;
 		left+=100;

 		if (count%4==0)
 		{
 			y-=100;
 			top+=100;
 			left=0;

 		}
 		count+=1;
 		

 	}
 }
function shuffle(puzzlepiece)
{
	 for(var j, x, i = puzzlepiece.length; i; j = Math.floor(Math.random() * i), x = puzzlepiece[--i], puzzlepiece[i] = puzzlepiece[j], puzzlepiece[j] = x);
  return puzzlepiece;
}