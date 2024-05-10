/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

  let developer = arr.filter((key) =>  key.profession==="developer");
  developer.map(key => console.log(key));
}

function PrintDeveloperbyForEach() {

  let developer = arr.filter((key) =>  key.profession==="developer");
  developer.forEach(key => console.log(key));
  
}

function addData() {

  let employee = {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(employee);
  console.log(employee);
}

function removeAdmin() {
  let developer = arr.filter(key => key.profession != "admin");
  console.log(developer);

}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "Ram", age: "22", profession: "designer" },
    { id: 6, name: "Shayam", age: "25", profession: "manager" },
    { id: 7, name: "Mohan", age: "30", profession: "developer" }
  ];
  const concatArray = arr.concat(newArray);
  console.log(concatArray);
}
