var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 9;
var lastTime = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var defaultX = canvas.width/3;
//check if the user has granted permission to use audio devices
navigator.mediaDevices.getUserMedia({ audio: true })
.then(function(stream) {
  //permission has been granted, so play the audio
  var audioElement = new Audio('disorder.mp3');
  audioElement.play();
})
.catch(function(error) {
  //permission has been denied, so handle the error
  console.log('Error:', error);
});
draw();
function draw(time){
	requestAnimationFrame(draw);
	if(time - lastTime > 1000/fps){
	  lastTime = time;

	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  ctx.font = "60px Comic Sans MS";
	  ctx.fillStyle = "white";
	  ctx.textAlign = "center";
	  ctx.fillText("JOY DIVISION", canvas.width/2, 60); 
	  ctx.fillStyle = "black";
	  for( var i=0; i < 100; i++ ){

	    var x = defaultX;
	    var y = 100 + 6 * i;
	    ctx.beginPath();
	    ctx.lineWidth = 1.4;
	    ctx.strokeStyle = 'rgb(255, 255, 255)';
	    ctx.moveTo( defaultX, y );

	    for( j = 0; j <88; j++ ) {
	      if(j > 0 && j < 30 || j > 55 && j < 88 ) {
	        x += 5;
	        ctx.lineTo(x , y - ( Math.floor(Math.random() * 5) ));
	      }
	      else if( j >= 31 && j <= 34 || j >= 41 && j <= 44) {
	        x +=  11;
	        ctx.lineTo(x , y - ( Math.floor(Math.random() * 15) ));
	      }
	      else if( j >= 35 && j <= 40 ) {
	        x +=  21;
	        ctx.lineTo(x , y - ( Math.floor(Math.random() * 35) ));
	      }
	    }

	    ctx.stroke();
	    ctx.fill();

	   }
	   requestAnimationFrame(draw);
	}
}
