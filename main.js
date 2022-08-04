let nombre=(prompt("ingrese su nombre"));
alert ("bienvenido a Peugeot");

let vehiculo;

vehiculo = parseInt(prompt("elija el vehículo: \n1) autos\n 2) camionetas"));


if (vehiculo == 1)
{
stockAutos();
}

else if (vehiculo == 2)
{
stockCamionetas();
}

else

{
alert ("no es valido el valor ingresado");

}


function stockAutos()
{
alert("Peugeot RCZ $15.900.000\n Peugeot 208 $3.800.000");
}

function stockCamionetas()
{
alert("Peugeot 3008 $9.600.000\n Peugeot 5008 $13.000.000");
}



const productos = [{id:1, nombre:"RCZ",  precio:"$15.000.900"},
                   {id:2, nombre:"3008", precio:"$9.600.000"},
                   {id:3, nombre:"208",  precio:"$3.800.000"},
                   {id:4, nombre:"5008", precio:"$13.000.000"},
]

let campoEmpresa=document.getElementById("empresa");
let campoCantidad=document.getElementById("cantidad")
campoEmpresa.value="seleccione modelo";
campoCantidad.value=productos.length;

let tabla=document.createElement("table");
tabla.className="table table-striped";
let tablaBody=document.createElement("tbody");

for(const producto of productos){
    tablaBody.innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
        `;
}
tabla.append(tablaBody);
let inferior=document.getElementById("inferior");
inferior.append(tabla);

let cartas=document.getElementById("cartas")
for(const producto of productos){
    let carta=document.createElement("section");
    carta.className="card";
    carta.innerHTML=`
    <div class="card_body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}</p>
    <a href="#" class=btn-primary">COMPRAR</a>
    </div>
    `;
}