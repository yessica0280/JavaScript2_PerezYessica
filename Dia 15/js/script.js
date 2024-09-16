//Creación de un elemento personalizable.
class crearboton extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div id="contenedor">
        <h1>Live User Filter</h1>
        <p id="nombre">Search by name and/or location</p>
        <input type="search" placeholder="search" id="input">
        </div>
        `
    }
}
customElements.define('mi-boton',crearboton);

fetch(`https://66e45bbfd2405277ed140ac9.mockapi.io/live`)
.then(res => res.json())
.then(data => {
    data.forEach(lista=>{
        document.getElementById("lis").innerHTML+=`
        <div class="caja">
            <img src="${lista.avatar}" style=border-radius:50vw;>
            <div id="descripcion">
                <h1>${lista.name_full}</h1>
                <h3>${lista.description}</h3>
            </div>
        </div>
        `
    })
    document.getElementById("input").addEventListener("keyup", (e)=>{
        console.log(e.target.value);
        
        if (e.target.matches("#input")){
            document.querySelectorAll(".caja").forEach(personas=>{
                personas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ?personas.classList.remove("filtro")
                    :personas.classList.add("filtro")
            })
        }
    })
})