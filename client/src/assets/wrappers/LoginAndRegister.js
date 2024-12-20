import styled from "styled-components";

export const Wrapper = styled.div`
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

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    width: 60vw;
    height: 100vh; /* Garante que ocupe a altura completa da viewport */
  }
  .main p {
    color: var(--secondary-gray);
  }
  .main h1 {
    color: var(--primary-blue);
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding: 50px;
    gap: 5px;
  }

  .call {
    padding-bottom: 50px;
  }

  .form-row {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  }

  .icon {
    position: absolute;
    left: 0.5rem;
    color: var(--primary-blue);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .form-input {
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    width: 600px;
    border: none;
    border-radius: 2px;
    font-size: 1rem;
    height: 2.5rem;
    outline: none;
    transition: border-color 0.3s ease;
    background-color: var(--primary-gray);
    padding: 25px;
    padding-left: 40px;

    &:focus {
      border-color: var(--secondary-blue);
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
    }
  }

  .form-label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--primary-blue);
  }
`;
