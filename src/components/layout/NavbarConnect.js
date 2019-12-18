import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchResultsFromNav,
  selectProduct
} from '../../flux/actions/queryActions';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  results: state.results,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchResultsFromNav: query => dispatch(fetchResultsFromNav(query)),
  selectProduct: product => dispatch(selectProduct(product))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
