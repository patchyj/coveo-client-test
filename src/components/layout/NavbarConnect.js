import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchResultsFromNav,
  selectProduct,
  updateSuggested
} from '../../flux/actions/queryActions';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  results: state.results,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchResultsFromNav: query => dispatch(fetchResultsFromNav(query)),
  selectProduct: product => dispatch(selectProduct(product)),
  updateSuggested: results => dispatch(updateSuggested(results))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
