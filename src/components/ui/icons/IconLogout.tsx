import * as React from 'react';

function IconLogout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__logout'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={4}
        y={4}
        width={16}
        height={16}
      >
        <path
          d='M5.209 13.264h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 00-1.41 0 .996.996 0 000 1.41l4.87 4.89H5.209c-.55 0-1 .45-1 1s.45 1 1 1z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__logout)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconLogout;
