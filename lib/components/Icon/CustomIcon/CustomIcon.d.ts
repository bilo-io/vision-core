import React from 'react';
export type CustomIconName = 'audio' | 'credit' | 'character' | 'characters' | 'control' | 'controls' | 'dashboard' | 'dashboards' | 'dialogue' | 'dialogues' | 'document' | 'documents' | 'document-plus' | 'folder' | 'folders' | 'folder-open' | 'folder-plus' | 'gallery' | 'google' | 'graph' | 'graphs' | 'home' | 'image' | 'images' | 'location' | 'locations' | 'mountain' | 'mountains' | 'movie' | 'movies' | 'project' | 'projects' | 'sound' | 'sounds' | 'sketch' | 'sketches' | 'text' | 'texts' | 'chat' | 'chats' | 'video' | 'videos';
interface CustomIconProps {
    title?: string;
    name: CustomIconName;
    imageClass?: string;
    color?: string;
    size?: number;
    DEBUG?: boolean;
}
export declare const CustomIcon: React.FC<CustomIconProps>;
export default CustomIcon;
