function add (x, y) {
   return x + y
}
console.log(add(3,4))

function multiply (x, y){
    let answer = 0
    for (let i= 0; i < x; i++){
      answer = add(y, answer)
    }
    return answer
  }
  console.log(multiply(3,4))

  function exponent (x,y) {
      let answer = 1
      for (let i = 0; i < y; i++) {
        
          answer = multiply(x, answer)

      }
      return answer
  }
  console.log(exponent(3,4))

  function factorial(x) {
      let answer = x
     
      for (let i = (x - 1); i > 1; i--) {
          answer = multiply(answer, i)
          }
return answer
        }     

  console.log(factorial(4))

  function Fibonacci(x) {
        let n1 = 0
      let n2 = 1
      
      for (let i = 1; i < x - 1; i++) {
       answer = n1 + n2;
       n1 = n2;
       n2 = answer;
      }
      return answer
  }
  console.log(Fibonacci(8))