// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    	mybutton.style.display = "flex";
    } else {
    	mybutton.style.display = "none";
    }
}

function hover(element, className){
	element.addEventListener('mouseenter', e => element.classList.add(className))
	element.addEventListener('mouseleave', e => element.classList.remove(className))
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.querySelectorAll('.nav-link').forEach(() => {
	console.log("Hovering")
	this.addEventListener('mouseenter', e => {element.classList.add(hover); console.log("Hovering")})
	this.addEventListener('mouseleave', e => element.classList.remove(hover))
})

// function cli(value) {
// 	for (i=0; i<5; i++) {
// 		console.log(i, value, i==value)
// 		if (i == value) {
// 			document.querySelector(`#page${i}`).style.display = 'flex'
// 		} else {
// 			document.querySelector(`#page${i}`).style.display = 'none'
// 		}
// 	}
// }

links = document.querySelectorAll('.nav-link').forEach(link => {
	value = link.dataset.value
	link.onclick = function() {
		value = this.dataset.value
		for (i=0; i<5; i++) {
			if (i == value) {
				document.querySelector(`#page${i}`).style.display = 'flex'
			} else {
				document.querySelector(`#page${i}`).style.display = 'none'
			}
		}
	}
})

document.querySelector('#menu').onclick = () => {
	const menu = document.querySelector('#scroll-menu')
	if (menu.style.display == 'none') {
		menu.style.display = 'flex'
	} else {
		menu.style.display = 'none'
	}
}
// for (j=0; j<5; j++){
// 	link = links[j]
// 	value = link.dataset.value
// 	link.onclick = () => {
// 		for (i=0; i<5; i++) {
// 			console.log(this)
// 			if (i == value) {
// 				document.querySelector(`#page${i}`).style.display = 'flex'
// 			} else {
// 				document.querySelector(`#page${i}`).style.display = 'none'
// 			}
// 		}
// 	}
// }
