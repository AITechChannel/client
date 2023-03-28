import * as React from 'react';

function IconEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__edit'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={2}
        y={3}
        width={20}
        height={19}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20.709 5.896c.39.39.39 1.02 0 1.41l-1.83 1.83-3.75-3.75 1.83-1.83a.996.996 0 011.41 0l2.34 2.34zm-17.71 14.87v-3.04c0-.14.05-.26.15-.36l10.91-10.91 3.75 3.75-10.92 10.91a.47.47 0 01-.35.15h-3.04c-.28 0-.5-.22-.5-.5z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__edit)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconEdit;
