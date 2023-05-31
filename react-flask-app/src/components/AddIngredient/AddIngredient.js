import React, { useState } from 'react'
import './AddIngredient.css'

const AddIngredient = () =>{
    const [ingredientData, setIngredientData] = useState({
        ingredientName: '',
        ingredientCost: '',
        ingredientImageURL: ''
    });

    const handleChange = (e) => {
        setIngredientData({...ingredientData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send data to the db here

        console.log(ingredientData);
    };

    return(
        <div className='centered-div'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Field 1:
                        <input type="text" name="ingredient" value={ingredientData.ingredient} onChange={handleChange} />
                    </label>
                    <label>
                        Field 2:
                        <input type="text" name="cost" value={ingredientData.cost} onChange={handleChange} />
                    </label>
                    <label>
                        Field 3:
                        <input type="text" name="ingredientImage" value={ingredientData.ingredientImage} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    );



};

export default AddIngredient;
