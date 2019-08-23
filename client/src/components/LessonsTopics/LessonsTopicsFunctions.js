import axios from 'axios'

export const getList = () => {
    return axios
        .get('/api/lessons-and-topics', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (lessons, topics, links) => {
    return axios
        .post(
            '/api/lessons-and-topics',
            {
                lessons: lessons,
                topics: topics,
                links: links,
                
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            
            console.log(response)
        })
}

export const deleteItem = id => {
    axios
        .delete(`/api/lessons-and-topics/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateItem = (lessons, id, topics, links) => {
    return axios
        .put(
            `/api/lessons-and-topics/${id}`,
            {
                lessons: lessons,
                topics: topics,
                links: links,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}