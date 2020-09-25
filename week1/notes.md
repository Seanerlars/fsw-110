# Week 1 Lecture - FSW110

Learnign goals for weeks 1 & 2 => 

## Agenda

    1) Introduction
    2) Problem Solving Process
    3) How To Ask a "Good" Question
    4) JS in the Browser
    5) Chrome Dev Tools
    6) This Window
    7) Intro to The DOM
    8) Intro to Errors
    9) Debugging

### 2. Problem Solving Process

Starting and maintaining a good problem solving process is a **vital** skill as a programmer. This is especially important for students and soon to be junior level devs.

The key here is to find something that works for you and stick to it no matter what. As the idium goes, "3 hours of planning can save you 3 days of headaches."

#### Example) The 20 min rule

Conceptually we never want to be stuck on a given problem for more than 20 minutes. Let's take a look at that practically.

1) Given any problem or task the first step will always be to map out your direction, idea, data strucure & flow, components, local & global state, folder structure, required modules, ...etc. This can be quick but is vital to our process. Should be done with psedo code and some form or drawings or wireframing.

2) Code out the scaffold of your project and start working on your tasks, constantly testing or reffering to the unit tests provided to you. Important to do this as you develop (Test Driven Development) not once you complete hours of coding.

3) When stuck try different solutions for no more than 20 mins in your IDE. DO NOT use destructive code — meaning comment out old code not deleting it in lie of copy pasting new code from the internet. Creating this breadcrumb of ideas 99% of the time will lead you to your answer before moving forward.  _show example_

4) Take a break! This can mean any number of things I usually suggest to go work on other code. Something that is "easy" or "easily" completed in your project. Often times writing sucessfull code can get your brain flowing again. Or go for a walk, do some pushups, find your peace, take the dog out — whatever works for you.

5) Try again for 20 minutes. You should not have went through stack overflow or anythign yet if you are goign to use outside materials it should be from your notes or the **documentation** for whatever you are using. I know often your answer can be found easily on SO but at your level I think it will help you immensely to try and figure it out without that help. Leading to a stronger knwledge base will make your interview process easier and ultimately add more value to the first company you go to work for.

6) Leave comments **everywhere**. If you are not, start immediately and do not stop. This is important for your own sanity but also good practice for when you join a team. Think of facebooks codebase and 100,000 some developers globally. Imagine looking at some code and trying to figure out a bug or what the problem is with no test files or comments. Write comments everywere. Full stop. This will also differenite your code from other juniors as you move into the interview process.

7) If you can not figure it out yet now head online in this order — documentation, blogs/vids/articles, stack overflow. When using google for these look for **recent** posts.

8) If you are still stuck you need to ask somebody for help. Utilize your networks. Start thinking about the fact you will not have this BU network soon and begin thinking about how to create your own moving forward. Twitter, dischords, slack channels, meetups.

### 3. How To Ask a "Good" Question

Asking a good question is not only for yourself but helps the person helping you quickly and efficently figure out what in the hell is going on in your jumbled mess of a project and how to help you through it. At first this will be your support system at BU, next most likely stack overflow, and lastly your mentor or senior level devs. The very first thing your senior dev will ask you will be did you google it.

#### Contents of a "good" question

1) Code snippets of every file involved. If full stack MERN this could be 5-10 ... all labeled on the top with a comment of the name of the file. Including the commented out code of your "tries."

2) A description of the problem you are trying to solve, or what you are tryign to accomplish. Think — how do I do x ..... tell us what x is.

3) What you specifically have done to try and solve this problem.

4) What error you are getting and any associated screenshot of that error.

### 4 & 5. JS in The Browser & Dev Tools

For mac users:

    command + option + j

### 5. The Document Object

### 6. Intro to The DOM

The DOM (Document Object Model) is a object that represents the HTML and CSS of a web page. The DOM allows us to use JavaScript to interface with what the user sees.

There are a few ways to select elements from the DOM.

    document.getElementById()

    document.getElementsByClassName()

    document.querySelector()

Notice the "s" on elements in getElementsByClassName. **Any DOM method with the plural elements will return an array.** You are able to loop over each element, or select an individual element with bracket notation.

    document.createElement() takes a string of the tag name you want to create. It then returns the element.

The most common way to append this to the DOM is to first select the parent, and call it's .appendChild.

You may be asking why we wouldn't just write this in our HTML.

JavaScript helps us dynamically render our apps. We'll be using JavaScript to get us dynamic data, and then change how the webpage looks depending.

If a user wanted to take things from a list, or add to a list, we would use JavaScript to control that.

Much of your DOM manipulation will happen after the user does something. To make the user able to change what they see, you'll need to learn to use [event listeners](https://coursework.vschool.io/event-listeners/)

### 7. Intro to Errors

### 8. Debugging

We have a few tools available to us directly in the browser to debug our JS code. We are already familiar with console.log(), but we will explore using the debugger keyword and something we call breakpoints.

[For more information visit](https://www.geeksforgeeks.org/debugging-in-javascript/)
