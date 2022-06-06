import React, { useState } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.workinghours) return
    props.updateUser(user.id, user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br></br>
      <input type="text" name="name" value={user.name} onChange={handleInputChange}
      />
      <br></br>
      <label>Username</label>
      <br></br>
      <input type="text" name="workinghours" value={user.workinghours} onChange={handleInputChange}
      />
      <br></br>
      <button>Update user</button>
      <br></br>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export { EditUserForm }