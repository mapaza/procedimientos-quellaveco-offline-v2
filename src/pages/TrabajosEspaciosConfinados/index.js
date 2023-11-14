/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useCallback, useEffect } from "react";
import { Container, ButtonAtras} from "./styles";
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
        &#11164;
        </ButtonAtras>
      </Link>
    </Container>
  );
}

export default TrabajosEnEspaciosConfinados;
