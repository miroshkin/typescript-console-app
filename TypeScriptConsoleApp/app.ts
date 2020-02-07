class User {
    name: string;
    surname: string;
    age: number;
    constructor(_name: string,_surname: string, _age: number) {

        this.name = _name;
        this.age = _age;
        this.surname = _surname;
    }
}
var user: User = new User("Ivan", "Ivanov", 29);
console.log("Name: ", user.name, " Age: ", user.age);
