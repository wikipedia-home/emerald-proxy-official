function setTitle() {
var title = document.getElementById("title")

if (title.value) {
document.title = title.value
}
}

function setIcon() {
var icon = document.getElementById("icon")

if (icon.value) {
document.querySelector("link[rel='icon']").href = icon.value
}
}
