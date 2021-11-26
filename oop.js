/*function Person(first, last, age, gender, interests) {
    this.name = {
        first : first,
        last : last
    };
    this.age = age;
    this.gender = "gender";
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
let person2 = new Person('sarah', 'Smith', 30, 'female', ['reading', 'drinking']);

console.log(person1['age'] , person1.interests[1] , person1.bio())
console.log(person2['age'] , person2.interests[1] , person2.bio())
*/




/* let person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
};
let person2 = Object.create(person1);
person2.name;
person2.greeting();

console.log(person1.name , person1['age'])
*/

// create person class based object
let person1 = new Person('Bob');
console.log(person1)
person1.greeting()
person1.setAge(25)
console.log(person1.getAge())

// create student class based object

let student1 = new Student('Sarah', 'VS21')
console.log(student1)
student1.greeting()

