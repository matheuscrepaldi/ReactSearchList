import React from 'react';
import './index.css';
//import {Link} from 'react-router-dom';
import SeriesCard from '../Card';

// const SeriesListItem = ({series}) => (
//     <li>
//         <Link to={`/series/${series.show.id}`}>
//             {series.show.name}
//         </Link>
//     </li> 
// )

const SeriesList = props => {
    console.log(props);
    return(
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    // <SeriesListItem  series={series} key={series.show.id} />   
                    <SeriesCard
                        series={series}
                        key={series.show.id}
                        title={series.show.name}
                        subheader={series.show.premiered}
                        img={series.show.image !== null ? series.show.image.medium : "https://dummyimage.com/300x200/fff/000000.jpg&text=Image+Not+Found"}
                        genre={series.show.genres}
                        type={series.show.type}
                        summary={series.show.summary}
                        />                 
                ))}    
            </ul>
            
                
        </div>
    )
}
export default SeriesList;