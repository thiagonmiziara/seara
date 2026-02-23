'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as NextNav from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GlobalLoading() {
  const maybeUseNavigation = (NextNav as any).useNavigation;
  const navigation =
    typeof maybeUseNavigation === 'function' ? maybeUseNavigation() : null;
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const delayRef = useRef<number | null>(null);
  const incRef = useRef<number | null>(null);

  useEffect(() => {
    // If next/navigation provides useNavigation (App Router newer API), use it
    if (navigation) {
      const isLoading =
        navigation.state === 'loading' || navigation.state === 'refresh';

      if (isLoading) {
        if (delayRef.current) window.clearTimeout(delayRef.current);
        delayRef.current = window.setTimeout(() => {
          setVisible(true);
          setProgress((p) => (p > 0 ? p : 8));

          if (incRef.current) window.clearInterval(incRef.current);
          incRef.current = window.setInterval(() => {
            setProgress((p) => {
              const next = p + Math.random() * 7;
              return next < 90 ? Math.round(next) : 90;
            });
          }, 300);
        }, 250);
        return;
      }

      // finish
      if (delayRef.current) {
        window.clearTimeout(delayRef.current);
        delayRef.current = null;
      }
      if (incRef.current) {
        window.clearInterval(incRef.current);
        incRef.current = null;
      }

      if (visible || progress > 0) {
        setProgress(100);
        const hide = window.setTimeout(() => {
          setVisible(false);
          setProgress(0);
          window.clearTimeout(hide);
        }, 400);
      }

      return () => {
        if (delayRef.current) window.clearTimeout(delayRef.current);
        if (incRef.current) window.clearInterval(incRef.current);
      };
    }

    // Fallback for environments without useNavigation: show a short indicator when pathname/searchParams change
    // This avoids runtime errors in older Next.js versions.
    if (pathname !== undefined) {
      // show briefly on route change
      setVisible(true);
      setProgress(40);
      const t1 = window.setTimeout(() => setProgress(80), 200);
      const t2 = window.setTimeout(() => {
        setProgress(100);
        const t3 = window.setTimeout(() => {
          setVisible(false);
          setProgress(0);
          window.clearTimeout(t3);
        }, 300);
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      }, 700);

      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation ? navigation.state : null, pathname, searchParams]);

  // Nothing to render when not visible
  if (!visible && progress === 0) return null;

  return (
    <>
      {/* Top progress bar */}
      <div className='fixed left-0 top-0 z-[9999] w-full pointer-events-none'>
        <div
          aria-hidden
          className='h-1 bg-gradient-to-r from-emerald-400 to-green-600 shadow-lg transition-all duration-300 ease-out'
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Small spinner at top-right (non-blocking) */}
      {visible && (
        <div className='fixed top-4 right-4 z-[9999] pointer-events-none'>
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
            <span className='sr-only'>Carregando...</span>
          </div>
        </div>
      )}
    </>
  );
}
