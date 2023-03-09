import "./Auth.css";

// Components
import { Link } from 'react-router-dom';
import Message from '../../components/Message';

// Hooks
import { useEffect, useState } from 'react';
import { useSelect, useDispatch } from 'react-redux';

// Redux 


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça o login para ver o que há de novo.</p>
      <form onSubmt={handleSubmit}>
        <input type="text" placeholder="E-mail" inChange={(e) => setEmail(e.target.value)} value={email || ''} />
        <input type="password" placeholder="Senha" inChange={(e) => setPassword(e.target.value)} value={password || ''} />
        <input type="submit" placeholder="Entrar"/>
      </form>
      <p>Não tem uma conta? <Link to="/register">Clique aqui</Link></p>
    </div>
  )
}

export default Login