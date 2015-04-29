/**
* themeteorchef:controller
* An API for organizing your template logic.
*
* @see {@link https://github.com/themeteorchef/controller|Controller on GitHub}
* @license MIT
*/

/**
* @public
* @module
*
* Controler
* Takes a template name and actions object to delegate to each of Meteor's
* template methods. Acessible on the client as Controller('templateName', {});
*
* @example
* Controller('templateName', {
*   created: function() {
*     // Logic to run when your template is created.
*   },
*   rendered: function() {
*     // Logic to run when your template is rendered.
*   },
*   destroyed: function() {
*     // Logic to run when your template is destroyed.
*   },
*   helpers: {
*     exampleHelper: function() {
*       // Example helper logic.
*     }
*   },
*   events: {
*     'click .thing': function( element, template ) {
*       // Logic to run when .thing is clicked.
*     }
*   }
* });
*
* @param {string} template - The name of the template to match with this controller.
* @param {object} actions - The various template methods to call on this template.
*/
Controller = (function() {

  /**
  * @public
  * @function
  *
  * Contains assiciation between controller's action name and template's method name.
  */
  var controller = function( template, actions ) {
    for ( var action in actions ) {
      _delegateMethod( template, action, actions[action] );
    }
  };

  /**
  * @private
  * @function
  *
  * Maps the passed template, actionName, and actionContent to the corresponding
  * Meteor template method.
  */
  var _delegateMethod = function( template, actionName, actionContent ) {
    var templateMethod = _convertActionToTemplateMethod[actionName];
    if ( templateMethod ) {
      Template[template][templateMethod]( actionContent );
    } else {
      _throwError( 'Sorry, "' + actionName + '" is not a supported method.' );
    }
  };

  /**
  * @private
  * @object
  *
  * Contains association between controller's action name and template's method name.
  */
  var _convertActionToTemplateMethod = {
    created: 'onCreated',
    rendered: 'onRendered',
    destroyed: 'onDestroyed',
    helpers: 'helpers',
    events: 'events'
  };

  /**
  * @private
  * @function
  *
  * Throws an error in the browser console.
  */
  var _throwError = function( message ) {
    console.error( '[themeteorchef:controller]:', message );
  }

  return controller;

})();
