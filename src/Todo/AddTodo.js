import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaulValue = '') {
  const [value, setValue] = useState(defaulValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('');

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form style={{ display: 'flex' , alignItems: 'center', justifyContent: 'flex-start',marginBottom: '1rem', width: '100%' }} onSubmit={ submitHandler }>
      <input style={{ marginRight: '15px', width: '300px', height: '30px' }} {...input.bind} />
      <button style={{ marginRight: '15px', height: '35px' }} type="submit">Add todo</button>
    </form>
  )

}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo
