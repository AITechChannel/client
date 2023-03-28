import * as React from 'react';

function IconThreeDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__three_dot'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={4}
        y={10}
        width={16}
        height={5}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 10.265c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__three_dot)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconThreeDot;
