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
	this.addEventListener('mouseenter', e => {element.classList.add(hover);})
	this.addEventListener('mouseleave', e => element.classList.remove(hover))
})

document.querySelectorAll('.nav-link').forEach(link => {
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
		menu.style.top = "60px"
		menu.style.display = 'flex'
		menu.classList.remove('scroll-up')
		menu.classList.add('scroll-down')
	} else {
		setTimeout(() => {menu.style.display = 'none'}, 500)
		menu.style.top = "-270px"
		menu.classList.remove('scroll-down')
		menu.classList.add('scroll-up')
	}
}

document.querySelectorAll('.nav-link-mobile').forEach(link => {
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
		const menu = document.querySelector('#scroll-menu')
		setTimeout(() => {menu.style.display = 'none'}, 500)
		menu.classList.remove('scroll-down')
		menu.classList.add('scroll-up')
	}
})

// nam = document.querySelector('#name')
// console.log(nam)
// nAMe = 'Balaji Karedla'
// // console.log(i, j)
// i = 0
// console.log(nAMe, nAMe.length)
// while (i < 14) {
// 	setTimeout(() => {nam.innerHTML += nAMe[i]; i++}, 1000)
// }
// console.log('Hey')

var nam = document.querySelector('#name');
var nameToDisplay = 'Balaji Karedla.';
var i = 0;

function displayNextCharacter() {
  if (i < nameToDisplay.length) {
    nam.innerHTML += nameToDisplay[i];
    i++;
    setTimeout(displayNextCharacter, 100);
  }
}
setTimeout(displayNextCharacter, 100);