// import React, { Component } from "react";
// import { addItem, getList } from "./TrainerFunctions";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStory, finishCreateStory } from '../../redux/actions/createTrainer'

// class CreateStory extends Component {
//   constructor() {
//     super();
//     this.state = {
//       id: "",
//       name: "",
//       surname: "",
//       email: "",
//       password: "",
//       editDisabled: false,
//       items: []
//     };

//     this.onSubmit = this.onSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   onSubmit = e => {
//     e.preventDefault();
   
//     addItem(this.state.name, this.state.surname, this.state.email, this.state.password).then(() => {
//       this.getAll();
//     });
//     this.setState({
//       name: "",
//       surname: "",
//       email: "",
//       password: ""
//     });
//   };

//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   getAll = () => {
//     getList().then(data => {
//       this.setState(
//         {
//           name: "",
//           surname: "",
//           email: "",
//           password: "",
//           items: [...data]
//         },
//         () => {
//           console.log(this.state.items);
//         }
//       );
//     });
//   };

//   render() {
//     return (
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card card-default">
//             <div className="card-header">
//               <div className="card-body">
//                 <h1>Create trainer</h1>
//                   <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="title" />
//                       <div className="row">
//                         <div className="col-md-12">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="name"
//                             placeholder="Name"
//                             name="name"
//                             value={this.state.name || ""}
//                             onChange={this.onChange.bind(this)}
//                           />
//                         </div>

//                         <div className="col-md-12">
//                           <textarea
//                             name="surname"
//                             id="surname"
//                             placeholder="Surname"
//                             value={this.state.surname || ""}
//                             className="form-control"
//                             onChange={this.onChange.bind(this)}
//                           />
//                         </div>
//                         <div className="col-md-12">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="email"
//                             placeholder="Email"
//                             name="email"
//                             value={this.state.email || ""}
//                             onChange={this.onChange.bind(this)}
//                           />
//                         </div>
//                         <div className="col-md-12">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="password"
//                             placeholder="Password"
//                             name="password"
//                             value={this.state.password || ""}
//                             onChange={this.onChange.bind(this)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                       <button
//                         type="submit"
//                         onClick={this.onSubmit.bind(this)}
//                         className="btn btn-light btn-block-sm"
//                       >
//                           <NavLink to={"/stories"}>Submit</NavLink>
//                       </button>
//                   </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     id: state.createTrainerReducer.id,
//     name: state.createTrainerReducer.name,
//     surname: state.createTrainerReducer.surname,
//     email: state.createTrainerReducer.email,
//     password: state.createTrainerReducer.password,
//     items: state.createTrainerReducer.items
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     createStory: item =>dispatch(createStory(item)),
//     finishCreateStory: () => dispatch(finishCreateStory())
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(CreateStory);
