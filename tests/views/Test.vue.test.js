import Demo from './demo';

describe('Component', () => {
    test('is a Vue instance', () => {
        expect(new Demo().log()).toBe(11);
    });
});
