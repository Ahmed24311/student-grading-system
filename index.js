const fs = require("fs");
const yargs = require("yargs");
const functionality = require('./functionality');

//NOTE Please enter terminal commands in this form "when tying to add new data" to get the desired output
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
      demandOption: true,
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
      demandOption: true,
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