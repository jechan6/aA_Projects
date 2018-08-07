export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
import * as BenchAPI from '../util/bench_api_util';

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => dispatch => (
  BenchAPI.fetchBenches()
  .then( (benches) => dispatch(receiveBenches(benches)) )
);
