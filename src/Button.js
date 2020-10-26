import React from 'react';

function Button(props) {

  const handleClick = () => {
    if (props.value === 'C') {
      props.clearResult()
    } else if (props.value === '=') {
      props.evaluateInput()
    } else {
      props.addToInput(props.value)
    }

  }

  return (
    <button id={props.id} className={props.className} onClick={handleClick}>{props.value}</button>
  )
}

export default Button;