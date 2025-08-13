 

let arr = ["cat",11, "dog", 7, "puppy"];

let strings = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        strings.push(arr[i]);
    }}
    console.log(strings);

    //--------- задача 2-------//
    let arrDouble = [ "cat",11, ["cats", 111, "dogs"], "puppy", 77, ["puppies", 3, 33, 8, "hamster"]];

let stringsPets = [];

for (let i = 0; i < arrDouble.length; i++) {
    if (typeof arrDouble[i] === "string") {
        stringsPets.push(arrDouble[i]);
    }
       else if (Array.isArray(arrDouble[i])) {
        for (let y = 0; y < arrDouble[i].length; y++) {
            if (typeof arrDouble[i][y] === "string") {
                stringsPets.push(arrDouble[i][y]);
            }
        }
    }
}
console.log(stringsPets);

 