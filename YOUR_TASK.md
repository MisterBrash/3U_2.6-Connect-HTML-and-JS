### 2.5 - Function Parameters & Return

##### ICS3 - Mr. Brash 🐿️

# 📝 Your Task:

Remember our temperature conversion functions? Let's do it one last time but _return_ the answer instead of printing it.

Reminders:

> Celsius = (Fahrenheit - 32) * 5/9  
Fahrenheit = (Celsius * 9/5) + 32

### Part 1: `to_fahrenheit(celsius)`

Create the function `to_fahrenheit(celsius)` that converts the value passed into the function into a Fahrenheit value. _Round the answer to the nearest whole degree and return it_.

> Hint: Your function should _not_ have any `console.log()` in it.

Example tests:
```JS
let f = to_fahrenheit(37);  // Should not print anything
console.log(f);             // Should print 99

f = to_fahrenheit(20);
console.log(f);             // Should print 68
```

---

### Part 2: `to_celsius(fahrenheit)`

Now do the same for converting from Fahrenheit to Celsius.

---

### Part 3: `area_circle(radius)`

Create the function `area_circle(radius)` that calculates and _returns_ the area of a circle with the given radius. _Do **not** round the result_.

### Part 4: `cylinder_volume(radius, height)`

The volume of a cylinder is pretty neat - you take the area of the circular base and you multiply by the height. **You already have a function for the area of a circle!**

Create the function `cylinder_volume(radius, height)` that calculates and _returns_ the volume of a cylinder with the given `radius` and `height`. This function _must_ use your `area_circle()` function to help with the calculation.

---

### Part 5: More Practice!

Now that you have these skills, there are so many great opportunities for your coding future!

Try writing the following functions:

- `percent(score, total)` - people like to know what they got on a test. Print a person's score, rounded to the nearest _whole percent_, to the console. Don't forget the `%` sign! Your function should _return_ the result as the pure decimal answer. For example `percent(8, 13)` prints `62%` but _returns_ 0.6153846153846154.  

- `pythagorean_theorem(a, b)` - exactly what you think. Return the length of the hypotenuse (c) given the two legs of a right triangle, `a`, and `b`. For example: `pythagorean_theorem(3, 4)` should return 5.  

- `round(value, decimals)` - **This one requires a math brain - do _not_ search for a solution, do it yourself!**  
  Rounding to the nearest whole number with `Math.round()` is useful, but what if we want the tenths, hundredths, or thousandths of a value? Create the function `round(value, decimals)` that _returns_ the `value` rounded to the requested number of `decimals`. For example: `round(Math.PI, 4)` would return 3.1416 but `round(0.65, 0)` returns 1.  


<br>
<br>

🐿️
