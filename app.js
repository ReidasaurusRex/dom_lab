function clickSelect() {
	event.target.setAttribute("class", "selected");
	document.querySelector("img").setAttribute("src", "./images/" + event.target.innerHTML + ".jpeg");
}

function resetButton() {
	document.querySelector("img").setAttribute("src", "images/panic.jpeg");
	for (j = 0; j < itemsLi.length; j++) {
		itemsLi[j].setAttribute("class", "");
	}
}

window.onload = init;
	function init() {
		
		var gret = document.getElementById("greeting");
		gret.innerHTML = "Hello, Planet Earth!";

		var itemsLi = document.getElementsByTagName("li");
		for (i = 0; i < itemsLi.length; i++) {
				itemsLi[i].style.backgroundColor = "yellow";		
				itemsLi[i].addEventListener("click", clickSelect);
		}

		var reButton = document.getElementById("reset");
		reButton.addEventListener("click", resetButton);

	function resetButton() {
	document.querySelector("img").setAttribute("src", "images/panic.jpeg");
	for (j = 0; j < itemsLi.length; j++) {
		itemsLi[j].setAttribute("class", "");
	}
}


	}

		/*if (event.target.innerHTML == "milk") {
			document.querySelector("img").setAttribute("src", "milk.jpeg");
		}
		else if (event.target.innerHTML == "honey") {
			document.querySelector("img").setAttribute("src", "honey.jpeg");
		}
		else if (event.target.innerHTML == "water") {
			document.querySelector("img").setAttribute("src", "water.jpeg");
		}
		else if (event.target.innerHTML == "wine") {
			document.querySelector("img").setAttribute("src", "wine.jpeg");
		}
		else if (event.target.innerHTML == "beer") {
			document.querySelector("img").setAttribute("src", "beer.jpeg");
		}

	}
	*/