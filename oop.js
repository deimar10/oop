function Person(first, last, age, gender, interests) {
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
let person2 = new Person('sarah', 'Smith', 30, 'female', ['music', 'skiing']);

console.log(person1['age'] , person1.interests[1] , person1.bio())
console.log(person2['age'] , person2.interests[1] , person2.bio())


