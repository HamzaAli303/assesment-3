console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function mouseOver() {
	alert('Good choice!')

}

let img = document.querySelector('img')

img.addEventListener('mouseover', mouseOver);