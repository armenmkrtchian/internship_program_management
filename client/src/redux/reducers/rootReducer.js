import {combineReducers} from 'redux'

import createTrainer from './createTrainer';
import createLessonsTopics from './createLessonsTopics';
import createGroupMember from './createGroupMember'

export default combineReducers({
    
    createTrainerReducer: createTrainer,
    createLessonsTopicsReducer: createLessonsTopics,
    createGroupMemberReducer: createGroupMember
})