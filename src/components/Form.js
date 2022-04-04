import React from 'react';
//this sets up my form


function Form(props) {
const { value, update } = props;
const onChange = evt => {
    const name = evt.target.name;
    const {value} = evt.target;
    update(name,value);
}


return (
    <form id="pizza-form">
        <div id='name-input'>
            <label>Name For Order
                <input
                type='text'
                name='name'
                value={value}
                placeholder='Type your name here'
                minLength='2'
                onChange={onChange}
                />

            </label>
        </div>

    </form>
)}
export default Form;