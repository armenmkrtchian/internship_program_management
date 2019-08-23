import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './componentsAUTH/Navbar'
import Landing from './componentsAUTH/Landing'
import Login from './componentsAUTH/Login'
import Register from './componentsAUTH/Register'
import Profile from './componentsAUTH/Profile'

import TrainersTable from './components/Trainer/TrainersTable';
import LessonsTopicsTable from './components/LessonsTopics/LessonsTopicsTable';
import GroupMemberTable from './components/GroupMember/GroupMemberTable';
// import CreateTrainer from "./components/Trainer/CreateTrainer";
// import CreateLessonsTopics from "./components/LessonsTopics/CreateLessonsTopics";
// import CreateGroupMember from "./components/GroupMember/CreateGroupMember";
// import UpdateStory from "./components/Trainer/TrainersTable";
import TemporaryDrawer from "./matUi"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <Navbar />
          <TemporaryDrawer/>
          <Route exact path="/" component={Landing} />
          
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            {/* components */}
            <Route path="/trainers" component={TrainersTable} />
                <Route
                  path="/lessons-and-topics"
                  component={LessonsTopicsTable}
                />
                <Route
                  path="/groups-and-members"
                  component={GroupMemberTable}
                />
                {/* <Route path="/stories/edit" component={UpdateStory} /> */}
                {/* <Route path="/story/:id" component={Story} /> */}
                {/* <Route path="/" component={Home} /> */}
          </div>
        </div>
      </Router>
    )
  }
}

export default App
//---------------------------------------

