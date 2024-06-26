import { IResource } from "./resource";
export interface IControls extends IResource {
    data: {
        [key in ControlType]?: string | {
            name: string;
            description: string;
        };
    };
}
export type ControlType = 'STICK_LEFT' | 'STICK_RIGHT' | 'STICK_LEFT_PRESS' | 'STICK_RIGHT_PRESS' | 'DPAD_UP' | 'DPAD_RIGHT' | 'DPAD_DOWN' | 'DPAD_LEFT' | 'BTN_FACE_UP' | 'BTN_FACE_RIGHT' | 'BTN_FACE_DOWN' | 'BTN_FACE_LEFT' | 'TRIGGER_LEFT' | 'SHOULDER_LEFT' | 'TRIGGER_RIGHT' | 'SHOULDER_RIGHT';
