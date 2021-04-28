import {useState} from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

const GameBoard = () => {


    const [cardBlueColor, setCardBlueColor] = useState(false)
    const [cardGreenColor, setCardGreenColor] = useState(false)
    const [cardRedColor, setCardRedColor] = useState(false)
    const [cardOrangeColor, setCardOrangeColor] = useState(false)



    const drop = e => {
        //for dropping the elements into the card piles on the page.
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')
    }

    return (



        <>

        <h1>GameBoard</h1>
        <Card>
        <div className='player'>
        <p>Player 1</p>
        <Draggable>
        <div className='card'>1</div>
        </Draggable>

        <Draggable>
        <div className='card'>6</div>
        </Draggable>

        <Draggable>
        <div className='card'>9</div>
        </Draggable>
        <Draggable>
        <div className='card'>10</div>
        </Draggable>

        <Draggable>
        <div className='card'>12</div>
        </Draggable>
        </div>
        </Card>

        <Card>
        <div className='player'>
        <p>Player 2</p>
        <div className='card'>12</div>
        <div className='card'>8</div>
        <div className='card'>1</div>
        <div className='card'>S</div>
        <div className='card'>S</div>
        </div>
        </Card>

        <Card>

        <div className='game-piles'>
        <div className='large-card'>12</div>
        <div className='large-card'>8</div>
        <div className='large-card'>1</div>
        <div className='large-card'>S</div>

        </div>
        </Card>



        <Card>
        <div className='player'>
        <p>Player 3</p>
        <div className='card'>2</div>
        <div className='card'>7</div>
        <div className='card'>7</div>
        <div className='card'>1</div>
        <div className='card'>11</div>

        </div>
        </Card>

        <Card>
        <div className='player'>
        <p>Player 4</p>
        <div className='card'>11</div>
        <div className='card'>5</div>
        <div className='card'>7</div>
        <div className='card'>2</div>
        <div className='card'>3</div>

        </div>
        </Card>




        </>
    )
}

export default GameBoard


const Card = styled.div 
`
.card{

    display: flex;
    justify-content: center;
    font-size: 1.7rem;
    font-family: sans-serif;
    color: white;
    background-color: blue;
    width: 40px;
    height: 40px;
    margin-bottom: 10%;
    margin: auto;


}

.large-card{
    display: flex;
    justify-content: center;

    font-size: 1.7rem;
    font-family: sans-serif;
    color: white;
    background-color: blue;
    width: 80px;
    height: 80px;
    margin: auto;

}

.player {
    display: flex;
    background-color: orange;
    width: 100%;
    height: 10vh;
    margin-bottom: 10%;
}

.game-piles{

    display: flex;
    background-color: orange;
    width: 100%;
    height: 20vh;
    margin-bottom: 4%;
}

`