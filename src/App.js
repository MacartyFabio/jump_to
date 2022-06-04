import jumptoImg from './assets/My_project11.png'
import { useState } from 'react';
import './styles.css'
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="container">
      <div className="container-login">
        <span className="login-form-title">Bem vindo ao Jump To!</span>
        <div className="wrap-login">
          <form className="form-login">
            <span className="login-form-title">
              <img src={jumptoImg} alt="tela de login"/>
            </span>
            <div className="wrap-input">
              <input type="email" 
                className={email !== "" ? 'has-val input' : 'input'} 
                value={email} 
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input type="password" 
                className={password !== "" ? 'has-val input' : 'input'} 
                value={password} 
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
