import React from 'react';
import Button from '../../common/Button/Button';

const SliderDesign = ({ text, img }) => {
    return (
        <div className="sliderContainer">
            <div className="sliderText">
                <div>
                    <h1>{text}</h1>
                    <Button text="Read More" />
                </div>
            </div>
            <div className="sliderImage">
                <img src={img} alt={text} />
            </div>

        </div>
    );
};

export default SliderDesign;