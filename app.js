console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

 class Person {
    constructor(name, pets, residenece, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residenece = residenece;
        this.hobbies = hobbies;
    }
    info() {
    }
    soundOff() {
    }
    addHobby(hobby) {
        this.hobbies.push(hobby)
    }
    removeHobby(hobbyRm) {
        let foundEl = this.hobbies.indexOf(hobbyRm)
        this.hobbies.splice(foundEl, 1)
    }
    removeHobbyFilt(hobbyRmFi) {
        this.hobbies = this.hobbies.filter((element)=>{
            return element != hobbyRmFi;
        })
    }
    greeting() {
        console.log("Hello fellow person!")
    }
 }
 // exercise 2 section
 
 class Coder extends Person {
     constructor(name, pets, residenece, hobbies, occupation) {
         super(name, pets, residenece, hobbies);
         this.occupation = occupation
     }
     greeting() {
         console.log(`what up I'm ${this.name} and I am a ${this.occupation}`)
     }
 }

 
 const ross = new Person("Ross", 2, "Birmingham", ["kayak fishing", "solving code", "looking cool"]);
 const hayden = new Coder("Hayden", 1, "Birmingham", ["video games", "working out", "guitar"], "SoftWare Engineer")
 console.log(hayden)
 hayden.greeting();
//  ross.addHobby("lure making");
//  ross.removeHobby();
ross.greeting();
//  console.log(ross);


 class Calculator {
     constructor() {
         this.result = 0
     }
     add(a,b) {
     this.result = a + b;
     return this.result;
     }
     substract(a,b) {
         this.result = a - b;
         return this.result;
     }
     multiply(a,b) {
         this.result = a * b;
         return this.result;
     }
     divide(a,b) {
         this.result = a / b;
         return this.result;
     }
     displayResult() {
         console.log(this.result)
     }
 }
 
 let calc = new Calculator();

 calc.add(2,5)
 calc.displayResult()
 calc.substract(123,23)
 calc.displayResult()
 calc.multiply(20, 40)
 calc.displayResult()
 calc.divide(10, 45)
 calc.displayResult()