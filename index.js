const fs = require("fs");
const yargs = require("yargs");
const functionality = require('./functionality');

//NOTE Please enter the command in this form so that all degrees go in the array and not get any errors
//NOTE ===> node index.js add --id=00 --name='' --degree=00 --degree=00 --degree=00 

yargs.command({ 
  command: "add",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
    name: {
      type: "string",
      demandOption: true,
    },
    degree: {
      type: "array",
      demandOption: true,
    },
    comment: {
      type: 'string',
    },
  },
  handler: () => {
    functionality.addStudent(yargs.argv.id, yargs.argv.name, yargs.argv.degree);
  },
});

yargs.command({
  command: "read",
  builder: {
    id: {
      type: "number",
      demandOption: true, //required
    },
  },
  handler: () => {
    functionality.readStudent(yargs.argv.id);
  },
});

yargs.command({
  command: "delete",
  builder: {
    id: {
      type: 'number',
      demandOption: true, //required
    },
  },
  handler: () => {
    functionality.deleteStudent(yargs.argv.id);
  },
});

yargs.command({
  command: "list",
  handler: () => {
    functionality.listStudents();
  },
});

yargs.command({
  command: "update",
  builder: {
    id: {
      type: 'number',
      demandOption: true,
    },
    name: {
      type: "string",
      demandOption: true,
    },
  },
  handler: () => {
    functionality.updateStudent(yargs.argv.id, yargs.argv.name);
  },
});
yargs.parse();