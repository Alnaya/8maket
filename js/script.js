let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	navbar.classList.toggle('active');
})