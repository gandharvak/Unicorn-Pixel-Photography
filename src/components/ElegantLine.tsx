import React from 'react'

const ElegantLine = () => {
  return (
     <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-px bg-[#b2784a]" />
        <div className="mx-4 text-[#b2784a] text-2xl">
          {/* Decorative Icon (You can replace with an SVG if you have the exact one) */}
          <span>&#x2756;</span> {/* Unicode diamond-like icon */}
        </div>
        <div className="flex-grow h-px bg-[#b2784a]" />
      </div>
  )
}

export default ElegantLine