
let valorBoleta = 5000
let clientes = 0
let edad = 0
let hora = 0
let pelicula 

function cartelera(pelis){
    switch(pelis){
        case "thor":
            pelicula = "Thor"
            break
        case "telefono negro":
            pelicula = "Telefono Negro"
            break
        case "minions":
            pelicula = "Los Minions"
            break
        default:
            alert("no ingreses peliculas que no estan en cartelera")
            break
    }
}



do{
    do{
        pelicula = prompt("estan estas tres peliculas en cartelera 1. Thor 2. telefono negro 3. minions").toLowerCase()
        cartelera(pelicula)
        console.log(pelicula)
    }while(pelicula > 0 )
    do{
        horaPelicula = prompt("Hola cliente tenemos estos horarios de peliculas para usted, 6:30, 7:30, 9:30")
        switch(horaPelicula){
            case "6:30":
                hora = "6:30"
                break
            case "7:30":
                hora = "7:30"
                break
            case "9:30":
                hora = "9:30"
                break
            default:
                alert("ingresa horarios validos")
                break
        }
        console.log(hora)

    }while((hora >= 0))

    do{
        clientes = parseInt(prompt("cuantos clientes van a ver la pelicula"))
        if(isNaN(clientes)){
            alert("ingresa caracteres validos")
        }
        if(clientes > 5){
            alert("el maximo de clientes por grupo es de 5 personas")
        }
        console.log(clientes)
    }while((isNaN(clientes)) || (clientes > 5))


    do{
        for(let i = 0;i < clientes; i ++ ){
            edad = parseInt(prompt("edad de cada cliente"))
        if(isNaN(edad)){
            alert("vuelve a ingresar un caracter validos")
            break
        }
        if(edad < 17){
            alert("la edad estimada para ver las peliculas es de 17 años en adelante")
            break
        }
        console.log(edad)
    }
    }while((edad < 17) || (isNaN(edad)))
    
}while((edad < 17) || (isNaN(edad)))

alert(`su funcion de ${pelicula} a las ${hora} ha sido reservada, el total a pagar es ${valorBoleta * clientes}`)




