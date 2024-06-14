import { IMediaType } from "../galleries";

export interface ICharacter {
    id: string;
    type?: IMediaType;
    name: string,
    names?: ICharacterName;
    traits?: ICharacterTraits;
    demographics?: ICharacterDemographics;
    identity?: ICharacterIdentity;
    background?: ICharacterBackground;
    projectId: string;
    /** `galleryId`: the folder name in which this resource belongs */
    galleryId?: string;
    images?: string[];
    story?: any | any[];
    // TODO: Add any other relevant properties of a character.
}

// Name properties
export interface ICharacterName {
    firstName?: string;
    lastName?: string;
    nickName?: string;
    // TODO: Middle name, nicknames, titles, etc.
}

// Traits properties
export interface ICharacterTraits {
    personality: ICharacterPersonality[];
    skills: ICharacterSkills[];
    specialAbilities: ICharacterAbilities[];
    // TODO: Add more trait-related properties as needed.
}

// Demographic properties
export interface ICharacterDemographics {
    age: string | number; // Age (e.g., can include 'unknown')
    gender: ICharacterGender; // Gender
    sexuality: ICharacterSexuality; // Sexuality
}

// Identity properties
export interface ICharacterIdentity {
    ethnicity?: string; // Ethnicity or racial background
    religion?: string; // Religious affiliation
    genderIdentity?: string; // Gender identity
    sexualOrientation?: string; // Detailed sexual orientation
    pronouns?: string; // Preferred pronouns
}

// Background properties
export interface ICharacterBackground {
    nationality?: string; // Nationality
    language?: string; // Native and spoken languages
    education?: string; // Educational background
    occupation?: string; // Current or past occupation
}

// Custom types for demographics and identity
export type ICharacterGender = 'MALE' | 'FEMALE' | 'NONE' | 'OTHER' | 'PREFER_NOT_TO_SAY';
export type ICharacterSexuality = 'HETEROSEXUAL' | 'HOMOSEXUAL' | 'BISEXUAL' | 'ASEXUAL' | 'PANSEXUAL' | 'OTHER' | 'PREFER_NOT_TO_SAY';

// Custom types for traits
export type ICharacterPersonality = 'Honest' | 'Creative' | 'Confident' | 'Adventurous' | 'Introverted' | 'Extroverted' | 'Loyal' | 'Ambitious' | 'Empathetic' | 'Optimistic' | 'Pessimistic' | 'Cautious' | 'Impulsive' | 'Analytical' | 'Charismatic' | string;
export type ICharacterSkills = 'Coding' | 'Problem Solving' | 'Leadership' | 'Communication' | 'Time Management' | 'Negotiation' | 'Cooking' | 'Painting' | 'Music' | 'Writing' | 'Public Speaking' | 'Teamwork' | 'Mechanical Engineering' | 'Data Analysis' | 'Foreign Languages' | string;
export type ICharacterAbilities = 'Super Strength' | 'Telekinesis' | 'Invisibility' | 'Time Travel' | 'Shape-Shifting' | 'Healing' | 'Mind Reading' | 'Pyrokinesis' | 'Flight' | 'Telepathy' | 'Elasticity' | 'X-ray Vision' | 'Phasing' | 'Electrokinesis' | 'Immortality' | string;

export const genders: ICharacterGender[] = ['MALE', 'FEMALE', 'NONE', 'OTHER', 'PREFER_NOT_TO_SAY'];
export const sexualities: ICharacterSexuality[] = ['HETEROSEXUAL', 'HOMOSEXUAL', 'BISEXUAL', 'ASEXUAL', 'PANSEXUAL', 'OTHER', 'PREFER_NOT_TO_SAY'];
export const personalities: ICharacterPersonality[] = ['Honest', 'Creative', 'Confident', 'Adventurous', 'Introverted', 'Extroverted', 'Loyal', 'Ambitious', 'Empathetic', 'Optimistic', 'Pessimistic', 'Cautious', 'Impulsive', 'Analytical', 'Charismatic'];
export const skills: ICharacterSkills[] = ['Coding', 'Problem Solving', 'Leadership', 'Communication', 'Time Management', 'Negotiation', 'Cooking', 'Painting', 'Music', 'Writing', 'Public Speaking', 'Teamwork', 'Mechanical Engineering', 'Data Analysis', 'Foreign Languages'];
export const abilities: ICharacterAbilities[] = ['Super Strength', 'Telekinesis', 'Invisibility', 'Time Travel', 'Shape-Shifting', 'Healing', 'Mind Reading', 'Pyrokinesis', 'Flight', 'Telepathy', 'Elasticity', 'X-ray Vision', 'Phasing', 'Electrokinesis', 'Immortality'];
