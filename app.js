const reviews = [
	{
		id: 3,
		name: 'Tanya Sinclair',
		job: 'UX Engineer',
		img: './images/image-tanya.jpg',
		text:
			' I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'
	},
	{
		id: 3,
		name: 'John Tarkpor',
		job: 'Junior Front-end Developer',
		img: './images/image-john.jpg',
		text:
			'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.'
	}
];

const women = document.getElementById('women');
const btn = document.getElementById('btn');
const info = document.querySelector('.par');
const job = document.querySelector('.h');
const namea = document.getElementById('name');
let currentItem = 0;

/*window.addEventListener('DOMContentLoaded', function() {
	//const item = reviews[currentItem];
	women.src = item.img;
	// author.textContent = item.name;
	//job.textContent = item.job;
	//info.textContent = item.text;
});

function showPerson(person) {
	const item = reviews[person];
	women.src = item.img;
	namea.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}
btn.addEventListener('click', function() {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});
*/
function slider(i) {
	const item = reviews[i];
	women.src = item.img;
	job.textContent = item.job;
	namea.textContent = item.name;
	info.textContent = item.text;
}
btn.addEventListener('click', () => {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	slider(currentItem);
});
