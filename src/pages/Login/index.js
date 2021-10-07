import React from 'react';
import { FaAddressCard, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './login.css'

const Login = () => {
  return (
    <div className="container">
      <div className="center">
        <div className="form-login">
          <h1>LOGIN</h1>

          <form action="submit" method="post">
            <div className="field-user">
              <FaAddressCard className="user" />
              <input type="text"
                placeholder="Digite seu usuário"
              />
            </div>
            <div className="field-password">
              <FaLock className="password" />
              <input type="password"
                placeholder="Digite sua senha"
              />
            </div>

          </form>
          <div className="buttons">
            <Link className="button-login" to="/home" >
              Login
            </Link>

            <Link className="button-cadastro" to="/create-user">
              Cadastrar-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;