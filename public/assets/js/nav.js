let outerRecomContainerElem = document.querySelector(".main__endpoint-constructor-outer-recom-container");
let outerSearchContainerElem = document.querySelector(".main__endpoint-constructor-outer-search-container");
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
        document.querySelector(".main__endpoint-output").innerHTML = "https://www.addwish.com/api/v1/product-recommendation/getProductBoxes?format=json";
        document.querySelector(".main__endpoint-constructor-description").innerHTML = "Recommendation REST Endpoint";

    }
    else if(activeTab === "search-rest-endpoint"){
        outerSearchContainerElem.classList.remove("hidden");
        document.querySelector(".main__endpoint-output").innerHTML = "https://www.addwish.com/api/v1/search/partnerSearch?key=";
        document.querySelector(".main__endpoint-constructor-description").innerHTML = "Search REST Endpoint";
    }
}