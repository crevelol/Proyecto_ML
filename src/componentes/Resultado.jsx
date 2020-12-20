import React from 'react';
import axios from 'axios';

const apiKey = "pczElohYIxt0gfQGR1BkZAD6vF4CKUSJ";

class Resultado extends React.Component{

  state = {
    papers : []
  }

  consulta = () => {
    const query = JSON.stringify([{
      query: this.props.query
    }]);
      axios.post(`https://core.ac.uk:443/api-v2/articles/search?metadata=true&fulltext=true&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${apiKey}`,query)
      .then(res => {
        const papers = res.data;
        this.setState({papers})

        var d = Object.values(this.state.papers[0]);
        this.setState({papers :d[2]})
        
        console.log(this.state.papers);
    })
}

  componentDidMount(){
      this.consulta();
      
    }

  render(){
    if(this.state.papers!==undefined){
      return (<table border="1">
        <tr>
          <th>ID</th>
          <th>TITULO</th>
          <th>KEYWORDS</th>
          <th>ABSTRACT</th>
          <th>OPCIONES  </th>
        </tr>
        {this.state.papers.map(paper =>{
          return(
            <tr key={parseInt(paper.id)}>
            <td>{paper.id}</td>
            <td>{paper.title}</td>
            <td>{paper.topics}</td>
            <td>{paper.description}</td>
            <td><button>Similares</button></td>
            </tr>
          )
        })}
      </table>)
    }
  }
}

export default Resultado;