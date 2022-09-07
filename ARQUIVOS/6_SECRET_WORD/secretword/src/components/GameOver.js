import './GameOver.css'
function GameOver({retry}) {
    return (<div>
        <h1>Game over</h1>
        <button onClick={retry}>resetar o jogo</button>
        </div>);
}

export default GameOver;