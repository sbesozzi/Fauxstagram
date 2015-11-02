import React from 'react';
// import images from './images';


let image = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);

  },

  render(data) {
    return (
      
      <div className="image" key={this.props.data.objectId} 
          onSelect={this.clickHandler}>
        <image src={this.props.data.Photo}/>
        <div className="about">{this.props.data.About}
        </div>
        <div className="image-button">
          <button>Edit</button>
          <button>Back</button>
        </div>
      </div>
    );
  }

});

export default image;