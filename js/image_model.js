import Backbone from 'backbone';

let ImageModel = Backbone.Model.extend( {

  urlRoot: 'https://api.parse.com/1/classes/images',

  idAttribute: 'objectId',

  templateData() {
    let data= this.toJSON();
    return data;
  }

});


export default ImageModel;