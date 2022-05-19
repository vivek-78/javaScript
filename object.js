function createStudent(name,roll_no,email){
    return {
        name,
        roll_no,
        email
    }
}

const s1 = new createStudent('vivek',62,'vivek@gmail.com');
console.log(s1);
function Student(name, age, email){ //Constructor
    this.name = name
    this.age = age
    this.email = email
}

// const  Student = () => {
//     this.name = name
//     this.age = age
//     this.email = email
// }

// FIve students
const vivek = new Student("vivek", 22, "vivke@gmail.com");
console.log(vivek);

