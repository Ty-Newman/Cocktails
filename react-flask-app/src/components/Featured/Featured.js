import React from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import '../CocktailCard/CocktailCard.css';

const Featured = () => {
    // Filler cocktail data
    const cocktailData = [
        {
          name: 'Mojito',
          image: 'https://i.imgur.com/BRso4zr.jpeg',
          ingredients: ['Rum', 'Mint', 'Sugar', 'Lime', 'Club Soda'],
          instructions: 'Muddle mint leaves with sugar and lime juice...',
        },
        {
            name: 'Old Fashioned',
            image: 'https://www.liquor.com/thmb/wm9ICT4sskWaeUONYmoCqiTEjLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg',
            ingredients: ['Burbon', 'Simple Syrup', 'Orange peel', 'Bitters',],
            instructions: 'Pour ingredients into a rocks glass with a large ice cube. Stir and then express the orange peel and add it as a garnsih',
          },
      ];

    return(
        <div>

            <div className="cocktail-card-container">
                {cocktailData.map((cocktail, index) => (
                    <CocktailCard
                    key={index}
                    name={cocktail.name}
                    image={cocktail.image}
                    ingredients={cocktail.ingredients}
                    instructions={cocktail.instructions}
                    />
                    ))}
            </div>
        </div>
    );
};

export default Featured;
