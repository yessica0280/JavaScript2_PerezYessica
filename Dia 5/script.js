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