import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchResults,
  selectProduct
} from '../../../flux/actions/queryActions';
import Main from './MainContainer';

const mapStateToProps = state => ({
  results: state.results
});

const mapDispatchToProps = dispatch => ({
  fetchResults: query => dispatch(fetchResults(query)),
  selectProduct: product => dispatch(selectProduct(product))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
