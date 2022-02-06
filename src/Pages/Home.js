import React from 'react';
import About from './About'
import { Parallax, Background } from 'react-parallax';

import nycPhoto from '../Image/new-york-6379934_1920.jpg'
// import nycPhoto from '../Image/nycmap.png'
export default function Home() {
  return <div>
      <Parallax
        blur={{ min: -10, max: 9 }}
        bgImage={nycPhoto}
        bgImageAlt="new york city"
        strength={500}

        style={{
          backgroundPosition: 'bottom center',
      }}

    >
        Blur transition from min to max
        <div style={{ height: '90vh' }} />
    </Parallax>
  </div>;
}
