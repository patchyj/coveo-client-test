import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const mapUsersAndComments = (users = [], comments = []) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  users
  && users.map((user) => {
    // eslint-disable-next-line consistent-return
    // eslint-disable-next-line array-callback-return
    const userComments = comments.filter((comment) => {
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
  product,
  users,
  comments,
  fetchUsers,
  fetchComments
}) => {
  const { title, excerpt } = product;

  if (users.users.length) {
    const res = mapUsersAndComments(users.users, comments.comments);
    console.log(res);
  }

  useEffect(() => {
    fetchComments();
    fetchUsers();
  }, []);

  return (
    <div className="container grid-md">
      <div className="columns">
        <div className="column">
          <Link to="/">Back</Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column col-4 col-md-6 col-sm-12">
          <small>{excerpt}</small>
        </div>
        <div className="divider-vert" data-content="" />
      </div>
    </div>
  );
};

ShowContainer.propTypes = {
  product: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string
    })
  }),
  users: PropTypes.shape({}),
  comments: PropTypes.shape({})
};

ShowContainer.defaultProps = {
  product: {},
  match: {},
  users: {},
  comments: {}
};

export default ShowContainer;
