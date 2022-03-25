import * as React from 'react';

const Logo = () => (
  <svg className="w-24 grayscale brightness-[1000]" viewBox="0 0 750.3 151.2" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="a" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#023451">
          <animate attributeName="stop-color" values="#023451; #1C9DE8; #023451" dur="5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stopColor="#1C9DE8">
          <animate attributeName="stop-color" values="#1C9DE8; #023451; #1C9DE8" dur="5s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
    </defs>
    <path fill="url('#a')" d="M13.6 148.5v-7.6h24c2.8 0 5.9-1.3 9.3-4s5.1-5.9 5.1-9.6c0-5.2-2.7-10.8-8-16.7-5.3-6-8-12.1-8-18.3 0-6.4 2.8-11.8 8.4-16.3 4.7-3.6 9.5-5.4 14.4-5.4h17.8l-.2 7.6H58.8c-3.2 0-6.4 1.3-9.7 3.8-3.6 2.9-5.4 6.3-5.5 10.2 0 5.5 2.7 11.3 8 17.4 5.3 6.2 8 12 8 17.6 0 6-2.3 11-7 15.1s-9.7 6.1-15 6.1h-24zm87.6-18.1V0h7.6v130.4c0 5.3 1.6 10.5 4.8 15.4h-8.4c-2.7-3.6-4-8.8-4-15.4zm38.5-13.8V70.4h7.6v46.1c0 11.6 6.1 19.2 18.4 22.9 2.9.8 5.4 1.2 7.4 1.3 2 0 4.5-.4 7.4-1.3 12.2-3.7 18.4-11.3 18.4-22.9V70.4h7.6v46.2c0 15-7.8 25-23.4 30-3.7 1.2-7 1.8-10 1.8s-6.2-.6-10-1.8c-15.5-4.8-23.4-14.8-23.4-30zm92.3 31.9v-7.6h24c2.8 0 5.9-1.3 9.3-4s5.1-5.9 5.1-9.6c0-5.2-2.7-10.8-8-16.7-5.3-6-8-12.1-8-18.3 0-6.4 2.8-11.8 8.4-16.3 4.7-3.6 9.5-5.4 14.4-5.4H295l-.2 7.6h-17.5c-3.2 0-6.4 1.3-9.7 3.8-3.6 2.9-5.4 6.3-5.5 10.2 0 5.5 2.7 11.3 8 17.4 5.3 6.2 8 12 8 17.6 0 6-2.3 11-7 15.1s-9.7 6.1-15 6.1H232zm87.6-70.7V.1h7.6v70.3c1.9-.1 5-.2 9.4-.2 15.6 0 28.4 4.3 38.2 12.9 10.4 8.9 15.6 21.1 15.6 36.5v30.5h-7.6v-30.5c0-12.1-4.2-22.1-12.7-30s-19.6-11.8-33.5-11.8zm96.3 69v-43c0-9.2 3.2-16.8 9.7-22.9s14.4-9.1 23.7-9.1c5.2 0 10.8 1.6 16.8 4.7s10.3 6.8 12.8 11.1c2.5-4.3 6.8-8 12.8-11.1s11.6-4.7 16.8-4.7c9.3 0 17.2 3 23.7 9.1s9.7 13.7 9.7 22.9v43h-7.6v-43c0-6.5-1.5-11.4-4.4-14.8s-7.6-6.1-14-8.3c-2.8-.8-5.4-1.2-7.8-1.2-2 0-4.4.4-7.2 1.2-6.4 2.1-10.9 4.8-13.6 8-3.1 3.5-4.6 8.5-4.6 15v43h-7.6v-45.4c0-6.2-2.8-11.5-8.4-15.8-5.1-4-10.9-6-17.4-6-2.3 0-4.8.4-7.4 1.2-6.5 2.1-11.1 4.8-13.8 8-3.1 3.5-4.6 8.5-4.6 15v43h-7.6zm145.5-27.2c0-15.5 7.1-27.9 21.2-37.2 12.2-8 26.6-12.1 43-12.1l16.2-.2v71c-4 1.8-10.7 3.6-20.3 5.4-9.5 1.9-16.6 2.8-21.1 2.8-26-.1-39-10-39-29.7zm7.6 0c0 7.6 3.7 13.4 11 17.3 5.7 3.1 12.8 4.6 21.2 4.6 14.5 0 25.5-2 33-6 0 .2 0 .3-.1.3s-.2-7.4-.2-22.2c0-4 .1-9.8.3-17.6s.3-13.6.3-17.3c-1.2-.4-2.9-.6-5.3-.7-15.4 0-28.6 3.1-39.7 9.3-13.6 7.3-20.5 18.2-20.5 32.3zm102.6 27.2v-43c0-15.2 7.8-25.2 23.4-30.1 3.5-1 6.8-1.6 10-1.6s6.5.5 10 1.6c15.6 4.9 23.4 15 23.4 30.1v43h-7.6v-43c0-11.6-6.1-19.3-18.4-23-2.5-.8-4.9-1.2-7.2-1.2-2.4 0-4.9.4-7.6 1.2-12.2 3.7-18.4 11.4-18.4 23v43z" />
  </svg>
);

export default React.memo(Logo);
