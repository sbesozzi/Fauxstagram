import React from 'react';
// import images from './images';


let image = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);

  },

  editHandler() {
    this.props.onEditSelect();

  },

  addHandler() {
    this.props.onAddSelect();

  },

  backHandler() {
    this.props.onBackSelect();
    
  },


  render(data) {
    return (
      
      <div className="image" key={this.props.data.objectId} 
          onSelect={this.clickHandler}>
        <image src={this.props.data.Photo}/>
        
        <div>
          <button onClick={() => this.editHandler()}>Edit</button>
          <button onClick={() => this.addHandler()}>Add</button>
          <button onClick={() => this.backHandler()}>Back</button>
        </div>
      </div>
    );
  }

});

export default image;