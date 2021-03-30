import * as React from 'react';
import ToggleMode from '../components/togglemode';
// markup
const IndexPage = () => {
  return (
    <>
      <nav className="mainnav">
        <div className="logo">TSW</div>
        <div>
          <ToggleMode />
        </div>
      </nav>
      <div className="home">
        <div className="welcome">Welcome to The SWitcher</div>
        <div className="content">
          I'm baby aesthetic taxidermy shabby chic fashion axe narwhal. Celiac
          deep v crucifix, banjo chicharrones authentic portland mixtape
          truffaut. Taxidermy waistcoat lyft, palo santo hell of freegan subway
          tile chia hammock flannel normcore vaporware artisan. Keytar tumeric
          actually enamel pin tofu activated charcoal everyday carry beard green
          juice vegan artisan etsy. Readymade irony copper mug, waistcoat
          typewriter tumblr echo park chartreuse vexillologist. Typewriter hell
          of helvetica, vinyl forage plaid palo santo messenger bag lo-fi
          chicharrones direct trade schlitz fashion axe. Everyday carry flannel
          intelligentsia 3 wolf moon, pickled cloud bread man braid.
        </div>
      </div>
    </>
  );
};

export default IndexPage;
