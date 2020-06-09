import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/reducerActions';

const App = props => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.reducer.additionalPrice,
    car: {
        price: state.reducer.car.price,
        name: state.reducer.car.name,
        image: state.reducer.car.image,
        features: state.reducer.car.features
      },
    additionalFeatures: state.reducer.additionalFeatures.map(item => {
      return {
        id: item.id,
        name: item.name,
        price: item.price
      }
    })
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App)
