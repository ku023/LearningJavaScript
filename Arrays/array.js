// printArray

function printArray(N,arr){
    //write code here
    for(let i=0; i<N; i++){
      console.log(arr[i])
    }
}
// reverseArrayTraversal

function reverseArrayTraversal(n, arr){
    //write code here
    for(let i=n-1; i>-1; i--){
      console.log(arr[i])
    }
}
// maximumInArray

function maximumInArray(N,arr){
    //write code here
    let maxNum = -1;
    for(let i=0; i<N; i++){
      if(arr[i]>maxNum){
        maxNum = arr[i]
      }
    }
    console.log(maxNum)
}
// evenArray

function evenArray(n, arr){
    //write code here
    for(let i=0; i<n; i++){
      if(arr[i]%2==0){
        console.log(arr[i])
      }
    }
}

// oddArray
function oddArray(n, arr){
    //write code here
    for(let i=0;i<n; i++){
      if(arr[i]%2!=0){
        console.log(arr[i])
      }
    }
}


// averageOfAll
function averageOfAll(n, arr){
    //write code here
    let sum =0;
    for(let i=0; i<n; i++){
      sum+=arr[i]
    }

    console.log(Math.ceil(sum/n))
}
// oddsOfOdds
function oddsOfOdds(n,A){
    //write your code here
    let count =0;
    for(let i=0; i<n; i++){
      if(A[i]%2!=0){
        count+=A[i]
      }
    }
    if(count%2!=0){
      console.log("Yes")
    }else{
      console.log("No")
    }
  }
// niceArray

  function niceArray(N, array, K) {
    //write code here
    for(let i=0;i<N; i++){
      if(array[i]%2===0&&array[i]>K){
        console.log("Nice Array")
        break;
        
      }else{
        console.log("Bad Array");
        
      }
    }
    
    
  }
// smallerThanLargest

  function smallerThanLargest(N,arr){
    //write your code here
    let finalArr =''
    let maxNum = Math.max(...arr)
    for(let i=0; i<N; i++){
      if(arr[i]<maxNum){
       finalArr+=-1 +' '
      }else{
        finalArr+=arr[i]+' '
      }
    }
    console.log(finalArr)
  }

// newYorkSkylines
  function newYorkSkylines(N,arr){
    //write your code here
    for(let i=0; i<N; i++){
      if(arr[i])
    }
  }

// threeMaxThreeMin
  function threeMaxThreeMin(N,arr){
    //write code here
    if(N<6){
      console.lo
    }
}
