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
        // Agregar products
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
//Eliminar products
function eliminar(id){
    data[0].products=data[0].products.filter(Object=>Object.id!==id);
    ver()
}
eliminar(3)

//Actualizar menu products
function cambio(){
    document.getElementById("c1").addEventListener("submit", function(event){
        event.preventDefault();
        let filtrar =parseInt(document.getElementById("filtrar").value);
        output1.innerHTML="";
        let contador=false;
        for (let i of data[0]["products"]){
            if (i["id"]===filtrar){
                output1.innerHTML+=`
                <p>Id:${i["id"]}
                <p>Name:${i["name"]}
                <p>category:${i["category"]}
                <p>price:${i["price"]}
                <p>quantityInStock:${i["quantityInStock"]}
                <p>supplierId:${i["supplierId"]}`
                contador = true
                button11.addEventListener("click", (e)=>{
                    let newproduct=parseInt(document.getElementById("actualizar").value);
                    i.id=newproduct
                    i.name=newproduct
                    i.category=newproduct
                    i.price =newproduct
                    i.quantityInStock=newproduct
                    i.supplierId=newproduct
                    cambio()
                    ver()
                })
            }
        }
    })
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
        //Agregar suppliers
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


//Ver y agregar menu order
document.getElementById("button9").addEventListener("click", o)
fetch("info.json")
.then(res => res.json())
.then(data => {
        function o(){
            for (const i of data[0]["orders"]){
                document.getElementById("document").innerHTML +=`
                <p>orderid: ${i.orderId}</p>
                <p>productid: ${i.productId}</p>
                <p>quantity: ${i.quantity}</p>
                <p>price: ${i.price}</p>
                <p>orderdate: ${i.orderDate}</p>
                <p>status: ${i.status}</p>
            `
            }
            console.log(data[0]["orders"])
        }
        // Agregar order
        document.getElementById("a1").addEventListener("submit", function(event){
            event.preventDefault();
        
            let orderId=parseInt(document.getElementById("cuadro49").value);    
            let productId=parseInt(document.getElementById("cuadro50").value);  
            let quantity=parseInt(document.getElementById("cuadro51").value);  
            let price=parseInt(document.getElementById("cuadro52").value);  
            let orderDate=parseInt(document.getElementById("cuadro53").value);  
            let status=document.getElementById("cuadro54").value;
            data[0]["orders"].push({
                "orderid":orderId,
                "producid":productId,
                "quantity":quantity,
                "price":price,
                "orderdate":orderDate,
                "status":status
            }) ;
            console.log(data[0]["orders"])
                                    
            o()  
        })
        
})