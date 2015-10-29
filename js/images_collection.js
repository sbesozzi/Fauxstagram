import Backbone from 'backbone';
import imageModel from './image_model';

let imagesCollection = Backbone.Collection.extend( {

  url: 'https://api.parse.com/1/classes/images',

  model: imageModel,

  parse(data) {
    return data.results;
  }

});

export default imagesCollection;