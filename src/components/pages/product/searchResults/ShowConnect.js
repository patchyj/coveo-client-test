import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectProduct } from '../../../../flux/actions/queryActions';
import ShowContainer from './ShowContainer';

const mapStateToProps = state => ({
  results: state.results.results,
  selected: state.results.selected
});

const mapDispatchToProps = dispatch => ({
  selectProduct: product => dispatch(selectProduct(product))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
);
