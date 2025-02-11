import React from 'react';

const MainContent = ({ title, content }) => { //using props
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default MainContent;
