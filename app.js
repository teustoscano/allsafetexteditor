document.getElementById('heading').innerHTML = localStorage['title'] || 'Start Here';
document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second';

var count = 0;

setInterval(function(){
	localStorage['title'] = document.getElementById('heading').innerHTML;
	localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);

function changeColorFunction (argument) {
	if((count % 2) == 0){
		document.getElementById('content').setAttribute("class", "lettersColor2");
		document.getElementById('heading').setAttribute("class", "lettersColor2");
		document.getElementById('footer').setAttribute("class", "lettersColor2");
		document.getElementById('boxed').setAttribute("class", "lettersColor2");
		count++;
	}else if((count % 2) != 0){
		document.getElementById('content').setAttribute("class", "lettersColor1");
		document.getElementById('heading').setAttribute("class", "lettersColor1");
		document.getElementById('footer').setAttribute("class", "lettersColor1");
		document.getElementById('boxed').setAttribute("class", "lettersColor1");
		count++;
	}
}