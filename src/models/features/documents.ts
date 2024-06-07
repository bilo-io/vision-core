import { IResource } from "../resource";

export interface IDocument extends IResource {
    /** `sections`:  the various sections the document has */
    blocks?: IEditorJSBlock[];
    /** `sectionCount`: the number of sections when the document gets returned in a list */
    sectionCount?: number;
    /** `templateId?`:  the optional template from which the document was created*/
    templateId?: string | number;
    /** `collectionId?`:  the optional collection the document belongs to */
    collectionId?: string | number;
    /** `userPrompt?`:  */
    userPrompt?: string;
}

// export interface Section {
//     name: string;
//     type: 'Text' | 'Image' | 'Audio' | 'Video';
//     data: any;
//     displayOrder: number;
//     children?: Section[];
// }

// #region CUSTOM TYPES
// NB: These are created with the help of sample data and GPT
export type IEditorJSBlock =
    | {
        type: "paragraph";
        data: {
            text: string;
        };
    }
    | {
        type: "header";
        data: {
            text: string;
            level: number;
        };
    }
    | {
        type: "list";
        data: {
            type: "unordered" | "ordered";
            items: (string | IEditorJSBlock)[];
        };
    }
    | {
        type: "attaches";
        data: {
            file: {
                url: string;
                size: number;
                name: string;
                extension: string;
            };
            title: string;
        };
    }
    | {
        type: "image";
        data: {
            file: {
                url: string;
            };
            withBorder: boolean;
            withBackground: boolean;
            stretched: boolean;
            caption: string;
        };
    };
// #endregion