let userSize = prompt("Choice field size", 3);
let table = document.getElementById('field');
let colors = ['red', 'green', 'blue'];
let stepCount = 0;

function getRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function random(arr) {
	return arr[getRandomInt(arr.length - 1)];
}

function createField(size){
	for (let tblRow = 0; tblRow < size; tblRow++){
		let tr = document.createElement('tr');
		for (let tblColl = 0; tblColl < size; tblColl++){
			let td = document.createElement('td');
			td.classList.add(random(colors))
			//console.log(random(colors))
			td.addEventListener("click", step)
			tr.appendChild(td);
		}
	table.appendChild(tr);
	}
}

function step() {
	stepCount += 1;
	let color = colors.indexOf(this.classList.item(0))
	if (color == colors.length-1) this.classList.add(colors[0]) 
	else this.classList.add(colors[color+1])
	this.classList.remove(colors[color])		
	if (isVictory(cells)) {
		alert("Победа, количество шагов: "+ stepCount);
	}
}

function isVictory(cells) {
	let cellsColor = [];
	for (let cell of cells) cellsColor.push(cell.classList.item(0));
	for (let i = 0; i < cellsColor.length; i++) {
        while(cellsColor[i] != cellsColor[0]) return false;
    }
	return true;
}
createField(userSize)
let cells = document.querySelectorAll('td');