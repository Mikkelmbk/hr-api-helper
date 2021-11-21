let outputTestBtnElem = document.querySelector(".main__endpoint-output-test");
let outputResponseWindowElem = document.querySelector(".main__endpoint-test-response-window-description");
let outputResponseElem = document.querySelector(".main__endpoint-test-response-output");

outputTestBtnElem.addEventListener("click", () => {
    outputTestBtnElem.disabled = true;
    outputTestBtnElem.classList.add("awaiting-orange-background-color");
    outputResponseWindowElem.classList.remove("failure-red-background");
    outputResponseWindowElem.classList.remove("success-green-background");
    // registerEndpointTest(outputTestBtnElem);
    fetch(outputElem.textContent)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if(data.error && data.errorCode){
                outputResponseWindowElem.classList.add("failure-red-background");
                registerEndpointTest(outputTestBtnElem);
                return;
            }
            registerEndpointTest(outputTestBtnElem);
            let dynamicObj = Object.keys(data.result)[0];
            dynamicObj = data.result[dynamicObj];
            console.log(dynamicObj);
            let simple = [];
            let advanced = dynamicObj;
            // dynamicObj.countAfterSource

            dynamicObj.result.forEach((product)=>{
                simple.push({
                    title: product.title,
                    price: product.price,
                    oldPrice: product.oldPrice,
                    imgUrl: product.imageUrl,
                    brand: product.brand,
                    url: product.url,
                    productNumber: product.productNumber,
                    currency: product.currency
                });
            });

            console.log(simple);
            



            outputResponseWindowElem.classList.add("success-green-background");
            // outputResponseElem.textContent = JSON.stringify(advanced, undefined, 4);
            outputResponseElem.textContent = JSON.stringify(simple, undefined, 4);
        })
});


function registerEndpointTest(button){
    button.classList.remove("awaiting-orange-background-color");
    button.disabled = false;
}