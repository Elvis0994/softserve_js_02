let pass = Number(prompt('1st try: array. Please, enter N'));
function fib(n) 
  {
    let a = 0,
      b = 1;
    for (let i = 3; i <= n; i++)
    {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

let result = fib(pass);
document.write('Done with array. Result:', result)