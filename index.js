const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//map has an array and a condition. It will pass that array and print to the new array if the condition is passed. 
const titleCased = () => {
  return tutorials.map(string =>{
    let arrayOfWords = string.split(' ');
    const capatilizeWords = arrayOfWords.map(word=>{
      let x=word[0].toUpperCase()
      let y=word.slice(1)
      return x+y;
    })
    return capatilizeWords.join(' ')
        // console.log(capatilizeWords)
  })
}
titleCased()
  // for (const letter of array){
  //   letter[0]=letter[0].toUpperCase();
  //   //how do I parse through each letter? Another loop?
  //   if(array[letter]===''){
  //       return array[letter+1].toUpperCase();
  //     }
  // }

//   const words = str.split(' ');
// console.log(words[3]);
