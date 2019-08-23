import React, { Component } from "react";
import { getList, addItem, deleteItem, updateItem } from "./LessonsTopicsFunctions";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class LessonsTopicsTable extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      lessons: "",
      topics: "",
      links: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  onSubmit = e => {
    e.preventDefault();
   
    addItem(this.state.lessons, this.state.topics, this.state.links).then(() => {
      this.getAll();
    });
    this.setState({
      lessons: "",
      topics: "",
      links: "",
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

   getAll = () => {
    getList().then(data => {
      this.setState(
        {
          lessons: "",
          topics: "",
          links: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };


  onUpdate = e => {
    e.preventDefault();
    updateItem(this.state.lessons, this.state.id, this.state.topics, this.state.links, this.state.item).then(
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
          lessons: item.lessons,
          topics: item.topics,
          links: item.links,
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
                    <h1>Add lessons and topics</h1>
                    <div className="form-group">
                      <label htmlFor="name" />
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="lessons"
                            placeholder="Lessons"
                            name="lessons"
                            value={this.state.lessons || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="topics"
                            placeholder="Topics"
                            name="topics"
                            value={this.state.topics || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                       
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="links"
                            placeholder="Links"
                            name="links"
                            value={this.state.links || ""}
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
            <th scope="col">Lessons</th>
            <th scope="col">Topics</th>
            <th scope="col">Links</th>
            
         </tr>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td className="text-left">{item.lessons}</td>
                  <td className="text">{item.topics}</td>
                  <td className="text">{item.links}</td>
                  
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

export default LessonsTopicsTable;
