import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
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
          <h3>Consulte seus relatórios disponíveis!</h3>
          <div className="button" onClick={() => navigate("/reports")}>
            Consultar Relatórios
          </div>
        </div>
      </div>
      <h3>
        Olá usuário <FaUser />
        <div className="LandingSpan">user.name</div>
        <div className="LandingSpan">user.name</div>
        <div className="LandingSpan">user.name</div>
      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;

  .side {
    background-color: var(--primary-blue);
    width: 40vw;
    height: 100vh;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
  }

  .LandingSpan {
    background-color: #f5f5f5;
    border-radius: 15px;
    padding: 10px 30px;
    min-width: 500px;
    margin: 10px 15px;
    font-weight: 400;
  }

  .button {
    border: 1px solid #f5f5f5;
    padding: 10px;
    border-radius: 25px;
    margin: 50px;
    cursor: pointer;
  }
`;

export default LandingPage;
