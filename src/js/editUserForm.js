import React, { useState, useEffect } from 'react'
import '../css/App.css'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {setUser(props.currentUser)}, [props])

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
      <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
      <br></br>
      <label>Working hours</label>
      <br></br>
      <input type="text" name="workinghours" value={user.workinghours} onChange={handleInputChange}/>
      <br></br>
      <button className='smallbutton'>Update user</button>
      <br></br>
      <button className='smallbutton' onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export { EditUserForm }