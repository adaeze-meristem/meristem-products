import React from 'react';

const Footer = () => {
  return (
    <div className="px-6 py-4 flex justify-between text-xs text-black/65 border-t border-black/25">
      <aside>© 2023 Copyright: Meristem</aside>
      <aside>
        All Rights Reserved |{' '}
        <a href="/" className="text-blue">
          Terms and Conditions
        </a>{' '}
        |{' '}
        <a href="/" className="text-blue">
          {' '}
          Privacy Policy
        </a>
      </aside>
    </div>
  );
};

export { Footer };
