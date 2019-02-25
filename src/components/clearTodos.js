import React from 'react';
import { connect } from 'react-redux';
import { clearList } from '../actions';

const ClearButton = ({clearList}) => {
  const handleClick = () => {
    clearList()
  }

  return (
    <React.Fragment>
      <button 
        className = "clear-button"
        onClick = { handleClick }
      >
        Clear
      </button>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  clearList: () => dispatch(clearList())
})

export default connect(
  null,
  mapDispatchToProps
)(ClearButton)
