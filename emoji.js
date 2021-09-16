$( document ).ready(jqueryfn);
function jqueryfn() {
const 
canvas = document.querySelector("canvas"),
img = new Image(60, 45), 
ctx = canvas.getContext("2d");

img.onload = draw;

function draw() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  ctx.drawImage(this, 0, 0, this.width, this.height);
}

var bool_state = false;
canvas.addEventListener("click", () => {
	bool_state = !bool_state;
	switch(bool_state) {
		case true:
      image.src = 'emoji-happy_115293.svg';
		break;
			
		case false:
      image.src = 'emoji-frown_115127.svg';
		break;
	}
});
}
