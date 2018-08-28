import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {

    state = {
        show: null
    }

    componentDidMount() {

        const { id } = this.props.match.params;
        
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response) => response.json())
            .then(json => this.setState({ show: json }));
    }

    render() {

        const {show} = this.state;
       
        return(
            <div>
                { show === null && <Loader /> }
                { show !== null
                    &&
                    <div>
                        <h2>{show.name}</h2>
                        <p>Estreado em: {show.premiered}</p>
                        <p>Nota: {show.rating.average}</p>
                        <p>Nro de Episódios: {show._embedded.episodes.length}</p>
                        <p>
                            <img alt="Serie" src={show.image.medium} />
                        </p>
                    </div> 
                }
            </div>
        )
    }
}

export default SingleSeries;