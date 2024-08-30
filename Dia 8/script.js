document.getElementById('presiona').addEventListener('click', function(){
    //Nos sirve para obtener el valor de input
    const id=document.getElementById('entrada').value;
    // Hace la solicitud con el GET a la API con id que se ingreso
    fetch(`https://swapi.py4e.com/api/people/ ${id}`)
    .then(response => response.json())
    .then(data =>{
        //Nos muestra la respuesta nuestra solicitud
        document.getElementById('resultado').innerHTML +=`
        <table class="table table-dark table-striped">
        <tbody>
            <tr>
            <td scope="row">name:</td>
            <td>${data.name}</td>
            </tr>

            <tr>
            <td scope="row">Height: </td>
            <td>${data.height}</td>
            </tr>

            <tr>
            <td scope="row">Mass: </td>
            <td colspan="2">${data.mass}</td>
            </tr>

            <tr>
            <td scope="row">Hair color: </td>
            <td colspan="2">${data.hair_color}</td>
            </tr>

             <tr>
            <td scope="row">Skin color: </td>
            <td colspan="2">${data.skin_color}</td>
            </tr>

             <tr>
            <td scope="row">Birth year: </td>
            <td colspan="2">${data.birth_year}</td>
            </tr>

             <tr>
            <td scope="row">Hair gender: </td>
            <td colspan="2">${data.gender}</td>
            </tr>

             <tr>
            <td scope="row">Homeworld: </td>
            <th>
                <ul class="list-group">
                    <li class="list-group-item">${data.homeworld}<br>
                    </li>

                </ul>
            </th>
            </tr>

        </tbody>
        </table>
        ` 
        
    })
    .catch(error =>{
        console.error('Hubo un error', error);
    })
});