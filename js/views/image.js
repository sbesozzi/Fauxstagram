import React from 'react';
// import images from './images';


let image = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);

  },

  render() {
    return (
      
      <div className="image" onClick={this.clickHandler}>
        <img src={this.props.data.Photo}/>
        <button>Edit</button>
        <button>Back</button>
      </div>
    );
  }

});

export default image;