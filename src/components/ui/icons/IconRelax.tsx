import * as React from 'react';

function IconRelax(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__relax'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.505 6.404c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zm10.65 14.36c0-.55-.45-1-1-1h-6.07c-1.48 0-2.74-1.08-2.96-2.54l-1.81-8.68a.976.976 0 00-.96-.78c-.62 0-1.08.57-.96 1.18l1.75 8.58a5.01 5.01 0 004.95 4.24h6.06c.55 0 1-.45 1-1zm-4.65-5h4.19c.45 0 .88.15 1.23.42l4.29 3.35c.5.39.55 1.12.1 1.57-.37.37-.97.41-1.39.08l-3.09-2.42h-6.85c-1.44 0-2.67-1.02-2.95-2.44l-1.35-5.92c-.21-1.22.61-2.39 1.84-2.61h.02c.33-.06.67-.03.99.06.27.08.53.2.76.38l1.64 1.27c.98.77 2.3 1.29 3.61 1.33.59.02 1.08.47 1.08 1.06 0 .58-.47 1.08-1.05 1.07-1.47-.02-2.82-.58-4.1-1.3l1.03 4.1z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__relax)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconRelax;
