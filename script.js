/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

   arr.map(key=>{
    if(key.profession ==='developer'){
      console.log(`Id: ${key.id}, Name: ${key.name}, Age: ${key.age}, Profession: ${key.profession}`);
    }
  });
}

function PrintDeveloperbyForEach() {

  arr.forEach(key => {
    if(key.profession ==='developer'){
      console.log(`Id: ${key.id}, Name: ${key.name}, Age: ${key.age}, Profession: ${key.profession}`);
    }
  });
  }
  

function addData() {

  let employee = {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(employee);
  arr.map(key =>  console.log(`Id: ${key.id}, Name: ${key.name}, Age: ${key.age}, Profession: ${key.profession}`));
}

function removeAdmin() {
 arr = arr.filter(key => key.profession !== 'admin');
  arr.map(key =>  console.log(`Id: ${key.id}, Name: ${key.name}, Age: ${key.age}, Profession: ${key.profession}`));


}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "Ram", age: "22", profession: "designer" },
    { id: 6, name: "Shayam", age: "25", profession: "manager" },
    { id: 7, name: "Mohan", age: "30", profession: "developer" }
  ];
  arr = arr.concat(newArray);
  arr.map(key =>  console.log(`Id: ${key.id}, Name: ${key.name}, Age: ${key.age}, Profession: ${key.profession}`));

}
