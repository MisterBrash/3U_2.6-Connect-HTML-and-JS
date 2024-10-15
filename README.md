# 2.5 - Function Parameters and Return

##### ICS3 - Mr. Brash 🐿️

<img src="./images/params_and_return.png" width="280px"  style="display:block;margin:auto;filter:drop-shadow(3px 3px 4px grey)">  

<br>

**If you missed the live demonstration in class, read below. Otherwise you can go straight to [your task](./YOUR_TASK.md).**

- Don't like reading? [Here's a video on _Parameters_](https://youtu.be/hI-04Ot4vZY) and [here's a video on _Return_](https://youtu.be/qV4PHIp-PNs)


## Part 1 - Parameters

**Ever notice that `Math.floor(x)` takes in a number but `Math.random()` doesn't?**  
And `console.log()` can take _many_ values, separated by commas. 

Those values inside the brackets are called _**parameters**_. They are the _inputs_ to a function and allow us to _pass_ values around in our code. Here's an example of a **custom function with parameters**:
```JS
// Raise a base to an exponent and print the result
function exponent(base, exp) {
    let answer = base**exp;
    console.log(answer);    // Could also be done without the variable
}
```

☝🏻 The parameters to that function are `base` and `exp`. When we _call_ the `exponent` function from now on, we have to give values in those locations. The values we give it are called _arguments_ but just think of them as _inputs_ or _parameters_.
```JS
exponent(5, 2);   // prints 25
exponent(10, 3);  // prints 1000

// What will this print:
exponent()

// Or this:
exponent(6)
```

With _parameters_ we can start customizing our functions to do exactly what we want:
```JS
rollDice(4, 6);    // Roll four 6-sided dice for a total value

randInt(-12, 12);  // Get a random whole number from -12 to 12
```

### 💻 Your Turn

Go to the [main.js code file](./main.js) and create a new custom function called `add3(num1, num2, num3)` that adds the values of the variables `num1`, `num2`, and `num3` - printing the result. Go to your dev console and run the function several times to test it.

## Part 2 - Return

**Printing a value to the console is useful for the developer but how can we _use_ that value for more work?**

The `Math.sqrt(x)` function _gives back_ the square root of a number. It does not print it to the console, we have to do that ourselves:
```JS
let s = Math.sqrt(16);
console.log(s)
```

🤔 How is it _giving back_ the number 4 so we can store it in a variable?

The `exponent` function we made above is a little useless. What if we wanted to use it for the Pythagorean Theorem? Right now, we can't.

### 💻 Try it

Go to your main.js code file and paste this in:
```JS
function square(value) {
    let answer = value**2;
}

let x = square(5);   // 5 squared is 25
console.log(x);
```

Preview your index.html file and check the console - do you see the answer to `square(5)` anywhere?

**In order to provide an answer (output) from your function, we use the `return` keyword:**
```JS
function square(value) {
    let answer = value**2;
    return answer;         // Stop the function and give back the value in 'answer'
}
```

☝🏻 **Important notes:**
- The `return` keyword **stops** the function, so if you have code after it, it won't run. 
- You don't have to return a value, you can use the `return` statement to exit the function.

```JS
function useless(value) {
    let answer = value**2;
    return;                // Return 'undefined'
    console.log(answer);   // This line will NEVER run
}
```

### 📝 An example of a function that uses Parameters _and_ a Return:
```JS
// Return a random value from 'min' to 'max', inclusive
function randInt(min, max) {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}
```

---

**Now go check out [your task](./YOUR_TASK.md).**

<br>
<br>
🐿️
