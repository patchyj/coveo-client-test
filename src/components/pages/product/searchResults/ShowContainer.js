import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductBanner from './sections/ProductBanner';
import SuggestedList from './sections/SuggestedList';

const mapUsersAndComments = (users = [], comments = []) =>
  users &&
  users.map(user => {
    const userComments = comments.filter(comment => {
      if (comment.postId === user.id) {
        return {
          id: comment.id,
          body: comment.body
        };
      }
    });
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      comments: userComments
    };
  });

const ShowContainer = ({
  results,
  selected,
  users,
  comments,
  fetchUsers,
  fetchComments,
  selectProduct
}) => {
  if (users.users.length) {
    const res = mapUsersAndComments(users.users, comments.comments);
    /* eslint-disable-next-line no-console */
    console.log(res);
  }

  useEffect(() => {
    fetchComments();
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="container grid-md">
        <div className="columns">
          <div className="column">
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
      {/* SHOW PRODUCT BANNER */}
      <ProductBanner selected={selected} />
      {/* SHOW SIMILAR RESULTS */}
      <SuggestedList results={results} selectProduct={selectProduct} />
    </div>
  );
};

ShowContainer.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  selected: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string
    })
  }),
  users: PropTypes.shape({}),
  comments: PropTypes.shape({}),
  fetchUsers: PropTypes.func,
  fetchComments: PropTypes.func
};

ShowContainer.defaultProps = {
  results: {},
  selected: {},
  match: {},
  users: {},
  comments: {},
  fetchUsers: () => {},
  fetchComments: () => {}
};

export default ShowContainer;
