import axios from 'axios'

export const getList = () => {
    return axios
        .get('/api/groups-and-members', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (groups, members) => {
    return axios
        .post(
            '/api/groups-and-members',
            {
                groups: groups,
                members: members,
                             
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
        .delete(`/api/groups-and-members/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateItem = (groups, id, members) => {
    return axios
        .put(
            `/api/groups-and-members/${id}`,
            {
                groups: groups,
                members: members
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}