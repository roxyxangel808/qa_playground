
var myObject = {
   
    animal: "puppy", 
    firstName: "Shanti",
    lastName: "Y",
    age: 34

  };
  console.log(myObject.animal); 

  myObject.animal = "kitten";
  console.log(myObject.animal)
 
  console.log(
    `Person:\n\t Name: "${myObject.firstName} ${myObject.lastName}" \n\t Age: ${myObject.age}`
  );

var musicBands = ["The Beatles", "New Found Glory", "Britney Spears", "Blink-182", "Dr.Dre", 4, true];

var myTypedArray: Array<number> = [12, 654, 55, 23];

console.log(musicBands[0]);
console.log(musicBands[4]); 
console.log(musicBands[3]);
myTypedArray.push(3.14159);

myTypedArray.push(5)
console.log(myTypedArray)

musicBands.forEach((thing, i) => {

    console.log(`${i + 1}. ${thing}`);
  });
