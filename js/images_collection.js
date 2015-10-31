import Backbone from 'backbone';
import ImageModel from './image_model';

let ImagesCollection = Backbone.Collection.extend( {

  url: 'https://api.parse.com/1/classes/images',

  model: ImageModel,

  parse: function(data) {
    return data.results;
  }

});

export default ImagesCollection;
