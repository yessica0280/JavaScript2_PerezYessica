const Products = [
    {
        "products": [
            {
              "id": 1,
              "name": "Laptop",
              "category": "Electronics",
              "price": 999.99,
              "quantityInStock": 50,
              "supplierId": 101
            }
          ],
    }
]
const Supplies = [
    {
        "suppliers": [
            {
              "id": 101,
              "name": "Tech Supplies Inc.",
              "contactInfo": "",
              "phone": "123-456-7890",
              "email": "sales@techsupplies.com",
              "address": "123 Tech Lane, Silicon Valley, CA"
              }
        ],
    }
]
const Orders = [
    {
        "orders": [
            {
              "orderId": 1001,
              "productId": 1,
              "quantity": 5,
              "orderDate": "2024-08-23",
              "status": "Delivered"
            }
          ]
    }
]
console.log (Products)
function menu(){
    console.log("---- Menu principal ----")
    console.log("1. Products")
    console.log("2. Supplies")
    console.log("3. Orders")
}
menu()
function Productos(){
    console.log("---- Menu de Products ----")
    console.log("1. Ver productos")
    console.log("2. Agregar producto")
    console.log("3. Eliminar producto")
    console.log("4. Actualizar producto")
    console.log("5. Volver al menu principal ")
}
function supplies(){
    console.log("---- Menu de Supplies ----")
    console.log("1. Ver Proveedores")
    console.log("2. Agregar proveedores")
    console.log("3. Eliminar proveedores")
    console.log("Actualizar proveedores")
    console.log("5. Volver al menu principal")
}
function orders(){
    console.log("---- Menu de Orders ----")
    console.log("1. Ver pedidos")
    console.log("2. Agregar pedidos")
    console.log("3. Eliminar pedidos")
    console.log("4. Actualizar pedido")
    console.log("5. Volver al menu principal")
}
var opc=prompt("Elije la opción que deseas: ")
if (opc == 1){
    console.clear()
    console.log("---- Menu de Products ----")
    Productos()
    let opcion=prompt("Elije la opción que deseas: ")
    if (opcion == 1){
        console.clear()
        console.log("Ver Productos");
            for (var grupo of Products[0]["products"]){
                console.log("Id", grupo["id"]);
                console.log("Name", grupo["name"]);
                console.log("Category", grupo["category"]);
                console.log("Price", grupo["price"]);
                console.log("QuantityInStock", grupo["quantityInStock"]);
                console.log("SupplierId", grupo["supplierId"]);
            }
    }
    if (opcion == 2){
        console.clear()
        console.log("Agregar productos: ")
        let id=prompt("Ingresa el id: ")
        let name=prompt("Ingresa el name: ")
        let category=prompt("Ingresa la nueva category: ")
        let price=prompt("Ingresa la price: ")
        let quantityInStock=prompt("Ingresa la nueva quantityInStock: ")
        let supplierId=prompt("Ingresa el nuevo supplierId: ")
        Products[0]["products"].push({"id": id, "name": name, "category": category, "price": price, "quantityInStock": quantityInStock, "supplierId": supplierId})
console.log(Products)   }
    if (opcion == 3){
        console.clear()
        console.log("Eliminar productos: ")
        Products[0]["products"].pop();
        console.log(Products)
    }
    if (opcion == 4){
        console.clear()
        console.log("Actualizar producto: ")
        id=prompt("Ingresa el id del usuario que deseas actualizar: ")
        for (const i of Products[0]["products"]){
            if (id == i["id"]){
                let id=prompt("Ingresa el id: ")
                let name=prompt("Infresa el name: ")
                let category=prompt("Ingresa la category: ")
                let price=prompt("Ingresa el price: ")
                let quantityInStock=prompt("Ingresa el quantityInStock: ")
                let supplierId=prompt("Ingresa el supplierId: ")
                i["id"]=id
                i["name"]=name
                i["category"]=category
                i["price"]=price
                i["quantityInStock"]=quantityInStock
                i["supplierId"]=supplierId
            }
        }
        console.log(Products[0]["products"])
    }
    if (opcion == 5){
        console.clear()
        console.log("Volver al menu principal")
        menu()
    }
}
if (opcion == 2){
    console.clear()
    console.log("---- Menu de Supplies ----")
    supplies()
    let opcion=prompt("Elije la opción que deseas: ")
    if (opcion == 1){
        console.clear()
        console.log("Ver supplies: ")
        for (var i of Supplies[0]["suppliers"]){
            console.log("id", i["id"]);
            console.log("name", i["name"]);
            console.log("contactInfo", i["contactInfo"]);
            console.log("phone", i["phone"]);
            console.log("email", i["email"]); 
            console.log("address", i["address"]);
        }
    }
    if (opcion == 2){
        console.clear()
        console.log("Agregar supplies: ")
        let id=prompt("Ingresa el id: ")
        let name=prompt("Ingresa el name: ")
        let contactInfo=prompt("Ingresa el contactInfo: ")
        let phone=prompt("Ingresa el phone: ")
        let email=prompt("Ingresa el email: ")
        let address=prompt("Ingresa el address: ")
        Supplies[0]["suppliers"].push({"id": id, "name": name, "contactInfo": contactInfo, "phone": phone, "email": email, "address": address})
console.log(Supplies)   }
    if (opcion == 3){
        console.clear()
        console.log("Eliminar supplies: ")
        Supplies[0]["suppliers"].pop();
        console.log(Supplies)
    }
    if (opcion == 4){
        console.clear()
        console.log("Actualizar supplies: ")
        id=prompt("Ingresa el id del usuario que deseas actualizar: ")
        for (const i of Supplies[0]["suppliers"]){
            if (id == i["id"]){
                let id=prompt("Ingresa el nuevo id: ")
                let email=prompt("Ingresa el nuevo email: ")
                let phone=prompt("Ingresa el nuevo phone: ")
                i["id"]=id
                i["email"]=email
                i["phone"]=phone
            }
        }
        console.log(Supplies[0]["suppliers"])
    }
    if (opcion == 5){
        console.clear()
        console.log("Volver al menu principal: ")
        menu()
    }
}
if (opc == 3){
    console.clear
    console.log("---- Menu de orders ----")
    orders()
    let opcion =prompt("Elije la opción que deseas: ")
    if (opcion == 1){
        console.clear()
        console.log("Ver orders: ")
        for (var i of Orders[0]["orders"]){
            console.log("orderId", i["orderId"]);
            console.log("productId", i["productId"]);
            console.log("quantity", i["quantity"]);
            console.log("orderDate", i["orderDate"]);
            console.log("status", i["status"]);
        }
    }
    if (opcion == 2){
        console.clear()
        console.log("Agregar orders :")
        let orderId=prompt("Ingresa la nueva orderId: ")
        let productId=prompt("Ingresa el nuevo productId: ")
        let quantity=prompt("Ingresa el nuevo quantity: ")
        let orderDate=prompt("Ingresa la nueva orderDate: ")
        let status=prompt("Ingresa el nuevo status: ")
        Orders[0]["orders"].push({"orderId": orderId, "productId": productId, "quantity": quantity, "orderDate": orderDate, "status": status})
console.log(Orders)    }
    if (opcion == 3){
        console.clear()
        console.log("Eliminar orders: ")
        Orders[0]["orders"].pop();
        console.log(Orders)
    }
    if (opcion == 4){
        console.clear()
        console.log("Actualizar orders: ")
        orderId=prompt("Ingresa la orderId del usuario que deseas actualizar: ")
        for (const i of Orders[0]["orders"]){
            if (orderId == i["orderId"]){
                let orderId=prompt("Ingresa la orderId nueva: ")
                let orderDate=prompt("Ingresa la nueva orderDate: ")
                i["orderId"]=orderId
                i["orderDate"]=orderDate
            }
        }
        console.log(Orders[0]["orders"])
    }
    if (opcion == 5){
        console.clear()
        console.log("Volver al menu principal: ")
        menu()
    }
}
// Desarrollado por Yessica Andrea Perez Machuca Grupo:T2