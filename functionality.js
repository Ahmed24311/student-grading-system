//NOTE Please enter the command in this form so that all degrees go in the array and not get any errors
//NOTE ===> node index.js add --id=00 --name='' --degree=00 --degree=00 --degree=00

const fs = require("fs");
// Read function
const readInput = () => {
  try {
    const data = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(data);
  } catch (e) {
    // if not, add new empty aray
    return [];
  }
};
// Write function
const saveData = (data) => {
  const dataToSave = JSON.stringify(data); // To Json
  fs.writeFileSync("data.json", dataToSave); // Write to file
};

//   ************** Add new student **************

const addStudent = (id, name, degrees) => {
  // Read data
  const data = readInput();
  // Check for student id
  const inputData = data.find((el) => {
    if (!el.id) return;
    return el.id === id;
  });
  if (inputData) return console.log("Already exists!");
  // Get the degrees array and calculate it's sum
  const total = degrees.reduce((sum, deg) => +sum + +deg);
  // Add the comment
  const comment =
    total < 75 ? "Unfortionately you failed" : "Congrats you passed🎉";
  data.push({
    id,
    name,
    degrees,
    comment,
    total: total + "/150",
  });
  // Write data to file
  saveData(data);
  console.log("Data is saved");
  console.log(`Total: ${total}/150, ${comment}`);
};

//  ************** Read student data **************
const readStudent = (id) => {
  const data = readInput();
  // Check if the id exists or not, then print message accordingly
  const inputData = data.find((el) => {
    if (!el.id) return;
    return el.id == id;
  });
  console.log(inputData ? inputData : "You entered a non-existent id!");
};

//  ************** Deleting a student **************

const deleteStudent = (id) => {
  const data = readInput();
  const inputData = data.find((el) => {
    if (!el.id) return;
    return el.id == id;
  });
  if (!inputData) return console.log(`You entered a non-existent id!`);
  data.splice(data.indexOf(inputData), 1);
  saveData(data);
  console.log(`deleted`);
};

// ************** Display all students **************
const listStudents = () => {
  // Read data
  const data = readInput();
  data.forEach((el) =>
    console.log(
      `Student ${el.id},\nName: ${el.name}, Degrees: [${el.degrees}], Total: ${el.total}\n`
    )
  );
};

// ************** Updating a note **************

const updateStudent = (id, name) => {
  // Read data
  const data = readInput();
  // Mutate the element
  const newData = data.map((el) => {
    // Finding the the stuent
    if (el.id != id) return el;
    // Mutating the name, and returning new element
    el.name = name;
    return el;
  });

  saveData(newData);
  console.log(newData.find((el) => el.id == id));
};
module.exports = {
  addStudent,
  readStudent,
  deleteStudent,
  listStudents,
  updateStudent,
};
