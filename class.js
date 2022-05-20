class student
{
  constructor(name,roll,age){
      this.name = name;
      this.roll = roll;
      this.age = age;
  }
  
  getDetails(){
      return `name:${this.name}\nroll:${this.roll}\nage:${this.age}\nmarks:${this.marks}`
  }
  setMarks(x){
     this.marks = x;
  }
}

const s1 = new student('vivek',0562,19);
console.log(s1.getDetails());
s1.setMarks(97);
console.log(s1.marks);

class person
{
    constructor(name,age)
    {
        this.name = name,
        this.age = age
    }

    getName()
    {
        return `name: ${this.name}`;
    }

    getAge()
    {
        return  `age: ${this.age}`;
    }
}

class teacher extends person
{
    constructor(name,age,subject,post)
    {
        super(name,age);
        this.subject = subject;
        this.post = post;
    }
    getSubject()
    {
        return this.subject;
    }
    getPost()
    {
        return this.post;
    }
};

const t1 = new teacher('sanjay',35,'python','HOD');
console.log(t1.getName());