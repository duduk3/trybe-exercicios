import React, { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
    render(){
        return (
            <div className='content'>{conteudos.map((element) => {
                return (
                    <div>
                        <p>O conteudo é: {element.conteudo}</p>
                        <p>Status: {element.status}</p>
                        <p>Bloco: {element.bloco}</p>
                        <hr/>
                    </div>
                )
            })}</div>
        )
    }
}

export default Content