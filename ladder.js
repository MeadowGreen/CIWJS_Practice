
let ladder = {
    step: 0,
    height(){
        this.maxHeight = prompt("What is the max height?", 5);
    },
    up(){
        if(this.step < this.maxHeight){
            this.step += 1;
        } else if(this.step >= this.maxHeight){
            alert("Max height has been reached");
        };
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

ladder.height();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
alert(ladder.showStep());