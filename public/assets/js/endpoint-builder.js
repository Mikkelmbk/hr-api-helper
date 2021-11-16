// let endpointBuilderRecomUrlInputElem = document.querySelector(".main__endpoint-constructor-input.url.recom");
// let endpointBuilderRecomUrlButtonElem = document.querySelector(".main__endpoint-constructor-button.url.recom");
// endpointBuilderRecomUrlButtonElem.addEventListener("click",()=>{
//     console.log(endpointBuilderRecomUrlInputElem.value);
//     // outputElem.innerHTML += `&url=${endpointBuilderRecomUrlInputElem.value}`;
//     addToEndpoint(`&url=${endpointBuilderRecomUrlInputElem.value}`);
// });


let mainEndpointConstructorContainers = document.querySelectorAll(".main__endpoint-constructor-container");


mainEndpointConstructorContainers.forEach((item) => {
    if(item.classList.contains("recom")){
        item.querySelector(".main__endpoint-constructor-button").addEventListener("click",()=>{
            addToEndpoint(`${item.querySelector(".main__endpoint-constructor-input").value}`);
            // Add the identifier as a dataset instead of a class so that the dataset can be utilized here as parameter name for the endpoint. Change all identifiers to be camelCase instead of dashed to reflect the expected parameter names.
        })
    }
    else if(item.classList.contains("search")){
    }
})


function addToEndpoint(addition){
    outputElem.innerHTML += addition;
}