import React from 'react';
// import images from './images';


let image = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);

  },

  editHandler(id) {
    this.props.onEditSelect(id);

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

          <button key={this.props.data.objectId} 
            onClick={() => this.editHandler(this.props.data.objectId)}>Edit</button>


          <button onClick={() => this.addHandler()}>Add</button>
          <button onClick={() => this.backHandler()}>Back</button>
        </div>
      </div>
    );
  }

});

export default image;