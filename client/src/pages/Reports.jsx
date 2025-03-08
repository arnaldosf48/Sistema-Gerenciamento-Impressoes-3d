import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const reports = [
  { name: "Projeto A", duration: "2h" },
  { name: "Projeto B", duration: "1h" },
  { name: "Projeto C", duration: "3h" },
  { name: "Projeto D", duration: "1h" },
];

const Reports = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDuration, setProjectDuration] = useState("");

  const handleAddProject = () => {
    console.log("Projeto Adicionado:", { projectName, projectDuration });
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="reportsDiv">
        <div className="reports">
          {reports.map((report, index) => (
            <div className="card" key={index}>
              <h3>{report.name}</h3>
              <p>Duração: {report.duration}</p>
            </div>
          ))}
        </div>
        <button className="submit" onClick={() => setIsModalOpen(true)}>
          Adicionar Projeto
        </button>
      </div>

      <div className="side">
        <strong>
          Agradecemos por fazer <br />
          parte do nosso projeto!
        </strong>
        <div className="button" onClick={() => navigate("/stock")}>
          Acessar estoque
        </div>
      </div>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <h2>Adicionar Projeto</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Nome do Projeto:
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
              </label>
              <label>
                Duração do Projeto:
                <input
                  type="text"
                  value={projectDuration}
                  onChange={(e) => setProjectDuration(e.target.value)}
                  required
                />
              </label>
              <div className="modalButtons">
                <button className="submit" onClick={handleAddProject}>
                  Adicionar
                </button>
                <button
                  className="submit"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;

  .reports {
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

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

  .button {
    border: 1px solid #f5f5f5;
    padding: 10px;
    border-radius: 25px;
    margin: 50px;
    cursor: pointer;
  }

  .card {
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .card h3 {
    margin: 0;
    color: #333;
  }

  .card p {
    margin: 5px 0 0;
    color: #666;
  }

  .submit {
    background-color: var(--primary-blue);
    border: none;
    padding: 15px;
    color: #fff;
    border-radius: 15px;
    margin: 25px;
  }

  .submit:hover {
    transition: all linear 0.3s;
    background-color: #333;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .modalButtons {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
`;

export default Reports;
