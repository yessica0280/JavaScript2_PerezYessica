document.getElementById('letra').addEventListener('input',ver)
function ver(){
    var i =document.getElementById("letra").value;
    var leer='https://pokeapi.co/api/v2/pokemon/'+i
    poke(leer)
}
function poke(leer){
    fetch(leer)
    .then(res=> res.json())
    .then(data => {
        pasos=data.sprites.other.showdown.front_default
        Name=data.name
        id=data.id
        document.getElementById("resultado").innerHTML=""
        document.getElementById("resultado").innerHTML+=`
            <img src="${pasos}" style="width: ">
            ${Name}
            ${id}
        `
    })
}