const container = document.querySelector("#container");

const dims = 16;

container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;

for (let i = 0; i < Math.pow(dims, 2); i++) {
	const divs = document.createElement("div");
	divs.id = `div${i}`;
	divs.textContent = `${i}`;
	container.appendChild(divs);
}
