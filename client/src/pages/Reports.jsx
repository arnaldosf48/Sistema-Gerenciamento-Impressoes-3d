import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("https://localhost:5078/api/reports");
        setReports(response);
      } catch (error) {
        console.log("erro:", error);
      }
    };
    fetchReports();
  }, []);

  return (
    <Wrapper>
      <div className="reports">
        {reports.map((report, index) => (
          <div className="card" key={index}>
            <h3>{report.name}</h3>
            <p>Duração: {report.duration}</p>
          </div>
        ))}
      </div>
      <div className="side">
        <strong>
          Agradecemos por fazer <br />
          parte do nosso projeto!
        </strong>
        <div className="button" onClick={() => navigate("/data")}>
          Acesse seus dados
        </div>
      </div>
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
`;

export default Reports;
