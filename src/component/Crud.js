// import React, { useEffect, useState } from 'react';
// import Userdata from "../component/Userdata";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CancelIcon from '@mui/icons-material/Cancel';
// import SaveIcon from '@mui/icons-material/Save';
// import { Button, Link, TextField } from '@mui/material';
// import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip } from 'react-tooltip';
// import Edit from './Edit';
// import { useNavigate } from 'react-router';


// const Crud = () => {

//     const [data, setData] = useState(Userdata);
//     const [editData, setEditData] = useState({})
//     const [nameErr, setNameErr] = useState("")
//     const [emailErr, setEmailErr] = useState("")
//     const [ageErr, setAgeErr] = useState("")
//     const [cityErr, setCityErr] = useState("")
//     const [localstor, setLocalstor] = useState([])

//     // console.log("first", data)

   
//         // let localData = localStorage.setItem("list", JSON.stringify(localstor))
//         // setLocalstor(localData)
//         // console.log(">>>>>>", localData)
    


//     const hanldeinput = (e) => {
//         const { name, value } = e.target
//         setEditData((prevdata) => ({ ...prevdata, [name]: value }))

//     }

//     const handleDelete = (id) => {
//         const dltData = data.filter((item) => item.id !== id)
//         setData(dltData)
//     }

//     const handleCancel = () => {
//         setEditData(null)
//     }
//     const handleEdit = (item) => {
//         setEditData(item)
//     }

//     const handleSave = () => {

//         let isvalid = true;

//         if (!editData.name) {
//             setNameErr("plz enter name*")
//             isvalid = false
//         } else {
//             setNameErr("")
//         }

//         if (!editData.email) {
//             setEmailErr("plz enter email*")
//             isvalid = false
//         } else {
//             setEmailErr("")
//         }

//         if (!editData.age) {
//             setAgeErr("plz enter age*")
//             isvalid = false
//         } else {
//             setAgeErr("")
//         }

//         if (!editData.city) {
//             setCityErr("plz enter city*")
//             isvalid = false
//         } else {
//             setCityErr("")
//         }



//         if (isvalid) {
//             const updatedData = data.map((item) =>
//                 item.id === editData.id ? editData : item
//             );
//             setData(updatedData);
//             setEditData(null);
//         }

//     }

//         // let lecalgetdata = JSON.parse(localStorage.getItem("list"))
//         // console.log("first>>>>>>",lecalgetdata)

 

//     return (
//         <table className='table table-stiped'>
//             <thead className='table-dark'>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Age</th>
//                     <th>City</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>

//             {data &&
//                 data?.map((item, id) => (

//                     <tr key={id}>
//                         <td>{item.id}</td>
//                         <td>
//                             {
//                                 editData && editData.id === item.id ? (
//                                     <TextField
//                                         type='text'
//                                         name='name'
//                                         value={editData?.name}
//                                         variant='standard'
//                                         onChange={hanldeinput}
//                                         error={!nameErr}
//                                         helperText={nameErr}
//                                     />
//                                 ) : (
//                                     item.name
//                                 )
//                             }

//                         </td>
//                         <td >
//                             {
//                                 editData && editData.id === item.id ? (
//                                     <TextField
//                                         type='email'
//                                         name='email'
//                                         value={editData?.email}
//                                         variant='standard'
//                                         onChange={hanldeinput}
//                                         error={!emailErr}
//                                         helperText={emailErr}
//                                     />
//                                 ) : (
//                                     item.email
//                                 )
//                             }

//                         </td>

//                         <td>
//                             {
//                                 editData && editData.id === item.id ? (
//                                     <TextField
//                                         type='number'
//                                         name='age'
//                                         value={editData?.age}
//                                         variant='standard'
//                                         error={!ageErr}
//                                         helperText={ageErr}
//                                         onChange={hanldeinput} />
//                                 ) : (
//                                     item.age
//                                 )
//                             }

//                         </td>
//                         <td>
//                             {
//                                 editData && editData.id === item.id ? (
//                                     <TextField
//                                         type='select'
//                                         name='city'
//                                         value={editData?.city}
//                                         variant='standard'
//                                         onChange={hanldeinput}
//                                         error={!cityErr}
//                                         helperText={cityErr}
//                                     />
//                                 ) : (
//                                     item.city
//                                 )
//                             }

//                         </td>
//                         <td>
//                             {
//                                 editData && editData.id === item.id ? (
//                                     <>
//                                         <Button onClick={handleSave}><SaveIcon /></Button>
//                                         <Button onClick={handleCancel}><CancelIcon /></Button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Button onClick={() => handleEdit(item)}><EditIcon /></Button>
//                                         <Button onClick={() => handleDelete(item.id)}><DeleteIcon /></Button>
//                                     </>
//                                 )
//                             }
//                         </td>
//                     </tr >
//                 ))
//             }
//         </table >
//     )
// }

// export default Crud;


