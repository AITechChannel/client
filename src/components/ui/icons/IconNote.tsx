import * as React from 'react';

function IconMyNote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__my_note'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={4}
        y={2}
        width={16}
        height={21}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 2.265h12c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2zm5 2H6v8l2.5-1.5 2.5 1.5v-8z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__my_note)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconMyNote;
