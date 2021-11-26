class Person {
    // Constructor
    // f-on for object creation
    constructor(name) {
        this.name = name;
        this.age;
    }
    // class function
    greeting(){
        console.log('Hi, I am ' + this.name + '!')
    }

    // setter and getter
    setAge(age) {
        this.age = age;
}
getAge(){
        return this.age;
}
}
