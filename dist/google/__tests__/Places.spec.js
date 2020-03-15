"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Places_1 = require("../Places");
const MASTER_KEY = process.env.PLACES_API_KEY;
const key1 = 'TestKey';
const key2 = '019494949494';
const key3 = null;
const invalidKey1 = 3030293949393;
const invalidKey2 = 'asdfdfjfjd sjdfjd';
describe('API Key', () => {
    it('should set the API Key', () => {
        Places_1.default.apiKey = key1;
        expect(Places_1.default.apiKey).toBe(key1);
        Places_1.default.apiKey = key2;
        expect(Places_1.default.apiKey).toBe(key2);
        Places_1.default.apiKey = key3;
        expect(Places_1.default.apiKey).toBe(key3);
    });
    it('should throw an error for invalid API Key', () => {
        expect(() => Places_1.default.apiKey = invalidKey1).toThrow('Invalid API Key');
        expect(Places_1.default.apiKey).toBe(null);
        expect(() => Places_1.default.apiKey = invalidKey2).toThrow('Invalid API Key');
        expect(Places_1.default.apiKey).toBe(null);
    });
});
describe('Details', () => {
    it('should throw an error for missing data', () => __awaiter(this, void 0, void 0, function* () {
        Places_1.default.apiKey = key1;
        expect.assertions(1);
        try {
            yield Places_1.default.details();
        }
        catch (error) {
            expect(error.message).toMatch('No parameters provided');
        }
    }));
    it('should throw an error for null details', () => __awaiter(this, void 0, void 0, function* () {
        Places_1.default.apiKey = key1;
        expect.assertions(1);
        try {
            yield Places_1.default.details(null);
        }
        catch (error) {
            expect(error.message).toMatch('No parameters provided');
        }
    }));
    it('should successfully find Wrigley Field', () => __awaiter(this, void 0, void 0, function* () {
        Places_1.default.apiKey = MASTER_KEY;
        const WRIGLEY_FIELD_PLACE_ID = 'ChIJId-a5bLTD4gRRtbdduE-6hw';
        const wrigley = yield Places_1.default.details({ placeid: WRIGLEY_FIELD_PLACE_ID });
        expect(wrigley.result).toBeDefined();
        const { types, url, geometry, name } = wrigley.result;
        expect(name).toBe('Wrigley Field');
        expect(url).toBe('https://maps.google.com/?cid=2083546915695089222');
        expect(types).toContain('stadium');
        expect(geometry.location).toEqual({ lat: 41.9484384, lng: -87.6553327 });
    }));
});
describe('Auto Complete', () => {
    it('should throw an error for missing data', () => __awaiter(this, void 0, void 0, function* () {
        Places_1.default.apiKey = key1;
        expect.assertions(1);
        try {
            yield Places_1.default.autocomplete();
        }
        catch (error) {
            expect(error.message).toMatch('No parameters provided');
        }
    }));
    it('should throw an error for null details', () => __awaiter(this, void 0, void 0, function* () {
        Places_1.default.apiKey = key1;
        expect.assertions(1);
        try {
            yield Places_1.default.autocomplete(null);
        }
        catch (error) {
            expect(error.message).toMatch('No parameters provided');
        }
    }));
    it('should perform a successful autocomplete for Wrigley Field', () => __awaiter(this, void 0, void 0, function* () {
        const WRIGLEY_FIELD_PLACE_ID = 'ChIJId-a5bLTD4gRRtbdduE-6hw';
        Places_1.default.apiKey = MASTER_KEY;
        const places = yield Places_1.default.autocomplete({ input: 'Wrigley Field' });
        const found = places.predictions.find(place => place.place_id === WRIGLEY_FIELD_PLACE_ID);
        expect(found).toBeDefined();
    }));
});
//# sourceMappingURL=Places.spec.js.map