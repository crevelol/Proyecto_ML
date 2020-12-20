import React from 'react';
import '../assets/css/App.css';
import axios from 'axios';


const apiKey = "pczElohYIxt0gfQGR1BkZAD6vF4CKUSJ";



class Buscador extends React.Component{
    
    state = {
        show : true,
        query : '',
        papers : []
    }

    handleChange = event => {
        this.setState({ query: event.target.value });
        console.log(event.target.value);
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({show : !this.state.show})

        const query = JSON.stringify([{
          query: this.state.query
        }]);

        axios.post(`https://core.ac.uk:443/api-v2/articles/search?metadata=true&fulltext=true&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${apiKey}`,query)
          .then(res => {
            const papers = res.data;
            this.setState({papers});
          })
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
            var i = this.state.papers;
            var j = i[0];
            console.log(Object.values(j));
            return (
                
                <h1>Hola</h1>
            )
        }
  }
}

export default Buscador;

