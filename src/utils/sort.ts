export type SortOrder = 'asc' | 'desc';

export function sortBy<T>(key: keyof T, order: SortOrder = 'asc') {
    return (a: T, b: T): number => {
        if (a[key] < b[key]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    };
}