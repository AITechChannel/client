import * as React from 'react';

function IconDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__delete'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={5}
        y={3}
        width={14}
        height={19}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.5 4.265H18c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h2.5l.71-.71c.18-.18.44-.29.7-.29h4.18c.26 0 .52.11.7.29l.71.71zm-7.5 17c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H8z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__delete)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconDelete;
