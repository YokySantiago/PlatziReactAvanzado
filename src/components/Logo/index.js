import React from 'react'
import { Svg } from './styles'
import { Link } from '@reach/router'

export const Logo = (props) => {
  return (
    <Link to='/' rel='bookmaek'>
      <Svg
        width={248.012}
        height={60}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='125.994 33.189 248.012 83.623'
        style={{
          backgroundColor: 'transparent',
          backgroundPosition: 'initial initial',
          backgroundRepeat: 'initial initial'
        }}
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <defs>
          <linearGradient
            id='prefix__editing-gradient-gradient'
            x1={0.345}
            x2={0.655}
            y1={0.024}
            y2={0.976}
            gradientUnits='objectBoundingBox'
          >
            <stop offset={0} stopColor='#4ecdc4' />
            <stop offset={1} stopColor='#ff6b6b' />
          </linearGradient>
        </defs>
        <path
          d='M19.32-2.74q-1.68 1.7-3.98 2.62-2.3.92-4.58.92Q8.48.8 7.68.4L6.44 7.2l-8.12.8 5.52-28.4 6.52-.68-.52 2.76q1.68-2.84 5.16-2.84 3.92 0 6 2.52 1.84 2.28 1.84 5.76t-.92 5.96q-.92 2.48-2.6 4.18zm-9.04-11.22L8.16-2.24q.84.72 1.88.72t1.64-.4q.6-.4 1.04-1.2 1.2-2.16 2.16-8.72.28-1.92.28-3.8t-.42-2.48q-.42-.6-1.22-.6-2.44 0-3.24 4.76zm31.16 7.2q1 .68 1 2.18t-.76 2.46q-.76.96-2 1.6Q37.12.8 34.36.8 31.6.8 29.98.2t-2.7-1.72q-2.12-2.12-2.12-6 0-6.04 3.28-9.72 3.52-3.96 9.64-3.96 3.8 0 5.68 1.6 1.4 1.2 1.4 3.16Q45.16-9.4 33-9.4q-.16 1.04-.16 1.92 0 1.84.82 2.54t2.34.7q1.52 0 3.14-.7t2.3-1.82zm-8.16-4.36q2.84 0 4.48-1.76 1.64-1.68 1.64-4.36 0-.92-.34-1.42-.34-.5-1.02-.5-.68 0-1.26.26t-1.18 1.14q-1.48 2-2.32 6.64zM47.16-4q0-1.08.56-3.8l2.12-10.8h-2.36l.16-1.2q4.8-1.44 9.44-4.96H59l-.96 4.36h3.12l-.36 1.8h-3.08L55.68-7.8q-.52 2.48-.52 3.32 0 1.92 1.68 2.32Q56.44-.8 55 0t-3.48.8q-2.04 0-3.2-1.28Q47.16-1.76 47.16-4zm16.48-12.72q1.36-1.92 3.42-3.2 2.06-1.28 4.58-1.28t3.72.8l7.84-.8-2.72 15.36Q79.08 2 76.12 5.08 73.28 8 67.76 8q-4.2 0-6.6-1.32-2.4-1.32-2.4-3.52 0-1.64 1.24-2.58 1.24-.94 3.16-.94 1.68 0 2.96.76.76.4 1.12.96-.92.8-.92 2.12 0 1.72 1.6 1.72 2.68 0 4.2-6.32.44-1.72.8-3.44-1.8 2.2-5.88 2.2-2.84 0-4.48-1.36-1.64-1.36-1.64-4.56 0-2 .68-4.26t2.04-4.18zm5.2 8.56q0 2.72 1.4 2.72.96 0 1.88-1.04.72-.84 1-2.08l2.04-10.28q-.2-.04-.4-.12-.4-.16-.92-.16-2.44 0-3.88 4-1.12 3.12-1.12 6.96zm28.44-3.08q1.44-2.56 1.44-5.16 0-1.72-1.24-1.72-.96 0-1.96 1.64-1.04 1.64-1.36 3.76L92.08 0 83.8.8l4.08-21.2 6.6-.8-.72 4.04q1.96-4.04 6.36-4.04 2.32 0 3.58 1.2 1.26 1.2 1.26 3.66t-1.62 4.02q-1.62 1.56-4.38 1.56-1.2 0-1.68-.48zM107.34-1.2q-.94-1.04-1.36-2.68-.42-1.64-.42-4.32 0-2.68.92-5.12t2.6-4.2q3.44-3.68 9.12-3.68 2.04 0 3.52.68l6.84-.68-2.96 15.6q-.12.48-.12 1.36 0 .88.54 1.44.54.56 1.34.64-.4 1.36-1.86 2.16t-3.1.8q-1.64 0-2.74-.62-1.1-.62-1.42-1.66-.64 1-2 1.64-1.36.64-3.18.64t-3.3-.48q-1.48-.48-2.42-1.52zm8.44-16.24q-.46.72-.86 1.94-.4 1.22-1.06 4.48-.66 3.26-.66 5.58 0 2.32.36 3 .36.68 1 .68 1.28 0 2.22-1.22.94-1.22 1.3-3.38l2.12-11.72q-.84-.72-1.82-.72-.98 0-1.56.32-.58.32-1.04 1.04zM159.52.8q-4.84 0-4.84-3.76 0-1.64.7-4.82.7-3.18.94-4.46.56-2.92.56-3.84 0-2.04-1.52-2.04-1 0-1.96 1.38T152-12.6L149.52 0l-7.8.8 2.16-10.88q.36-1.8.68-3.84.32-2.04.32-2.36 0-1.84-1.36-1.84-.92 0-1.92 1.36-1 1.36-1.56 4.16L137.6 0l-7.88.8 4.2-21.2 6.52-.8-.68 4.04q1.04-2.16 2.96-3.1t4.92-.94q1.72 0 2.84.84 1.12.84 1.48 2.2.68-1.4 2.42-2.22 1.74-.82 3.88-.82 2.14 0 3.2.46t1.7 1.22q1.08 1.4 1.08 3.96 0 2.52-1.08 7.76-.56 2.56-.56 3.5t.54 1.5q.54.56 1.34.64-.4 1.36-1.78 2.16t-3.18.8z'
          fill='url(#prefix__editing-gradient-gradient)'
          transform='translate(168.6 91.333)'
        />
        <style />
      </Svg>
    </Link>
  )
}