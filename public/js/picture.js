$(document).ready(function() {
  const player = document.getElementById('player');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const overlay = document.getElementById('overlay')

$("#picture").on("click", function(){
  const constraints = {
    video: true,
  };
   navigator.mediaDevices.getUserMedia(constraints)
   .then((stream) => {
     player.srcObject = stream;
     overlay.style.visibility= show? 'visible' : 'visible';
     $("#overlay").css(fontFamily + fontColor);
   });
});

$("#takePicture").on("click", function(){
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
  context.fillStyle = fontColor;
  context.font = "20px " + fontFamily;
  context.fillText(text, 93, 100);
  stop(player);
});

$("#closePictureButton").on("click", function(){
  stop(player);
});

function stop(player) {
  let stream = player.srcObject;
  let tracks = stream.getTracks();
  tracks.forEach(function(track) {
    track.stop();
  });
  player.srcObject = null;
}

});
