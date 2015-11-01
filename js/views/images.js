import React from 'react';
import image from './image';


let images = React.createClass( {

  // getInitialState() {
  selectHandler(id) {
    this.props.onImageSelect(id);
  },

  processImages(data) {
    console.log('process image');
    return (
      <div key={data.objectId} 
        onImageSelect={() => this.selectHandler(data.objectId)}>
        <image src={data.Photo} id={data.objectId} />
       </div>
    );

  },

  render() {
    return (

      <div className="images-view">
        <header></header>

        <div className="profile">
          <div className="profile-image">
          </div>
          <div className="profile-info">
            <div className="profile-title">
              <h3>Sarah Besozzi</h3>
              <a></a>
            </div>
            <div className="profile-desc">
              <h3>Description</h3>
            </div>
            <div className="profile-follow">
              <h4>posts</h4>
              <h4>follower</h4>
              <h4>following</h4>
            </div>
          </div>
        </div>
        <div className="image-list">
          {this.props.data.map(this.processImages) }
        </div>
        

        <footer></footer>
      </div>
    );
  }

});

export default images;

