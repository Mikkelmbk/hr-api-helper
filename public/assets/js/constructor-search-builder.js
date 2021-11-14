let searchData = [
    {
        identifier: "query",
        labelText: "Search Query (Required)",
        placeholderText: ""
    },
    {
        identifier: "search-key-id",
        labelText: "Search key Id (Required)",
        placeholderText: ""
    },
    {
        identifier: "product-count",
        labelText: "Product count (Optional)",
        placeholderText: "Example: 10"
    },
    {
        identifier: "product-start",
        labelText: "Product start (Optional)",
        placeholderText: "Example: 17"
    },
    {
        identifier: "filters",
        labelText: "Filters (Optional)",
        placeholderText: "Example: brand:nike"
    },
];

searchData.forEach((data)=>{
    let constructorSearchContainerElem = document.createElement('section');
    let structureDivElem = document.createElement('div');
    let constructorSearchInputElem = document.createElement('input');
    let constructorSearchLabelElem = document.createElement('label');
    let constructorSearchButtonElem = document.createElement('button');

    constructorSearchContainerElem.classList.add("main__endpoint-constructor-search-container");
    constructorSearchContainerElem.classList.add(data.identifier);
    constructorSearchInputElem.classList.add("main__endpoint-constructor-search-input");
    constructorSearchInputElem.classList.add(data.identifier);
    constructorSearchLabelElem.classList.add("main__endpoint-constructor-search-label");
    constructorSearchLabelElem.classList.add(data.identifier);
    constructorSearchButtonElem.classList.add("main__endpoint-constructor-search-button");
    constructorSearchButtonElem.classList.add(data.identifier);

    constructorSearchLabelElem.innerHTML = data.labelText;
    constructorSearchButtonElem.innerHTML = "Add parameter";

    constructorSearchInputElem.placeholder = data.placeholderText;

    outerSearchContainerElem.appendChild(constructorSearchContainerElem);
    constructorSearchContainerElem.appendChild(structureDivElem);
    structureDivElem.appendChild(constructorSearchInputElem);
    structureDivElem.appendChild(constructorSearchLabelElem);
    constructorSearchContainerElem.appendChild(constructorSearchButtonElem);
});