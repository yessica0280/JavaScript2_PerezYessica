// Ver menu products y agregar products
document.getElementById("button4").addEventListener("click", ver)
fetch("info.json")
.then(res => res.json())
.then(data => {
        function ver(){
            for (const i of data[0]["products"]){
                document.getElementById("documentos").innerHTML +=`
                <p>id: ${i.id}</p>
                <p>name: ${i.name}</p>
                <p>category: ${i.category}</p>
                <p>price: ${i.price}</p>
                <p>quantityInStock: ${i.quantityInStock}</p>
                <p>supplierId: ${i.supplierId}</p>
            `
            }
            console.log(data[0]["products"])
        }
        // Agregar un producto
        document.getElementById("e").addEventListener("submit", function(event){
            event.preventDefault();
        
            let Id=parseFloat(document.getElementById("cuadro1").value);    
            let name=document.getElementById("cuadro2").value;  
            let category=document.getElementById("cuadro3").value;  
            let price=parseInt(document.getElementById("cuadro4").value);  
            let quantityInStock=parseInt(document.getElementById("cuadro5").value);  
            let supplierId=parseInt(document.getElementById("cuadro6").value);
            data[0]["products"].push({
                "id":Id,
                "name":name,
                "category":category,
                "price":price,
                "quantityInStock":quantityInStock,
                "supplierId":supplierId
            }) ;
            console.log(data[0]["products"])
                                    
            ver()  
        })
})
//Eliminar menu products
function eliminar(){
    let idpedido=parseInt(document.getElementById("idpedido").value)
    if (archivo.products.some(i => i.productId===idpedido)){
        archiv.products=archivo.products.filter(i => i.productId==idpedido)
        document.getElementById("button2").innerHTML=""
        ver()
    } else{
        alert("Id no encontrado")
    }
}

// Ver y agregar menu suppliers
document.getElementById("button8").addEventListener("click", ve)
fetch("info.json")
.then(res => res.json())
.then(date => {
        function ve(){
            for (let i of date[0]["suppliers"]){
                
                document.getElementById("documento").innerHTML +=`
                <p>id: ${i.id}</p>
                <p>name: ${i.name}</p>
                <p>contactInfo:</p>
                <p>phone: ${i.contactInfo.phone}</p>
                <p>email: ${i.contactInfo.email}</p>
                <p>address: ${i.contactInfo.address}</p>
                `
            }
            console.log(date[0]["suppliers"])
        }
        //agregar
        document.getElementById("cu1").addEventListener("submit", function(event){
            event.preventDefault();
        
            let Id=parseInt(document.getElementById("cuadro25").value);    
            let name=document.getElementById("cuadro26").value;    
            let phone=parseInt(document.getElementById("cuadro27").value);  
            let email=document.getElementById("cuadro28").value;  
            let address=document.getElementById("cuadro29").value;
            date[0]["suppliers"].push({
                "id":Id,
                "name":name,
                "contactInfo":{"phone":phone,
                "email":email,
                "address":address}
            }) ;
            console.log(date[0]["suppliers"])
                                    
            ve()  
        })
})
//Eliminar menu 
//Ver menu order
document.getElementById("button12").addEventListener("click", d)
function d(){
    fetch("info.json")
    .then(res => res.json())
    .then(data => {
        for (const i of data[0]["orders"]){
            document.getElementById("document").innerHTML +=`
            <p>id: ${i.orderId}</p>
            <p>name: ${i.productId}</p>
             <p>category: ${i.quantity}</p>
            <p>phone: ${i.price}</p>
            <p>email: ${i.orderDate}</p>
            <p>address: ${i.status}</p>
        `
        }
    })
}