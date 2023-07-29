export interface IUser {
    id: string | number;
    name?: string;
    email?: string;
    authMethod: 'Email' | 'Google' | 'Facebook' | 'Apple';
}
