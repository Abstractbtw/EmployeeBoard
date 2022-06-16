import React, { useState } from 'react'
import {UserTable} from '../js/userTable'
import {AddUserForm} from '../js/addUserForm'
import {EditUserForm} from '../js/editUserForm'
import {MainRender} from '../index.js'
import {renderCharts} from '../index.js'
import {UserData} from '../js/Data'
import '../css/App.css'

const Board = () => {

  const [users, setUsers] = useState(UserData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', workinghours: null }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [isOpen, setIsOpen] = useState(false);
  const[directionSort, setDirectionSort] = useState(true);
  const[searchedUser, setSearchUser] = useState('');
  const [filter, setFilter] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setIsOpen(true)
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, workinghours: user.workinghours })
  }

  const togglePopup = event => {
    event.preventDefault()
    setEditing(false)
    setIsOpen(!isOpen)
  }
  
  const sortData = (field) => {
    const copyData = users.concat()
    let sortedData;
    if(directionSort){
      sortedData = copyData.sort(
        (a,b) => {return a[field] > b[field] ? 1 : -1}
      )
    }
    else{
      sortedData = copyData.reverse(
        (a,b) => {return a[field] > b[field] ? 1 : -1}
      )
    }
    setUsers(sortedData)
    setDirectionSort(!directionSort)
  }

  const Popup = props => {
    return(
      <div className="popup-box">
        <div className="popup">
          {props.content}
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
          <br></br>
          <button className="smallbutton" onClick={props.handleClose}>Close</button>
        </div>
      </div>
    );
  }

  const RenderTable = () => {
    if(!filter){
      return(
        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} sortData={sortData} />
          <button className='smallbutton' onClick={togglePopup}>Add new user</button>
        </div>
      )
    }
    else{
      return(
            <div className="flex-large">
              <table className="w3-table w3-striped">
                <thead>
                  <tr>
                    <th className="sort">Name</th>
                    <th className="sort">Working hours</th>
                  </tr>
                  <tr className="tableline"></tr>
                </thead>
                <tbody>
                  {
                    users
                    .filter(user => user.name === searchedUser)
                    .map(user => 
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.workinghours}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
      )
    }
  }

  const searchUserChange = event => {
    const {value} = event.target
    setSearchUser(value)
  }

  const UserSearch = (event) => {
    event.preventDefault()
    if(searchedUser === ''){
      alert("Emply field")
    }
    else{
      setFilter(true)
    }
  }

  const clearSearch = event => {
    event.preventDefault()
    setSearchUser('')
    setFilter(false)
  }

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>
              <form onSubmit={MainRender}>
                <button className='defaultbutton'>Back</button>
              </form>
            </td>
            <td>
              <form onSubmit={renderCharts}>
                <button className='defaultbutton'>Statistics</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Users information</h1>
      <div className='line'></div>
      <br></br>
      <div className="searchForm">
        <form onSubmit={UserSearch}>
          <input type="text" placeholder="User" name ="name" value={searchedUser} onChange={searchUserChange}/>
          <button className="smallbutton">Search</button>
          <button className="smallbutton" onClick={clearSearch}>Clear</button>
        </form>
      </div>
      <br></br>
      <div className="flex-row">
        {isOpen && <Popup
        handleClose={togglePopup}
        />}
        <RenderTable/>
      </div>
    </div>
  )
}

export { Board }