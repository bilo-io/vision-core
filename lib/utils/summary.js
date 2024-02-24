"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterSummary = void 0;
const characterSummary = (character) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    let result = '';
    let characterName = (((_a = character.name) === null || _a === void 0 ? void 0 : _a.firstName) || ((_b = character.name) === null || _b === void 0 ? void 0 : _b.nickName) || (character === null || character === void 0 ? void 0 : character.alias));
    let characterFullName = ((((_c = character.name) === null || _c === void 0 ? void 0 : _c.firstName) + ' ' + ((_d = character.name) === null || _d === void 0 ? void 0 : _d.lastName))).trim() || ((_e = character.name) === null || _e === void 0 ? void 0 : _e.nickName) || (character === null || character === void 0 ? void 0 : character.alias);
    let isGenderOther = ['OTHER', 'PREFER_NOT_TO_SAY', 'NONE'].includes((_f = character === null || character === void 0 ? void 0 : character.demographics) === null || _f === void 0 ? void 0 : _f.gender);
    let pronoun = ((_g = character.demographics) === null || _g === void 0 ? void 0 : _g.gender) === 'MALE' ? {
        he: 'He',
        him: 'Him',
        his: 'His'
    } : ((_h = character.demographics) === null || _h === void 0 ? void 0 : _h.gender) === 'FEMALE' ? {
        he: 'She',
        him: 'Her',
        his: 'Her'
    } : {
        he: 'They',
        him: 'Them',
        his: 'Their'
    };
    if (character.name) {
        result += characterFullName || '';
        if ((_j = character === null || character === void 0 ? void 0 : character.background) === null || _j === void 0 ? void 0 : _j.occupation) {
            result += `, ${(_k = character === null || character === void 0 ? void 0 : character.background) === null || _k === void 0 ? void 0 : _k.occupation}.`;
        }
        result += ' ';
    }
    if (character.alias !== characterFullName) {
        result += `${pronoun.he} ${isGenderOther ? 'are' : 'is'} also known as ${character.alias}. `;
    }
    if (Number((_m = (_l = character.traits) === null || _l === void 0 ? void 0 : _l.personality) === null || _m === void 0 ? void 0 : _m.length) > 0) {
        const joinedData = (_o = character === null || character === void 0 ? void 0 : character.traits) === null || _o === void 0 ? void 0 : _o.personality.join(', ');
        result += (joinedData === null || joinedData === void 0 ? void 0 : joinedData.length) > 0 ? `${characterName} is categorised as ${joinedData}. ` : '';
    }
    if (Number((_q = (_p = character === null || character === void 0 ? void 0 : character.traits) === null || _p === void 0 ? void 0 : _p.skills) === null || _q === void 0 ? void 0 : _q.length) > 0) {
        const joinedData = (_r = character === null || character === void 0 ? void 0 : character.traits) === null || _r === void 0 ? void 0 : _r.skills.join(', ');
        result += (joinedData === null || joinedData === void 0 ? void 0 : joinedData.length) > 0 ? `${pronoun.his} primary skills are ${joinedData}. ` : '';
    }
    if (Number((_t = (_s = character === null || character === void 0 ? void 0 : character.traits) === null || _s === void 0 ? void 0 : _s.specialAbilities) === null || _t === void 0 ? void 0 : _t.length) > 0) {
        const joinedData = (_u = character === null || character === void 0 ? void 0 : character.traits) === null || _u === void 0 ? void 0 : _u.specialAbilities.join(', ');
        result += (joinedData === null || joinedData === void 0 ? void 0 : joinedData.length) > 0 ? `${pronoun.he} specialises in ${joinedData}. ` : '';
    }
    result += '\n\n';
    if (character === null || character === void 0 ? void 0 : character.demographics) {
        result += `${characterName}'s age is ${(_v = character === null || character === void 0 ? void 0 : character.demographics) === null || _v === void 0 ? void 0 : _v.age}. `;
        // result += `${pronoun?.he} identifies as ${character?.demographics?.gender.toLowerCase()}. `;
        result += `In terms of sexuality, ${pronoun === null || pronoun === void 0 ? void 0 : pronoun.he} is ${(_x = (_w = character === null || character === void 0 ? void 0 : character.demographics) === null || _w === void 0 ? void 0 : _w.sexuality) === null || _x === void 0 ? void 0 : _x.toLowerCase()}. `;
    }
    result += '\n\n';
    if (character === null || character === void 0 ? void 0 : character.identity) {
        result += `${pronoun === null || pronoun === void 0 ? void 0 : pronoun.he} is of ${((_y = character === null || character === void 0 ? void 0 : character.identity) === null || _y === void 0 ? void 0 : _y.ethnicity) || 'unknown'} ethnicity. `;
        result += `As for religion, ${pronoun === null || pronoun === void 0 ? void 0 : pronoun.he} follows ${((_z = character === null || character === void 0 ? void 0 : character.identity) === null || _z === void 0 ? void 0 : _z.religion) || 'no specific religion'}. `;
        // result += `Identity-wise, ${pronoun?.he} identifies as ${character?.identity?.genderIdentity || 'unknown'}. `;
        // result += `In terms of sexual orientation, ${pronoun?.he} is ${character?.identity?.sexualOrientation?.toLowerCase()}. `;
        // result += `Preferred pronouns are ${character?.identity?.pronouns || 'unknown'}. `;
    }
    result += '\n\n';
    if (character === null || character === void 0 ? void 0 : character.background) {
        result += `${pronoun === null || pronoun === void 0 ? void 0 : pronoun.he} is of ${((_0 = character === null || character === void 0 ? void 0 : character.background) === null || _0 === void 0 ? void 0 : _0.nationality) || 'unknown'} nationality. `;
        // result += `Speaks ${character?.background?.language || 'unknown'} as the native language. `;
        result += `Educationally, ${pronoun === null || pronoun === void 0 ? void 0 : pronoun.he} has a background in ${((_1 = character === null || character === void 0 ? void 0 : character.background) === null || _1 === void 0 ? void 0 : _1.education) || 'unknown'}. `;
        // result += `Occupationally, ${pronoun?.he} is/was a ${character?.background?.occupation || 'unknown'}. `;
    }
    if (character === null || character === void 0 ? void 0 : character.story) {
        result += character.story;
    }
    return result;
};
exports.characterSummary = characterSummary;
