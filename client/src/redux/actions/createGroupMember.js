import {CREATE_STORY, RESET_STORY_CREATION} from './actionTypes'
import axios from 'axios'

export function createStory(item) {
  return {
      type: CREATE_STORY,
      item
  }
}

export function resetStoryCreation() {
    return {
        type: RESET_STORY_CREATION
    }
  }
  
export function finishCreateStory() {
  return async (dispatch, getState) => {
    await axios.post('/quizes.json', getState().create.quiz)
    dispatch(resetStoryCreation())
  }
}

