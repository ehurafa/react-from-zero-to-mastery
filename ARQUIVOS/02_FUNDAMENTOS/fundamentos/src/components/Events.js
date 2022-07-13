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
        </div>
    )
}

export default Events