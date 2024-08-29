document.getElementById('presiona').addEventListener('click', function(){
    //Nos sirve para obtener el valor de input
    const id=document.getElementById('entrada').value;
    // Hace la solicitud con el GET a la API con id que se ingreso
    fetch(`https://superheroapi.com/api.php/010fdd537209636fb72f119546b5d119/${id}`)
    .then(response => response.json())
    .then(data =>{
        //Nos muestra la respuesta nuestra solicitud
        // document.getElementById('resultado').innerHTML = JSON.stringify(data, null, 2);
        datatable(data);
    })
    .catch(error =>{
        console.error('Hubo un error', error);
    })
});

function datatable(data){
    const outputDiv=document.getElementById("resultado");
    outputDiv.innerHTML="";
    const table=document.createElement("table");
    const headerRow=document.createElement("tr");
    const headers =["Propiedad", "Valor"];
    headers.forEach(headerText =>{
        const header =document.createElement("th");
        header.textContent=headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    for (let i in data){
        if (data.hasOwnProperty(i)){
            const row=document.createElement("tr");
            const celli=document.createElement("td");
            celli.textContent=i;
            row.appendChild(celli);
            const cellValue=document.createElement("td");
            cellValue.textContent=typeof data[i]==="object"?JSON.stringify(data[i]):data[i];
            row.appendChild(cellValue);
            table.appendChild(row);
        }
    }
    outputDiv.appendChild(table);
}
//Desarrollado por Yessica Andrea Perez Machuca Grupo:T2.