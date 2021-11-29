mainEndpointOutputTestBtnElem.addEventListener("click", () => {
    if (mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
        if (!mainEndpointOutputElem.querySelector(".ids")) {
            buttonFeedback(mainEndpointOutputTestBtnElem, "Missing required parameter", 3000, false);
            return;
        }
    }
    else if (mainEndpointConstructorDescriptionElem.textContent.includes("Search")) {
        if (!mainEndpointOutputElem.querySelector(".key") || !mainEndpointOutputElem.querySelector(".q")) {
            buttonFeedback(mainEndpointOutputTestBtnElem, "Missing required parameter", 3000, false);
            return;
        }
    }
    buttonFeedback(mainEndpointOutputTestBtnElem, "Testing Endpoint", 1500);
    mainEndpointOutputTestBtnElem.disabled = true;
    mainEndpointOutputResponseWindowElem.classList.remove("failure-red-background");
    mainEndpointOutputResponseWindowElem.classList.remove("success-green-background");
    fetch(mainEndpointOutputElem.textContent)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
                let recomResponse = Object.keys(data.result)[0];
                data = data.result[recomResponse];
            }
            // buildSimpleView(data);
            buildAdvancedView(data);
        })
});

function buildSimpleView(response) {
    if (response.error && response.errorCode) {
        mainEndpointOutputResponseWindowElem.classList.add("failure-red-background");
        mainEndpointOutputResponseElem.textContent = response.error;
        return;
    }
    mainEndpointOutputResponseWindowElem.classList.add("success-green-background");
    mainEndpointOutputResponseElem.textContent = "";
    let simple = [];

    response.result.forEach((product) => {
        simple.push({
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
    let productCount = document.createElement('p');
    productCount.textContent = response.countAfterSource;
    mainEndpointOutputResponseElem.appendChild(productCount);

    simple.forEach((product) => {
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
        container.classList.add("response-product-container");

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

    if (response.result.length === 0) {
        mainEndpointOutputResponseElem.textContent += "The request was correct, but did not find any products, check that the parameters you provided are enough to find products, and are correct.";
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

    mainEndpointOutputResponseElem.textContent = response.countAfterSource;

    response.result.forEach((raw)=>{ // IT'S FUCKING RAW
        let container = document.createElement("div");
        container.textContent = JSON.stringify(raw, undefined, 4);
        container.classList.add("main__endpoint-test-response-window-raw");
        mainEndpointOutputResponseElem.appendChild(container);
        
    })

    if (response.result.length === 0) {
        mainEndpointOutputResponseElem.textContent += " The request was correct, but did not find any products, check that the parameters you provided are enough to find products, and are correct.";
    }
}