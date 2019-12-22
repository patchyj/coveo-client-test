import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../../../../flux/actions/commentActions';
import { selectProduct } from '../../../../flux/actions/queryActions';
import { fetchUsers } from '../../../../flux/actions/userActions';
import ShowContainer from './ShowContainer';

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
