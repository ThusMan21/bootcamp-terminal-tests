export default function findItemsOver20 (fruits) {
    let fruitArray = [];
    for (i=0; i<fruits.length; i++) {
      const fruit = fruits[i];
      if (fruit.qty > 20) {
        console.log(fruit);
        fruitArray.push(fruit);
      }
    }
    return fruitArray;
  }