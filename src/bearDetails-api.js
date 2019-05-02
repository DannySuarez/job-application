const bearDetailsApi = {
    save(bearDetails) {
        //get an array with order details
        const allOrders = bearDetailsApi.getAll();
        allOrders.push(bearDetails);
        //serialize to json
        const json = JSON.stringify(allOrders);
        //save to local storage
        localStorage.setItem('allOrders', json);
    },
    get() {

        //use get all 
        const allOrders = bearDetailsApi.getAll();
        //return
        return allOrders[0];
    },
    getAll() {
        //get from local storage
        const json = localStorage.getItem('allOrders');
        //deserialize 
        let allOrders = JSON.parse(json);
        if(!allOrders) {
            allOrders = [];
        }

        return allOrders;
    }

};

export default bearDetailsApi;