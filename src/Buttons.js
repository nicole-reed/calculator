import React from 'react';
import Button from './Button';
import './App.css';

const Buttons = (props) => {


  return (
    <div id="buttons" className="gridContainer">

      <Button addToInput={props.addToInput} className="gridItem" id="one" value='1' input />
      <Button addToInput={props.addToInput} className="gridItem" id="two" value='2' />
      <Button addToInput={props.addToInput} className="gridItem" id="three" value='3' />
      <Button addToInput={props.addToInput} className="gridItem" id="add" value='+' />
      <Button addToInput={props.addToInput} className="gridItem" id="four" value='4' />
      <Button addToInput={props.addToInput} className="gridItem" id="five" value='5' />
      <Button addToInput={props.addToInput} className="gridItem" id="six" value='6' />
      <Button addToInput={props.addToInput} className="gridItem" id="subtract" value='-' />
      <Button addToInput={props.addToInput} className="gridItem" id="seven" value='7' />
      <Button addToInput={props.addToInput} className="gridItem" id="eight" value='8' />
      <Button addToInput={props.addToInput} className="gridItem" id="nine" value='9' />
      <Button addToInput={props.addToInput} className="gridItem" id="multiply" value='*' />
      <Button clearResult={props.clearResult} className="gridItem" id="clear" value='C' />
      <Button addToInput={props.addToInput} className="gridItem" id="zero" value='0' />
      <Button addToInput={props.addToInput} className="gridItem" id="decimal" value='.' />
      <Button addToInput={props.addToInput} className="gridItem" id="divide" value='/' />

      <Button evaluateInput={props.evaluateInput} className="gridItem" id="equals" value='=' />
      <Button addToInput={props.addToInput} className="gridItem" id="delete" value='←' />



    </div>
  );
}

export default Buttons;
