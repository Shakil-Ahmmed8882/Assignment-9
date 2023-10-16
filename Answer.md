1/


## Answer (C)
------------------------------------------
This is because there is a typo in the code. You declared a variable called greeting, but when you assigned an empty object to it, you misspelled the variable name as greetign (with an extra 'n'). As a result, when you try to log greetign, JavaScript will throw a ReferenceError because the variable greetign was never declared.
----------------------------------------------

2/
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

## Answer (C)
--------------------------------------------
The reason for this is that JavaScript performs type coercion when you use the + operator with different data types. In the sum function, a is a number (1), and b is a string ("2"). JavaScript converts the number 1 to a string and then concatenates it with the string "2", resulting in the string "12". Therefore, the expression sum(1, "2") returns the string "12".
--------------------------------------------


3/ Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
## Answer (A)
-------------------------------------------
The reason is that when you assign the info.favoriteFood property, it only changes the value of that property within the info object. It does not modify the original food array. The food array retains its original values because we didn't directly modify the array itself.
-------------------------------------------


4/ Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

##Answer
-------------------------------------------
The reason for this choice is that the sayHi function expects an argument name, which is used in the template string. When you call sayHi() without providing an argument, name is undefined. Therefore, the function returns a string where ${name} is replaced with the value of undefined, resulting in "Hi there, undefined." 
-------------------------------------------

5/ Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
##Answer
------------------------------------------
I chose the answer "C: 3" because the code uses the forEach method to iterate through the nums array and checks if each element is truthy (not equal to 0). For the elements 1, 2, and 3, which are all truthy, the count variable is incremented by 1 for each of them.
-----------------------------------------