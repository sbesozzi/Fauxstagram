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

  // Initialize/////////////////
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


  // Home View /////////////////////////
  showImages() {
    console.log('show images page');

    this.images.fetch().then(() => {
      this.render(
        <ImagesComponent 
        onImageSelect={this.selectImage.bind(this)}
        data={this.images.toJSON()}/>
      );
    });

  },

  // Single Image View  //////////////////////
  selectImage(id) {
    // alert('got id') + id);
    this.navigate('images/' + id, {trigger: true});
  },

  // Single Image View //////////////////////////
  showImage(id) {
    console.log('show image page');
    // .find() is like .filter()
    let image = this.image.find(item => item.objectId === id);
    this.render(<ImageComponent src={data.url}/>, this.el);
  
  },

  // showEdit() {

  // },

  // showAdd() {
  //   this.render() {
  //     <AddComponent
  //       on
  //   }

  // }

  // Spinner ///////////////////////////
  showSpinner() {
    this.render(
      <SpinnerComponent/>
    );
  },

  // Redirect ////////////////////////
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
