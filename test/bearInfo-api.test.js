const test = QUnit.test;
import bearDetailsApi from '../src/bearDetails-api.js';

QUnit.module('bear info api');

test('round-trip bear details', assert => {
    //arrange
    const bearDetails = { name: 'marshmallow' };
    
    //act
    bearDetailsApi.save(bearDetails);
    const result = bearDetailsApi.get();

    // assert
    assert.deepEqual(result, bearDetails);
});