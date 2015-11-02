import React from 'react';

let edit = React.createClass({

  addBackHandler() {
    this.props.onBackSelect();
  },

  editHandler() {
    this.props.onEditSelect();
  },

  render() {

    return (
      <div className="edit">
        <form onSubmit={this.submitHandler}>
         <label>Edit URL: <input type="text"/>
         </label>
         <label>Edit Description: <input type="text"/>
         </label>


        </form>
        <div>
          <button onClick={() => this.editHandler()}>Save</button>
          <button onClick={() => this.addBackHandler()}>Back</button>
        </div>

      </div>

    );
  }
});

export default edit;