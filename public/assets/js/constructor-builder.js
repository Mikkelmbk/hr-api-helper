let constructorData = [
    {
        identifier: "url",
        labelText: "Context url (Optional)",
        placeholderText: "",
        constructor: "recom",
        param: "url",
    },
    {
        identifier: "tracking-user-id",
        labelText: "Tracking user id (Optional)",
        placeholderText: "",
        constructor: "recom",
        param:"trackingUserId"
    },
    {
        identifier: "product-box-id",
        labelText: "Recommendation box key (Required)",
        placeholderText: "Example: 1234, 5678",
        constructor: "recom",
        param:"ids"
    },
    {
        identifier: "hierarchy",
        labelText: "Hierarchy (Optional)",
        placeholderText: "Example: mountainbikes",
        constructor: "recom",
        param: "hierarchies"
    },
    {
        identifier: "crawledData",
        labelText: "crawledData (Optional)",
        placeholderText: "Example: brand=Nike",
        constructor: "recom",
        param: "crawledData",
    },
    {
        identifier: "extraData-crawledData",
        labelText: "extraData crawledData (Optional)",
        placeholderText: "Example: carBrand=Toyota",
        constructor: "recom",
        param: "extraData-crawledData",
    },
    {
        identifier: "extraDataList-crawledData",
        labelText: "extraDataList crawledData (Optional)",
        placeholderText: "Example: Series=Cars",
        constructor: "recom",
        param: "extraDataList-crawledData",
    },
    {
        identifier: "query",
        labelText: "Search Query (Required)",
        placeholderText: "",
        constructor: "search",
        param: "q",
    },
    {
        identifier: "search-key-id",
        labelText: "Search key Id (Required)",
        placeholderText: "",
        constructor: "search",
        param: "key",
    },
    {
        identifier: "product-count",
        labelText: "Product count (Optional)",
        placeholderText: "Example: 10",
        constructor: "search",
        param: "product_count",
    },
    {
        identifier: "product-start",
        labelText: "Product start (Optional)",
        placeholderText: "Example: 17",
        constructor: "search",
        param: "product_start",
    },
    {
        identifier: "filters",
        labelText: "Filters (Optional)",
        placeholderText: "Example: brand:nike",
        constructor: "search",
        param: "filters[]",
    },
];

constructorData.forEach((data) => {
    let constructorContainerElem = document.createElement('section');
    let structureDivElem = document.createElement('div');
    let constructorInputElem = document.createElement('input');
    let constructorLabelElem = document.createElement('label');
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

    constructorLabelElem.innerHTML = data.labelText;
    constructorButtonElem.innerHTML = "Add parameter";

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
    constructorContainerElem.appendChild(constructorButtonElem);

    
});
