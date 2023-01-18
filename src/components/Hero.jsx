import React from "react";


const Hero = () => {
    return (
        <div className="messagebox">
            <form>
                <label>
                    <p className="inputText">Create custom framed art from any text with the power of AI</p>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Create Yours" />
            </form>
        </div>
    );
}

export default Hero;