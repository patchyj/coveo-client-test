import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectProduct } from '../../../../../../flux/actions/queryActions';
import ProductsIndex from './IndexContainer';

const mapStateToProps = state => ({
  results: state.results.results
});

const mapDispatchToProps = dispatch => ({
  selectProduct: product => dispatch(selectProduct(product))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductsIndex)
);
