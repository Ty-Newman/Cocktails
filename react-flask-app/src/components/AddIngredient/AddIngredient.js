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
                        Ingredient Name:
                        <input type="text" name="ingredientName" value={ingredientData.ingredientName} onChange={handleChange} />
                    </label>
                    <label>
                        Ingredient cost:
                        <input type="text" name="ingredientCost" value={ingredientData.ingredientCost} onChange={handleChange} />
                    </label>
                    <label>
                        Ingredient img URL:
                        <input type="text" name="ingredientImageURL" value={ingredientData.ingredientImageURL} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    );



};

export default AddIngredient;
