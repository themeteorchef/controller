/**
* themeteorchef:controller
* An API for organizing your template logic.
*
* @see {@link https://github.com/themeteorchef/controller|Controller on GitHub}
* @license MIT
*/

/**
* @module
*
* Controller
* Wrapper module for defining our controller logic.
*/
Controller = (function() {

  /*
  * @public
  *
  * templateLogic
  * Takes a template name and actions object to delegate to each of Meteor's
  * template functions. Acessible on the client as Controller('templateName', {});
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
  *       // Something to when .thing is clicked.
  *     }
  *   }
  * });
  *
  * @param {string} template - The name of the template to match with this controller.
  * @param {object} actions - The various template functions to call.
  */
  var templateLogic = function( template, actions ) {
    for ( var action in actions ) {
      if ( _handleRegistration[action] ) {
        _handleRegistration[action]( template, actions[action] );
      } else {
        _throwError('Sorry, ' + action + ' is not supported right now.');
      }
    }
  };

  /**
  * @private
  * @object
  *
  * _handleRegistration
  * Contains methods for mapping actions passed to Controller to each of
  * Meteor's template functions.
  */
  var _handleRegistration = {
    /**
    * @method
    *
    * created
    * Passes template name and function to call to Meteor's
    * Template.<templateName>.onCreated() method.
    *
    * @param {string} template - The name of the template to associate the onCreated method with.
    * @param {object} functionToCall - The function to pass to the onCreated method.
    */
    created: function( template, functionToCall ) {
      _registerTemplateCreatedAction( template, functionToCall );
    },
    /**
    * @method
    *
    * rendered
    * Passes template name and function to call to Meteor's
    * Template.<templateName>.onRendered() method.
    *
    * @param {string} template - The name of the template to associate the onRendered method with.
    * @param {object} functionToCall - The function to pass to the onRendered method.
    */
    rendered: function( template, functionToCall ) {
      _registerTemplateRenderedAction( template, functionToCall );
    },
    /**
    * @method
    *
    * destroyed
    * Passes template name and function to call to Meteor's
    * Template.<templateName>.onDestroyed() method.
    *
    * @param {string} template - The name of the template to associate the onDestroyed method with.
    * @param {object} functionToCall - The function to pass to the onDestroyed method.
    */
    destroyed: function( template, functionToCall ) {
      _registerTemplateDestroyedAction( template, functionToCall );
    },
    /**
    * @method
    *
    * helpers
    * Passes template name and helpers object to Meteor's
    * Template.<templateName>.helpers() method.
    *
    * @param {string} template - The name of the template to associate the helpers method with.
    * @param {object} functionToCall - The function to pass to the helpers method.
    */
    helpers: function( template, helpers ) {
      _registerTemplateHelpers( template, helpers );
    },
    /**
    * @method
    *
    * events
    * Passes template name and events object to Meteor's
    * Template.<templateName>.events() method.
    *
    * @param {string} template - The name of the template to associate the events method with.
    * @param {object} functionToCall - The function to pass to the events method.
    */
    events: function( template, events ) {
      _registerTemplateEvents( template, events );
    }
  };

  /**
  * @private
  *
  * _registerTemplateCreatedAction
  * Takes the passed template and function to call to Meteor's onCreated method.
  */
  var _registerTemplateCreatedAction = function( template, functionToCall ) {
    Template[template].onCreated( functionToCall );
  };

  /**
  * @private
  *
  * _registerTemplateRenderedAction
  * Takes the passed template and function to call to Meteor's onRendered method.
  */
  var _registerTemplateRenderedAction = function( template, functionToCall ) {
    Template[template].onRendered( functionToCall );
  };

  /**
  * @private
  *
  * _registerTemplateDestroyedAction
  * Takes the passed template and function to call to Meteor's onDestroyed method.
  */
  var _registerTemplateDestroyedAction = function( template, functionToCall ) {
    Template[template].onDestroyed( functionToCall );
  };

  /**
  * @private
  *
  * _registerTemplateHelpers
  * Takes the passed template and helpers object to Meteor's helpers method.
  */
  var _registerTemplateHelpers = function( template, helpers ) {
    Template[template].helpers( helpers );
  };

  /**
  * @private
  *
  * _registerTemplateEvents
  * Takes the passed template and events object to Meteor's events method.
  */
  var _registerTemplateEvents = function( template, events ) {
    Template[template].events( events );
  };

  /**
  * @private
  *
  * _throwError
  * Takes a passed error message and displays in the browser console, prefixed
  * with the package name for easy identification.
  */
  var _throwError = function( error ) {
    console.error( '[themeteorchef:controller]:', error );
  };

  /**
  * @public
  *
  * templateLogic
  * Returns the templateLogic method from the module to make it accessible to
  * the public.
  */
  return templateLogic;

})();
