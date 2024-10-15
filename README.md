# 2.6 - Connecting HTML to JavaScript

##### ICS3 - Mr. Brash 🐿️

#### The time has come! We are going to connect the front-end (HTML) to the back-end (JS)!

**If you missed the live demonstration in class, read below. Otherwise you can go straight to [your task](./YOUR_TASK.md).**

## 🔍 Getting HTML Elements inside JavaScript

**Unique IDs:** All elements that you will be controlling with JavaSscript _must_ have a unique identifier.

```HTML
index.html

<div id="score">100</div>

<button id="quit_button">Quit</button>

<img id="options" src="./images/options.png">
```

**The `document` object** To read or modify elements on a page, we use the JavaScript `document` object, similar to how we used the `console` object for printing or `Math` object for mathing.

```JS
main.js

let score_div = document.getElementById("score");

// Modify the score
score_div.textContent = 150;
```

> ☝ It's important to understand that `document.getElementById()` returns the actual _Node_ or _Element_ on the page not just the text or value of that object.


### 💻 Your Turn to Try!

The [index.html](./index.html) page has a `<div>` element called "try_me". Go to the dev console try getting or changing the text inside the div:
```JS
let my_div = document.getElementById("try_me");

console.log(my_div.textContent);

my_div.textContent = "Hi mom!";
```


## 👂 Event Listeners

When a user interacts with a webpage (click, mouse move, key press, etc) this creates _events_. You can find [the entire list of events online](https://www.w3schools.com/jsref/dom_obj_event.asp).

In order to have the event trigger some code (maybe the user clicked on an image), we tell the HTML document to **listen** for that specific **event**. This is called **setting up an event listener**.

### There are two ways to listen for an event:

**1. In HTML (the easy method):**
```HTML
Use the "on" event trigger:
<img id="options" src="./images/options.png" onclick="load_options()">
```

This approach _assumes_ that the JavaScript is ready and loaded properly. It causes us to put JS code in two places - the document _and_ the JS file. Similar to how we separate out the CSS, we would rather _not_ use the above method.

**2. In JavaScript (the preferred method):**
```JS
// Setup an Event Listener
document.getElementById("options").addEventListener("click", load_options);
```

---

**Now go check out [your task](./YOUR_TASK.md).**

<br>
<br>
🐿️
