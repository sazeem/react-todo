export const addItem = (text, id) => ({
  type: 'ADD_ITEM',
    text, 
    id
});

export const removeItem = id => ({
  type: 'REMOVE_ITEM', 
    id
});

export const searchItem = text => ({
  type: 'SEARCH_ITEM', 
    text
});

export const clearList = () => ({
  type: 'CLEAR_LIST'
});
  