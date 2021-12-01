constructorDisplay(window.location.hash);
window.addEventListener('hashchange',(e)=>{
    let activeTab = e.newURL.split("#").pop();
    constructorDisplay(activeTab);
});

function constructorDisplay(activeTab){
    mainEndpointConstructorOuterRecomContainerElem.classList.add("hidden");
    mainEndpointConstructorOuterSearchContainerElem.classList.add("hidden");
    mainEndpointConstructorOuterTrackingUserIdContainerElem.classList.add("hidden");
    activeTab = activeTab.split("#").pop();
    if(activeTab === "recommendation-rest-endpoint" || activeTab === ""){
        mainEndpointConstructorOuterRecomContainerElem.classList.remove("hidden");
        mainEndpointOutputElem.innerHTML = "https://www.addwish.com/api/v1/product-recommendation/getProductBoxes?format=json";
        mainEndpointConstructorDescriptionElem.innerHTML = "Recommendation REST Endpoint";

    }
    else if(activeTab === "search-rest-endpoint"){
        mainEndpointConstructorOuterSearchContainerElem.classList.remove("hidden");
        mainEndpointOutputElem.innerHTML = "https://www.addwish.com/api/v1/search/partnerSearch?format=json";
        mainEndpointConstructorDescriptionElem.innerHTML = "Search REST Endpoint";
    }
    else if(activeTab === "tracking-user-id-endpoint"){
        mainEndpointConstructorOuterTrackingUserIdContainerElem.classList.remove("hidden");
        mainEndpointOutputElem.innerHTML = "https://addwish.com/api/v1/tracking/bias";
        mainEndpointConstructorDescriptionElem.innerHTML = "Tracking user id Endpoint";
    }
}
// https://addwish.com/api/v1/tracking/bias?websiteUuid=websiteUuid-indsættes-her&hello_retail_id=trackingUserId-indsættes-herFeedback