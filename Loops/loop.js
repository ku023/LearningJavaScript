// printMasaiSchool

function printMasaiSchool(num) {
    // Write code here
    for(let i=0; i<num; i++){
      console.log("Masai School")
    }
  
}

// loop1toN

function loop1toN(num) {
    // Write code here
    for(let i=1; i<=num; i++){
      console.log(i)
    }
    
}
// countingJourney

function countingJourney(N){
    //write your code here
        let result =''
    for(let i=N; i>=1; i--){
       result+=i+' '
    
    }
      console.log(result)
  }

// multiplicationTableN
  function multiplicationTableN(num) {
    // Write code here
    for(let i=1; i<=10; i++){
      console.log(num*i)
    }
    
}
// oddNumberAdventure

function oddNumberAdventure(N){
    //write your code here
    let result ='';
    for(let i=1; i<=N; i++){
      if(i%2!=0){
        result+=i+' '
       
      }
    }
     console.log(result)
  }
// fizzBuzz
  function fizzBuzz(num){
    //write your code here
    for(let i=1; i<=num; i++){
      if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
      }else if(i%3===0){
        console.log("Fizz")
      }else if(i%5===0){
        console.log("Buzz")
      }else{
        console.log(i)
      }
    }
  }
// evenSumBelowN
  function evenSumBelowN(num) {
    // Write code here
  let sum =0;
  for(let i=1; i<=num; i++){
    if(i%2===0){
      sum+=i;
    }
  }
  console.log(sum)
}
// oddSumBelowN

function oddSumBelowN(num) {
    // Write code here
    let sum =0;
    for(let i=0; i<=num; i++){
      if(i%2!=0){
        sum+=i;
      }
    }
    console.log(sum)
}

// modeof10
function modeof10(num) {
    // Write code here
    for(let i=1; i<=num; i++){
      console.log(i%10)
    }
}
// countingEvenNumbers

function countingEvenNumbers(N){
    //write your code here
    let count =0;
    for(let i=1; i<=N; i++){
      if(i%2===0){
        count++
      }
    }
    console.log(count)
  }
// arithmeticProgression

  function arithmeticProgression(A,D,N){
    //write your code here
    let result =''
    for(let i=0; i<N; i++){
      result+=A+i*D+' '
      
    }
    console.log(result)
  }

// seriesSum
  function seriesSum(N){
    //write your code here
    let sum =0;
    for(let i=1; i<=N;i++){
      sum+=2*i-1
      
    }
    console.log(sum)
  }

// leapYear
  function leapYear(M,N){
    //write your code here
    let result =""
    for(let i=M; i<=N; i++){
      if((i%4===0&&i%100!=0)||i%400===0){
        result+=i+' '
      }
    }
    console.log(result)
  }