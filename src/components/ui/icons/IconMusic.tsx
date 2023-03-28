import * as React from 'react';

function IconMusic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__music'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={4}
        y={1}
        width={16}
        height={23}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.2 1.265H9.8c-.99 0-1.8.81-1.8 1.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8v-14.4c0-.99-.81-1.8-1.8-1.8zm-4.2 2a2 2 0 11.001 3.999 2 2 0 01-.001-4zm-4 9.5c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4zm4-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-10-4c0-.55.45-1 1-1s1 .45 1 1v14c0 .55.45 1 1 1h8c.55 0 1 .45 1 1s-.45 1-1 1H6a2 2 0 01-2-2v-15z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__music)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconMusic;
