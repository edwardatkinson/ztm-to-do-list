var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var deleteButton = document.createElement("button");
var clearAllButton = document.getElementById("clear-all");

function inputLength() {
	return input.value.length;
}
 
function createDeleteButton() {
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.addEventListener("click", deleteThisItem);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", strikeOut);

// add delete button to anything created through the input bar
	createDeleteButton();
	li.appendChild(deleteButton);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeOut() {
	var theTarget = event.target;
	theTarget.classList.toggle("done");
}

function deleteThisItem() {
	this.parentNode.remove();
}





button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// add event listener to all items + delete button

for (var i = listItems.length - 1; i >= 0; i--) {
	listItems[i].addEventListener("click", strikeOut);

	var deleteButton2 = document.createElement("button");
	deleteButton2.appendChild(document.createTextNode("Delete"));
	deleteButton2.addEventListener("click", deleteThisItem);
	listItems[i].appendChild(deleteButton2);

}