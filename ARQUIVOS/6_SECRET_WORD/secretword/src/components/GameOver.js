import './GameOver.css'
function GameOver({retry}) {
    return (<div>
        game over
        <button onClick={retry}>resetar o jogo</button>
        </div>);
}

export default GameOver;