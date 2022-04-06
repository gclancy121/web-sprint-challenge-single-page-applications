import React from 'react';
//this sets up my form


function Form(props) {
const { values, update, errors, submit } = props;
const onSubmit = evt => {
    evt.preventDefault();
    submit();
}
const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    update(name, valueToUse)
}




return (
    <form onSubmit={onSubmit} id="pizza-form">
         <div className='errors'>
         <p>{errors.name}</p>
         </div>
        <div >
            <label>Name For Order
                <input
                    id='name-input'
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    placeholder='Type your name here'
                />

            </label>
        </div>
        <div >
            <h2>Size</h2>
            <label>Choose your size
                <select onChange={onChange} value={values.size} name='size' id='size-dropdown'>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='extra large'>Extra Large</option>
                </select>
            </label>
        </div>
        <div id='toppings'>
            <h2>Toppings</h2>
            <label>Sausage
                <input 
                    type='checkbox'
                    name='sausage'
                    onChange={onChange}
                    checked={values.sausage}
                />
            </label>
            <label>Pepperoni
                <input 
                    type='checkbox'
                    name='pepperoni'
                    onChange={onChange}
                    checked={values.pepperoni}
                />
            </label>
            <label>Ham
                <input 
                    type='checkbox'
                    name='ham'
                    onChange={onChange}
                    checked={values.ham}    
                />
            </label>
            <label>Bacon
                <input
                    type='checkbox'
                    name='bacon'
                    onChange={onChange}
                    checked={values.bacon}
                />
            </label>
        </div>
        <div >
            <input 
                id='special-text'
                type='text'
                name='specialText'
                value={values.specialText}
                onChange={onChange}
                placeholder='Special instructions here'
            />
        </div>
        <div>
            <input type='submit' id='order-button'/>
        </div>
    </form>
)}
export default Form;