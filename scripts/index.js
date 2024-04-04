class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.id = 0;
    }

    getAllActivities(){
        return this.activities;
    }

    createActivity(title, description, imgUrl){
        this.id++;
        const activity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(activity);

    }

    deleteActivity(id){
        this.activities = this.activities.filter((activity) => activity.id !== id);
        return this.activities;
    }
}

const button = document.getElementById('addButton');

const repository = new Repository();
    function titleValueInput(){

        const newCards = document.getElementById('newCard');
        const title = document.querySelector('.title').value;
        const description = document.getElementById('descripcion').value;
        const urlImg = document.getElementById('urlOfImg').value;
    
        repository.createActivity(title, description, urlImg);
        console.log(repository.getAllActivities());

        const titulo = document.createElement('text');
        const activityDes = document.createElement('textarea');
        const imgUrl = document.createElement('img');
        
        updateTable();
}

document.getElementById("addButton").addEventListener("click", titleValueInput);

function updateTable(){
    const tableBody = document.querySelector("#activityTable tbody");
    tableBody.innerHTML = "";

    repository.getAllActivities().forEach(activity => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = activity.title;

        const descriptionCell = document.createElement("td")
        descriptionCell.textContent = activity.description;

        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = activity.imgUrl;
        img.alt = "Imagen de actividad.";
        imgCell.appendChild(img);

        row.appendChild(titleCell);
        row.appendChild(descriptionCell);
        row.appendChild(imgCell);

        tableBody.appendChild(row);

    });
}


// button.addEventListener("click", function() {
//     console.log("El valor de title es: ", title);
// });


// const repository = new Repository();

// console.log(repository);

// repository.createActivity('Estiudiar', 'Crear hábitos de estudio bien organizados', 'https://imagen.png');
// repository.createActivity('Jugar', 'Divertirse con amigos jugando Halo Online', 'https://Halo.png');
// repository.deleteActivity();

// console.log(repository.getAllActivities());
// console.log(repository.getAllActivities());

