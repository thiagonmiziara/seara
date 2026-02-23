'use client';

import React from 'react';

export default function InlineLoading({
  text = 'Carregando...',
}: {
  text?: string;
}) {
  return (
    <div className='flex items-center gap-3'>
      <div className='h-9 w-9 rounded-full bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center shadow-md'>
        <svg
          className='h-5 w-5 text-white animate-spin'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          aria-hidden
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
          />
        </svg>
      </div>
      <span className='text-foreground/90'>{text}</span>
    </div>
  );
}
