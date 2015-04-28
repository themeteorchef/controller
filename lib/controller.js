/**
* themeteorchef:controller
* An API for organizing your template logic.
*
* @see {@link https://github.com/themeteorchef/controller|Controller on GitHub}
* @license MIT
*/

/*
* @public
* @module
*
* Controler
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
Controller = function ( template, actions ) {

  for ( var action in actions ) {
    if ( Controller._actionToTemplateName[action] ) {
      Template[template][Controller._actionToTemplateName[action]](actions[action]);
    } else {
      console.error('[controller]:', 'Sorry, ' + action + ' is not supported right now.');
    }
  }
};

/**
 * @private
 * @object
 *
 * Contains assiciation between controller's action name and template's function name
 */
Controller._actionToTemplateName = {
  created: 'onCreated',
  rendered: 'onRendered',
  destroyed: 'onDestroyed',
  helpers: 'helpers',
  events: 'events'
};
