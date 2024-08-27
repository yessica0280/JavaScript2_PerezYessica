document.getElementById('button2').addEventListener('click', obtenerjson);
function obtenerjson(){
    fetch('info.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data[0]["id"]);
        for (i in data){
            console.log(data[i]["id"])
        }
        console.log(data[0]["name"]);
        for (i in data){
            console.log(data[i]["name"])
        }
        console.log(data[0]["category"]);
        for (i in data){
            console.log(data[i]["category"])
        }
        console.log(data[0]["price"]);
        for (i in data){
            console.log(data[i]["price"])
        }
        console.log(data[0]["quantityInStock"]);
        for (i in data){
            console.log(data[i]["quantityInStock"])
        }
        console.log(data[0]["supplierId"]);
        for (i in data){
            console.log(data[i]["supplierId"])
        }
    })
}
document.getElementById('button2').addEventListener('click', obtenerjson);
function obtenerjson(){
    fetch('info1.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data[0]["id"]);
        for (i in data){
            console.log(data[i]["id"])
        }
        console.log(data[0]["name"]);
        for (i in data){
            console.log(data[i]["name"])
        }
        console.log(data[0]["phone"]);
        for (i in data){
            console.log(data[i]["phone"])
        }
        console.log(data[0]["email"]);
        for (i in data){
            console.log(data[i]["email"])
        }
        console.log(data[0]["address"]);
        for (i in data){
            console.log(data[i]["address"])
        }
    })
}