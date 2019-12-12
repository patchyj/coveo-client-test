import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowContainer from './ShowContainer';
import { fetchUsers } from '../../../flux/actions/userActions';
import { fetchComments } from '../../../flux/actions/commentActions';

const mapStateToProps = state => ({
  product: state.results.product,
  users: state.users,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchComments: () => dispatch(fetchComments())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
);
