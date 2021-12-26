import React from 'react'

const Form = (props) => {
  const {
    name,
    type = "text"
  } = props
  return (
    <form>
      <input
        type={type}
        name={name}
      />

      <button type="submit">Save</button>
    </form>
  )
}

export default Form
