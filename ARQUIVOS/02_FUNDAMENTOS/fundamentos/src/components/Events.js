const Events = () => {

    const hadleMyEvent = (e) => {
        console.log(e)
        console.log('ativou o evento!')
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
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
            {renderSomething(true)}
        </div>
    )
}

export default Events