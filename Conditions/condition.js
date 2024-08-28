// Check even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  console.log(checkEvenOdd(7));
  
  //factorial calculator
  
  function checkFactorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
  console.log(checkFactorial(5));
  
  //Print multiplication table
  function printMultiplicationTable(num) {
    let table = 1;
    for (let i = 1; i <= 10; i++) {
      table = num * i;
      console.log(`${num} X ${i} = ${table}`);
    }
  }
  console.log(printMultiplicationTable(3));
  
  // count vowels
  function countVowels(str) {
    str = str.split("");
    let count = 0;
    for (let s of str) {
      if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels("Hello World"));
  
  //Print the largest number
  function largestNumber(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(largestNumber(10, 25, 15));
  
  //Check Prime number
  function checkPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return "Not Prime";
      } else {
        return "Prime";
      }
    }
  }
  console.log(checkPrime(29));
  
  //Even number in the range
  function evenNumber(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(evenNumber(1, 10));
  
  //Reverse the number
  function reverseNumber(num) {
    num = num + "";
    num = num.split("");
    let finalStr = "";
    for (let i = num.lenght - 1; i >= 0; i--) {
      finalStr += num[i];
    }
    return finalStr;
  }
  console.log(reverseNumber(12345));
  
  //SUm of digit
  function printSumOfDigit(num) {
    let sum = 0;
    let numStr = num.toString();
    for (let str of numStr) {
      sum += parseInt(str, 10);
    }
    return sum;
  }
  console.log(printSumOfDigit(1234));
  
  // Print Triangel
  function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
      console.log("*".repeat(i));
    }
  }
  console.log(printTriangle(5));
  