import React from 'react'

import imgPlaystation from './assets/logo-playstation.svg'
import imgNintendoSwitch from './assets/logo-nintendo-switch.svg'
import imgXBox from './assets/logo-xbox.svg'
import imgUnrealEngine from './assets/logo-unrealengine.svg'
import imgUnity from './assets/logo-unity.svg'
import imgGodot from './assets/logo-godot.svg'
import imgApple from './assets/logo-apple.svg'
import imgIOS from './assets/logo-ios.svg'
import imgAndroid from './assets/logo-android.svg'
import imgWindows from './assets/logo-windows.svg'

export interface CompanyIconProps {
  code: string;
  containerStyle?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  isRound?: boolean;
}

export const CompanyIcon: React.FC<CompanyIconProps> = ({
  code,
  containerStyle,
  imgStyle,
  isRound
}) => {
  const getIcon = (code: string) => {
    switch (code) {
    case 'fuzzy': return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZopRJp7jJ-nFaghb09zQXP3_DxyRol2VLY7U3w_tKw&s'
    case 'microsoft': return 'https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Clipart.png'
    case 'revix': return 'https://s3.amazonaws.com/startuplist.africa/startups/revix/revix-logo.png'
    case 'uct': return 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/University_of_Cape_Town_logo.svg/800px-University_of_Cape_Town_logo.svg.png'
    case 'unreal': return 'https://sm.ign.com/t/ign_in/screenshot/default/fmjq1cvo-400x400_jz72.2560.jpg'
    case 'wimt': return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDgic12IjawqwgpUPgql0qxyTluUa0GN75iF0pFPhSGfIutMUVNhYUGrix223Cn2wB_s&usqp=CAU'
    case 'zappi': return 'https://www.insightplatforms.com/wp-content/uploads/2022/03/Zappi-Logo-Square-Insight-Platforms.png'
    case 'gamemaker': return 'https://coal.gamemaker.io/sites/5d75794b3c84c70006700381/theme/images/svg/logomark.svg'
    case 'playstation': return imgPlaystation;
    case 'unrealengine': return imgUnrealEngine;
      // case 'unity': return 'https://icon-library.com/images/unity-icon/unity-icon-22.jpg'
    case 'unity': return imgUnity;
    case 'godot': return imgGodot;
    case 'apple': return imgApple;
    case 'ios': return imgIOS;
    case 'android': return imgAndroid;
    case 'windows': return imgWindows;
    case 'xbox': return imgXBox;
    case 'nintendo':
    case 'switch': return imgNintendoSwitch;
    default: return ''
    }
  }

  return (
    <div style={containerStyle}>
      <img src={getIcon(code?.toLowerCase()) as string} alt={code} style={{
        ...imgStyle,
        ...(isRound ? {} : { borderRadius: 0 })
      }} />
    </div>
  )
}

CompanyIcon.defaultProps = {
  imgStyle: {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%'
  }
}

export default CompanyIcon;