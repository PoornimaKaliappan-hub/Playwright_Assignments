function odd_even(input) {
  let number = parseInt(input);  

  for (let i = 2; i <= 25; i++)
     {
    if (i % 2 !== 0)
         {
      console.log('The number is odd:', i);
    } 
    
    else 
        {
      console.log('The number is even:', i);
    }
  }
}

odd_even();