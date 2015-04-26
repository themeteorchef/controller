## Controller
An API for organizing your template logic.

#### Features
- Simplified syntax for defining template logic.

#### Contents

1. Basic Usage
2. API
3. Tests
4. Contributing
5. License

#### Basic Usage
Controller is nothing more than an abstraction layer. Syntax sugar. Its only purpose is to help you tidy up your template logic. Okay...why?

Cleanliness. A few saved keystrokes on bigger chunks of logic. A little DRYer. Because I said so, _okay_?

**Before Using Controller (356 Characters)**

---
```js
Template.exampleTemplate.onRendered(function(){
  $(".widget").activate();
});

Template.exampleTemplate.onDestroyed(function(){
  $(".widget").deactivate();
});

Template.exampleTemplate.helpers({
  widgetHelper: function() {
    return "some string of text";
  }
});

Template.exampleTemplate.events({
  'click .widget': function() {
    magic();
  }
});
```

**Using Controller (334 Characters)**

---
```js
Controller('exampleTemplate', {
  rendered: function() {
    $(".widget").activate();
  },
  destroyed: function() {
    $(".widget").deactivate();
  },
  helpers: {
    widgetHelper: function() {
      return "some string of text";
    }
  },
  events: {
    'click .widget': function() {
      magic();
    }
  }
});
```

**Possible reactions to this...**

- "This is stupid!"
- "You'll never work in this town again!"
- "I went to MIT and _I_ think this is useless! _spits_"

:cry: Buh. [Here](http://www.snickers.com/Resources/images/nutrition/products/large/1_Snickers.jpg). Better? Thought that'd do the trick.

#### API
Controller comes with support for all of Meteor's standard template methods:

- `Controller`
   - `{string} templateName`
   - `{object} actions`
    - `{function} created`
    - `{function} rendered`
    - `{function} destroyed`
    - `{object} helpers`
    - `{object} events`

Full API usage:

```js
Controller('myTemplate', {
  created: function() {
    // Stuff to do on created.
  },
  rendered: function() {
    // Stuff to do on rendered.
  },
  destroyed: function() {
    // Stuff to do on destroyed.
  },
  helpers: {
    myHelper: function() {
      // Put something on the template.
    }
  },
  events: {
    'click .something': function() {
      // Do something on click.
    }
  }
});
```
Easy peasy.

#### Tests
Controller comes with [a small suite of TinyTest-based tests](https://github.com/themeteorchef/controller/tests) to ensure that all of your logic makes it to the dark side safely. To run the tests:

1. Install the TinyTest package `meteor add tinytest`.
2. Run Meteor with tests `meteor test-packages`.
3. Pop open your browser `http://localhost:3000`.
4. Verify tests are passing.

![http://cl.ly/am9W/Image%202015-04-26%20at%206.20.29%20PM.png](http://cl.ly/am9W/Image%202015-04-26%20at%206.20.29%20PM.png)

**Note:** if your app is already running on `http://localhost:3000`, you can run tests separately by running `meteor --port 3001 test-packages`.

#### Contributing
Contributing, forking, and dorking is fully encouraged with Controller! If you'd like to help out with the package, take a look at the [contribution guide](https://github.com/themeteorchef/controller/wiki/Contribution-Guide) and start hacking :)

#### License
The code for this package is licensed under the [MIT License](http://opensource.org/licenses/MIT).
