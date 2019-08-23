// import axios from 'axios'

// export const getList = () => {
//     return axios
//         .get('/api/stories', {
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(res => {
//             return res.data
//         })
// }

// export const addItem = (name, surname, email, password) => {
//     return axios
//         .post(
//             '/api/stories',
//             {
//                 name: name,
//                 surname: surname,
//                 email: email,
//                 password: password
//             },
//             {
//                 headers: { 'Content-Type': 'application/json' }
//             }
//         )
//         .then(function(response) {
            
//             console.log(response)
//         })
// }

// export const deleteItem = id => {
//     axios
//         .delete(`/api/stories/${id}`, {
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(function(response) {
//             console.log(response)
//         })
//         .catch(function(error) {
//             console.log(error)
//         })
// }

// export const updateItem = (name, id, surname, email, password) => {
//     return axios
//         .put(
//             `/api/stories/${id}`,
//             {
//                 name: name,
//                 surname: surname,
//                 email: email,
//                 password: password
//             },
//             {
//                 headers: { 'Content-Type': 'application/json' }
//             }
//         )
//         .then(function(response) {
//             console.log(response)
//         })
// }