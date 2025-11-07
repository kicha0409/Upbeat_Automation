const req =  require('@playwright/test');

class ApiGetData {
    async getDummytext() {
    // Create a new API request context
    const apiContext = await req.request.newContext();

    // Perform the GET call
    const response = await apiContext.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=1`);

    // Validate the response
    if (!response.ok()) {
        throw new Error(`GET request failed with status ${response.status()}`);
    }

    // Parse JSON body
    const data = await response.json();

    // Clean up context
    await apiContext.dispose();
    console.log(data);
    // Return response data
    return data;
}
}
module.exports = {ApiGetData};
