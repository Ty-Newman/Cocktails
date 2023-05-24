import React from 'react'

const CocktailCard = (props) => {
    const { name, image, ingredients, instructions} = props;

    return(
        <div className='cocktail-card'>
            <h3 className='cocktail-title'>{name}</h3>
            <img className='cocktail-image' src={image} alt={name} />
            <div className='cocktail-ingredients'>
                <h4>Ingredients:</h4>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );


};

export default CocktailCard;
