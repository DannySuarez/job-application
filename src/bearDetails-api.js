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

export default bearDetailsApi;