export type SortOrder = 'asc' | 'desc';
export declare function sortBy<T>(key: keyof T, order?: SortOrder): (a: T, b: T) => number;
