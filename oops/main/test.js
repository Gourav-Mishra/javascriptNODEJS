function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}

var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather)

console.log("my father is " + myFather.name())

