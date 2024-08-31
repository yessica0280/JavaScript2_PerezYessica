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
        </tbody>
        </table>
        ` 
        fetch(data.homeworld)
        .then(res => res.json())
        .then(homeworld =>{
            document.getElementById("resultado").innerHTML +=`
                <table class="table">
                <tbody>
                    <tr class="table-dark">
                        <td scope="row">Homeworld: </td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <table class="table table-light">
                                            <tbody>
                                                <tr><th>Name:</th><td> ${homeworld.name}</td></tr>
                                                    <tr><th>Rotation period:</th><td> ${homeworld["rotation_period"]}</td></tr>
                                                    <tr><th>Orbital period:</th><td> ${homeworld["orbital_period"]}</td></tr>
                                                    <tr><th>Dilameter:</th><td> ${homeworld.diameter}</td></tr>
                                                    <tr><th>Climate:</th><td> ${homeworld.climate}</td></tr>
                                                    <tr><th>Gravity:</th><td> ${homeworld.gravity}</td></tr>
                                                    <tr><th>Terrain:</th><td> ${homeworld.terrain}</td></tr>
                                                    <tr><th>Surface water:</th><td> ${homeworld["surface_water"]}</td></tr>
                                                    <tr><th>Population:</th><td> ${homeworld.population}</td></tr>
                                                    <tr><th>Residents:</th><td> ${homeworld.residents.map(i=>i).join("<br>")}</td></tr>
                                                    <tr><th>Films:</th><td> ${homeworld.films.map(i=>i).join("<br>")}</td></tr>
                                                    <tr><th>Created:</th><td> ${homeworld.created}</td></tr>
                                                    <tr><th>Edited:</th><td> ${homeworld.edited}</td></tr>
                                                    <tr><th>Url:</th><td> ${homeworld.url}</td></tr>
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>
                    <tr class="table-dark">
                        <td scope="row">Films: </td>
                            <td>
                                <ul>
                                    <li id="fil" class="list-group-item">
                                        <table>
                                            <tbody>
                                                <table class="table table-light">
                                                </table>
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>
                    <tr class="table-dark">
                        <td scope="row">Species: </td>
                            <td>
                                <ul>
                                    <li id="specie" class="list-group-item">
                                        <table>
                                            <tbody>
                                                <table class="table table-light">

                                                </table>
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>
                    <tr class="table-dark">
                        <td scope="row>"Vehicles: </td>
                            <td>
                                 <ul>
                                    <li id="vehicles" class="list-group-item">
                                        <table>
                                            <tbody>
                                               <table class="table table-light">

                                               </table>
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </td>
                        </td>
                    </tr>                    
                </tbody>
            </table>
            `
        })
        for (const i of data.films){
            fetch(i)
            .then(res => res.json())
            .then(films => {
                document.getElementById("fil").innerHTML +=`
                    <table>
                    <tbody>
                        <table class="table table-light">
                            <tr><th>Name:</th><td> ${films.title}</td></tr>
                            <tr><th>Rotation period:</th><td> ${films["episode_id"]}</td></tr>
                            <tr><th>Orbital period:</th><td> ${films["opening_crawl"]}</td></tr>
                            <tr><th>Dilameter:</th><td> ${films.director}</td></tr>
                            <tr><th>Climate:</th><td> ${films.producer}</td></tr>
                            <tr><th>Gravity:</th><td> ${films["release_date"]}</td></tr>
                            <tr><th>Terrain:</th><td> ${films.characters.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Surface water:</th><td> ${films.planets.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Population:</th><td> ${films.starships.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Residents:</th><td> ${films.vehicles.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Films:</th><td> ${films.species.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Created:</th><td> ${films.created}</td></tr>
                            <tr><th>Edited:</th><td> ${films.edited}</td></tr>
                            <tr><th>Url:</th><td> ${films.url}</td></tr>
                        </table>
                    </tbody>
                </table> 
                `
            })
        }
        for ( const i of data.species){
            fetch(i)
            .then(ress => ress.json())
            .then(species => {
                document.getElementById("specie").innerHTML+=`
                <table>
                    <tbody>
                        <table class="table table-light">
                            <tr><th>Name:</th><td> ${species.name}</td></tr>
                            <tr><th>Classification:</th><td> ${species.classification}</td></tr>
                            <tr><th>Designation:</th><td> ${species.designation}</td></tr>
                            <tr><th>Average height:</th><td> ${species.average_height}</td></tr>
                            <tr><th>skin colors:</th><td> ${species.skin_colors}</td></tr>
                            <tr><th>hair colors:</th><td> ${species.hair_colors}</td></tr>
                            <tr><th>Eye colors:</th><td> ${species.eye_colors}</td></tr>
                            <tr><th>Average lifespan:</th><td> ${species.average_lifespan}</td></tr>
                            <tr><th>Homeworld:</th><td> ${species.homeworld}</td></tr>
                            <tr><th>Language:</th><td> ${species.language}</td></tr>
                            <tr><th>People:</th><td> ${species.people.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Films:</th><td> ${species.films.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Created:</th><td> ${species.creates}</td></tr>
                            <tr><th>Edited:</th><td> ${species.edited}</td></tr>
                            <tr><th>Url:</th><td> ${species.url}</td></tr>
                        </table>
                    </tbody>
                </table>
                `
            })
        }
        for ( const i of data.vehicles){
            fetch(i)
            .then(re => re.json())
            .then(vehicles => {
                document.getElementById("vehicles").innerHTML+=`
                <table>
                    <tbody>
                        <table class="table table-light">
                            <tr><th>Name:</th><td> ${vehicles.name}</td></tr>
                            <tr><th>Model:</th><td> ${vehicles.model}</td></tr>
                            <tr><th>Manufacturer:</th><td> ${vehicles.manufacturer}</td></tr>
                            <tr><th>Cost in credits:</th><td> ${vehicles.cost_in_credits}</td></tr>
                            <tr><th>Length:</th><td> ${vehicles.length}</td></tr>
                            <tr><th>Max atmosphering spedd:</th><td> ${vehicles.max_atmosphering_speed}</td></tr>
                            <tr><th>Crew:</th><td> ${vehicles.crew}</td></tr>
                            <tr><th>Passengers:</th><td> ${vehicles.passengers}</td></tr>
                            <tr><th>Cargo capacity:</th><td> ${vehicles.cargo_capacity}</td></tr>
                            <tr><th>Consumables:</th><td> ${vehicles.consumables}</td></tr>
                            <tr><th>Vhicles class:</th><td> ${vehicles.vehicles_class}</td></tr>
                            <tr><th>Pilots:</th><td> ${vehicles.pilots.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Films:</th><td> ${vehicles.films.map(i=>i).join("<br>")}</td></tr>
                            <tr><th>Created:</th><td> ${vehicles.creates}</td></tr>
                            <tr><th>Edited:</th><td> ${vehicles.edited}</td></tr>
                            <tr><th>Url:</th><td> ${vehicles.url}</td></tr>
                        </table>
                    </tbody>
                </table>
                `
            })
        } 
    })
    .catch(error =>{
        console.error('Hubo un error', error);
    })
});