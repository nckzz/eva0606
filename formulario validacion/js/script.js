var aficiones = [];

function actualizarAficiones() {
    console.log("Aficiones: " + aficiones);
    var div = document.getElementById("listaAficiones");
    div.innerHTML = "";
    var ul = document.createElement("ul");
    ul.className = "list-group";
    for (var i = 0; i < aficiones.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = aficiones[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

function agregarAficion() {
    var inputAficion = document.getElementById("aficion");
    var aficion = inputAficion.value;
    if (aficion != "") {
        aficiones.push(aficion);
        inputAficion.value = "";
        actualizarAficiones();
    }
}

