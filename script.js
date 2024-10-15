/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Print all employees with the profession of developer using map
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item.name);
    }
  });
}

function PrintDeveloperbyForEach() {
  // Print all employees with the profession of developer using forEach
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item.name);
    }
  });
}

function addData() {
  // Create another employee object and append it to the existing array
  let newPerson = { id: 4, name: "Susan", age: "20", profession: "intern" };
  // Check if an object with the same id already exists
  if (!arr.some((person) => person.id === newPerson.id)) {
    arr.push(newPerson);
    console.log(arr);
  } else {
    console.log("Person with this ID already exists");
  }
}

function removeAdmin() {
  // Remove the object where the profession is admin
  arr = arr.filter((item) => item.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  // Create another array with 3 objects and concatenate
  let arr2 = [
    { id: 7, name: "Frank", age: "40", profession: "engineer" },
    { id: 8, name: "Grace", age: "22", profession: "analyst" },
    { id: 9, name: "Henry", age: "27", profession: "scientist" },
  ];
  let com = arr.concat(arr2);
  console.log(com);
}
