import getBearInfo from '../src/getBearInfo.js';
const test = QUnit.test;

test('build a function that returns an object', assert => {
    //arrange
    const expected = {
        name: 'yogurt',
        age: 4,
        accessories: ['cap', 'shoes'],
        mood: 'happy',
        color: 'rainbow',
        background: 'my fluffy bear'
    };

    const formData = new FormData();
    formData.set('full-name', expected.name);
    formData.set('age', expected.age);
    formData.set('accessories', expected.accessories[0]);
    formData.append('accessories', expected.accessories[1]);
    formData.set('mood', 'happy');
    formData.set('color', expected.color);
    formData.set('background', expected.background);

    //act
    const details = getBearInfo(formData);

    // assert
    assert.deepEqual(details, expected);
});