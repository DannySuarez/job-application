const test = QUnit.test;
QUnit.module('bear info api');

const bearDetailsApi = {
    save(bearDetails) {

        //serialize to json
        const json = JSON.stringify(bearDetails);
        //save to local storage
        localStorage.setItem('bearDetails', json);
    },
    get() {

        //get from local storage
        const json = localStorage.getItem('bearDetails');
        //deserialize 
        const bearDetails = JSON.parse(json);
        //return
        return bearDetails;
    }

};

test('round-trip bear details', assert => {
    //arrange
    const bearDetails = { name: 'marshmallow'};
    //act
    bearDetailsApi.save(bearDetails);
    const result = bearDetailsApi.get();

    // assert
    assert.deepEqual(result, bearDetails);
});