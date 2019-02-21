import React from 'react';

const AddButton = ({addItem}) => {
  let addInput;

  return ([
    <input 
      type="text" 
      className="input-box"
      placeholder="Add todo"
      ref = { (value) => {
        addInput = value
      }}
      onKeyPress = {(target) => {
        if(target.charCode==13){
          addItem(addInput.value); 
          addInput.value = ''
        }
      }}
    />,
    <button
      className="add-button"
      onClick={() => {
        addItem(addInput.value); 
        addInput.value = ''
      }}
    >
      Add
    </button>
  ])
}

const SearchBox = ({searchItem}) => {
  return (
    <input 
      type="text" 
      className="search-box"
      placeholder="Filter"
      onChange={(input) => searchItem(input.target.value)}
    />
  )
}

export const ClearButton = ({clearList}) => {
  return (
    <button
      className="clear-button"
      onClick={() => {clearList()}}
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
