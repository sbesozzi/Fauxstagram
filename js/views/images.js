import React from 'react';
import image from './image';


let images = React.createClass( {

  // getInitialState() {
  selectHandler(id) {
    this.props.onImageSelect(id);
  },

  processImages(data) {
    console.log('get image');
    return (
      <div>

        <image src={data.Photo} id={data.objectId} onImageSelect={this.selectHandler}/>
       </div>
    );

  },

  render() {
    return (
      <div className="image-list">
        {this.props.data.map(this.processImages)}
      </div>
    );
  }

});

export default images;

