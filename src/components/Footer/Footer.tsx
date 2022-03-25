import * as React from 'react';

import Logo from '../Logo';

const Footer = () => (
  <footer className="flex justify-center gap-8 p-8 content-center items-baseline">
    &copy; {new Date().getFullYear()}<a className="inline ml-[-24px]" href="https://www.slushman.com"><Logo /></a>
  </footer>
);

export default React.memo(Footer);
