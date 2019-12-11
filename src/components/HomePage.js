import React, { useState } from 'react';
import S from '../static/styles';

const HomePage = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <S.HeroContainer className="container">
      <form className="hero-body" onSubmit={handleSubmit}>
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" value={query} onChange={handleChange} />
          <button className="btn btn-primary input-group-btn" type="submit">Search</button>
        </div>
        <div className="divider" />
        <small className="">Welcome to the SAQ search engine</small>
      </form>
    </S.HeroContainer>
  );
};

export default HomePage;
