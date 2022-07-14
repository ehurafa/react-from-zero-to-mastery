const Events = () => {

    const hadleMyEvent = (e) => {
        console.log(e)
        console.log('ativou o evento!')
    }

    return (
        <div>
            <div>
                <button onClick={hadleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou!')}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log('Isso não deveria existir!')
                    }
                }}>Clique aqui, por favor.</button>
            </div>
        </div>
    )
}

export default Events