import { IoArrowBackSharp } from "react-icons/io5";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const stock = [
  {
    id: 1,
    name: "Filamento PLA",
    description: "Filamento de plástico para impressoras 3D",
    quantity: 10,
    validity: "2025-12-31",
  },
  {
    id: 2,
    name: "Filamento ABS",
    description: "Filamento resistente e durável",
    quantity: 5,
    validity: "2025-11-30",
  },
  {
    id: 3,
    name: "Bicos de Impressora",
    description: "Bicos de reposição para extrusora",
    quantity: 20,
    validity: "2026-01-15",
  },
  {
    id: 4,
    name: "Cinta de Aquecimento",
    description: "Cinta para aquecer a base de impressão",
    quantity: 15,
    validity: "2025-10-01",
  },
  {
    id: 5,
    name: "Placa de Construção",
    description: "Base para a impressão 3D",
    quantity: 30,
    validity: "2025-05-30",
  },
  {
    id: 6,
    name: "Resina UV",
    description: "Resina líquida para impressoras 3D de cura UV",
    quantity: 8,
    validity: "2025-09-20",
  },
  {
    id: 7,
    name: "Lubrificante para Eixos",
    description: "Lubrificante para partes móveis da impressora",
    quantity: 25,
    validity: "2025-07-15",
  },
  {
    id: 8,
    name: "Filtro HEPA",
    description: "Filtro para purificar o ar durante a impressão",
    quantity: 12,
    validity: "2025-08-10",
  },
];

const Stock = () => {
  const handleEdit = (id) => {
    console.log("putController:", id);
  };

  const handleDelete = (id) => {
    console.log("deleteController:", id);
  };

  return (
    <Wrapper>
      <NavLink to="/reports" className="header">
        <span className="back">
          Voltar <IoArrowBackSharp />
        </span>
      </NavLink>
      <div className="container">
        {stock.map((item) => (
          <div className="item" key={item.id}>
            <div className="item-header">
              <h3>{item.name}</h3>
            </div>
            <div className="item-body">
              <p>{item.description}</p>
              <p>
                <strong>Quantidade:</strong> {item.quantity}
              </p>
              <p>
                <strong>Validade:</strong> {item.validity}
              </p>
            </div>
            <div className="item-footer">
              <button className="btn" onClick={() => handleEdit(item.id)}>
                <FaEdit /> Editar
              </button>
              <button className="btn" onClick={() => handleDelete(item.id)}>
                <FaTrash /> Apagar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Stock;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;

  .back:hover {
    color: #555;
  }

  .header {
    text-decoration: none;
    background-color: var(--primary-blue);
    color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    z-index: 10;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 100px 20px 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .item {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .item-header {
      font-size: 20px;
      font-weight: bold;
      color: var(--primary-blue);
    }

    .item-body {
      font-size: 14px;
      color: #555;
      flex-grow: 1;
    }

    .item-footer {
      display: flex;
      justify-content: space-between;
    }

    .btn {
      background-color: var(--primary-blue);
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      display: flex;
      align-items: center;
      gap: 5px;

      &:hover {
        background-color: var(--secondary-blue);
      }
    }
  }
`;
