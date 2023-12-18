"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const outputObject = {};
    keys.forEach(key => {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            outputObject[key] = obj[key];
        }
    });
    return outputObject;
};
exports.default = pick;
