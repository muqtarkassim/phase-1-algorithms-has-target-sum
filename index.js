function hasTargetSum(array, target) {
  // Write your algorithm here
  const newArray=[...array];
  for(let i=0;i<newArray.length;i++){
    const numberneeded=target-newArray[i];
console.log(i)
    console.log(`numberneeded ${numberneeded}`)
    for(let j=i+1;j< newArray.length;j++){
      //console.log(j)
      if(newArray[j]===numberneeded){
       // console.log('true')
       return true
      }
    }
   
  }
return false
}

//hasTargetSum([3, 8, 12, 4, 11, 7], 10)
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  add the provided array into an new array

*/


  //Add written explanation of your solution here


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
