class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
      }
}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
//alert(myCar1.age())