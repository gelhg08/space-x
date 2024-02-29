//SELECTORES 

const container = document.querySelector("#container-cards");

document.addEventListener('DOMContentLoaded', getData)
async function getData() {
     try {
      
        const URL = `https://api.spacexdata.com/v3/launches`
        
        const response = await fetch(URL);
        const data = await response.json();
        
        print(data)
        console.log(data);
        
    } catch (error) {
        
    }
}

function print(lanzamientos) {

 lanzamientos.forEach(lanzamiento => {

        container.innerHTML += `<div class="card">
        <img src="${lanzamiento.links.mission_patch_small}">
        
        <p>Año: <span>${lanzamiento.launch_year}</span></p>
        <p>Numero de vuelo: <span>${lanzamiento.flight_number}</span></p>
        <h2>"${lanzamiento.mission_name}"</h2>

        
        <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#exampleModal" video=${lanzamiento.links.youtube_id} >
        Ver mas
        </button>
    </div>`
        
    });
}

container.addEventListener("click", (e) =>{
    if(e.target.classList.contains("boton")){
        const video = e.target.getAttribute("video")
        console.log(video)
        const modal_body = document.querySelector(".modal-body")
        modal_body.innerHTML = `
        <iframe width="465" height="315" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
        console.log(video)
    }
})



