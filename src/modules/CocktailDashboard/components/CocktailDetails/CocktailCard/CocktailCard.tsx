import { ICocktail } from 'services/cocktailService/types'
import { LazyImage } from 'components/LazyImage'
import './CocktailCard.scss'

interface ICardProps {
  cardData: ICocktail
}

function Card({ cardData }: ICardProps) {
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
  } = cardData

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
  ].filter(ingredient => ingredient !== null)

  const measures = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
  ].filter(measure => measure !== null)

  return (
    <div className='cocktail-card'>
      <div className='cocktail-card-description'>
        <h2>{strDrink}</h2>
        <div className='cocktail-card-description_tags'>
          <div>{strCategory}</div>
          <div>{strAlcoholic}</div>
          <div>{strGlass}</div>
        </div>

        <div className='cocktail-card-description_instructions'>
          <span>Instructions:</span>

          {strInstructions}
        </div>

        <div className='cocktail-card-description_ingredients'>
          <span>List of ingredients:</span>
          <div>
            <ul>
              {ingredients?.map((ingredient, index) => (
                <li key={`${ingredient}-${index}`}>{ingredient}</li>
              ))}
            </ul>
            <ul>
              {measures?.map((measure, index) => (
                <li key={`${measure}-${index}`} className='grey-text'>
                  {measure}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='cocktail-card-image'>
        <LazyImage imageSrc={strDrinkThumb} imageAlt={strDrink} />
      </div>
    </div>
  )
}

export default Card
