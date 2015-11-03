import React from 'react';

let edit = React.createClass({

  getInitialState() {
    return {
      Photo: this.props.data.Photo,
      About: this.props.data.About
    };
  },


  submitHandler(event) {
    event.preventDefault();
    this.props.onSaveSelect(this.state.Photo, this.state.About);
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

  
  // saveHandler() {
  //   this.props.onEditSelect();
  // },

  backHandler() {
    this.props.onBackSelect();
  },


  render() {

    return (
      <div className="edit">
        <form onSubmit={this.submitHandler}>
         <label><input onChange={this.updatePhoto} type="file" value ={this.state.Photo}></input></label>
         <label>Edit About: <input onChange={this.updateAbout} type="text" placeholder="Edit About" value={this.state.About}/>
         </label>
        </form>

        <div>
          <button onClick={this.submitHandler}>Save</button>
          <button onClick={this.backHandler}>Back</button>
        </div>

      </div>

    );
  }
});

export default edit;