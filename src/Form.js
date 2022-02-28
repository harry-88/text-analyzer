import React,{ useState } from 'react'
import './App.css';
export default function Form() {


    const changeValue = (event)=>{
        setText(event.target.value);
    }
    const uppercase=()=>{
        setText(text.toUpperCase());
        
    }
    
    const lowercase=()=>{
        setText(text.toLowerCase());
    }
    
    const clear=()=>{
        setText('');
    }
    
    const [text, setText] = useState('');
    return (
        <>
            <h1 >Enter text here</h1>
            <div className="my-3">
                <textarea className="form-control" placeholder="enter text here" onChange={changeValue} value={text}   rows="10"></textarea>
            </div>

            <button  className="btn btn-success" onClick={uppercase}>Convert to upper case</button>
            <button className="btn btn-success"  onClick={lowercase}>Convert to lower case</button>
            <button className="btn btn-danger"  onClick={clear}>clear</button>
            <hr />
            <p>string have {text.length} characters and {text.split(' ').length} words and {text.split('.').length} sentences.</p>
        </>

    )
}
