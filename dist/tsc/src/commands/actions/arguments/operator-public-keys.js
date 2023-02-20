"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const operator_1 = require("../validators/operator");
const uniqueOperators = {};
exports.default = {
    arg1: '-oks',
    arg2: '--operator-keys',
    options: {
        type: String,
        required: true,
        help: 'Comma-separated list of operator keys (same sequence as operator ids)'
    },
    interactive: {
        options: {
            type: 'text',
            message: 'Enter operator public key for {{index}} operator',
            validate: (value) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                if (uniqueOperators[value]) {
                    return 'This operator already used';
                }
                const returnValue = (0, operator_1.operatorPublicKeyValidator)(value);
                if (returnValue === true) {
                    uniqueOperators[value] = true;
                }
                return returnValue;
            })
        }
    }
};
//# sourceMappingURL=operator-public-keys.js.map