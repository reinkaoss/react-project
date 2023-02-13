import React from "react";
import "./style.css"
import Bin from "./images/recycle-bin.png"
import { v4 as uuidv4 } from 'uuid';

class Hub extends React.Component {
  state = {
    newItem: "",
    list: [],
  };


  //  Changing the state
  updateInput = (key, value) => {
    this.setState({ [key]: value });
  };

  addNote = () => {
    const newItem = {
      id: uuidv4(),
      value: this.state.newItem.slice(),
    };

    // copy list of tasks, using [...] to get all items
    const list = [...this.state.list, newItem];

    this.setState({
      list,
      newItem: "",
    });
  };

  // Using filter to delete item based on ID
  deleteNote = (id) => {
    const updatedTasksList = this.state.list.filter((item) => item.id !== id);

    this.setState({ list: updatedTasksList });
  };

  render() {
    return (
      <div>
        <h1 className="studentHubTitle">My Notes</h1>
        <div className="containerHub">
        <div className="notesContainer"></div>
          <div
          >
            <textarea
              className="notesInputText"
              type="text"
              placeholder="Type your note here..."
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="add-btn btn-success"
              onClick={this.addNote}
              disabled={!this.state.newItem.length}
            >
              <i class="delete-icon"> + </i>
            </button>

            <ul>
              {this.state.list.map((item) => {
                return (
                  <div class="card">
  <div class="card-body">
        <p key={item.id} >
                    {item.value} </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteNote(item.id)}
                    >
                      
                      <img className="binLogo" src={Bin} alt="bin" />
                      {/* <i class="delete-icon">x</i> */}
                    </button>
                  </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Hub;

