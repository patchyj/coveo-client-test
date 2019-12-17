import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowContainer from './ShowContainer';
import { selectProduct } from '../../../../flux/actions/queryActions';
import { fetchUsers } from '../../../../flux/actions/userActions';
import { fetchComments } from '../../../../flux/actions/commentActions';

const mapStateToProps = state => ({
  results: state.results.results,
  selected: state.results.selected,
  users: state.users,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchComments: () => dispatch(fetchComments()),
  selectProduct: product => dispatch(selectProduct(product))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
);
