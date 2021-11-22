let constructorData = [
    {
        identifier: "url",
        labelText: "Context url (Optional)",
        placeholderText: "https://www.lomax.dk/rengoering/vaernemidler/engangshandsker/engangshandsker-hdpe-plast-one-size-100-stk-60090860/",
        constructor: "recom",
        param: "url",
        description: "A parameter which will tell our system to find products which are relevant to this one."
    },
    {
        identifier: "tracking-user-id",
        labelText: "Tracking user id (Optional)",
        placeholderText: "a95g845103y4tk45g19he10",
        constructor: "recom",
        param:"trackingUserId",
        description: "A parameter which will tell our system which hierarchies this user has shown interest for (used through the user.bias.hierarchy filter)."
    },
    {
        identifier: "product-box-id",
        labelText: "Recommendation box key (Required)",
        placeholderText: "Example: 1234 | 1234,5678",
        constructor: "recom",
        param:"ids",
        description: "A parameter which will tell our system which recommendation(s) it should use to find products."
    },
    {
        identifier: "hierarchy",
        labelText: "Hierarchy (Optional)",
        placeholderText: "Example: mountainbikes",
        constructor: "recom",
        param: "hierarchies",
        description: "A parameter which will tell our system which hierarchies it should find products from."
    },
    {
        identifier: "crawledData",
        labelText: "crawledData (Optional)",
        placeholderText: "Example: brand=Nike",
        constructor: "recom",
        param: "crawledData",
        description: "A parameter which will tell our system which Hello-retail defined values it should find products from."
    },
    {
        identifier: "extraData-crawledData",
        labelText: "extraData crawledData (Optional)",
        placeholderText: "Example: carBrand=Toyota",
        constructor: "recom",
        param: "extraData-crawledData",
        description: "A parameter which will tell our system which customer defined values it should find products from."
    },
    {
        identifier: "extraDataList-crawledData",
        labelText: "extraDataList crawledData (Optional)",
        placeholderText: "Example: Series=Cars",
        constructor: "recom",
        param: "extraDataList-crawledData",
        description: "A parameter which will tell our system which customer defined lists of values it should find products from."
    },
    {
        identifier: "query",
        labelText: "Search Query (Required)",
        placeholderText: "Syver stolen",
        constructor: "search",
        param: "q",
        description: "A parameter which will tell our system which phrase or keyword should be searched for."
    },
    {
        identifier: "search-key-id",
        labelText: "Search key Id (Required)",
        placeholderText: "a95g845103y4tk45g19he10",
        constructor: "search",
        param: "key",
        description: "A parameter which will tell our system which search configuration it should use to find products."
    },
    {
        identifier: "product-count",
        labelText: "Product count (Optional)",
        placeholderText: "Example: 15 (Default is 10)",
        constructor: "search",
        param: "product_count",
        description: "A parameter which will tell our system how many products it should find."
    },
    {
        identifier: "product-start",
        labelText: "Product start (Optional)",
        placeholderText: "Example: 17",
        constructor: "search",
        param: "product_start",
        description: "A parameter which will tell our system at which number in the list of products it should start at."
    },
    {
        identifier: "filters",
        labelText: "Filters (Optional)",
        placeholderText: "Example: brand:nike | Range example: price:100,500",
        constructor: "search",
        param: "filters[]",
        description: "A parameter which will tell our system to find products which match the provided filter."
    },
];

constructorData.forEach((data) => {
    let constructorContainerElem = document.createElement('section');
    let structureDivElem = document.createElement('div');
    let constructorInputElem = document.createElement('input');
    let constructorLabelElem = document.createElement('label');
    let constructorAbbreviationElem = document.createElement('abbr');
    let constructorButtonElem = document.createElement('button');

    constructorContainerElem.classList.add("main__endpoint-constructor-container");
    constructorContainerElem.classList.add(data.identifier);
    constructorContainerElem.classList.add(data.constructor);
    constructorInputElem.classList.add("main__endpoint-constructor-input");
    constructorInputElem.classList.add(data.identifier);
    constructorInputElem.classList.add(data.constructor);
    constructorInputElem.dataset.param = data.param;
    constructorLabelElem.classList.add("main__endpoint-constructor-label");
    constructorLabelElem.classList.add(data.identifier);
    constructorLabelElem.classList.add(data.constructor);
    constructorLabelElem.dataset.param = data.param;
    constructorButtonElem.classList.add("main__endpoint-constructor-button");
    constructorButtonElem.classList.add(data.identifier);
    constructorButtonElem.classList.add(data.constructor);
    constructorButtonElem.dataset.param = data.param;

    constructorButtonElem.innerHTML = "Add parameter";
    constructorAbbreviationElem.innerHTML = data.labelText;
    constructorAbbreviationElem.title = data.description;

    constructorInputElem.placeholder = data.placeholderText;
    if(data.constructor === "recom"){
        outerRecomContainerElem.appendChild(constructorContainerElem);
    }
    else if(data.constructor === "search"){
        outerSearchContainerElem.appendChild(constructorContainerElem);
    }
    constructorContainerElem.appendChild(structureDivElem);
    structureDivElem.appendChild(constructorInputElem);
    structureDivElem.appendChild(constructorLabelElem);
    constructorLabelElem.appendChild(constructorAbbreviationElem);
    constructorContainerElem.appendChild(constructorButtonElem);

    
});
