import React from 'react';

class Resultado extends React.Component{
  render(){
    return <div> {this.props.papers.map(e => <p key={parseInt(e.id)}>
      {e.authors}-{e.key}
    </p>) }

    </div>
  }
  
}

export default Resultado;