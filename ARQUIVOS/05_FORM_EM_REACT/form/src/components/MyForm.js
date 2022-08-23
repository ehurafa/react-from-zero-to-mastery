import './MyForm.css'

function MyForm() {
    return (
        <div>
            {/* criação de form /*/}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" />
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
}

export default MyForm;