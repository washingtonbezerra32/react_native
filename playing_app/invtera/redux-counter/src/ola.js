import React from "react";
import PropTypes from "prop-types";

function Ola({nome}){
    return <span>Olá {nome}</span>
}

Ola.protoTypes = {
    nome: PropTypes.string.isRequired
}

Ola.defaultProps = {
    nome: 'Fulano'
}

export default Ola