import React from 'react';
import WishesContainer from './WishesContainer';

function WishesSection() {
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>Best Wishes</span>
              <h2 className="main-font">Friends Wishes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <WishesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishesSection;