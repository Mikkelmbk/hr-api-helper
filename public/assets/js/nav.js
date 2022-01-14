constructorDisplay(activeTab); // upon loading the website, call the constructorDisplay with the hash value corresponding to the display we want to see when no hash exists.
window.addEventListener('hashchange',(e)=>{
    constructorDisplay(e.newURL.split("#").pop());
});

function constructorDisplay(clickedTab){
    activeTab = clickedTab; // set activeTab in global-utils.js to the tab we just clicked on.
    mainEndpointConstructorOuterRecomContainerElem.classList.add("hidden");
    mainEndpointConstructorOuterSearchContainerElem.classList.add("hidden");
    mainEndpointConstructorOuterTrackingUserIdContainerElem.classList.add("hidden");
    if(activeTabChecker("recommendation-rest-endpoint")){ // call activeTabChecker with a value, if said value is the same as activeTab return true.
        mainEndpointConstructorOuterRecomContainerElem.classList.remove("hidden");
        mainEndpointOutputElem.innerHTML = "https://www.addwish.com/api/v1/product-recommendation/getProductBoxes?format=json";
        mainEndpointConstructorDescriptionElem.innerHTML = "Recommendation REST Endpoint";
    }
    else if(activeTabChecker("search-rest-endpoint")){ // call activeTabChecker with a value, if said value is the same as activeTab return true.
        mainEndpointConstructorOuterSearchContainerElem.classList.remove("hidden");
        mainEndpointOutputElem.innerHTML = "https://www.addwish.com/api/v1/search/partnerSearch?format=json&return_filters=true&category_count=12";
        mainEndpointConstructorDescriptionElem.innerHTML = "Search REST Endpoint";
    }
    else if(activeTabChecker("tracking-user-id-endpoint")){ // call activeTabChecker with a value, if said value is the same as activeTab return true.
        mainEndpointConstructorOuterTrackingUserIdContainerElem.classList.remove("hidden");
        mainEndpointOutputElem.innerHTML = "https://addwish.com/api/v1/tracking/bias";
        mainEndpointConstructorDescriptionElem.innerHTML = "Tracking user id Endpoint";
    }
}
// https://addwish.com/api/v1/tracking/bias?websiteUuid=websiteUuid-indsættes-her&hello_retail_id=trackingUserId-indsættes-herFeedback