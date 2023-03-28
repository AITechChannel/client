import * as React from 'react';

function IconTodo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='prefix__todo'
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
          d='M18 4.265h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 01-2-2v-14a2 2 0 012-2h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h8v-1c0-.55.45-1 1-1s1 .45 1 1v1zm-10 7h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zm10 9H6c-.55 0-1-.45-1-1v-10h14v10c0 .55-.45 1-1 1zm-10-5h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z'
          fill='#000'
        />
      </mask>
      <g mask='url(#prefix__todo)'>
        <path fill='#858C94' d='M0 .265h24v24H0z' />
      </g>
    </svg>
  );
}

export default IconTodo;
