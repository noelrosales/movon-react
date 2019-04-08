import React from 'react'
import Banner from '../../components/Banner';
import DestinationsData from '../../data/destinations';

import './style.css';

const Destinations = () => {
  return (
    <>
        <Banner text="Our Destinations | Routes"/>
        <div className="Destinations container">  
          {
            DestinationsData.map((destination,i) => {
              return(
                <div className="row mb-5" key={i} style={{textAlign: 'center'}}>
                  <div className="col-md-12 d-flex justify-content-center">
                    <h1 className="route-name">{destination.route}</h1>
                  </div>
                    {
                      destination.destinations.map((destination,i) => {
                        return(
                          <div className="col-md-4 mb-4" key={i}>
                            <h4>{destination.name}</h4>
                            <ul className="places">
                              {
                                destination.places.map((place, i)=> {
                                  return(
                                    <li key={i}>{place}</li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        ) 
                      })
                    }
                </div>
              )
            })
          }
        </div>
    </>
  )
}

export default Destinations
