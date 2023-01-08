import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie o seu usuário e compartilhe as suas histórias!</p> 
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" placeholder="Nome do usuário" name="displayName" required />
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" placeholder="E-mail do usuário" name="email" required />
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" placeholder="Insira a sua senha" name="password" required />
            </label>
            <label>
                <span>Confirmação de Senha:</span>
                <input type="password" placeholder="Confirme a sua senha" name="confirmPassword" required />
            </label>
            <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register