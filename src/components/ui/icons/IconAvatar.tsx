import * as React from 'react';

function IconAvatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__avatar'
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
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__avatar)'>
        <path fill='#858C94' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconAvatar;
