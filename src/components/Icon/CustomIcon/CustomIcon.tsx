import React from 'react'

import { ReactComponent as ImgDashboard } from './assets/icon-dashboard.svg'
import { ReactComponent as ImgAudio } from './assets/icon-sound-wave.svg'
import { ReactComponent as ImgVideo } from './assets/icon-video.svg'
import { ReactComponent as ImgMovie } from './assets/icon-movie.svg'
import { ReactComponent as ImgGallery } from './assets/icon-gallery.svg'
import { ReactComponent as ImgGoogle } from './assets/icon-google.svg'
import { ReactComponent as ImgGraph } from './assets/icon-graphs.svg'
import { ReactComponent as ImgHome } from './assets/icon-home-outline.svg'
import { ReactComponent as ImgFolder } from './assets/icon-folder-minus.svg'
import { ReactComponent as ImgFolderOpen } from './assets/icon-folder-minus-open.svg'
import { ReactComponent as ImgFolderPlus } from './assets/icon-folder-plus.svg'
import { ReactComponent as ImgDocument } from './assets/icon-document.svg'
import { ReactComponent as ImgDocumentPlus } from './assets/icon-document-plus.svg'
import { ReactComponent as ImgDialogue } from './assets/icon-dialogue.svg'
import { ReactComponent as ImgCharacter } from './assets/icon-character.svg'
import { ReactComponent as ImgCredit } from './assets/icon-credit.svg'
import { ReactComponent as ImgControls } from './assets/icon-controls.svg'
import { ReactComponent as ImgLocation } from './assets/icon-location.svg'
import { ReactComponent as ImgMountain } from './assets/icon-mountain.svg'
import { ReactComponent as ImgProjects } from './assets/icon-plus.svg'
import { ReactComponent as ImgSketch } from './assets/icon-palette-3.svg'
import { ReactComponent as ImgText } from './assets/icon-text.svg'
// import { ReactComponent as ImgMountains } from './assets/icon-mountains.svg'
// import { ReactComponent as ImgSketch } from './assets/icon-palette.svg'
// import { ReactComponent as ImgSketch } from './assets/icon-palette-2.svg'

export type CustomIconName =
    'audio' |
    'credit' |
    'character' |
    'characters' |
    'control' |
    'controls' |
    'dashboard' |
    'dashboards' |
    'dialogue' |
    'dialogues' |
    'document' |
    'documents' |
    'document-plus' |
    'folder' |
    'folders' |
    'folder-open' |
    'folder-plus' |
    'gallery' |
    'google' |
    'graph' |
    'graphs' |
    'home' |
    'image' |
    'images' |
    'location' |
    'locations' |
    'mountain' |
    'mountains' |
    'movie' |
    'movies' |
    'project' |
    'projects' |
    'sound' |
    'sounds' |
    'sketch' |
    'sketches' |
    'text' |
    'texts' |
    'chat' |
    'chats' |
    'video' |
    'videos'

interface CustomIconProps {
    title?: string;
    name: CustomIconName,
    imageClass?: string,
    color?: string;
    size?: number
    DEBUG?: boolean;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
  title,
  name,
  imageClass,
  color,
  size = 16,
  DEBUG,
}) => {
  const getIcon = (name: CustomIconName) => {

    if (DEBUG) {
      console.log('CustomIcon', name)
    }

    const sizeProps = {
      title: title,
      className: imageClass,
      width: size,
      height: size
    }
    const imageProps = {
      ...sizeProps,
      fill: color,
      stroke: color,
    }

    switch (name) {
    case 'home':
      return <ImgHome {...imageProps} />;
    case 'dashboard':
      return <ImgDashboard {...imageProps} />;
    case 'audio':
    case 'sound':
    case 'sounds':
      return <ImgAudio {...imageProps} />;
    case 'video':
    case 'videos':
      return <ImgVideo {...imageProps} />;
    case 'movie':
    case 'movies':
      return <ImgMovie {...imageProps} />;
    case 'gallery':
    case 'image':
    case 'images':
      return <ImgGallery {...imageProps} />;
    case 'google':
      return <ImgGoogle {...imageProps} stroke={'transparent'} />;
    case 'graph':
    case 'graphs':
      return <ImgGraph {...imageProps} />;
    case 'folder':
    case 'folders':
      return <ImgFolder {...imageProps} />;
    case 'folder-open':
      return <ImgFolderOpen {...imageProps} />;
    case 'folder-plus':
      return <ImgFolderPlus {...imageProps} />;
    case 'document':
    case 'documents':
      return <ImgDocument {...imageProps} />;
    case 'document-plus':
      return <ImgDocumentPlus {...imageProps} />;
    case 'dialogue':
    case 'dialogues':
      return <ImgDialogue {...imageProps} />;
    case 'character':
    case 'characters':
      return <ImgCharacter {...imageProps} />;
    case 'credit':
      return <ImgCredit stroke={color} fill={color} width={size} />;
    case 'control':
    case 'controls':
      return <ImgControls {...imageProps} fill={color} stroke={color} />;
    case 'location':
    case 'locations':
      return <ImgLocation {...imageProps} fill={color} stroke={color} />;
    case 'mountain':
      return <ImgMountain {...imageProps} fill={color} stroke={color} />;
    case 'sketch':
    case 'sketches':
      return <ImgSketch {...imageProps} fill={color} stroke={color} />;
    case 'project':
    case 'projects':
      return <ImgProjects {...imageProps} fill={color} stroke={color} />;
    case 'text':
    case 'texts':
    case 'chat':
    case 'chats':
      return <ImgText {...imageProps} fill={color} stroke={color} />;
    default: return (
      <ImgDashboard fill={color} stroke={color} width={size} />
    )
    }
  }
  return <div title={title}>{getIcon(name)}</div>
}

export default CustomIcon;