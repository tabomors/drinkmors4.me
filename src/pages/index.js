import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi there</h1>
    <p>My name is Stas</p>
    <p>
      I&#39;m passionate about programming stuff, do things with basketballs, listening to music
      right now
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
