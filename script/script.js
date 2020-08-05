var writeUs = document.querySelector(".button-writeus");
var writeModal = document.querySelector(".write-modal-box");
var exitButtonMap = document.querySelector(".map .exit-button-box .button-exit");
var exitButtonModal = document.querySelector(".write-modal-box .exit-button-box .button-exit");
var mapModal = document.querySelector(".map-box");
var mapLink = document.querySelector(".map-link");

writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeModal.classList.remove("visually-hidden");
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapModal.classList.remove("visually-hidden");
});


window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (!writeModal.classList.contains("visually-hidden")) {
			evt.preventDefault();
			writeModal.classList.add("visually-hidden");
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (!mapModal.classList.contains("visually-hidden")) {
			evt.preventDefault();
			mapModal.classList.add("visually-hidden");
		}
	}
});


exitButtonMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapModal.classList.add("visually-hidden");
});

exitButtonModal.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeModal.classList.add("visually-hidden");
});
