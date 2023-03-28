import * as React from 'react';

function IconEngLish(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__english'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={3}
        y={2}
        width={18}
        height={21}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19 4.265h-4.18c-.42-1.16-1.52-2-2.82-2-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 14h5c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm8-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm-8-4h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__english)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconEngLish;
