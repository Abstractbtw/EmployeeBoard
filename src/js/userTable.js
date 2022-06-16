import React from 'react'
import '../css/App.css'

const UserTable = (props) => {

  const handleDeleteUser = id => {
    let answer = window.confirm('Are you sure?')
    if (answer) {
      props.deleteUser(id)
    }
  }

  return (
    <table className="w3-table w3-striped">
      <thead>
        <tr>
          <th className="sort" onClick={() => {props.sortData('name')}}>Name</th>
          <th className="sort" onClick={() => {props.sortData('workinghours')}}>Working hours</th>
          <th></th>
        </tr>
        <tr className="tableline"></tr>
      </thead>
      <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.workinghours}</td>
                  <td>
                  <button className="smallbutton" onClick={() => {props.editRow(user)}}>Edit</button>
                  <button className="smallbutton" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
          
      </tbody>
    </table>
  )
}
export { UserTable }