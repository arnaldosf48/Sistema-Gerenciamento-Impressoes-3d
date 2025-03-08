import { Wrapper } from "../assets/wrappers/LoginAndRegister";
import Logo from "../assets/Logo.png";
import FormRow from "../components/FormRow.jsx";
import { FaLock, FaRegEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <Wrapper>
      <div className="side">
        <div className="logo">
          <img src={Logo} alt="lexin3d" style={{ width: 50 }} />
          <p>
            LEXIM<strong>3D</strong>
          </p>
        </div>

        <div className="call">
          <h3>Bem vindo !</h3>
          <p>Bom ter você como colaborador.</p>
        </div>
      </div>
      <div className="main">
        <h1>Acesse sua conta</h1>
        <p>Iniciar sessão</p>
        <form className="form" onSubmit={handleLogin}>
          <FormRow
            type="email"
            name="name"
            labelText="Email"
            icon={<FaRegEnvelope />}
          />
          <FormRow
            type="password"
            name="password"
            labelText="Senha"
            icon={<FaLock />}
          />
          <p>Esqueceu sua senha?</p>
          <button
            type="submit"
            className="primary-button"
            style={{ width: 250, height: 60, marginTop: 30 }}
          >
            Entrar
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
