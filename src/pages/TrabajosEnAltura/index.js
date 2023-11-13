/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useCallback, useEffect } from "react";
import { Container, /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";


function TrabajosEnAltura() {

  return (
    <Container>
      <VergeViewer
        src="applications/Trabajos_en_altura/Trabajos_en_altura.html"
        title="Aislamiento y bloqueo"
      />
  
    </Container>
  );
}

export default TrabajosEnAltura;
