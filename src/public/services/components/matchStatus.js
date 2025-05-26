export function matchStatus(matches) {
	console.log(matches)
	const fragment = document.createDocumentFragment();
	matches && matches.forEach(match => {
		const span = match.score === 2 ? showWin : showLoose;
		fragment.appendChild(span());
	});
	return fragment;
}


const showWin = () => {
	const span = document.createElement('span');
	span.className = 'p-2'
	span.innerHTML = `<i class="fas fa-check"></i>`;
	span.className += ' text-green-500 bg-green-100 rounded-full p-1';
	return span;
}

const showLoose = () => {
	const span = document.createElement('span');
	span.className = 'p-2'
	span.innerHTML = `<i class="fas fa-close"></i>`;
	span.className += ' text-red-500 bg-green-100 rounded-full p-1';
	return span;
}