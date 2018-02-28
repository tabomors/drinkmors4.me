import React from 'react';
import styled from 'styled-components';

import bannerImg from '../assets/images/bg.jpg';

const MainThing = styled.header`
  background-image: url('${bannerImg}');
  background-size: contain;
  min-height: 400px;
  opacity: 0.7;
  background-repeat: no-repeat;
`;

const IndexPage = () => (
  <div>
    <h1>Hi there</h1>
    <p>My name is <strong>Stas Morozevich</strong></p>
    <p>
      I&#39;m passionate about programming stuff, do things with basketballs, listening to music
      right now
    </p>
    <MainThing />
  </div>
);

export default IndexPage;
