let statement = parseInt(process.argv.slice(2)[0]);

if (isNaN(statement)) {
  console.log("Missing number of occurences");
} else {
  for (let i = 0; i < statement; i++) {
    console.log("C is fun");
  }
}
