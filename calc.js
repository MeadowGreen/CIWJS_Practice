// let calculator = {
//     read(){ 
//     this.x = +prompt("What is x?", 0); 
//     this.y = +prompt("What is y?", 0); 
//     } ,
//     sum(){
//         return this.x + this.y;
//     },
//     mul(){
//         return this.x * this.y;
//     }
// };

// calculator.read();

// alert(calculator.sum());

// alert(calculator.mul());

let ladder = {
    step: 0,
    up(){
        this.step += 1;
    },
    down(){
        if(this.step == 0){
            return "Not Possible";
        } else{
            this.step -= 1;
        };
    },
    showStep(){
        return this.step;
    }
};

ladder.up();
ladder.up();
ladder.down();
alert(ladder.showStep());