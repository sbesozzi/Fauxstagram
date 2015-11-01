import React from 'react';
// import images from './images';


let image = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);

  },

  render(data) {
    return (
      
      <div className="image" key={this.props.images.objectId} 
          onSelect={this.clickHandler}>
        <image src={this.props.data.Photo}/>
        <div className="about">{this.data.About}
        </div>
        <button>Edit</button>
        <button>Back</button>
      </div>
    );
  }

});

export default image;