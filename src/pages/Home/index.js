import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Buttons, Tests, StyledLink } from "../../components/styleHome.js";
import TestsList from "../../components/TestsList.js";
import { api } from "../../services/api.js";

export default function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    search: "",
  });
  const [tests, setTests] = useState([]);

  useEffect(() => {
    api.getTestsByDiscipline(token)
    .then((response) => {
        setTests(response.data)
    })
    .catch((error) => {
    console.log(error.response.data)
    });
  }, [])

  function handleInputChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });

    // e.preventDefault();
    //   api.postSignIn(inputData)
    //     .then((response) => {
    //         console.log("sucess")
    //     })
    //     .catch((error) => {
    //       console.log(error.response.data)
    //     });
    }

  if(!tests){
      return("sem tests")
  }

  return (
    <Container>
        <div className="input">
            <input
                type="text"
                placeholder="Pesquise por disciplina"
                name="search"
                value={inputData.search}
                onChange={handleInputChange}
            ></input>
        </div>
        <div className="body">
            <Buttons>
                <button>DISCIPLINAS</button>
                <button>PESSOA INSTRUTORA</button>
                <button>ADICIONAR</button>
            </Buttons>

            <Tests>
                {tests.map((term)=> { return <TestsList tests={term} /> })}
            </Tests>
        </div>
    </Container>
  );
}
