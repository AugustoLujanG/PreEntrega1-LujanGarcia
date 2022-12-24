menu()

function menu()
{
    let carrito = ""
    let opcion

    do {
        opcion = prompt("1- Agregar Ítem \n2- Borrar Ítem \n3- Finalizar compra")
        opcion = parseInt(opcion)

        switch (opcion) {
            case 1:
                carrito = carrito + agregarItem()
                break
            case 2:
                carrito = borrarItem(carrito)
                break;
            case 3:
                console.log("salir")
                break
            default:
                alert("Opcion invalida!")
        }
    } while (opcion != 3)

    alert(carrito)

}

function agregarItem()
{
    let opcion
    let carrito = ""

    do
    {
        opcion = prompt("1- Producto 1: $1000\n2- Producto 2: $1250\n3- Producto 3: $1500\n4- Salir")
        opcion = parseInt(opcion)
        if (opcion <= 4)
        {
            if (opcion == 1)
            {
                carrito = carrito + "prod 1" + " - "
            }
            else
            if (opcion == 2)
            {
                carrito = carrito + "prod 2" + " - "
            }
            else
            if (opcion == 3)
            {
                carrito = carrito + "prod 3" + " - "
            }
        }
        else
        {
            alert("Opcion invalida!")
        }
    }while(opcion != 4)

    return carrito
}

function borrarItem (carrito)
{
    let borrar
    alert(carrito)
    for (producto in carrito)
    {
        do
        {
            borrar = prompt("Desea borrar el producto " + producto + " (S/N): ")
            if(borrar == 's' || borrar == 'S')
            {
                carrito = carrito - producto
            }
        }while(borrar!='n' && borrar!='N' && borrar!='s' && borrar!='S')

    }

    return carrito
}