import React from 'react'
import { TechIconProps } from './types'

// https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
const baseUrl = 'https://img.shields.io/badge'

export const TechIcon: React.FC<TechIconProps> = ({
  code,
  color,
  style
}) => {
  const urlEncodedHexColor = encodeURIComponent(color as string)
  const url = `${baseUrl}/${code as string}-${urlEncodedHexColor}.svg?${`style=${style}`}${`&logo=${code as string}`}${'&logoColor=#FF00FF'}`
  console.log(url)

  return (
    <img src={url} alt={code} />
  )
}

TechIcon.defaultProps = {
  style: 'for-the-badge'
}

export default TechIcon
