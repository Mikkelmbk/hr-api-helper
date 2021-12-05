let mainEndpointTestResponseWindowClearBtnElem = document.querySelector(".main__endpoint-test-response-window-clear-btn");

mainEndpointTestResponseWindowClearBtnElem.addEventListener("click", () => {
    mainEndpointOutputResponseElemAdvancedSimpleReponseView.classList.add("hidden");
    mainEndpointOutputResponseWindowElem.classList.remove("success-green-background");
    mainEndpointOutputResponseWindowElem.classList.remove("failure-red-background");
    mainEndpointOutputResponseElem.textContent = "";
    buttonFeedback(mainEndpointTestResponseWindowClearBtnElem, mainEndpointTestResponseWindowClearBtnElem.textContent, 800);
});

mainEndpointOutputResponseElemAdvancedSimpleReponseView.addEventListener("click", (e) => {
    mainEndpointOutputResponseElem.textContent = "";
    if (e.target.dataset.responseView === "simple") {
        e.target.dataset.responseView = "advanced";
        e.target.textContent = "Show simple response";
        buttonFeedback(e.target, "Show simple response", 300);
        buildAdvancedView(APIresponse);
    }
    else {
        e.target.dataset.responseView = "simple";
        e.target.textContent = "Show advanced response";
        buttonFeedback(e.target, "Show advanced response", 300);
        buildSimpleView(APIresponse);
    }
})


function buildSimpleView(response) {
    if (response.error && response.errorCode) {
        mainEndpointOutputResponseWindowElem.classList.add("failure-red-background");
        mainEndpointOutputResponseElem.textContent = response.error;
        return;
    }
    
    mainEndpointOutputResponseWindowElem.classList.add("success-green-background");
    mainEndpointOutputResponseElem.textContent = "";
    let simpleProduct = [];

    response.result.forEach((product) => {
        simpleProduct.push({
            title: product.title,
            price: product.price,
            oldPrice: product.oldPrice ? product.oldPrice : product.price,
            imgUrl: product.imageUrl ? product.imageUrl : product.imgUrl,
            brand: product.brand ? product.brand : "No brand",
            url: product.url,
            productNumber: product.productNumber,
            currency: product.currency
        });
    });



    if (response.result.length === 0) {
        textSection("NO PRODUCTS FOUND");
    }
    else{
        textSection("PRODUCT SECTION");
    }

    if (mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
        let productCount = document.createElement('p');
        productCount.textContent = response.countAfterSource;
        mainEndpointOutputResponseElem.appendChild(productCount);
    }


    simpleProduct.forEach((product) => {
        let container = document.createElement('div');
        let title = document.createElement('p');
        let price = document.createElement('p');
        let oldPrice = document.createElement('p');
        let imgUrl = document.createElement('p');
        let brand = document.createElement('p');
        let url = document.createElement('a');
        let productNumber = document.createElement('p');
        let currency = document.createElement('p');

        title.textContent = `Title: ${product.title}`;
        price.textContent = `Price: ${product.price}`;
        oldPrice.textContent = `OldPrice: ${product.oldPrice}`;
        imgUrl.textContent = `ImgUrl: ${product.imgUrl}`;
        brand.textContent = `Brand: ${product.brand}`;
        url.textContent = `Url: ${product.url}`;
        url.href = product.url;
        productNumber.textContent = `ProductNumber: ${product.productNumber}`;
        currency.textContent = `Currency: ${product.currency}`;
        container.classList.add("response-container");

        container.appendChild(title);
        container.appendChild(price);
        container.appendChild(oldPrice);
        container.appendChild(imgUrl);
        container.appendChild(brand);
        container.appendChild(url);
        container.appendChild(productNumber);
        container.appendChild(currency);
        mainEndpointOutputResponseElem.appendChild(container);
    });

    if (mainEndpointConstructorDescriptionElem.textContent.includes("Search")) {
        if (response.categories.length === 0) {
            textSection("NO CATEGORIES FOUND");
        }
        else{
            textSection("CATEGORY SECTION");
        }
        let simpleCategory = [];

        response.categories.forEach((category) => {
            simpleCategory.push({
                title: category.title,
                description: category.description,
                url: category.url,
                keywords: category.keywords,
                hierarchy: category.hierarchy, 
            });
        });


        simpleCategory.forEach((category) => {
            let container = document.createElement('div');
            let title = document.createElement('p');
            let description = document.createElement('p');
            let url = document.createElement('a');
            let keywords = document.createElement('p');
            let hierarchy = document.createElement('p');
    
            title.textContent = `Title: ${category.title}`;
            description.textContent = `Description: ${category.description}`;
            url.textContent = `Url: ${category.url}`;
            url.href = category.url;
            keywords.textContent = `keywords: ${category.keywords}`;
            hierarchy.textContent = `hierarchy: ${category.hierarchy}`;
            container.classList.add("response-container");
    
            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(url);
            container.appendChild(keywords);
            container.appendChild(hierarchy);
            mainEndpointOutputResponseElem.appendChild(container);
        });
    }
}

function buildAdvancedView(response) {
    if (response.error && response.errorCode) {
        mainEndpointOutputResponseWindowElem.classList.add("failure-red-background");
        mainEndpointOutputResponseElem.textContent = response.error;
        return;
    }
    mainEndpointOutputResponseWindowElem.classList.add("success-green-background");
    mainEndpointOutputResponseElem.textContent = "";

    if (response.result.length === 0) {
        textSection("NO PRODUCTS FOUND");
    }
    else{
        textSection("PRODUCT SECTION");
    }

    if (mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
        let countAfterSource = document.createElement('p');
        countAfterSource.textContent = response.countAfterSource;
        mainEndpointOutputResponseElem.appendChild(countAfterSource);
    }



    response.result.forEach((raw) => { // IT'S FUCKING RAW
        let container = document.createElement("div");
        container.textContent = JSON.stringify(raw, undefined, 4);
        container.classList.add("main__endpoint-test-response-window-raw");
        mainEndpointOutputResponseElem.appendChild(container);
    })

    if (mainEndpointConstructorDescriptionElem.textContent.includes("Search")) {
        if (response.categories.length === 0) {
            textSection("NO CATEGORIES FOUND");
        }
        else{
            textSection("CATEGORY SECTION");
        }

        response.categories.forEach((raw) => { // IT'S FUCKING RAW
            let container = document.createElement("div");
            container.textContent = JSON.stringify(raw, undefined, 4);
            container.classList.add("main__endpoint-test-response-window-raw");
            mainEndpointOutputResponseElem.appendChild(container);
        });
    }
}

function trackingUserIdview(response) {
    mainEndpointOutputResponseElem.textContent = "";

    let combined = [];

    combined.push("Data for tracked user");

    response.user.brand.forEach((brand) => {
        brand.type = "brand";
        combined.push(brand);
    });

    response.user.hierarchy.forEach((hierarchy) => {
        hierarchy.type = "hierarchy";
        combined.push(hierarchy);
    })

    combined.forEach((user) => {
        let container = document.createElement("div");
        container.textContent = JSON.stringify(user, undefined, 4);
        container.classList.add("main__endpoint-test-response-window-raw");
        mainEndpointOutputResponseElem.appendChild(container);
    })
}

function textSection(text) {
    let textSection = document.createElement('h1');
    textSection.classList.add('response-heading');
    textSection.textContent = text;
    mainEndpointOutputResponseElem.appendChild(textSection);
}