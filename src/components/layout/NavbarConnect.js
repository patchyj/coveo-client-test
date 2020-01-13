import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchResultsFromNav,
  selectProduct,
  updateSuggested
} from '../../flux/actions/queryActions';
import { switchTheme } from '../../flux/actions/themeActions';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  results: state.results,
  errors: state.errors,
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  fetchResultsFromNav: query => dispatch(fetchResultsFromNav(query)),
  selectProduct: product => dispatch(selectProduct(product)),
  updateSuggested: results => dispatch(updateSuggested(results)),
  switchTheme: theme => dispatch(switchTheme(theme))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
