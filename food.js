import { onSnake, expandSnake } from './snake.js'

let food = { x: 1, y: 1 }
const expansion_Rate = 1;

export function update() {
    if (onSnake(food)) { 
        expandSnake(expansion_Rate)
        food = { x: 10, y: 10 }
    }
    console.log('Update Food')
}

export function draw(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }