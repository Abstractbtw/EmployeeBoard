import React, { useState } from 'react'
import {Component} from 'react'
import {AddUserForm} from '../js/addUserForm'
import {UserTable} from '../js/userTable'
import {EditUserForm} from '../js/editUserForm'
import {MainRender} from '../index.js'
import {UserData} from '../js/Data'
import '../css/App.css'

const Board = () => {

  const [users, setUsers] = useState(UserData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', workinghours: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ name: user.name, workinghours: user.workinghours })
  }

  return (
    <div className="container">
      <form onSubmit={MainRender}>
        <button>Back</button>
      </form>
      <h1>Users information</h1>
      <div className="flex-row">
        <div className="flex-large">
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
        </div>
        <div className="flex-large">
          <h2>Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export { Board }