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
    "edit/:id"   : "showEdit"

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
          onImageSelect={id => this.goto('image/' + id)}
          data={ this.images.toJSON()}/>
      );
    });

  },


  showImage(id) {
    console.log('show image page');
    let img = this.images.get(id);
    
    // If fetched from home page render
    if (img) {
      this.render(
        <ImageComponent
          onBackSelect={() => this.goto('')}
          onAddSelect={id => this.goto('add')}
          onEditSelect={id => this.goto('edit/' + id)}
          data={img.toJSON()}/>
      );
    
    // Else manually fetch image id and render  
    } else {
      img = this.images.add({objectId: id});
      img.fetch().then(() => {
        this.render(
          <ImageComponent
            onBackSelect={() => this.goto('')}
            onAddSelect={id => this.goto('add')}
            onEditSelect={id => this.goto('edit/' + id)}
            data={img.toJSON()}/>
        );
      });
    }

  },

 
  showEdit(objectId) {
    console.log('show edit page');
    let img = this.images.get(objectId);


    this.render( 
      <EditComponent
        data={img.toJSON()}

        onBackSelect={() => this.goto('')}
        onSaveSelect={(photo, about) => this.saveForm(photo, about, objectId)}/>
    );

  }, 

  saveForm(photo, about, objectId) {
    this.images.get(objectId).save({
      Photo: photo,
      About: about
    }).then(() => {
      this.goto('');
    });

  },
      
  showAdd() {
    console.log('show add page');

    this.render(
      <AddComponent
      onBackSelect={() => this.goto('')}
      // On upload create new image model and save
      onUploadSelect={(photo, about) => {
      
        let newUpload = new ImageModel ({
          Photo: photo,
          About: about
        });

        newUpload.save().then(() => {
          this.goto('');
        });
      }
        
      }/>

    );

  },



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