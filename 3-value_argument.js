const args = process.argv.slice(2);

if (process.argv[2] === undefined) {
  console.log('No Argument')
} else {
  console.log(args[0])
}