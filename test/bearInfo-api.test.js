import bearDetailsApi from '../src/bearDetails-api.js';
const test = QUnit.test;

QUnit.module('bear info api');

bearDetailsApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip bear details', assert => {
    testStorage.removeItem('allOrders');

    //arrange
    const bearDetails = { name: 'marshmallow' };

    //act
    bearDetailsApi.save(bearDetails);
    const result = bearDetailsApi.get();

    // assert
    assert.deepEqual(result, bearDetails);
});

test('no orders in local storage returns an empty array', assert => {
    
    //arrange
    testStorage.removeItem('allOrders');
    const expected = [];

    //act
    const allOrders = bearDetailsApi.getAll();

    assert.deepEqual(allOrders, expected);

    //assert


});

test('two saves return array with two items', assert => {
    localStorage.removeItem('allOrders');

    //arrang
    const order1 = { name: 'marshmallow' };
    const order2 = { name: 'ice cream' };
    const expected = [order1, order2];

    bearDetailsApi.save(order1);
    bearDetailsApi.save(order2);

    //act
    const allOrders = bearDetailsApi.getAll();

    //assert
    assert.deepEqual(allOrders, expected);

});