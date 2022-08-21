import { useState } from "react";

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input 
        type="text"
        placeholder="Search for GIF." 
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
