class Student extends  Person {
    constructor(name, group) {
        super(name);
        this.group = group
    }
    greeting(){
        if (this.group === undefined){
            super.greeting();
        } else {
          console.log('Hi, I am ' + this.name + ', I am from ' + this.group)
        }
    }
}