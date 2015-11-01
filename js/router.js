import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import ImageModel from './image_model.js';
import ImagesCollection from './images_collection.js';

import ImagesComponent from './views/images';
import ImageComponent from './views/image';
import AddComponent from './views/add';
import EditComponent from './views/edit';
import SpinnerComponent from './views/spinner';


// Create Router
export default Backbone.Router.extend( {

  // Create routes
  routes: {
    ""          : "redirectToImages",
    "images"    : "showImages",
    "image/:id" : "showImage", 
    "add"       : "showAdd",
    "edit"      : "showEdit"

  },

  // Initialize//
  initialize(appElement) {
    this.el = appElement;
    this.images = new ImagesCollection();


  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });

  },

  render(component) {
    ReactDom.render(component, this.el);

  },


  // Home View //
  showImages() {
    console.log('show images page');

    this.images.fetch().then(() => {
      this.render(
        <ImagesComponent 
          onImageSelect={(id) => this.goto('image/' + id)}
          data={ this.images.toJSON()}/>
      );
    });

  },



  showImage(id) {
    console.log('show image page');
    let img = this.images.get(id);

    if (img) {
      this.render(
        <ImageComponent
          onBackClick={() => this.goto('image')}
          onEditClick={(id) => this.goto('edit/' + id)}
          data={img.toJSON()}/>
      );
      
    } else {
      img = this.images.add({objectId: id});
      img.fetch().then(() => {
        this.render(
          <ImageComponent
            onBackClick={() => this.goto('image')}
            onEditClick={(id) => this.goto('edit/' + id)}
            data={img.toJSON()}/>
        );
      });
    }

  },

 



  showEdit() {
    console.log('show edit page');

    this.render( 
      <EditComponent/>
    );

  },

  showAdd() {
    console.log('show add page');

    this.render(
      <AddComponent/>

    );

  },

  // }

  // Spinner //
  showSpinner() {
    this.render(
      <SpinnerComponent/>
    );

  },

  // Redirect //
  redirectToImages() {
    this.navigate('images', {
      replace: true,
      trigger: true
    });

  },


  // Start Router
  start() {
    Backbone.history.start();
    return this;

  },


});
