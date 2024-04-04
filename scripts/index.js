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

// Creo la variable para crear nuevas instancias
const repository = new Repository();

//Función que toma los valores de HTML
function titleValueInput(){
        //Captura de valores en los campos de texto
        const title = document.querySelector('.title').value;
        const description = document.getElementById('descripcion').value;
        const urlImg = document.getElementById('urlOfImg').value;
        //Alerta por si alguno de los campos está vacío
        if (title.trim() === '' || description.trim() === '' || urlImg.trim() === '') {
            alert("Por favor, complete todos los campos antes de continuar.");
            return;
        }
        //Creacion del nuevo objeto con la información de los inputs
        repository.createActivity(title, description, urlImg);
        console.log(repository.getAllActivities());
        
        updateTable();
}
//Función asignada al botón al dar click
document.getElementById("addButton").addEventListener("click", titleValueInput);

//función para generar una tabla con los elementos de 'activities'
    function updateTable(){
        //Selecciona la tabla vacía del documentoHTML
        const tableBody = document.querySelector("#activityTable tbody");
        tableBody.innerHTML = "";
    
        repository.getAllActivities().forEach(activity => {
            //Para construir las 'filas y columnas de la tabla'
            const row = document.createElement("tr");
            const titleCell = document.createElement("td");
            
            titleCell.textContent = activity.title;
            //Asigna los valores a las nuevas 'celdas'
            const descriptionCell = document.createElement("td")
            descriptionCell.textContent = activity.description;
    
            const imgCell = document.createElement("td");
            const img = document.createElement("img");
            img.src = activity.imgUrl;
            img.alt = "Imagen de actividad.";
            
            //Hace appendChild a los valores
            imgCell.appendChild(img);
            row.appendChild(titleCell);
            row.appendChild(descriptionCell);
            row.appendChild(imgCell);
    
            tableBody.appendChild(row);
            
        });
    }

