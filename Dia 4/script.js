var informacion = [
    {
        "informacion_personal": [
            {
                "nombre": "Juan Pérez",
                "edad": 30,
                "direccion": "calle 12",
                "calle": "Calle Principal",
                "numero": 123,
                "ciudad": "Ciudad Ejemplo",
                "contacto": "contacto juan",
                "correo": "juan.perez@example.com",
                "telefono": "+123456789"
                },
                {
                    "nombre": "Juan Pérez",
                    "edad": 30,
                    "direccion": "calle 12",
                    "calle": "Calle Principal",
                    "numero": 123,
                    "ciudad": "Ciudad Ejemplo",
                    "contacto": "contacto juan",
                    "correo": "juan.perez@example.com",
                    "telefono": "+123456789"
                }
        ]
    }
]
const historial = [
    {
        "historial_educativo": [
        {
        "nivel": "Secundaria",
        "institucion": "Instituto Secundario",
        "anio_inicio": 2000,
        "anio_fin": 2005
        },
        {
            "nivel": "Universidad",
            "institucion": "Universidad Ejemplar",
            "titulo": "Licenciatura en Ciencias",
            "anio_inicio": 2006,
            "anio_fin": 2010
        }
        ]
    }
]
const experiencia = [
    {
        "experiencia_laboral": [
        {
        "puesto": "Desarrollador de Software",
        "empresa": "Tech Solutions",
        "periodo": "2010-2015",
        "responsabilidades": [
        "Desarrollo de aplicaciones web",
        "Mantenimiento de bases de datos"
        ]
        },
        {
        "puesto": "Gerente de Proyectos",
        "empresa": "Proyectos Avanzados",
        "periodo": "2016-actualidad",
        "responsabilidades": [
        "Planificación y supervisión de proyectos",
        "Coordinación de equipos"
        ]
        }
        ]
    }
]
console.log(informacion)

function menu(){
    console.log("---- Bienvenidos a la plataforma ----")
    console.log("1. Información")
    console.log("2. Historial")
    console.log("3. Experiencia")
}
menu()
function Informacion(){
    console.log("---- Menu de la Información ----")
    console.log("1. Ver información")
    console.log("2. Agregar información")
    console.log("3. Eliminar información")
    console.log("4. Actualizar información")
}
function Historial(){
    console.log("---- Menu del Historial ----")
    console.log("1. Ver historial")
    console.log("2. Agregar historial")
    console.log("3. Eliminar historial")
    console.log("4. Actualizar historial")
}
function Experiencia(){
    console.log("---- Menu de la experiencia ----")
    console.log("1. Ver experiencia")
    console.log("2. Agregar experiencia")
    console.log("3. Eliminar experiencia")
    console.log("4. Actualizar experiencia")
}
var opc=prompt("Elije la opción que deseas: ")
if (opc == 1){
    console.clear()
    console.log("---- Menu información ----")
    Informacion()
    let opcion=prompt("Elije la opción que deseas: ")
    if (opcion == 1){
        console.clear()
        console.log("Ver información");
        for (var grupo of informacion[0]["informacion_personal"]){
            console.log("Nombre", grupo["nombre"]);
            console.log("Edad", grupo["edad"]);
            console.log("Direccion", grupo["direccion"]);
            console.log("Calle", grupo["grupo"]);
            console.log("Numero", grupo["numero"]);
            console.log("Ciudad", grupo["ciudad"]);
            console.log("Contacto", grupo["contacto"]);
            console.log("Correo", grupo["correo"]);
            console.log("Telefono", grupo["telefono"]);
        } 
    }
    if (opcion == 2){
        console.clear()
        console.log("Agregar información");
        let nombre=prompt("Ingresa el nombre: ")
        let edad=prompt("Ingresa la edad: ")
        let direccion=prompt("Ingresa la direccion: ")
        let calle=prompt("Ingresa la calle: ")
        let numero=prompt("Ingresa el numero: ")
        let ciudad=prompt("Ingresa la ciudad: ")
        let contacto=prompt("Ingresa el contacto: ")
        let correo=prompt("Ingresa el correo: ")
        let telefono=prompt("Ingresa el telefono: ")
        informacion[0]["informacion_personal"].push({"nombre": nombre, "edad": edad, "direccion": direccion, "calle": calle, "numero": numero, "ciudad": ciudad, "contacto": contacto, "correo": correo, "telefono": telefono})
console.log(informacion)    }
    if (opcion == 3){
        console.clear()
        console.log("Eliminar informacion: ") 
        informacion[0]["informacion_personal"].pop();
        console.log(informacion)
    }
    if (opcion == 4){
        console.clear()
        console.log("Actualizar informacion: ")
    }
}
if (opc == 2){
    console.clear()
    console.log("----  Menu del Historial ----")
    Historial()
    let opcion=prompt("Elije la opcion que deseas: ")
    if (opcion == 1){
        console.clear()
        console.log("Ver historial: ")
        for (var grup of historial[0]["historial_educativo"]){
            console.log("Nivel", grup["nivel"]);
            console.log("Institucion", grup["institucion"]);
            console.log("Anio_inicio", grup["anio_inicio"]);
            console.log("Anio_fin", grup["anio_fin"]);
        }
    }
    if (opcion == 2){
        console.clear()
        console.log("Agregar historial: ")
        let nivel=prompt("Ingresa el nombre: ")
        let institucion=prompt("Ingresa la edad: ")
        let anio_inicio=prompt("Ingresa la direccion: ")
        let anio_fin=prompt("Ingresa la calle: ")
        historial[0]["historial_educativo"].push({"nivel": nivel, "anio_inicio": institucion, "anio_inicio": anio_inicio, "anio_fin": anio_fin})   
console.log(historial)    }
    if (opcion == 3){
        console.clear()
        console.log("Eliminar historial: ")
        historial[0]["historial_educativo"].pop();
        console.log(historial)
    }
    if (opcion == 4){
        console.clear()
        console.log("Actualizar historial: ")
    }
}