# 2.6 - Connecting HTML to JavaScript

##### ICS3 - Mr. Brash 🐿️

# 📝 Your Task:

### Part 1 - Clickable Picture
We can change the `src` of a picture using JavaScript:
```JS
document.getElementById("my_pic").src = "./images/new_picture.png";
```

- Find two pictures online and add them to your `./images` folder.
- Place one of the images on the page and give it the `id` "swap_pic".
- Create a JS function `swap()` that will change the `src` of the image to the second picture.
- Add a 'click' event listener to the image so that when it is clicked, it switches to the second picture.

>**Extra** - can you make it so that clicking on the image _again_ puts it back to the original picture?

<br>

### Part 2 - Clear the Textbox

When the user clicks the `Enter` button for the `say_hello()` function, we are greeted nicely but the user's name stays in the textbox. Can you modify the `say_hello()` function so that the textbox is emptied when the user clicks the `Enter` button?

<br>

### Part 3 - The Keydown Event

When we press a key on our keyboard, this is the `keydown` event. There is also a `keyup` event for when you lift your finger _off_ of a key.

Write the function `key_log()` which prints the current contents of the textbox to the console. Add a `keydown` event listener to the `user_input` input box on the page to call the `key_log()` function. 

>🤔 In what other scenarios will the `keydown` event be useful?

<br>

### Part 4 - The MouseEnter and MouseLeave Events

There are so many awesome [mouse events](https://www.w3schools.com/jsref/obj_mouseevent.asp) we can use! We've already seen the [click event](https://www.w3schools.com/jsref/event_onclick.asp) but now let's talk about moving our mouse into and out of an element.

On the page is a 6-sided die emoji 🎲. This has been given the `id` of "die".
1. Create a function and add the mouseenter event so that when you put your mouse cursor over this emoji it changes to another emoji ([here's a list](https://getemoji.com/), if you need one).
2. Create another function and add the mouseleave event so that when your mouse cursor leaves away from that element, it goes back to the 🎲 emoji.

> **Fun Fact:** the event listener does not need to be on the element you are changing. Try adding those `mouseenter` and `mouseleave` event listeners to the "Roll a D6" button instead.


(Another fun mouse event is [mousemove](https://www.w3schools.com/jsref/event_onmousemove.asp))

---

Play around with Event Listeners and modifying a live webpage!



<br>
<br>

🐿️
