constructorDisplay(window.location.hash);
window.addEventListener('hashchange',(e)=>{
    let activeTab = e.newURL.split("#").pop();
    constructorDisplay(activeTab);
});

function constructorDisplay(activeTab){
    outerRecomContainerElem.classList.add("hidden");
    outerSearchContainerElem.classList.add("hidden");
    activeTab = activeTab.split("#").pop();
    if(activeTab === "recommendation-rest-endpoint" || activeTab === ""){
        outerRecomContainerElem.classList.remove("hidden");
        outputElem.innerHTML = "https://www.addwish.com/api/v1/product-recommendation/getProductBoxes?format=json";
        endpointConstructorDescriptionElem.innerHTML = "Recommendation REST Endpoint";

    }
    else if(activeTab === "search-rest-endpoint"){
        outerSearchContainerElem.classList.remove("hidden");
        outputElem.innerHTML = "https://www.addwish.com/api/v1/search/partnerSearch?format=json";
        endpointConstructorDescriptionElem.innerHTML = "Search REST Endpoint";
    }
}