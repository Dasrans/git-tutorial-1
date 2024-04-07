<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>arrays and loops Version 11</title>
      <style>
    

      </style>
    </head>
    <body>
      
      <script>
        /*
     const myArray = [10, 20, 30];
     console.log(myArray);
     
     myArray[0]
     myArray[0] = 99;
     
     [1, 'goodbye', false, { name: 'socks', 'pants'}, [1, 2]]     
     
     myArray.push(100);
     console.log(myArray);

     myArray.splice(0, 1);
     console.log(myArray);
     */
        /*
     let i = 1;

     while (i <= 5)
      {console.log(i);
      i = i + 1;
     }    
     */ 
     /*
     const todoList = [ 'make dinner', 'wash dishes', 'walk dogs'

     ]
     
    ;

for (let index = 0; index <= todoList.length - 1; index++)
     {
      const value = todoList[index];
      console.log(value);

     }
     */
/*
     const nums = [1, 1, 3];
     let total = 0;
     for (let i = 0; i < nums.length; i++) {
      const num = nums [i];
      total += num;
     }
     console.log(total);
 */
     function doubleArray(nums) {
      const numsDoubled = [];
     

     for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num ===0) {
        return numsDoubled;
      }
      numsDoubled.push(num * 2);
    } 
    return numsDoubled;
    }
    console.log(doubleArray([1, 1, 3]));
    console.log(doubleArray([2, 2, 5]));
      </script>
    </body>
  </html>
  
  
 

</html>





 




