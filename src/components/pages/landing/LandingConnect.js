import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchResults,
  selectProduct
} from '../../../flux/actions/queryActions';
import Main from './LandingContainer';

const mapStateToProps = state => ({
  results: state.results,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchResults: query => dispatch(fetchResults(query)),
  selectProduct: product => dispatch(selectProduct(product))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
