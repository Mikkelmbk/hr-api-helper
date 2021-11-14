let recomData = [
    {
        identifier: "url",
        labelText: "Context url (Optional)",
        placeholderText: ""
    },
    {
        identifier: "tracking-user-id",
        labelText: "Tracking user id (Optional)",
        placeholderText: ""
    },
    {
        identifier: "product-box-id",
        labelText: "Recommendation box key (Required)",
        placeholderText: "Example: 1234, 5678"
    },
    {
        identifier: "hierarchy",
        labelText: "Hierarchy (Optional)",
        placeholderText: "Example: mountainbikes"
    },
    {
        identifier: "crawledData",
        labelText: "crawledData (Optional)",
        placeholderText: "Example: brand=Nike"
    },
    {
        identifier: "extraData-crawledData",
        labelText: "extraData crawledData (Optional)",
        placeholderText: "Example: carBrand=Toyota"
    },
    {
        identifier: "extraDataList-crawledData",
        labelText: "extraDataList crawledData (Optional)",
        placeholderText: "Example: Series=Cars"
    },
];

recomData.forEach((data)=>{
    let constructorRecomContainerElem = document.createElement('section');
    let structureDivElem = document.createElement('div');
    let constructorRecomInputElem = document.createElement('input');
    let constructorRecomLabelElem = document.createElement('label');
    let constructorRecomButtonElem = document.createElement('button');

    constructorRecomContainerElem.classList.add("main__endpoint-constructor-recom-container");
    constructorRecomContainerElem.classList.add(data.identifier);
    constructorRecomInputElem.classList.add("main__endpoint-constructor-recom-input");
    constructorRecomInputElem.classList.add(data.identifier);
    constructorRecomLabelElem.classList.add("main__endpoint-constructor-recom-label");
    constructorRecomLabelElem.classList.add(data.identifier);
    constructorRecomButtonElem.classList.add("main__endpoint-constructor-recom-button");
    constructorRecomButtonElem.classList.add(data.identifier);

    constructorRecomLabelElem.innerHTML = data.labelText;
    constructorRecomButtonElem.innerHTML = "Add parameter";

    constructorRecomInputElem.placeholder = data.placeholderText;

    outerRecomContainerElem.appendChild(constructorRecomContainerElem);
    constructorRecomContainerElem.appendChild(structureDivElem);
    structureDivElem.appendChild(constructorRecomInputElem);
    structureDivElem.appendChild(constructorRecomLabelElem);
    constructorRecomContainerElem.appendChild(constructorRecomButtonElem);
});