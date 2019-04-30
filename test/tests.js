const test = QUnit.test;

function getBearInfo(formData) {

    //Make object literal, literally making an object
    const applicant = {
        name: formData.get('full-name'),
        age: formData.get('age'),
        accessories: formData.getAll('accessories'),
        mood: formData.get('mood'),
        color: formData.get('color'),
        background: formData.get('background'),
    };
    return applicant;
}
test('build a function that returns an object', assert => {
    //arrange

    //act
    const expected = {
        name: 'yogurt',
        age: '4',
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
    const applicant = getBearInfo(formData);

    // assert
    assert.deepEqual(applicant, expected);

});