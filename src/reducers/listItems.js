const listItems = (state = [], action) => {
	switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          text: action.text,
          id: action.id
        }
      ]
    case 'REMOVE_ITEM':
      return [
        ...state.filter(item => item.id !== action.id)
      ]
    case 'CLEAR_LIST':
      return []
    default:
      return state
	}
}

export default listItems;
