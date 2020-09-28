import React, { useState } from 'react'
import { Heart } from '../components/icons/Heart'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const FavoriteCount = styled.div`
  margin-left: 4px;
`

const FavoriteToggle = ({ favoriteCount }) => {
  const [isFavorited, setIsFavorited] = useState(false)
  return (
    <React.Fragment>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => setIsFavorited(isFavorited => !isFavorited)}
      >
        <Heart isFilled={isFavorited} />
      </motion.button>
      <FavoriteCount>{favoriteCount}</FavoriteCount>
    </React.Fragment>
  )
}

export default FavoriteToggle
