import {connect} from 'react-redux';
import Search from './search';
import {fetchBenches} from '../actions/bench_actions';
import React from 'react';

const mapStateToProps = state => ({
  benches: Object.values(state.entities.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);