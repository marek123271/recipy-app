import React from 'react';

export default function Header({ children, title, styleClass }) {
  return (
    <header>
      <div className='container-fluid'>
        <div className={`row align-items-center ${styleClass}`}>
          <div className="col text-center"> {/* Removed dots before class names */}
          <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted text-colour' style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', fontSize: '4rem' }}>              {title}
            </h1>
            {children}                                                                                                        
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'Default title',
  styleClass: 'header-hero',
   
};
