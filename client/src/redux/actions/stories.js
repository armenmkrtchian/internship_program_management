import axios from 'axios'
import {
  FETCH_STORIES_START, 
  FETCH_STORIES_SUCCESS, 
  FETCH_STORIES_ERROR,

  FETCH_STORY_BY_ID_START,
  FETCH_STORY_BY_ID_SUCCESS,
  FETCH_STORY_BY_ID_ERROR,

  QUIZ_SET_STATE,
 } from './actionTypes';

export function fetchStories() {
  return async dispatch => {
    dispatch(fetchQuizesStart())
      try {
        const response = await axios.get('api/stories')
        const items = response.data
       
        dispatch(fetchQuizesSuccess(items))
            //console.log(999,items)
            // console.log("bubu",items[0].id)
      } catch(e) {
          dispatch(fetchQuizesError(e))
      }
    }
}

export function fetchStoryById(storyId) {
  return async dispatch => {
    dispatch(fetchStoryByIdStart())
    
    try {
      const response = await axios.get(`api/stories/${storyId}`)
      response.data.forEach(function(element) {
        console.log(element);
      });
      
      const storyId = response.data
     
      dispatch(fetchStoryByIdSuccess(storyId))
    } catch (e) {
      dispatch(fetchStoryByIdError(e))
    }
  }
}


export function fetchStoryByIdStart(){
  return {
      type: FETCH_STORY_BY_ID_START
  }
}

export function fetchStoryByIdSuccess(storyId) {
  return {
    type: FETCH_STORY_BY_ID_SUCCESS,
    storyId
  }
}

export function fetchStoryByIdError(e){
  return {
    type: FETCH_STORY_BY_ID_ERROR,
    error: e
  }
}


export function fetchQuizesStart(){
  return {
      type: FETCH_STORIES_START
  }
}

export function fetchQuizesSuccess(items) {
  return {
    type: FETCH_STORIES_SUCCESS,
    items
  }
}

export function fetchQuizesError(e){
  return {
    type: FETCH_STORIES_ERROR,
    error: e
  }
}

export function quizSetState(answerState, results) {
  return {
    type: QUIZ_SET_STATE,
    answerState, results
  }
}

