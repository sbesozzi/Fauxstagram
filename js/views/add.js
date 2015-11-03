import React from 'react';

let add = React.createClass({

  backHandler() {
    this.props.onBackSelect();
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onUploadSelect(this.state.Photo, this.state.About);
  
  },

  updatePhoto(event) {
    let newPhoto = event.currentTarget.value;
    this.setState({
      Photo: newPhoto
    });
  },

  updateAbout(event) {
    let newAbout = event.currentTarget.value;
    this.setState({
      About: newAbout
    });
  },


  render() {

    return  (
      <div className="add">
        <form onSubmit={this.submitHandler}>
          <label><input onChange={this.updatePhoto} type="file" text="Upload Photo"></input></label>
          <label>Description: <input onChange={this.updatePhoto} type="text"/></label>
        </form>
        <div>
        <button onClick={this.submitHandler}>Save</button>
        <button onClick={this.backHandler}>Back</button>
        </div>

      </div>
    );
  }

});

export default add;