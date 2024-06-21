console.log("started");
const text = document.createElement("a");
const container = document.getElementById("container");
const saveButton = document.getElementById("saveButton");
const input = document.getElementById("floatingInput");
let link = document.getElementById("link");

let key = "ayah";
input.value = localStorage.getItem(key);

// event listener

input.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		let value = input.value;
		localStorage.setItem(key, value);
		setText();
	}
});

saveButton.addEventListener("click", () => {
	let value = input.value;
	localStorage.setItem(key, value);
	setText();
});

// utility functions
const setText = () => {
	let value = localStorage.getItem(key);
	let verseArray = value.split(":");
	let href = `https://quran.com/${verseArray[0]}?startingVerse=${verseArray[1]}`;
	link.childNodes[0].data = `Current Ayah — ${localStorage.getItem(key)}`;
	link.href = href;
};

const focusToEnd = (() => {
	const end = input.value.length;

	input.setSelectionRange(end, end);
	input.focus();
})();

//

setText();
