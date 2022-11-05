import './GameOver.css'
function GameOver({retry}) {
    return (<div>
        <h1>Game over</h1>
        <button onClick={retry}>Resetar o jogo</button>
        </div>);
}

export default GameOver;