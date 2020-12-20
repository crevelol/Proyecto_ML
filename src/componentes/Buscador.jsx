import React from 'react';
import '../assets/css/App.css';

import Resultado from './Resultado';

class Buscador extends React.Component{
    
    state = {
        show : true,
        query : '',
    }

    handleChange = event => {
        this.setState({ query: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({show : !this.state.show})
        
    }

    render(){
        
        if(this.state.show) {
            return (
                <div className="Buscador">
                  <form onSubmit={this.handleSubmit}>
                  <table className="Tabla">
                    <tbody>
                        <tr>
                            <td>
                            <input className="bus" type="text" name="query" onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <button className="bus" type="submit">Buscar</button>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                  </form>
              </div>
            );
        }else{
            return (
                <Resultado query={this.state.query}/>
            )
            
        }
  }
}

export default Buscador;

