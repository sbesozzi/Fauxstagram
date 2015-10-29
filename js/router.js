import Backbone from 'backbone';
import $ from 'jquery';

import imagesCollection from './images_collection.js';

import imagesTemplate from './views/images';
import imageTemplate from './views/image';
import addTemplate from './views/add';
import editTemplate from './views/edit';

// Create Router & routes
let Router = Backbone.Router.extend( {

  routes: {
    ""          : "redirectToImages",
    "images"    : "showImages",
    "image/:id" : "showImage", 
    "add"       : "showAdd",
    "edit"      : "showEdit"
  },

  initialize: function(appElement) {
    // Set appElement to $el
    this.$el = appElement;
    console.log(appElement);

    this.images = new imagesCollection();

    let router = this;

  },

  

  start: function() {
    Backbone.history.start();
    return this;
  }


});

export default Router;
