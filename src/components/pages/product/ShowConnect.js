import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowContainer from './ShowContainer';

const mapStateToProps = state => ({
  product: state.results.product,
  test: 'test'
});

export default withRouter(connect(mapStateToProps)(ShowContainer));
