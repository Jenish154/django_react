import React, { useState } from 'react';


function MainComponent() {
    const [text, setText] = useState('');

    async function handleClick() {
        let inp = document.getElementById('inp');
        let value = inp.value;
        if (value === '') {
            prompt("Write something to submit");
            return;
        }
        setText(value);
        inp.value = '';
        let maxComponent = document.getElementById('maxLength');
        let maxValue;
        if(maxComponent.value === '' || maxComponent.value<0) {
            console.log('nothing')
            maxValue = 300;
        }else {
            maxValue = maxComponent.value;
        }
        maxComponent.value = '';
        fetch('/api?' + new URLSearchParams({query: value, maxLength: maxValue}))
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('response').innerHTML = data.content;
        });

    }

    console.log(text);
    return(
        <div className='container'>
            <div className='form-group'>
                <label htmlFor='inp'>Enter your prompt here</label>
                <textarea name="inp" id="inp" cols="30" rows="10" className='form-control'></textarea>
                <label htmlFor="maxLength">Maximun response length</label>
                <input type="number" className='form-control' id='maxLength' />
                <button onClick={handleClick} type='submit' className='btn btn-outline-info'>Enter</button>
            </div>
            <div className='container'>
                <h2>Your response is:</h2>
                <p id='response'></p>
            </div>
        </div>
    );
}

export default MainComponent;