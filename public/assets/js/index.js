//Sets the title to whatevers in the first input box
function setTitle() {
var title = document.getElementById("title")

if (title.value) {
document.title = title.value
}
}

//Sets the favicon to whatevers in the second input box
function setIcon() {
var icon = document.getElementById("icon")

if (icon.value) {
document.querySelector("link[rel='icon']").href = icon.value
}
}
