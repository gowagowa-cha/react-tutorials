
let tasks = [];

const UlElement = document.querySelector('ul');
const InputElement = document.querySelector('input');

let listeners = []

function removeTasks(index) {
	const [foo, removeBtn ] = listeners[index]
	removeBtn.addEventListener('click', foo)
	tasks = tasks.filter((_, i) => index !== i);
	renderUl();
}

function renderUl() {
	UlElement.innerHTML = '';
	tasks.forEach((str, i) => {
		const li = document.createElement('li');
		const removeBtn = document.createElement('button');
		removeBtn.style.background = '#a3f2e5';
		removeBtn.style.marginLeft = '20px';
		removeBtn.style.borderRadius = '50%';

		removeBtn.innerText = 'x';

		const removeFootion = () => removeTasks(i)
		listeners.push([removeFootion, removeBtn])
		removeBtn.addEventListener('click', removeFootion)

		li.innerText = str;
		li.appendChild(removeBtn);

		UlElement.appendChild(li);
	});
}

function nahdle() {
	const { value } = InputElement;
	tasks.push(value);
	InputElement.value = '';
	renderUl();
	console.log(tasks);
}

document.querySelector('#add-btn').onclick = nahdle;

renderUl();
