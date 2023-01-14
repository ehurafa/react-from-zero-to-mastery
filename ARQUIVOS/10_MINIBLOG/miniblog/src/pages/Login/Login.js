import styles from './Login.module.css'

import { useState, useEffect } from 'react'
import { useAutehtication } from '../../hooks/useAuthentication'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAutehtication()

    const handleSubmit = async (e) => {
      e.preventDefault()

      setError('')

      const user = {
          email,
          password
      }

      const res = await createUser(user)
      
  }

  useEffect(() => {

      if(authError ) {
          setError(authError)
      }

  }, [authError])

  return (
    <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça o login para poder utilizar o sistema.</p>
        <form>
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
            {!loading && <button className="btn" onClick={handleSubmit}>Entrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login