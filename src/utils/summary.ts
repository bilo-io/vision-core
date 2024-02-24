import { ICharacter } from "../models";

export const characterSummary = (character: ICharacter): string => {
    let result = '';
    let characterName: string = (character.name?.firstName || character.name?.nickName || character?.alias) as string;
    let characterFullName: string = ((character.name?.firstName + ' ' + character.name?.lastName)).trim() || character.name?.nickName || character?.alias as string;

    let isGenderOther = ['OTHER', 'PREFER_NOT_TO_SAY', 'NONE'].includes(character?.demographics?.gender as string)
    let pronoun = character.demographics?.gender === 'MALE' ? {
        he: 'He',
        him: 'Him',
        his: 'His'
    } : character.demographics?.gender === 'FEMALE' ? {
        he: 'She',
        him: 'Her',
        his: 'Her'
    } : {
        he: 'They',
        him: 'Them',
        his: 'Their'
    }

    if (character.name) {
        result += characterFullName || '';

        if (character?.background?.occupation) {
            result += `, ${character?.background?.occupation}.`
        }

        result += ' '
    }

    if (character.alias !== characterFullName) {
        result += `${pronoun.he} ${isGenderOther ? 'are' : 'is'} also known as ${character.alias}. `
    }

    if (Number(character.traits?.personality?.length) > 0) {
        const joinedData: string = character?.traits?.personality.join(', ') as string
        result += joinedData?.length > 0 ? `${characterName} is categorised as ${joinedData}. ` : ''
    }

    if (Number(character?.traits?.skills?.length) > 0) {
        const joinedData: string = character?.traits?.skills.join(', ') as string;
        result += joinedData?.length > 0 ? `${pronoun.his} primary skills are ${joinedData}. ` : ''
    }

    if (Number(character?.traits?.specialAbilities?.length) > 0) {
        const joinedData: string = character?.traits?.specialAbilities.join(', ') as string;
        result += joinedData?.length > 0 ? `${pronoun.he} specialises in ${joinedData}. ` : ''
    }

    result += '\n\n'

    if (character?.demographics) {
        result += `${characterName}'s age is ${character?.demographics?.age}. `;
        // result += `${pronoun?.he} identifies as ${character?.demographics?.gender.toLowerCase()}. `;
        result += `In terms of sexuality, ${pronoun?.he} is ${character?.demographics?.sexuality?.toLowerCase()}. `;
    }

    result += '\n\n'

    if (character?.identity) {
        result += `${pronoun?.he} is of ${character?.identity?.ethnicity || 'unknown'} ethnicity. `;
        result += `As for religion, ${pronoun?.he} follows ${character?.identity?.religion || 'no specific religion'}. `;
        // result += `Identity-wise, ${pronoun?.he} identifies as ${character?.identity?.genderIdentity || 'unknown'}. `;
        // result += `In terms of sexual orientation, ${pronoun?.he} is ${character?.identity?.sexualOrientation?.toLowerCase()}. `;
        // result += `Preferred pronouns are ${character?.identity?.pronouns || 'unknown'}. `;
    }

    result += '\n\n'

    if (character?.background) {
        result += `${pronoun?.he} is of ${character?.background?.nationality || 'unknown'} nationality. `;
        // result += `Speaks ${character?.background?.language || 'unknown'} as the native language. `;
        result += `Educationally, ${pronoun?.he} has a background in ${character?.background?.education || 'unknown'}. `;
        // result += `Occupationally, ${pronoun?.he} is/was a ${character?.background?.occupation || 'unknown'}. `;
    }

    return result;
}