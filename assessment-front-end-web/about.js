console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
	
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function compliment() {
	alert("Hello there!");
}

