document.getElementById("presiona").addEventListener("click", ver)
function ver(){
    fetch("https://superheroapi.com/api.php/0fe0acc4540cabf0138d0792d3420c19/intelligence")
    .then(res => res.json())
    .then (data => {
        console.log(data);
    })
}