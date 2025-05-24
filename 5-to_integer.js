const args = process.argv.slice(2);
let firstArg = args[0];

if (isNaN(parseInt(firstArg))){
    console.log('Not a number')
}
else{
  console.log('My number: ' + parseInt(firstArg))
}
