import React, { useState } from 'react';

export default function Textarea(props) {
//   extra spaces start

const removespace = () =>
{
    const newtext = text.replace(/ {1,}/g," ");
    setText(newtext);
}
// extra spaces end
    const handleUpchange = () => {
        const newtext = text.toUpperCase();
        setText(newtext);
        // props.showAlert("Converted into UPPERCASE","Success : ");

    }
    const handlelowerchange = () => {
        const newtext = text.toLowerCase();
        setText(newtext);
        // props.showAlert("Converted into lowercase","Success : ");

    }
    const handleclear = () => {
        setText("");
    }

    const handleOnchange = (event) => {
        setText(event.target.value)

    }

    let [text, setText] = useState("");

    return (
        <>
            <div className={`container py-5`}>
                <h1>{props.heading}</h1>
                <div className="form-group py-4 ">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="textarea" rows="10"></textarea>
                </div>
                <button className="btn btn-light mx-2" onClick={handleUpchange}>Convert To UpperCase</button>
                <button className="btn btn-light my-3 mx-2" onClick={handlelowerchange}>Convert To LowerCase</button>
                <button className="btn btn-light my-3 mx-2" onClick={handleclear}>Clear Text</button>
                <button className="btn btn-light my-3 mx-2" onClick={removespace}>Remove Extra Spaces</button>
            
            </div>

            <div className="container py-2 ">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Min you will take for reading your text</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
