import React from 'react';

let add = React.createClass({

  addBackHandler() {
    this.props.onBackSelect();
  },

  addHandler() {
    this.props.onUploadSelect();
  },

  render() {

    return  (
      <div className="add">
        <form onSubmit={this.submitHandler}>
          <input type="file" text="Upload Photo" placeholder="Image URL:"></input>
          <label>Description: <input type="text"/></label>
        </form>
        <div>
        <button onClick={() => this.addHandler()}>
          Save</button>
        <button onClick={() => this.addBackHandler()}>Back</button>
        </div>

      </div>
    );
  }

});

export default add;