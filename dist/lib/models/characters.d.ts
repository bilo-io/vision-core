import { IMediaType } from "./galleries";
export interface ICharacter {
    id: string;
    alias?: string;
    type?: IMediaType;
    name?: ICharacterName;
    traits?: ICharacterTraits;
    demographics?: ICharacterDemographics;
    identity?: ICharacterIdentity;
    background?: ICharacterBackground;
    projectId: string;
    galleryId?: string;
    images?: string[];
    story?: any | any[];
}
export interface ICharacterName {
    firstName?: string;
    lastName?: string;
    nickName?: string;
}
export interface ICharacterTraits {
    personality: ICharacterPersonality[];
    skills: ICharacterSkills[];
    specialAbilities: ICharacterAbilities[];
}
export interface ICharacterDemographics {
    age: string | number;
    gender: ICharacterGender;
    sexuality: ICharacterSexuality;
    ethnicity?: string;
    religion?: string;
}
export interface ICharacterIdentity {
    genderIdentity?: string;
    sexualOrientation?: string;
    pronouns?: string;
}
export interface ICharacterBackground {
    nationality?: string;
    language?: string;
    education?: string;
    occupation?: string;
}
export type ICharacterGender = 'MALE' | 'FEMALE' | 'NONE' | 'OTHER' | 'PREFER_NOT_TO_SAY';
export type ICharacterSexuality = 'HETEROSEXUAL' | 'HOMOSEXUAL' | 'BISEXUAL' | 'ASEXUAL' | 'PANSEXUAL' | 'OTHER' | 'PREFER_NOT_TO_SAY';
export type ICharacterPersonality = 'Honest' | 'Creative' | 'Confident' | 'Adventurous' | 'Introverted' | 'Extroverted' | 'Loyal' | 'Ambitious' | 'Empathetic' | 'Optimistic' | 'Pessimistic' | 'Cautious' | 'Impulsive' | 'Analytical' | 'Charismatic' | string;
export type ICharacterSkills = 'Coding' | 'Problem Solving' | 'Leadership' | 'Communication' | 'Time Management' | 'Negotiation' | 'Cooking' | 'Painting' | 'Music' | 'Writing' | 'Public Speaking' | 'Teamwork' | 'Mechanical Engineering' | 'Data Analysis' | 'Foreign Languages' | string;
export type ICharacterAbilities = 'Super Strength' | 'Telekinesis' | 'Invisibility' | 'Time Travel' | 'Shape-Shifting' | 'Healing' | 'Mind Reading' | 'Pyrokinesis' | 'Flight' | 'Telepathy' | 'Elasticity' | 'X-ray Vision' | 'Phasing' | 'Electrokinesis' | 'Immortality' | string;
export declare const genders: ICharacterGender[];
export declare const sexualities: ICharacterSexuality[];
export declare const personalities: ICharacterPersonality[];
export declare const skills: ICharacterSkills[];
export declare const abilities: ICharacterAbilities[];
