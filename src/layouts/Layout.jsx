import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-container">
        <div className="layout-lights">
          <div className="light-red"></div>
          <div className="light-red"></div>
        </div>
        <div className="layout-screen">
          {children}
        </div>
        <div className="layout-output">
          <div className="light-big"></div>
          <div className="speaker">
            <hr />
            <hr />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;