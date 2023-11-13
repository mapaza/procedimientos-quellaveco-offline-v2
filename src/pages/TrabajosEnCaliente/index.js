/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useCallback, useEffect } from "react";
import { Container, /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";


function TrabajosEnCaliente() {

  return (
    <Container>
      <VergeViewer
        src="applications/Trabajos_en_caliente/Trabajos_en_caliente.html"
        title="Aislamiento y bloqueo"
      />
  
    </Container>
  );
}

export default TrabajosEnCaliente;
