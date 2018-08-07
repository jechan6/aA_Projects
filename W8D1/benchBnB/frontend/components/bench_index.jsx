import React from 'react';
import BenchIndexItem from './bench_index_item';
class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {

    const {benches} = this.props;

    return(
      <div>
        {benches.map((bench) => (
          <ul key={bench.id}>
            <BenchIndexItem bench={bench} />
          </ul>
        ))}
      </div>
    );
  }
}

export default BenchIndex;
