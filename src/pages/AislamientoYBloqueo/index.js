/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useCallback, useEffect } from "react";
import { Container, ButtonAtras} from "./styles";
import VergeViewer from "../../components/VergeViewer";
import { Link } from 'react-router-dom';


function AislamientoYBloqueo() {

  return (
    <Container>
      <VergeViewer
        src="applications/Aislamiento_y_bloqueo/Aislamiento y bloqueo.html"
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

export default AislamientoYBloqueo;
