import React from 'react'

function Button(props) {
    const styleButton = {

    }
  return (
    <button className='btn btn-secondary  mx-2' onClick={props.onClick}>{props.children}</button>
  )
}

export default Button