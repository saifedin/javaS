const handTitle = document.querySelector('.title-ti');
const menut = document.querySelector('.menu li');
const contt = document.querySelector('body');
let menuItem = document.querySelector('.menu');
const sButton = document.querySelector('.zar');
let counter = 1;

contt.addEventListener('click', function deleteItem(e) {
	if (e.target.parentElement.className === 'first') {
		e.target.parentElement.parentElement.remove();
	}
});

menuItem.addEventListener('click', selectItem);
function selectItem(n) {
	if ((n.target.nodeName = 'li')) {
		//	n.target.classList.remove('listcolor');
		handTitle.innerHTML = n.target.innerHTML;

		n.target.classList.add('listcolor');
	}
}

sButton.addEventListener('click', addlist);
function addlist() {
	//	menuItem.innerHTML += '<li>NewItem # ' + counter + '</li>';

	menuItem.innerHTML += `
<li class='li-menu' > 
عنصر جديد
 <a  href="#" class="first">
<i class="remove" >X</i>
</a>
</li>

`;
	counter++;
}

console.log(menuItem);
