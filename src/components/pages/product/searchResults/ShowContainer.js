import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductBanner from './sections/ProductBanner';
import SuggestedList from './sections/SuggestedList';

export const mapUsersAndComments = (users = [], comments = []) =>
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
  fetchUsers,
  fetchComments,
  selectProduct
}) => {
  useEffect(() => {
    fetchComments();
    fetchUsers();
  }, []);

  return (
    <div>
      <ProductBanner selected={selected} />
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
  fetchComments: PropTypes.func,
  selectProduct: PropTypes.func.isRequired
};

ShowContainer.defaultProps = {
  results: [],
  selected: {},
  match: {},
  users: {},
  comments: {},
  fetchUsers: () => {},
  fetchComments: () => {}
};

export default ShowContainer;
