// let mainEndpointOutputTestBtnElem = document.querySelector(".main__endpoint-output-test");
// let mainEndpointOutputResponseWindowElem = document.querySelector(".main__endpoint-test-response-window-description");
// let mainEndpointOutputResponseElem = document.querySelector(".main__endpoint-test-response-output");

mainEndpointOutputTestBtnElem.addEventListener("click", () => {
    mainEndpointOutputTestBtnElem.disabled = true;
    mainEndpointOutputTestBtnElem.classList.add("awaiting-orange-background-color");
    mainEndpointOutputResponseWindowElem.classList.remove("failure-red-background");
    mainEndpointOutputResponseWindowElem.classList.remove("success-green-background");
    fetch(mainEndpointOutputElem.textContent)
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            if (mainEndpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
                let recomResponse = Object.keys(data.result)[0];
                recomResponse = data.result[recomResponse];
                if (recomResponse.error && recomResponse.errorCode) {
                    mainEndpointOutputResponseWindowElem.classList.add("failure-red-background");
                    registerEndpointTest(mainEndpointOutputTestBtnElem);
                    return;
                }
                buildSimpleView(recomResponse);
            }
            else if(mainEndpointConstructorDescriptionElem.textContent.includes("Search")){
                if(data.error && data.errorCode){
                    mainEndpointOutputResponseWindowElem.classList.add("failure-red-background");
                    registerEndpointTest(mainEndpointOutputTestBtnElem);
                    return;
                }
                console.log(data);
                buildSimpleView(data);
            }
            registerEndpointTest(mainEndpointOutputTestBtnElem);
            mainEndpointOutputResponseWindowElem.classList.add("success-green-background");
        })
});


function registerEndpointTest(button) {
    button.classList.remove("awaiting-orange-background-color");
    button.disabled = false;
}

function buildSimpleView(response) {
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
}

function buildAdvancedView(response) {
    console.log("This is advanced: ", response);
    mainEndpointOutputResponseElem.textContent = JSON.stringify(response, undefined, 4);
}