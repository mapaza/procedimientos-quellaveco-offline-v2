/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, ButtonAtras, ButtonFinalizar} from "./styles";
import VergeViewer from "../../components/VergeViewer";
import { Link } from 'react-router-dom';


function TrabajosEnCaliente() {

  return (
    <Container>
      <VergeViewer
        src="applications/Trabajos_en_caliente/Trabajos_en_caliente.html"
        title="Aislamiento y bloqueo"
      />
   <Link to="/">
          <ButtonAtras id="btn-volver-menu" style={{display:'none'}} >
          ←
        </ButtonAtras>
    </Link>
    <Link to="/">
          <ButtonFinalizar id="btn_finalizar" style={{display:'none'}} >
          Finalizar
        </ButtonFinalizar>
    </Link>
    </Container>
  );
}

export default TrabajosEnCaliente;
