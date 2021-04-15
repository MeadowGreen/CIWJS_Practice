function Student(fullName, ID, gradeLevel, grade){ 
    this.fullName = fullName;
    this.ID = ID;
    this.gradeLevel = gradeLevel;
    this.grade = grade;
    this.admin = "Student";
    this.graduate = function(){
        return this.gradeLevel ++;
    };
    this.whiteList = function(){
        return this.admin = true;
    };
    this.setGrade = function(value){
        return this.grade = value;
    };
};
let tommy = new Student("Tommy", 12345, 12, 96);


class Rectangle {
    constructor(width, length){
        this.width = width;
        this.length = length;
    };
    get area() {
        return this.width * this.length;
    }
}
const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);
const area = [rect1.area, rect2.area, rect3.area];


class Circle {  
    set radius(radius){
        this._radius = radius;
        this.area = 3.14 * Math.pow(radius, 2);
        this.circumference = 2*(3.14)*radius;
  }
}
const circ = new Circle(); 