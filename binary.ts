let numbers = [25, 65, 82, 14, 7, 2, 6, 96, 52, 43, 68, 72, 24, 36];


function binarySearch(list: number[], target: number, counter = 1) {
  list.sort((a,b) => a - b);
  console.log(`Running with list:[${list}] for target: ${target}, counter: ${counter}`);
  if(list.length <= 2){
    counter++;
    console.log("found at try #", counter);
    return
  }
  const isEven = list.length % 2 === 0;
  const index = isEven ? list.length / 2 : (( list.length + 1 ) / 2);
  if (target == list[index - 1]) {
    console.log("found at try #", counter);
    return
  } else if (target < list[index - 1]) {
    counter++;
    let newList = list.slice(0, index - 1);
    binarySearch(newList, target, counter);
  } else if (target > list[index - 1]) {
    counter++;
    let newList = list.slice(index - 1, list.length );
    binarySearch(newList, target, counter);
  }

}

// binarySearch(numbers,2);