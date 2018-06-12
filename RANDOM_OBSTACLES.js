	var ball_X = 50;
	var ball_Y = canvas.height/2;
	var ball_R = 10;
	var W_1 = 800;	
	var W_2;
	var W_3;
	var W_4;
	var pos_2;
	var pos_3;
	var pos_4;
	var gap_1;
	var gap_2;
	var gap_3;
	var gap_4;
	var Wall_Width = 40;
	var Side_Wall_Height = 20;
	var Side_Wall_Width = 20;
	var currentFrame = 0;
	var x = 100;
	var y = 100;
    var SCORE = 0;
	var Speed = 2;
	var Show_Enemy = false;
	//Add Enemy.....
function addEnemy(){
	Show_Enemy = true;
}


	//Start of onload function
window.onload = function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'orange';
	ctx.fillRect(0,0,canvas.width,canvas.height);

	canvas.addEventListener('mousemove',updateMousePos);
    
	ctx.fillStyle = 'black';
	ctx.font = '48px sherif';
	ctx.fillText("CLICK ON :- Start The Game",80,276);
}
	//End of onload function

function start(){
    a = setInterval(move,1000/30);
 	distance_1();
 	distance_2();
 	distance_3();
 	distance_4();
 	playAudio();
}

//Adding audio to the game
	var Audio;
function playAudio() { 
	Audio = document.getElementById("myAudio"); 
    Audio.play(); 
} 
function pauseAudio() { 
    Audio = document.getElementById("myAudio"); 
    Audio.pause(); 
} 

	var Sound;
function hit_Sound(){
	
	Sound = document.getElementById("HitSound");
	Sound.play();
} 


//Restart function
function restart(){
	location.reload();
}
var G_1_Y ;
var G_1_X ;
function distance_1(){
	W_1 = 760;
	gap_1 = Math.floor(Math.random()*(canvas.height-70));	
    G_1_X =  W_1 + 100 + 15 ;
}

	//Allot random distance for wall 2
function distance_2(){
	pos_2 = Math.floor(Math.random()*220);
	if(pos_2<140){
		distance_2();
	}
	W_2 = W_1 + pos_2;
    gap_2 = Math.floor(Math.random()*(canvas.height-70));
     G_2_X =  W_2 + 100 + 15 ;
}

	//Allot random distance for wall 3
function distance_3(){
	pos_3 = Math.floor(Math.random()*220);
	if(pos_3 < 140){
		distance_3();
	}
	W_3 = W_2 + pos_3;
	gap_3 = Math.floor(Math.random()*(canvas.height-70));
	G_3_X =  W_3 + 100 + 15 ;
}

    //Allot random distance for wall 4
function distance_4(){
	pos_4 = Math.floor(Math.random()*220);
	if(pos_4 < 140){
		distance_4();
	}
	W_4 = W_3 + pos_4;
	gap_4 = Math.floor(Math.random()*(canvas.height-70));
    G_4_X =  W_4 + 100 + 15 ;
}


	//Function to stop the game
function   stopTheGame(){
    clearInterval(a);
    pauseAudio();
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = 'black';
	ctx.font = '100px sherif';
	ctx.fillText("GAME OVER",100,300);
	setTimeout(function(){	
		ctx.fillStyle = '#0f00ff';
	    ctx.fillRect(100,220,600,100);
		ctx.fillStyle = 'black';
		ctx.font = '100px sherif';
		ctx.fillText("GAME OVER",100,300);},500);
}



function move(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	//Create background
	ctx.fillStyle = 'orange';
	ctx.fillRect(0,0,canvas.width,canvas.height);

	//Create obstacle 1
	ctx.fillStyle = '#2b9ddb';
	ctx.fillRect(W_1,0,Wall_Width,canvas.height); 
	ctx.fillStyle = 'orange';
	ctx.fillRect(W_1,gap_1,Wall_Width,70);
	Show_Enemy = true;
	//Adding enemy with gun....
	if(Show_Enemy)
	{
		ctx.fillStyle = 'black';
		ctx.fillRect(W_1 + 100,gap_1+20,30,30);
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(G_1_X,gap_1 + 20 + 15,5,0,Math.PI*2,true);
		ctx.fill();
		
		var dx_1 = ball_X - G_1_X;
		var dy_1 = ball_Y - (gap_1 + 20 + 15);

		diff_1 = Math.sqrt(dx_1*dx_1 + dy_1*dy_1);
		console.log(diff_1);
		if(diff_1 < 15){
		       stopTheGame();
				}

		G_1_X -=3;

	}//End of add enemy
	if(ball_X > W_1 - ball_R && ball_X < W_1 + Wall_Width + ball_R && ball_Y < gap_1 + ball_R )
	{
	    stopTheGame();
		hit_Sound();
		console.log('Collision with wall 1 upper part');
	}
	if(ball_X > W_1 - ball_R && ball_X < W_1 + Wall_Width + ball_R && ball_Y > gap_1+ 70 - ball_R )
	{
		stopTheGame();
		hit_Sound();
		console.log('Collision with wall 1 lower part');
	}
	SCORE += 2;
	document.getElementById('score').innerHTML = "SCORE :-" + SCORE;
	W_1 -= Speed;
	if(W_1 < -40){
		distance_1();
	} 

	//Create obstacle 2 and gap
	ctx.fillStyle = '#7cfac3';
	ctx.fillRect(W_2,0,Wall_Width,canvas.height);
	ctx.fillStyle = 'orange';
	ctx.fillRect(W_2,gap_2,Wall_Width,70);
	Show_Enemy = true;
	// Adding enemy with gun.... behind 2nd obstacle
	if(Show_Enemy)
	{
		ctx.fillStyle = 'black';
		ctx.fillRect(W_2 + 100,gap_2+20,30,30);
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(G_2_X,gap_2 + 20 + 15,5,0,Math.PI*2,true);
		ctx.fill();
		
		var dx_2 = ball_X - G_2_X;
		var dy_2 = ball_Y - (gap_2 + 20 + 15);

		diff_2 = Math.sqrt(dx_2*dx_2 + dy_2*dy_2);
		console.log(diff_2);
		if(diff_2 < 15){
		       stopTheGame();
				}

		G_2_X -=3;

	}
	if(ball_X > W_2 - ball_R && ball_X < W_2 + Wall_Width + ball_R && ball_Y < gap_2 + ball_R )
	{
		stopTheGame();
		hit_Sound();
		console.log('Collision with wall 2 upper part');
	}
	if(ball_X > W_2 - ball_R && ball_X < W_2 + Wall_Width + ball_R && ball_Y > gap_2+ 70 - ball_R )
	{
		stopTheGame();
		hit_Sound();
		console.log('Collision with wall 2 lower part');
	}

	W_2 -= Speed;
	if(W_2 < -40){
	distance_2();
	}



	//Create obstacle 3 and gap
	ctx.fillStyle = '#00ab84';
	ctx.fillRect(W_3,0,Wall_Width,canvas.height);
	ctx.fillStyle = 'orange';
	ctx.fillRect(W_3,gap_3,Wall_Width,70);
		//Adding enemy with gun....for 3rd obstacle
	if(Show_Enemy)
	{
		ctx.fillStyle = 'black';
		ctx.fillRect(W_3 + 100,gap_3+20,30,30);
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(G_3_X,gap_3 + 20 + 15,5,0,Math.PI*2,true);
		ctx.fill();
		
		var dx_3 = ball_X - G_3_X;
		var dy_3 = ball_Y - (gap_3 + 20 + 15);

		diff_3 = Math.sqrt(dx_3*dx_3 + dy_3*dy_3);
		console.log(diff_3);
		if(diff_3 < 15){
		       stopTheGame();
				}

		G_3_X -=3;

	}//End of add enemy
	if(ball_X > W_3 - ball_R && ball_X < W_3 + Wall_Width + ball_R && ball_Y < gap_3 + ball_R )
	{
		stopTheGame();
		hit_Sound();
		console.log('Collision with wall 3 upper part');
	}
	if(ball_X > W_3 - ball_R && ball_X < W_3 + Wall_Width + ball_R && ball_Y > gap_3+ 70 - ball_R )
	{
		stopTheGame();
		hit_Sound();
		console.log('Collision with wall 3 lower part');
	}

	W_3 -=Speed;
	if(W_3 < -40){
	distance_3();
	}

	//Create obstacle 4 and gap
	ctx.fillStyle = '#394856';
	ctx.fillRect(W_4,0,Wall_Width,canvas.height);
	ctx.fillStyle = 'orange';
	ctx.fillRect(W_4,gap_4,Wall_Width,70);
		//Adding enemy with gun....for 4th obstacle
	if(Show_Enemy)
	{
		ctx.fillStyle = 'black';
		ctx.fillRect(W_4 + 100,gap_4+20,30,30);
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(G_4_X,gap_4 + 20 + 15,5,0,Math.PI*2,true);
		ctx.fill();
		
		var dx_4 = ball_X - G_4_X;
		var dy_4 = ball_Y - (gap_4 + 20 + 15);

		diff_4 = Math.sqrt(dx_4*dx_4 + dy_4*dy_4);
		console.log(diff_4);
		if(diff_4 < 15){
		       stopTheGame();
				}

		G_4_X -=3;

	}//End of add enemy
	if(ball_X > W_4 - ball_R && ball_X < W_4 + Wall_Width + ball_R && ball_Y < gap_4 + ball_R )
	{
		stopTheGame();
		hit_Sound();
		console.log('Collision with wall 4 upper part');
	}
	if(ball_X > W_4 - ball_R && ball_X < W_4 + Wall_Width + ball_R && ball_Y > gap_4+ 70 - ball_R )
	{
		stopTheGame();
		hit_Sound();
		console.log('Collision with wall 4 lower part');
	}

	W_4 -=Speed;
	if(W_4 <- 40){
		distance_4();
	}


	//create side Wall
	ctx.fillStyle = 'red';
	ctx.fillRect(0,0,canvas.width,Side_Wall_Height);
	ctx.fillStyle = 'red';
	ctx.fillRect(0,canvas.height-Side_Wall_Height,canvas.width,Side_Wall_Height);
	ctx.fillStyle = 'red';
	ctx.fillRect(0,0,Side_Wall_Width,canvas.height);
	ctx.fillStyle = 'red';
	ctx.fillRect(canvas.width-Side_Wall_Width,0,Side_Wall_Width,canvas.height);
	//Detect collision from side wall
	if(ball_X < Side_Wall_Width + ball_R || 
	   ball_X > canvas.width-Side_Wall_Width - ball_R ||
	   ball_Y < Side_Wall_Height + ball_R ||
	   ball_Y > canvas.height-Side_Wall_Height - ball_R){
		console.log('Collision With Side Wall');

	}

	//Walls wont kill deep but restrict him from movind through them...
	if(ball_X < Side_Wall_Width + ball_R){
		ball_X = Side_Wall_Width + ball_R;
	}
	if(ball_X > canvas.width-Side_Wall_Width - ball_R ){
		ball_X = canvas.width-Side_Wall_Width - ball_R ;
	}
    if( ball_Y < Side_Wall_Height + ball_R){
    	 ball_Y = Side_Wall_Height + ball_R;
    }
    if(ball_Y > canvas.height-Side_Wall_Height - ball_R){
    	ball_Y = canvas.height-Side_Wall_Height - ball_R;
    }

    // if(ball_X == Side_Wall_Width + ball_R && W_1 == Side_Wall_Width + 2*ball_R )
    // {
    // 	alert(' squished');
    // }
  
	ctx.fillStyle = 'blue';
	ctx.beginPath();
	ctx.arc(ball_X,ball_Y,ball_R,0,Math.PI*2,true);
	ctx.fill();
}
//End of move function


// // //Introduction player...
// // var sheetWidth = 216;
// // var sheetHeight = 35;
// // var cols = 8;
// // var rows = 1;
// // var width = sheetWidth/cols;
// // var height = sheetHeight/rows;
// // var srcX;
// // var srcY;
// // currentFrame = ++currentFrame%cols;
// // srcX = currentFrame*width;srcY = 0;
// // var character = new Image();
// // character.src = "NewDeep.png";  
// // ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
// // if(currentFrame == 7){
// // 	currentFrame = 0;
// // }//Player image
// }//End of move function






//Update mouse position
function updateMousePos(evt){
	    var canvas = document.getElementById('canvas');
	    var ctx = canvas.getContext('2d');

		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;

		var mouseX = evt.clientX - rect.left - root.scrollLeft;
		var mouseY = evt.clientY - rect.top - root.scrollTop;
		 
        ball_X = mouseX;
        ball_Y = mouseY;
}//End of update mouse function