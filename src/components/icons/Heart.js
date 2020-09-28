import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export const Heart = ({ isFilled }) => {
  const { colors } = useContext(ThemeContext)
  return (
    <svg width="18" height="18" viewBox="0 0 144 144">
      <path
        d="M70 127.423L14.07 69.09a33.087 33.087 0 01-6.2-38.214h0a33.093 33.093 0 0152.995-8.599L70 31.407l9.135-9.13a33.093 33.093 0 0152.996 8.599h0a33.093 33.093 0 01-6.195 38.197z"
        fill={isFilled ? colors.red600 : 'none'}
        stroke={isFilled ? colors.red600 : colors.gray900}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </svg>
  )
}
