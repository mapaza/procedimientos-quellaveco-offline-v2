/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, ButtonAtras, ButtonFinalizar} from "./styles";
import VergeViewer from "../../components/VergeViewer";
import { Link } from 'react-router-dom';


function TrabajosEnEspaciosConfinados() {

  return (
    <Container>
      <VergeViewer
        src="applications/Espacios_confinados_v01/Espacios_confinados_v01.html"
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

export default TrabajosEnEspaciosConfinados;
