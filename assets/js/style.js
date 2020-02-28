var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);
var sXpointer, sYpointer;

$on('mousemove', function(toMove){
	sXpointer = toMove.clientX || toMove.pageX;
	sYpointer = toMove.clientY || toMove.pageY;
});

var square = $('#square');

var x = void 0,
	y = void 0,
	dx = void 0,
	dy = void 0,
	tx = 0,
	ty = 0,
	key = -1;

var funcFollowPointer = function() {
	key = requestAnimationFrame(funcFollowPointer);
	if (!x || !y) {
		x = sXpointer;
		y = sYpointer;
	}else{
		dx = (sXpointer - x) * 0.125;
		dy = (sYpointer - y) * 0.125;

		if (Math.abs(dx) + Math.abs(dy) < 0.1) {
			x = sXpointer;
			y = sYpointer;
		}else{
			x += dx;
			y += dy;
		}
	}

	square.style.left = x + 'px';
	square.style.top = y + 'px';
}