import React from 'react';
import category from '../../../database/category.json'
import './category.css'

const Category = () => {
    return (
        <div>
            <h5 className="categoryTitle">DevX</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque modi exercitationem vel commodi dolores illo eius alias molestiae, nemo magni, laudantium, nesciunt tenetur excepturi? Vel iusto possimus saepe ex quam?</p>
            <h5 className="categoryTitle">Explore Topics</h5>
            {
                category.map(item =>

                    <div className="categoryCard">
                        <p>{item.category}</p>
                        <p>{item.numberOfPost}</p>
                    </div>

                )
            }

        </div>
    );
};

export default Category;