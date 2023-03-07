import * as React from 'react';

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__close'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={5}
        y={5}
        width={14}
        height={14}
      >
        <path
          d='M18.3 5.974a.996.996 0 00-1.41 0L12 10.854l-4.89-4.89a.996.996 0 10-1.41 1.41l4.89 4.89-4.89 4.89a.996.996 0 101.41 1.41l4.89-4.89 4.89 4.89a.996.996 0 101.41-1.41l-4.89-4.89 4.89-4.89c.38-.38.38-1.02 0-1.4z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__close)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconClose;
