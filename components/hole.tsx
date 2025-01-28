'use client'

import clsx from 'clsx'

interface HoleProps {
  children: React.ReactNode
  className?: string // Allows grid positioning to be passed dynamically
  hPercent?: number
  wPercent?: number
  align?: 'start' | 'center' | 'end' | 'stretch' // Controls vertical alignment in grid
  justify?: 'start' | 'center' | 'end' | 'stretch' // Controls horizontal alignment in grid
}

export function Hole({
  children,
  className,
  hPercent = 100,
  wPercent = 100,
}: HoleProps) {
  const isFullSize = hPercent === 100 && wPercent === 100

  return (
    <div
      className={clsx('relative', className)}
      style={{
        height: `${hPercent}%`,
        width: `${wPercent}%`,
        ...(isFullSize ? {} : { margin: 'auto' }), // Centers when not full size
      }}
    >
      {/* Container that ensures content fits inside */}
      <div className='flex size-full items-center justify-center p-5'>
        {/* Card Container with inset shadow */}
        <div
          className='relative size-full overflow-hidden rounded-3xl bg-white
            dark:bg-gray-800'
        >
          {/* Inset Shadow Layer - Always on Top */}
          <div
            className='pointer-events-none absolute inset-0 z-10 size-full rounded-3xl
              shadow-[inset_0_6px_10px_rgba(0,0,0,0.8)] transition-all duration-300
              hover:shadow-[inset_0_8px_14px_rgba(0,0,0,0.3)]'
          ></div>

          {/* Card Content - Below the Shadow */}
          <div className='relative z-0 size-full p-6'>{children}</div>
        </div>
      </div>
    </div>
  )
}
