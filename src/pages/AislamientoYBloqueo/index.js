/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useCallback, useEffect } from "react";
import { Container, /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";


function AislamientoYBloqueo() {

  return (
    <Container>
      <VergeViewer
        src="applications/Aislamiento_y_bloqueo/Aislamiento y bloqueo.html"
        title="Aislamiento y bloqueo"
      />
  
    </Container>
  );
}

export default AislamientoYBloqueo;
