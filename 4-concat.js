const args = process.argv.slice(2);
let firstArg = args[0];
let secondArg = args[1];

if (args.length === 0) {
  console.log("No arguments");
} else if (args.lenght === 1) {
  console.log(firstArg + " is ");
} else {
  console.log(firstArg + " is " + secondArg);
}
