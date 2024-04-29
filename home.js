const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

var tl = gsap.timeline();
tl.from("#se", { scale:"0",x: -600, duration: 0.75 });
tl.from(".showcase-content p", { scale:"0",x: 600, duration: 0.5, delay: 0 }); 
tl.from(".showcase-content a", { scale : "0",y:"100",opacity: 1, duration: 1});