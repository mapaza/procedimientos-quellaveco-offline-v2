/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useCallback, useEffect } from "react";
import { Container, /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";


function TrabajosEnEspaciosConfinados() {

  return (
    <Container>
      <VergeViewer
        src="applications/Espacios_confinados_v01/Espacios_confinados_v01.html"
        title="Aislamiento y bloqueo"
      />
  
    </Container>
  );
}

export default TrabajosEnEspaciosConfinados;
