import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import React from 'react';
const Search = (props) => {
  return(
    <div>
      <BenchMap />
      <BenchIndex
        benches={props.benches}
        fetchBenches={props.fetchBenches}/>
    </div>
  );
};

export default Search;
