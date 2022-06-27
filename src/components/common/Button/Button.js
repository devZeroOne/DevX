import React from 'react';
import './button.css'
const Button = ({text,style,hangleLogin}) => {
    return <button onClick={hangleLogin} style={style} className="buttonStyle">{text}</button>
};

export default Button;