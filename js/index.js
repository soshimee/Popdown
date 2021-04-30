document.querySelector(".main").onsubmit = () => {
	const count = document.querySelector(".count").value;
	const width = document.querySelector(".width").value;
	const height = document.querySelector(".height").value;
	const type = document.querySelector(".type").value;
	for (let i = 0; i < count; i++) {
		open(`popup/${type}.html`, Math.random().toFixed(10).substr(2), `location=no, width=${width}, height=${height}`);
	}
	return false;
}