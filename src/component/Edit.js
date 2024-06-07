// import React, { useEffect, useState } from "react";
// import { Button, TextField } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import SaveIcon from "@mui/icons-material/Save";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Userdata } from "../component/Userdata";
// import { useDispatch, useSelector } from "react-redux";
// import { saveUser, editUser, cancelUser, deleteUser } from "../toolkit/Slice";
// import "../component/style.css"


// const Edit = () => {
//   const userFormData = {
//     name: "",
//     email: "",
//     age: "",
//     city: "",
//   };

//   const [formData, setFormData] = useState(userFormData);
//   const [data, setData] = useState(Userdata);
//   const [editData, setEditData] = useState({});
//   const [error, setError] = useState({
//     name: "",
//     email: "",
//     age: "",
//     city: "",
//   });

//   const [localdata, setLocaldata] = useState([]);
//   const [editId, setEditId] = useState(false);

//   // console.log("11", editId)


//   // const users = useSelector(state => state.users.users);

//   // const editUserId = useSelector(state => state.users.editUserId);
//   // console.log("first>>>>",editUserId)
//   // const dispatch = useDispatch();



//   useEffect(() => {
//     const getuserData = localStorage.getItem("key");
//     if (getuserData) {
//       setLocaldata((getuserData));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setError({
//       ...error,
//       [name]: "",
//     });
//     errorHandler();
//     // console.log("first....", name)
//   };
//   const handleEdit = (id) => {
//     setEditId(true)
//     setEditData(id);
//     const user = data.find(user => user.id === id);
//     setFormData(user);
//     // dispatch(editUser(id));
//   };

//   const handleDelete = (id) => {
//   const deleteUser = data.filter((item) => item.id !==id)
//   setFormData(deleteUser)
//     // dispatch(deleteUser(id))
//   };

//   const handleCancel = (id) => {
//     setEditData(null);
//     setFormData(userFormData);
//     // dispatch(cancelUser(id))
//   };

//   const handleSaveUser = () => {

//     const isValidForm = errorHandler();

//     if (!isValidForm) {
//       return;
//     }

//     setFormData(saveUser({ id: editData, updatedUser: formData }));
//     setEditData(null);
//     setFormData(userFormData);

//     localStorage.setItem("key", JSON.stringify(userFormData));
//     // console.log("usersa", users)

//   };

//   const errorHandler = () => {
//     // console.log("123", formData);
//     if (!formData.name) {
//       setError({ name: "Please enter a Name" });
//       return false;
//     }
//     if (!formData.email) {
//       setError({ email: "Please enter an Email" });
//       return false;
//     }
//     if (!formData.age) {
//       setError({ age: "Please enter an Age" });
//       return false;
//     }
//     if (!formData.city) {
//       setError({ city: "Please enter a City" });
//       return false;
//     }

//     return true;
//   };

//   return (
//     <>
//       <table className="table table-striped mt-5">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Age</th>
//             <th>City</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, id) => {
//             return (
//               <tr key={id}>
//                 <td>{item.id}</td>
//                 <td>
//                   {editData === item.id ? (
//                     <TextField
//                       type="text"
//                       value={formData.name}
//                       variant="standard"
//                       name="name"
//                       label="Name"
//                       onChange={(e) => handleInputChange(e)}
//                       error={!error.name}
//                       helperText={error.name}
//                     />
//                   ) : (
//                     item.name
//                   )}
//                 </td>

//                 <td>
//                   {editData === item.id ? (
//                     <TextField
//                       type="email"
//                       value={formData.email}
//                       variant="standard"
//                       name="email"
//                       label="Email"
//                       onChange={(e) => handleInputChange(e)}
//                       error={!error.email}
//                       helperText={error.email}
//                     />
//                   ) : (
//                     item.email
//                   )}
//                 </td>
//                 <td>
//                   {editData === item.id ? (
//                     <TextField
//                       type="number"
//                       value={formData.age}
//                       variant="standard"
//                       name="age"
//                       label="Age"
//                       onChange={(e) => handleInputChange(e)}
//                       error={!error.age}
//                       helperText={error.age}
//                     />
//                   ) : (
//                     item.age
//                   )}
//                 </td>
//                 <td>
//                   {editData === item.id ? (
//                     <TextField
//                       type="text"
//                       value={formData.city}
//                       variant="standard"
//                       name="city"
//                       label="City"
//                       onChange={(e) => handleInputChange(e)}
//                       error={!error.city}
//                       helperText={error.city}
//                     />
//                   ) : (
//                     item.city
//                   )}
//                 </td>
//                 <td>
//                   {editData === item.id ? (
//                     <>
//                       <Button onClick={handleSaveUser}>
//                         <SaveIcon />
//                       </Button>
//                       <Button onClick={handleCancel}>
//                         <CancelIcon />
//                       </Button>
//                     </>
//                   ) : (
//                     <>
//                       <Button onClick={() => handleEdit(item.id)}>
//                         <EditIcon />
//                       </Button>
//                       <Button onClick={() => handleDelete(item.id)}>
//                         <DeleteIcon />
//                       </Button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default Edit;


import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Userdata } from "../component/Userdata";
import "../component/style.css";

const Edit = () => {
  const userFormData = {
    name: "",
    email: "",
    age: "",
    city: "",
  };

  const [formData, setFormData] = useState(userFormData);
  const [data, setData] = useState(Userdata);
  const [editData, setEditData] = useState({});
  const [error, setError] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  const [localdata, setLocaldata] = useState([]);
  const [editId, setEditId] = useState(false);

  useEffect(() => {
    const getuserData = localStorage.getItem("key");
    if (getuserData) {
      setLocaldata(JSON.parse(getuserData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError({
      ...error,
      [name]: "",
    });
    errorHandler();
  };

  const handleEdit = (id) => {
    setEditId(true);
    setEditData(id);
    const user = data.find((user) => user.id === id);
    setFormData(user);
  };

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const handleCancel = () => {
    setEditData(null);
    setFormData(userFormData);
  };

  const handleSaveUser = () => {
    const isValidForm = errorHandler();

    if (!isValidForm) {
      return;
    }

    const updatedData = data.map((user) =>
      user.id === editData ? { ...formData } : user
    );
    setData(updatedData);
    setEditData(null);
    setFormData(userFormData);

    localStorage.setItem("key", JSON.stringify(updatedData));
  };

  const errorHandler = () => {
    let isValid = true;

    if (!formData.name) {
      setError({ name: "Please enter a Name" });
      isValid = false;
    }
    if (!formData.email) {
      // const eRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      // if(!formData.email.match(eRegex)){
      //   setError("plz enter valid email")
      // }
      setError({ email: "Please enter an Email" });
      isValid = false;
    }
    if (!formData.age) {
      setError({ age: "Please enter an Age" });
      isValid = false;
    }
    if (!formData.city) {
      setError({ city: "Please enter a City" });
      isValid = false;
    }

    return isValid;
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end ">
        <button className="btn btn-primary mt-2 ">Add New</button>
      </div>
      <table className="table table-striped mt-5">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{item.id}</td>
              <td>
                {editData === item.id ? (
                  <TextField
                    type="text"
                    value={formData.name}
                    variant="standard"
                    name="name"
                    label="Name"
                    onChange={(e) => handleInputChange(e)}
                    error={!!error.name}
                    helperText={error.name}
                  />
                ) : (
                  item.name
                )}
              </td>

              <td>
                {editData === item.id ? (
                  <TextField
                    type="email"
                    value={formData.email}
                    variant="standard"
                    name="email"
                    label="Email"
                    onChange={(e) => handleInputChange(e)}
                    error={!!error.email}
                    helperText={error.email}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editData === item.id ? (
                  <TextField
                    type="number"
                    value={formData.age}
                    variant="standard"
                    name="age"
                    label="Age"
                    onChange={(e) => handleInputChange(e)}
                    error={!!error.age}
                    helperText={error.age}
                  />
                ) : (
                  item.age
                )}
              </td>
              <td>
                {editData === item.id ? (
                  <TextField
                    type="text"
                    value={formData.city}
                    variant="standard"
                    name="city"
                    label="City"
                    onChange={(e) => handleInputChange(e)}
                    error={!!error.city}
                    helperText={error.city}
                  />
                ) : (
                  item.city
                )}
              </td>
              <td>
                {editData === item.id ? (
                  <>
                    <Button onClick={handleSaveUser}>
                      <SaveIcon />
                    </Button>
                    <Button onClick={handleCancel}>
                      <CancelIcon />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => handleEdit(item.id)}>
                      <EditIcon />
                    </Button>
                    <Button onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Edit;
