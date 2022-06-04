import jumptoImg from './assets/My_project11.png'
import './styles.css'
function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="form-login">
            
            <span className="login-form-title">Bem Vindo</span>
            <span className="login-form-title">
              <img src={jumptoImg} alt="tela de login"/>
            </span>

            <div className="wrap-input">
              <input type="email" className="input"/>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input type="password" className="input" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt_1">Não possui conta?</span>
              <a className="txt2" href="#">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
