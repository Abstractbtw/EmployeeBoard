import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', workinghours: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.currentTarget
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.workinghours) return
    props.addUser(user)
    setUser(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br></br>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <br></br>
      <label>Working hours</label>
      <br></br>
      <input
        type="text"
        name="workinghours"
        value={user.workinghours}
        onChange={handleInputChange}
      />
      <br></br>
      <button>Add new user</button>
    </form>
  )
}

export { AddUserForm }