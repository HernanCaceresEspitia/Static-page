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

const repository = new Repository();

console.log(repository);

repository.createActivity('Estiudiar', 'Crear hábitos de estudio bien organizados', 'https://imagen.png');
repository.createActivity('Jugar', 'Divertirse con amigos jugando Halo Online', 'https://Halo.png');
repository.deleteActivity();

console.log(repository.getAllActivities());
console.log(repository.getAllActivities());