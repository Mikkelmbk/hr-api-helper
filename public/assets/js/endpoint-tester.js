let outputTestBtnElem = document.querySelector(".main__endpoint-output-test");
let outputResponseWindowElem = document.querySelector(".main__endpoint-test-response-window-description");
let outputResponseElem = document.querySelector(".main__endpoint-test-response-output");

outputTestBtnElem.addEventListener("click", () => {
    outputTestBtnElem.disabled = true;
    outputTestBtnElem.classList.add("awaiting-orange-background-color");
    outputResponseWindowElem.classList.remove("failure-red-background");
    outputResponseWindowElem.classList.remove("success-green-background");
    fetch(outputElem.textContent)
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            if (endpointConstructorDescriptionElem.textContent.includes("Recommendation")) {
                let recomResponse = Object.keys(data.result)[0];
                recomResponse = data.result[recomResponse];
                if (recomResponse.error && recomResponse.errorCode) {
                    outputResponseWindowElem.classList.add("failure-red-background");
                    registerEndpointTest(outputTestBtnElem);
                    return;
                }
                buildSimpleView(recomResponse);
            }
            else if(endpointConstructorDescriptionElem.textContent.includes("Search")){
                if(data.error && data.errorCode){
                    outputResponseWindowElem.classList.add("failure-red-background");
                    registerEndpointTest(outputTestBtnElem);
                    return;
                }
                console.log(data);
                buildSimpleView(data);
            }
            registerEndpointTest(outputTestBtnElem);
            outputResponseWindowElem.classList.add("success-green-background");
        })
});


function registerEndpointTest(button) {
    button.classList.remove("awaiting-orange-background-color");
    button.disabled = false;
}

function buildSimpleView(response) {
    outputResponseElem.textContent = "";
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
    outputResponseElem.appendChild(productCount);

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
        outputResponseElem.appendChild(container);
    });
}

function buildAdvancedView(response) {
    console.log("This is advanced: ", response);
    outputResponseElem.textContent = JSON.stringify(response, undefined, 4);
}