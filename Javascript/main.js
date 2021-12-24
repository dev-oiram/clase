
let elementos = []


function borrar(index) {
    elementos.splice(index, 1);
    update()
}


function update() {
    document.getElementById('contenido').innerHTML = "";
    let div = ""
    elementos.forEach((el,index) => {
        div = document.createElement('div');
        let el = "Nombre" + String(el.nombre)
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Nombre: ${el.nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Edad: ${el.edad}</h6>
                <p>Posicion: ${index}</p>
                </div>
                <div class="card-footer">
                    <button onclick="borrar('${index}')" class="btn btn-danger">Borrar</button>
                </div>
            </div>
        `;

        document.getElementById('contenido').appendChild(div);
    });
}

function agregar() {
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");

    let obj = {
        nombre: nombre.value,
        edad: edad.value
    }
    // arreglo de objetos
    elementos.push(obj)
    nombre.value = ""
    edad.value = ""

    update()
}