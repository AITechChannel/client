import * as React from 'react';

function IconLightDark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__a'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={1}
        y={1}
        width={22}
        height={23}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20 8.955l2.6 2.6c.39.39.39 1.03 0 1.42l-2.6 2.6v3.69c0 .55-.45 1-1 1h-3.7l-2.6 2.6a.996.996 0 01-1.41 0l-2.6-2.6H5c-.55 0-1-.45-1-1v-3.7l-2.6-2.6a.996.996 0 010-1.41l2.6-2.6v-3.69c0-.55.45-1 1-1h3.69l2.61-2.6a.996.996 0 011.41 0l2.6 2.6H19c.55 0 1 .45 1 1v3.69zm-5.96 8.95a5.997 5.997 0 003.88-4.66c.05-.33.07-.66.08-.98 0-.32-.02-.65-.07-.98-.34-2.12-1.86-3.94-3.88-4.66a6.032 6.032 0 00-3.5-.18c-.42.11-.48.66-.13.9a5.97 5.97 0 012.58 4.92c0 2.04-1.02 3.84-2.59 4.92-.35.25-.28.8.13.9 1.09.27 2.29.25 3.5-.18z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__a)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconLightDark;
