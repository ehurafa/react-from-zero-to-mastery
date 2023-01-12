import styles from './Register.module.css'

import { useState, useEffect } from 'react'
import { useAutehtication } from '../../hooks/useAuthentication'

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAutehtication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }

        console.log('user ', user)

        if(password !== confirmPassword) {
            setError('As senhas precisam ser iguais!')
            return
        }

        const res = await createUser(user)
        
    }

    useEffect(() => {

        if(authError ) {
            setError(authError)
        }

    }, [authError])

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie o seu usuário e compartilhe as suas histórias!</p> 
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input
                    type="text"
                    placeholder="Nome do usuário"
                    name="displayName"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    />
            </label>
            <label>
                <span>E-mail:</span>
                <input
                    type="email"
                    placeholder="E-mail do usuário"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </label>
            <label>
                <span>Senha:</span>
                <input
                    type="password"
                    placeholder="Insira a sua senha"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />
            </label>
            <label>
                <span>Confirmação de Senha:</span>
                <input
                    type="password"
                    placeholder="Confirme a sua senha"
                    name="confirmPassword"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}   
                    />
            </label>
            {!loading && <button className="btn" onClick={handleSubmit}>Cadastrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register