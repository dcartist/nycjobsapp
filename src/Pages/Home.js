import React from 'react';
import About from './About'
import { Parallax, Background } from 'react-parallax';

import nycPhoto from '../Image/nycmap.png'
export default function Home() {
  return <div>
      <Parallax
        blur={{ min: -10, max: 9 }}
        bgImage={nycPhoto}
        bgImageAlt="the dog"
        strength={500}
    >
        Blur transition from min to max
        <div style={{ height: '90vh' }} />
    </Parallax>
  </div>;
}
