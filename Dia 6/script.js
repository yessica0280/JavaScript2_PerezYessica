
// Ver
document.getElementById("button4").addEventListener("click", ver)
function ver(){
    fetch("info.json")
    .then(res => res.json())
    .then(data => {
        let producto=data[0]["products"];
        let output=document.getElementById("output");
        output.innerHTML="";
        producto.forEach (product =>{
            documentos.getElementById("output").innerHTML += `
            <p>id: ${product.id}</p>
            <p>name: ${product.name}</p>
            <p>category: ${product.category}</p>
            <p>price: ${product.price}</p>
            <p>quantityInStock: ${product.quantityInStock}</p>
            <p>supplierId: ${product.supplierId}</p>
            `
        })
    })
}