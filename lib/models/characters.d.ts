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
    images?: string[];
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
}
export interface ICharacterIdentity {
    ethnicity?: string;
    religion?: string;
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
type ICharacterPersonality = 'Honest' | 'Creative' | 'Confident' | 'Adventurous' | 'Introverted' | 'Extroverted' | 'Loyal' | 'Ambitious' | 'Empathetic' | 'Optimistic' | 'Pessimistic' | 'Cautious' | 'Impulsive' | 'Analytical' | 'Charismatic' | string;
type ICharacterSkills = 'Coding' | 'Problem Solving' | 'Leadership' | 'Communication' | 'Time Management' | 'Negotiation' | 'Cooking' | 'Painting' | 'Music' | 'Writing' | 'Public Speaking' | 'Teamwork' | 'Mechanical Engineering' | 'Data Analysis' | 'Foreign Languages' | string;
type ICharacterAbilities = 'Super Strength' | 'Telekinesis' | 'Invisibility' | 'Time Travel' | 'Shape-Shifting' | 'Healing' | 'Mind Reading' | 'Pyrokinesis' | 'Flight' | 'Telepathy' | 'Elasticity' | 'X-ray Vision' | 'Phasing' | 'Electrokinesis' | 'Immortality' | string;
export {};
