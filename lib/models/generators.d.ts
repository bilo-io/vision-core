export type IGeneratorType = 'Audio' | 'Image' | 'Text' | 'Video';
export interface IGenerator {
    /**`id`: the unique identifier of the AI generator */
    id: string;
    /**`name`: the human-friendly name of the AI generator */
    name: string;
    /**`type`: the type of the AI generator.
     *
     * one of type: `'Audio'` | `'Image'` | `'Text'` | `'Video'`   */
    type: IGeneratorType;
    /**`website`: the public URL to the website of the AI generator*/
    website: string;
    /**`description`: the description of the AI generator */
    description?: string;
    /**`apiDocsUrl`: the public API documentation of the AI generator API  */
    apiDocsUrl?: string;
    /**`apiBaseUrl`: the base URL of the AI generator API  */
    apiBaseUrl?: string;
    /**`properties`: the properties required to make a core request to use the respective AI generator API for its primary function  */
    properties?: {
        [key in string]: string;
    };
}
//# sourceMappingURL=generators.d.ts.map