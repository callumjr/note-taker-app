const submitBtn = document.querySelector('.submit-btn');
const textArea = document.querySelector('.text-area');
const modalBox = document.querySelector('.modal-box');
const modalContent = document.querySelector('.modal-content');
const span = document.getElementsByClassName('close')[0];
let count = 0;
const addToTable = num => {
	const tbl = document.querySelector('.table');
	if (textArea.value) {
		const textAreaContent = textArea.value;
		const row = tbl.insertRow(-1);
		const cell1 = row.insertCell(0);
		const cell2 = row.insertCell(1);
		const cell3 = row.insertCell(2);
		cell1.innerHTML = `Note ${num}: ${textArea.value}`;
		textArea.value = '';
		const cancelBtn = document.createElement('button');
		cancelBtn.textContent = 'X';
		cell2.appendChild(cancelBtn);
		cancelBtn.addEventListener('click', () => {
			cancelBtn.closest('tr').remove();
			count--;
		});
		const viewBtn = document.createElement('button');
		viewBtn.textContent = 'Detail';
		cell3.appendChild(viewBtn);
		viewBtn.addEventListener('click', () => {
			modalBox.style.display = 'block';
			modalContent.textContent = textAreaContent;
			modalBox.classList.remove('hidden');
			modalContent.classList.remove('hidden');
			span.classList.remove('hidden');
		});
	}
	span.onclick = function() {
		modalContent.classList.add('hidden');
		modalBox.classList.add('hidden');
		span.classList.add('hidden');
	};
};

submitBtn.addEventListener('click', () => {
	count++;
	addToTable(count);
});

span.onclick = function() {
	modalContent.classList.add('hidden');
	modalBox.classList.add('hidden');
	span.classList.add('hidden');
};

window.onclick = function(event) {
	if (event.target == modalBox) {
		modalBox.style.display = 'none';
	}
};
