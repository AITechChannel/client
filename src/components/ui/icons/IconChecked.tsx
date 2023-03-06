import * as React from 'react';

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__checked'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={3}
        y={5}
        width={18}
        height={14}
      >
        <path
          d='M8.795 16.14l-3.47-3.47a.996.996 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0l10.58-10.58a.996.996 0 10-1.41-1.41l-9.88 9.87z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__checked)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default Icon;
