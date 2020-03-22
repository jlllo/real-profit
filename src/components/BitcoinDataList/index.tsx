import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as BitcoinDataActions from '../../store/ducks/BitcoinData/actions';
import { BitcoinData } from '../../store/ducks/BitcoinData/types';

interface StateProps {
  bitcoinData: BitcoinData[]
}

interface DispatchProps {
  loadRequest(): void;
}

// interface OwnProps {

// }

type Props = StateProps & DispatchProps;

class BitcoinDataList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { bitcoinData } = this.props;

    return (
      <ul>
        {bitcoinData.map((data) => <li key={data.id}>{data.date}</li>)}
      </ul>
    );
  }
}
const mapStateToProps = (state: ApplicationState) => ({
  bitcoinData: state.bitcoinData.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BitcoinDataActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinDataList);

// export default function BitcoinDataList() {
//   const bitcoinData = useSelector((state: ApplicationState) => state.bitcoinData.data);
//   const treasury = useSelector((state: ApplicationState) => state.bitcoinData.data);

//   return (
//     <ul>
//       { bitcoinData.map((data) => (
//         <li key={Math.random()}>{data.Data}</li>
//       ))}
//       { treasury.map((data) => (
//         <li key={Math.random()}>{data.Data}</li>
//       ))}
//     </ul>
//   );
// }
