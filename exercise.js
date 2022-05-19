//exercise link:https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php#EDITOR
//2
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

delete student.rollno;
console.log(student);

//3 
var student2 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

function objectLength(obj)
{
    let size = 0;
    for(i in obj){
      size++;
    }
    return size;
}

console.log(objectLength(student2));

//4
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    library.map((x)=>{ console.log(x.author,x.title,x.readingStatus)});

    //5
    function cylinder(radius,height)
    {
      this.radius = radius
      this.height = height
      this.volume = ()=>
      {
          console.log(height*Math.PI*radius*radius.toFixed(4));
      }
    }

    cylinder1 = new cylinder(7,2);
    cylinder1.volume();

//6
function bubbleSort(x){
  for(i=0;i<=x.length;i++)
  {
      if(x[i] >= x[i+1]){
          temp = x[i];
          x[i] = x[i+1];
          x[i+1] = temp;
      }
  }

  return x;
}

x = [2,4,16.4,8,7];
a = bubbleSort(x);
console.log(a);

//7
 function circle(radius){
     this.radius = radius
     this.perimeter = ()=>{
         return 2*Math.PI*radius;
     }
 }

 c1 = new circle(3);
 console.log(c1.perimeter());

 //8
 function getTime()
 {
     this.h = new Date().getHours();
     this.s = new Date().getSeconds();
     this.m = new Date().getMinutes();
     this.currentTime = ()=>{
         setInterval(()=>{
             if(this.s == 59){
                 this.s = 00;
                 this.m++;
             }
             else if(this.m == 60){
                 m = 0;
                 this.h++;
             }
             else if(this.h == 13){
                this.h = 1;
            }
             console.log(`${this.h}:${this.m}:${this.s}`);
             this.s++;
         },1000)
     }
 }

 t1 = new getTime();
//  t1.currentTime();

 //15
 const students = {
     name:'vivek',
     rollno:0562,
     email:'akepoguvivek14@gmail.com'
 }
const details = [];
 for (i in students){
    details.push([i,students[i]]);
 }

 console.log(details);

 //16
 const sample = {
    name:'vivek',
    age:18,
    email:'akepoguvivek14@gmail.com'
}
const sample2 = {}
for(i in sample){
    value = sample[i];
    sample2[value] = i
}

console.log(sample2);


