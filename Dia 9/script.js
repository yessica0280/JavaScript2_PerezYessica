document.getElementById('letra').addEventListener('input',ver)
document.getElementById('next').addEventListener('click',siguiente)
document.getElementById('prev').addEventListener('click',anterior)
let current=null;
function ver(){
    var i =document.getElementById("letra").value;
    var leer='https://pokeapi.co/api/v2/pokemon/'+i
    poke(leer)
}
function poke(leer){
    fetch(leer)
    .then(res=> res.json())
    .then(data => {
        current=data.id
        let pasos=data.sprites.other.showdown.front_default
        let Name=data.name
        let id=data.id
        document.getElementById("resultado").innerHTML=""
        document.getElementById("resultado").innerHTML+=`
            <img src="${pasos}" style="width: 6vw; height: 6vw;">
            <audio autoplay src="${data.cries.latest}"></audio>
        `
        document.getElementById("resultado1").innerHTML=""
        document.getElementById("resultado1").innerHTML+=`
            ${id}
        `
        document.getElementById("resultado2").innerHTML=""
        document.getElementById("resultado2").innerHTML+=`
            ${Name}
        `;
        pokemon();
    })
}
function siguiente(){
    if (current !== null){
        let nextid=current+1;
        var leer ="https://pokeapi.co/api/v2/pokemon/"+nextid;
        poke(leer)
    }
}
function anterior(){
    if (current !== null && current > 1){
        let previd=current-1;
        var leer ="https://pokeapi.co/api/v2/pokemon/"+previd;
        poke(leer)
    }
}