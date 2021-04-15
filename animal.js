class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with the speed  ${this.speed}.`);
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

let animal = new Animal("Cheeta");

class Rabbit extends Animal {
    hide(){
        alert(`${this.name} hides.`);
    }
    stop(){
        // this will be used for rabbit.stop()
        //instead of stop() from class animal 
        super.stop();//call the parent stop
        this.hide();//and then call it will call our hide method

    }
}

let rabbit = new Rabbit('Beckham');
rabbit.run(5);
rabbit.hide();