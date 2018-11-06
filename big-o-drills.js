
// o(1) Constant Time
//No matter what the value is, there is only ever going to be one operation performed
function isEven(value){
    if (value % 2 == 0){
      return true;
    }
    else
      return false;
  }


  //o(n^2) Polynomial time. In this case quadratic.
  //We have a nested a for loop. For each run of the outside loop, the inner loop runs to completion
  //Run time for this algorithim is n^2.
  function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//o(n) linear 
//This is linear because the run time complexity is proportionate to the input size
function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//o(n) linear
//The run time complexity is proportinate to the input size
//The larger are data set is, the longer it takes to complete the operations
function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//o(n^2) Polynomial. In this case quadratic.
//For each run of the outer loop, the inner loop runs to completion. 
//The loop inside runs n times.
//The outer loop will run the inner loop n number of times
//The run time complexity is n^2.
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//o(n) linear
// So the loop inside runs proportionately to the size of the input
function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
  
      // we're adding the first item
      // to the result list, append the
      // number 0 to results
      if (i === 1) {
        result.push(0);
      }
      // ...and if it's the second item
      // append 1
      else if (i == 2) {
        result.push(1);
      }
  
      // otherwise, sum the two previous result items, and append that value to results.
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    // once the for loop finishes
    // we return `result`.
    return result;
  }

//O(log(n)) Logarthimic Time
//This cuts the data set down each time. Although it does grow dependednt on the input size.
//While the input size can increase significantly, the run time complexity increases at a signifcantly slower
//rate than the input size. 
//Because we're dividing the data set into chunks this is characteristic of logarathmic time. 
  function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}


//o(1) Constant time
//Regardless of input size, the run time complexity does not grow.
// One arithmic operation is being performed.
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//o(n) Linear
//This is dependent on the size of the input. The for loop is directly proportionate to 
// the size of the input.
function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

//Counting Sheep
//o(1) Linear
// This run time is proportionate to the input size
function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}

//Exercise 2: Array Double
//o(1) Linear
//This run time is proportionate to the size of the input
function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}

//Exercise 3 - Reverse String
//o(1) Linear
//This run time is proportionate to the size of the input
function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}


//Exercise 4 - Triangular Number
//o(1) Linear
//This run time is proportionate to the size of the input
function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}


//Exercise 5 - String Splitter
//Worst Case- o(1) Linear because it is proportionate to the number of separators
//This is not based on string length

function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

//Exercise 6 - Binary Representation
//O(log(n)) Logarthmic
// This is taking the data set and always dividing by half at each recursion.
// As the input size grows, the run time complexity also grows but at a much lower rate
function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; //base case - at some point the divisions will lead to 0
    }
}

//Exercise 7 - Factorial
//O(n) Linear time
//This run time is proportionate to the size of the input

function factorial(n) {  
    // Base Case - when n is equal to 0, we stop the recursion
    if (n === 0) {
      return 1;
    }
    // This is our Recursive Case
    // It will run for all other conditions except when n is equal to 0
    return n * factorial(n - 1);
  }


  //Exercise 8 - Fibonacci
//o(n^2)  polynomial. In this case quadratic
//We have two operations running at the same time at each recursion
  function fibonacci(n) {
    // Base case
    if (n <= 0) {
      return 0;
    }
    // Base case
    if (n <= 2) {
      return 1;
    }	
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);	
  }

  //Exercise 9 - Anagrams
  //O(n^2) Polynomial. Quadratic
  //This grows exponetially depending on the size of the input
  function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

//Exercise 10: Animal Hierarchy
//o(n^3) Polynomial
//This function contains nested loops
//We're using filter, forEach, and recursion so we can conclude the run time complexity is o(n^3).
const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}

//Exercise 11: Organization Chart

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

//O(n^2) Polynomial Quadratic time. 
//This as a forEach loop that contains recursion inside of it. For each recursion
// call the forEach loop begings again. 
function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}


