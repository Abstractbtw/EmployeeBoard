import React from 'react'

const UserTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Working hours</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.workinghours}</td>
              <td>
              <button
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
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