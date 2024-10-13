/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr1 = [
  { id: 6, name: "ren", age: "21", profession: "admin" },
  { id: 4, name: "susan", age: "22", profession: "intern" },
  {id: 5, name: "yan", age: "23", profession: "intern" }
];

function PrintDeveloperbyMap() {
  arr.map(person => {
    if(person.profession === 'developer'){
      console.log(person);
    }
  });
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(person=>{
    if(person.profession=="developer"){
      console.log(person)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr)
}

function removeAdmin() {
  let x = arr.filter(person => person.profession !== 'admin')
  console.log(x)
}

function concatenateArray() {
  let newArr = arr.concat(arr1);

  // Logging the merged array
  console.log(newArr);

}
