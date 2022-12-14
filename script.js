//Завдання 1
console.log('Завдання 1');
let obj1={
  color:'red',
  size:'small',
}
console.log(obj1);

const obj2=new Object();
obj2.name='Oleh';
obj2.surname='Korol';
console.log(obj2);


//Завдання 2
console.log('Завдання 2');
const newUserData={
  name:'oleh',
  age:25,
  "new proffesion": 'programmer',
  }
  console.log(newUserData["new proffesion"]);


  //Завдання 3
  const object={
    name:'oleh',
    age:25,
    hobby:'reading books',
    }
    console.log('Завдання 3');
    let entries=Object.entries(object);
    entries.map(([index,item])=>console.log(index+' : '+item));
    

;
 //Завдання 4
 console.log('Завдання 4');
 const infoAboutYou={
  hobby: 'learning something new'
 }

infoAboutYou.name='kseniia';
infoAboutYou.age='20';
infoAboutYou.prof='programmer';
infoAboutYou.hobby='reading books';
infoAboutYou.newInfo='I like coffe'
console.log(infoAboutYou);
delete infoAboutYou.newInfo;
console.log(infoAboutYou);


//Завдання 5
console.log('Завдання 5');
const userData={
        name:'oleh',
        age:25,
      }
  let copyUserData={...userData}; //використ спред оператор
copyUserData.age=20;
copyUserData.name='ann'
  console.log(userData);
console.log(copyUserData);


  //Завдання 6
function toArray(){
let obj6={
  age:1,
  male:true,
  sport: 'football',
}
console.log('Завдання 6');
console.log(obj6);
arr=Object.entries(obj6);
console.log(arr);
}
toArray();



// Завдання 7
console.log('Завдання 7');
const array = ['orange','pineapple', 'orange', 'apple', 'pineapple', 'pineapple']
array.sort();

let obj7={} 
let count=1;

//добавлення значень в об'єкт  фрукт: кількість повторень
for (let i = 0; i < array.length; i++) {
  if (array[i]==array[i+1]) count++; else
  {obj7[array[i]]=count;
  count=1;
  }
}
// перетворення об'єкта в масив
let m=Object.entries(obj7);

//відсортування за спаданням
function sortArr(b,a){
     if (a[1] < b[1]){
        return -1;
     }else if (a[1] > b[1]) {
        return  1;
     }else{
        if (a[0] < b[0]) {
           return -1; 
        }
        else if (a[0] > b[0]) {
           return 1;
        } 
        else {
           return 0;
        }
     }
}

m.sort(sortArr);
let endArray=[];
for (let i =0; i<m.length; i++) {
 endArray.push(m[i][0]);

}
console.log(endArray);