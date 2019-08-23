import React, { Component } from "react";
import { getList, addItem, deleteItem, updateItem } from "./GroupMemberFunctions";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class GroupMemberTable extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      groups: "",
      members : "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          groups: "",
          members: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  onSubmit = e => {
    e.preventDefault();
    addItem(this.state.groups, this.state.members).then(() => {
      this.getAll();
    });
    this.setState({
      groups: "",
      members: "",
    });
  };

  onUpdate = e => {
    e.preventDefault();
    updateItem(this.state.groups, this.state.id, this.state.members).then(
      () => {
        this.getAll();
      }
    );
    this.setState({
      editDisabled: ""
    });
  };

  onEdit = (itemid, e) => {
    e.preventDefault();

    var data = [...this.state.items];
    data.forEach((item, index) => {
      if (item.id === itemid) {
        this.setState({
          id: item.id,
          groups: item.groups,
          members: item.members,
          editDisabled: true
        });
      }
    });
  };

  onDelete = (val, e) => {
    e.preventDefault();
    deleteItem(val);

    var data = [...this.state.items];
    data.filter(function(item, index) {
      if (item.id === val) {
        data.splice(index, 1);
      }
      return true;
    });
    this.setState({ items: [...data] });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card card-default">
            <div className="card-header">
              <div className="card-body">
                {/* {this.state.editDisabled ? ( */}
                  <form onSubmit={this.onSubmit}>
                    <h1>Update Groups and Members information</h1>
                    <div className="form-group">
                      <label htmlFor="name" />
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="groups"
                            placeholder="Groups"
                            name="groups"
                            value={this.state.groups || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>

                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="members"
                            placeholder="Members"
                            name="members"
                            value={this.state.members || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                     
                      </div>
                    </div>
                    {!this.state.editDisabled ? (
                      <button
                        type="submit"
                        onClick={this.onSubmit.bind(this)}
                        className="btn btn-success btn-block"
                      >
                        Add
                      </button>
                    ) : (
                      ""
                    )}
                    {this.state.editDisabled ? (
                      <button
                        type="submit"
                        onClick={this.onUpdate.bind(this)}
                        className="btn btn-primary btn-block"
                      >
                        Update
                      </button>
                    ) : (
                      ""
                    )}
                  </form>
                {/* ) : null} */}
              </div>
            </div>
          </div>
          <table className="table">
          
            <tbody>
              <tr>
            <th scope="col">Groups</th>
            <th scope="col">Members</th>
          
         </tr>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td className="text-left">{item.groups}</td>
                  <td className="text">{item.members}</td>
                
                  <td className="text-right">
                  <Button 
                    variant="contained" 
                    color="primary"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(this, item.id)} 
                    >
                     
                     <EditIcon/>
                    </Button>
                
                    <Button 
                    variant="contained" 
                    color="secondary" 
                    disabled={this.state.editDisabled}
                    onClick={this.onDelete.bind(this, item.id)}>
                        
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GroupMemberTable;
