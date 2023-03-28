import * as React from 'react';

function IconView(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__view'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={1}
        y={4}
        width={22}
        height={16}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 4.765c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__view)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconView;
