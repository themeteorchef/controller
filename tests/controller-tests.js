Tinytest.add('Is the createUser template available on the client?', function (test) {
  // createUser is a tester template, defined in /tests/test-template.html.
  test.equal(typeof Template.createUser, "object");
});

Tinytest.add('Is Controller available on the client?', function (test) {
  test.equal(typeof Controller, "function");
});

Tinytest.add('Does Controller properly assign the onCreated method?', function (test) {
  // Get our createUser template's created callback.
  var createdCallback = Template.createUser._callbacks.created;

  // Make sure that our template DOES NOT have an onCreated callback defined.
  test.equal(createdCallback.length, 0);

  // Define an onCreated method for our template using Controller.
  Controller('createUser', {
    created: function() {
      console.log("Do this onCreated.");
    }
  });

  // Make sure that our template DOES have an onCreated callback defined.
  test.equal(createdCallback.length, 1);
});

Tinytest.add('Does Controller properly assign the onRendered method?', function (test) {
  // Get our createUser template's rendered callback.
  var renderedCallback = Template.createUser._callbacks.rendered;

  // Make sure that our template DOES NOT have an onCreated callback defined.
  test.equal(renderedCallback.length, 0);

  // Define an onRendered method for our template using Controller.
  Controller('createUser', {
    rendered: function() {
      console.log("Do this onRendered.");
    }
  });

  // Make sure that our template DOES have an onRendered callback defined.
  test.equal(renderedCallback.length, 1);
});

Tinytest.add('Does Controller properly assign the onDestroyed method?', function (test) {
  // Get our createUser template's destroyed callback.
  var destroyedCallback = Template.createUser._callbacks.destroyed;

  // Make sure that our template DOES NOT have an onDestroyed callback defined.
  test.equal(destroyedCallback.length, 0);

  // Define an onRendered method for our template using Controller.
  Controller('createUser', {
    destroyed: function() {
      console.log("Do this onDestroyed.");
    }
  });

  // Make sure that our template DOES have an onRendered callback defined.
  test.equal(destroyedCallback.length, 1);
});

Tinytest.add('Does Controller properly assign the helpers method?', function (test) {
  // Get our createUser template's HelperMap.
  var helperMap = Template.createUser.__helpers;

  // Make sure that our template DOES NOT have an exampleHelper defined.
  // Note: the space before exampleHelper here is something that Meteor introduces
  // and is not a bug introduced by Controller.
  test.equal(typeof helperMap[" exampleHelper"], "undefined");

  // Define a helper for our template using Controller.
  Controller('createUser', {
    helpers: {
      exampleHelper: function() {
        return "just an example";
      },
      anotherHelper: function() {
        return "testing multiple helpers";
      }
    }
  });

  // Make sure that our template DOES have the exampleHelper helper defined.
  test.equal(typeof helperMap[" exampleHelper"], "function");

  // Make sure that our template DOES have the anotherHelper helper defined.
  test.equal(typeof helperMap[" anotherHelper"], "function");

  // Make sure that our template DOES NOT have the nonExistentHelper defined.
  test.equal(typeof helperMap[" nonExistentHelper"], "undefined");
});

Tinytest.add('Does Controller properly assign the events method?', function (test) {

  // Get our createUser template's event map.
  var eventMaps = Template.createUser.__eventMaps;

  // Make sure that our template DOES NOT have any event maps defined.
  test.equal(eventMaps.length, 0);

  // Define an event for our template using Controller.
  Controller('createUser', {
    events: {
      'click .button': function() {
        console.log("This is just a test");
      },
      'click .another-button': function() {
        console.log("Testing multiple events.");
      }
    }
  });

  // Make sure that our template DOES have an event map defined.
  test.equal(eventMaps.length, 1);

  // Make sure that our template DOES have a 'click .button' event.
  test.equal(typeof eventMaps[0]['click .button'], "function");

  // Make sure that our template DOES have a 'click .another-button' event.
  test.equal(typeof eventMaps[0]['click .another-button'], "function");

  // Make sure that our template DOES NOT have a 'click .does-not-exist' event.
  test.equal(typeof eventMaps[0]['click .does-not-exist'], "undefined");
});
