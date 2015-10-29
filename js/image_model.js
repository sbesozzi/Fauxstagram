import Backbone from 'backbone';

let imageModel = Backbone.Model.extend( {

  urlRoot: 'https://api.parse.com/1/classes/images',

  idAttribute: 'objectId'

});

export default imageModel;