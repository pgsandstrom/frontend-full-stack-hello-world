import React from 'react';
import { connect } from 'react-redux';

import { makeIncrease, makeDecrease } from './actions';

import './thing.scss';


// mapStateToProps and mapDispatchToProps should be inlined at the bottom, but I put them here for clarity
const mapStateToProps = state =>
  ({
    myCounter: state.thingReducer.myCounter,
  });

const mapDispatchToProps = {
  makeIncrease,
  makeDecrease,
};

const Thing = props => (
  <div id="thing">
    <h2>Please press these buttons and stuff</h2>
    <div>
      <button onClick={() => props.makeIncrease(1)}>increase</button>
      <button onClick={() => props.makeDecrease(1)}>decrease</button>
    </div>
    <div>
      Here is a value from our redux state: {props.myCounter}
    </div>
  </div>
);
Thing.propTypes = {
  myCounter: React.PropTypes.number.isRequired,
  // currently eslint-plugin-react fails to detect all function usages, so we disable incorrect warnings with the comment you see on the next line
  makeIncrease: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  makeDecrease: React.PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Thing);
