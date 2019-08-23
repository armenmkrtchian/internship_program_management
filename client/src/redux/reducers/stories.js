import {FETCH_STORIES_SUCCESS, FETCH_STORY_BY_ID_SUCCESS} from '../actions/actionTypes';
const initialState = {
    id: '',
    name: '',
    surname: '',
    email: '',
    password: '',createTrainerReducercreateTrainerReducer
    items: []
}



export default function storyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORIES_SUCCESS:
      return {
        ...state, items: action.items
      }
      case FETCH_STORY_BY_ID_SUCCESS:
        return {
          ...state, item: action.id
        }
    default:
      return state
  }
}