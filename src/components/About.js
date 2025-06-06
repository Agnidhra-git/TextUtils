import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black"
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const handleMode = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                border: "1px solid black"
            });
            setBtnText("Enable Dark Mode");
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            });
            setBtnText("Enable Light Mode");
        }
    };

    return (
        <>
            <div className="container my-4" style={myStyle}>
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item my-3" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About Us 1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes...
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                About Us 2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes...
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                About Us 3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className="btn btn-primary mx-4" onClick={handleMode}>{btnText}</button>
            </div>
        </>
    );
}
