function click() {
    if (event.button == 2) {
        alert("Hola, Capibara.");
    }
}

document.onmousedown = click

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyC') {
        event.preventDefault();
        alert("Hola, Capibara.");
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyU') {
        event.preventDefault();
        alert("No puedes acceder a ver mi código. :c");
    }
});
