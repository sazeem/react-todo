import React from 'react';

const AddButton = ({addItem}) => {
  let addInput;

  const handleClick = () => {
    addItem(addInput.value); 
    addInput.value = ''
  };

  const handleKeyPress = (target) => {
    if(target.charCode==13){
      handleClick();
    }
  }

  return ([
    <input 
      type="text" 
      className="input-box"
      placeholder="Add todo"
      ref = { (value) => {
        addInput = value
      }}
      onKeyPress = { handleKeyPress }
    />,
    <button
      className="add-button"
      onClick={ handleClick }
    >
      Add
    </button>
  ])
}

const SearchBox = ({searchItem}) => {
  const handleChange = (input) => {
    searchItem(input.target.value)
  }

  return (
    <input 
      type="text" 
      className="search-box"
      placeholder="Filter"
      onChange={ handleChange }
    />
  )
}

export const ClearButton = ({clearList}) => {
  const handleClick = () => {
    clearList()
  }

  return (
    <button
      className="clear-button"
      onClick={ handleClick }
    >
      Clear
    </button>
  )
}

export const Action = ({addItem, searchItem, dataLength, listLength}) => {
  return (
    <div>
      <AddButton addItem={addItem} />
      { (dataLength || listLength) ? <SearchBox searchItem={searchItem}/>: null }
    </div>
  );
};
