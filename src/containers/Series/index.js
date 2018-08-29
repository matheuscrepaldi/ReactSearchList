import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
import TextField from '../../components/TextFields';

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }

    onSeriesInputChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true});

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(json => this.setState({ series : json, isFetching: false}));
    }

    render() {

        const {series, seriesName, isFetching} = this.state;

        return(
            <div>
                 <Intro message="Aqui você pode encontrar todas as suas séries favoritas" />
                <div>
                    <TextField value={seriesName} change={this.onSeriesInputChange} />
                </div>
                { !isFetching && series.length === 0  && seriesName.trim() === '' && <p>Por favor, insira o nome da série</p> }
                { !isFetching && series.length === 0  && seriesName.trim() !== '' && <p>Nehuma série foi encontrada na sua pesquisa</p> }
                { isFetching && <Loader /> }
                { !isFetching && <SeriesList list={this.state.series} /> }
                
            </div>

        )
    }
}

export default Series