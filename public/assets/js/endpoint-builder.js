let mainEndpointConstructorContainerElems = document.querySelectorAll(".main__endpoint-constructor-container");
let mainEndpointConstructorInputProductBoxIdRecomElem = document.querySelector("input[data-param='ids']");
let mainEndpointConstructorLabelProductBoxIdRecomElem = document.querySelector("label[data-param='ids']");

document.querySelector(".main__endpoint-constructor-clear-input-btn").addEventListener("click", (e) => {
    buttonFeedback(e.target, "Cleared inputs", 1000);
    document.querySelectorAll(".main__endpoint-constructor-input").forEach((input) => {
        input.value = "";
    })
});


mainEndpointConstructorContainerElems.forEach((item) => {
    let btn = item.querySelector(".main__endpoint-constructor-button");
    let input = item.querySelector(".main__endpoint-constructor-input");
    let label = item.querySelector(".main__endpoint-constructor-label");
    let identifier = btn.dataset.identifier;
    let param = input.dataset.param;

    // Recommendation events.
    if (identifier === "tracking-user-id") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateNoSpecialCharacters(input.value, label)) return;
            if (!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=${handleRecomUrlStructuring(input.value)}`, param);
        })
    }
    else if (identifier === "product-box-id") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateRecommendationBoxKey(input.value, label)) return;
            if (!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=${handleRecomUrlStructuring(input.value)}`, param);
        })
    }
    else if (identifier === "hierarchy") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            let recomBoxIdElem = document.querySelector("span.ids");
            if (!recommendationBoxKeyPresent(recomBoxIdElem, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            recomBoxIdElem = recomBoxIdElem.textContent.split("&ids=").pop();
            let pickedRecomBoxId = 0;
            let pickedHierarchyIndex = 0;

            if (recomBoxIdElem.includes(",")) {
                openModal(recomBoxIdElem, hierarchyRequestUrl);
                return;
            }
            hierarchyRequestUrl(pickedRecomBoxId);
            function hierarchyRequestUrl(pickedRecomBoxId) {
                console.log(pickedRecomBoxId);
                let preText = `${handleUrlVariable()}crawledData[${handleRecomUrlStructuring(recommendationBoxKeyPicker(recomBoxIdElem, pickedRecomBoxId))}][${param}][${pickedHierarchyIndex}][]=${handleRecomUrlStructuring(input.value)}`;
                buttonFeedback(btn, btn.textContent, 1000);
                addToEndpoint(preText, param);
            }
        });
    }
    else if (identifier === "crawledData") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateEqualSign(input.value, label)) return;

            let recomBoxIdElem = document.querySelector("span.ids");
            if (!recommendationBoxKeyPresent(recomBoxIdElem, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            recomBoxIdElem = recomBoxIdElem.textContent.split("&ids=").pop();
            let pickedRecomBoxId = 0;

            if (recomBoxIdElem.includes(",")) {
                openModal(recomBoxIdElem, crawledDataRequestUrl);
                return;
            }
            crawledDataRequestUrl(pickedRecomBoxId);
            function crawledDataRequestUrl(pickedRecomBoxId) {
                let formattedValue = input.value.split("=");
                let preText = `${handleUrlVariable()}${param}[${handleRecomUrlStructuring(recommendationBoxKeyPicker(recomBoxIdElem, pickedRecomBoxId))}][${handleRecomUrlStructuring(formattedValue.shift())}]=${handleRecomUrlStructuring(formattedValue.pop())}`;
                buttonFeedback(btn, btn.textContent, 1000);
                addToEndpoint(preText, param);
            }
        })
    }
    else if (identifier === "crawledData-list") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateEqualSign(input.value, label)) return;

            let recomBoxIdElem = document.querySelector("span.ids");
            if (!recommendationBoxKeyPresent(recomBoxIdElem, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            recomBoxIdElem = recomBoxIdElem.textContent.split("&ids=").pop();
            let pickedRecomBoxId = 0;

            if (recomBoxIdElem.includes(",")) {
                openModal(recomBoxIdElem, crawledDataListRequestUrl);
                return;
            }
            crawledDataListRequestUrl(pickedRecomBoxId);
            function crawledDataListRequestUrl(pickedRecomBoxId) {
                let formattedValue = input.value.split("=");
                let preText = `${handleUrlVariable()}${param}[${handleRecomUrlStructuring(recommendationBoxKeyPicker(recomBoxIdElem, pickedRecomBoxId))}][${handleRecomUrlStructuring(formattedValue.shift())}][]=${handleRecomUrlStructuring(formattedValue.pop())}`;
                buttonFeedback(btn, btn.textContent, 1000);
                addToEndpoint(preText, param);
            }
        })
    }
    else if (identifier === "extraData-crawledData") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!extraDataValidateEqualSign(input.value, label)) return;

            let recomBoxIdElem = document.querySelector("span.ids");
            if (!recommendationBoxKeyPresent(recomBoxIdElem, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            recomBoxIdElem = recomBoxIdElem.textContent.split("&ids=").pop();
            let pickedRecomBoxId = 0;

            if (recomBoxIdElem.includes(",")) {
                openModal(recomBoxIdElem, extraDataCrawledDataRequestUrl);
                return;
            }
            extraDataCrawledDataRequestUrl(pickedRecomBoxId);
            function extraDataCrawledDataRequestUrl(pickedRecomBoxId) {
                let formattedValue = input.value.split("=");
                let preText = `${handleUrlVariable()}${param}[${handleRecomUrlStructuring(recommendationBoxKeyPicker(recomBoxIdElem, pickedRecomBoxId))}][extraData][${handleRecomUrlStructuring(formattedValue.shift())}]=${handleRecomUrlStructuring(formattedValue.pop())}`;
                buttonFeedback(btn, btn.textContent, 1000);
                addToEndpoint(preText, param);
            }
        })
    }
    else if (identifier === "extraDataList-crawledData") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!extraDataValidateEqualSign(input.value, label)) return;
            let recomBoxIdElem = document.querySelector("span.ids");
            if (!recommendationBoxKeyPresent(recomBoxIdElem, mainEndpointConstructorLabelProductBoxIdRecomElem)) return;
            recomBoxIdElem = recomBoxIdElem.textContent.split("&ids=").pop();
            let pickedRecomBoxId = 0;

            if (recomBoxIdElem.includes(",")) {
                openModal(recomBoxIdElem, extraDataListCrawledDataRequestUrl);
                return;
            }
            extraDataListCrawledDataRequestUrl(pickedRecomBoxId);
            function extraDataListCrawledDataRequestUrl(pickedRecomBoxId) {
                let formattedValue = input.value.split("=");
                let preText = `${handleUrlVariable()}${param}[${handleRecomUrlStructuring(recommendationBoxKeyPicker(recomBoxIdElem, pickedRecomBoxId))}][extraDataList][${handleRecomUrlStructuring(formattedValue.shift())}][]=${handleRecomUrlStructuring(formattedValue.pop())}`;
                buttonFeedback(btn, btn.textContent, 1000);
                addToEndpoint(preText, param);
            }
        })
    }
    // Search events.
    else if (identifier === "product-count" || identifier === "product-start") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateNumbers(input.value, label)) return;
            if (!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=${input.value}`, param);
        });
    }
    else if (identifier === "filters") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateColonSign(input.value, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=${handleSearchUrlStructuring(input.value)}`, param);
        });
    }
    else if (identifier === "extraData-filters") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!extraDataValidateColonSign(input.value, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=extraData.${handleSearchUrlStructuring(input.value)}`, param);
        });
    }
    else if (identifier === "extraDataList-filters") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!extraDataValidateColonSign(input.value, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=extraDataList.${handleSearchUrlStructuring(input.value)}`, param);
        });
    }
    // Tracking user id event
    else if (identifier === "website-uuid") {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=${handleRecomUrlStructuring(input.value)}`, param);
        });
    }
    // general events
    else {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateNotEmpty(input.value, label)) return;
            if (!validateNoDuplicates(input, label)) return;
            buttonFeedback(btn, btn.textContent, 1000);
            addToEndpoint(`${handleUrlVariable()}${param}=${handleRecomUrlStructuring(input.value)}`, param);
        });
    }

});


function addToEndpoint(addition, param) {
    // console.log(handleUrlVariable());
    let endpointIdentifier = document.createElement('span');
    endpointIdentifier.classList.add(param);
    endpointIdentifier.classList.add("main__endpoint-output--addition");
    endpointIdentifier.innerHTML = addition;
    mainEndpointOutputElem.appendChild(endpointIdentifier);
    endpointIdentifier.addEventListener("click", (e) => {
        endpointIdentifier.remove();
    });
};

function handleUrlVariable() {
    return !mainEndpointOutputElem.textContent.includes("?") ? "?" : "&";
}

function handleRecomUrlStructuring(input) {
    return input
    .replace(/\s/g, "%20")
    .replace("&", "%26");
}

function handleSearchUrlStructuring(input) {
    return input
    .replace(/\%/g, "%25")
    .replace(/\s/g, "\\ ")
    .replace(/\&/g, "%26")
    .replace(/\+/g, "%2B")
    .replace(/\//g, "\\/")
    .replace(/\!/g, "\\!")
    .replace(/\#/g, "%23");
}

function validateNotEmpty(input, label) {
    if (input == "") {
        buttonFeedback(label, "Cannot be empty", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};

function validateEqualSign(input, label) {
    if (!input.includes("=")) {
        buttonFeedback(label, "Must contain an equal sign", 3000, false);
        return false;
    }
    let value = input.split("=");

    if (!value[0].match(/^[A-z]*$/gi) || value[0] == "") {
        buttonFeedback(label, "Only letters allowed left of equal sign", 3000, false);
        return false;
    }
    if (value[1] == "") {
        buttonFeedback(label, "Value right of equal sign cannot be empty", 3000, false);
        return false;
    }

    label.classList.remove("failure-red-background");
    return true;
};

function extraDataValidateEqualSign(input, label) {
    if (!input.includes("=")) {
        buttonFeedback(label, "Must contain an equal sign", 3000, false);
        return false;
    }
    let value = input.split("=");

    if (!value[0].match(/^[A-z0-9]*$/gi) || value[0] == "") {
        buttonFeedback(label, "Only letters or numbers allowed left of equal sign", 3000, false);
        return false;
    }
    if (value[1] == "") {
        buttonFeedback(label, "Value right of equal sign cannot be empty", 3000, false);
        return false;
    }

    label.classList.remove("failure-red-background");
    return true;
};

function validateColonSign(input, label) {
    if (!input.includes(":")) {
        buttonFeedback(label, "Must contain a colon sign", 3000, false);
        return false;
    }
    let value = input.split(":");
    if (!value[0].match(/^[A-z]*$/g) || value[0] == "") {
        buttonFeedback(label, "Value left of colon can only be letters", 3000, false);
        return false;
    }
    else if (value[1] == "" || value[1].match(/,$/) || value[1].match(/^,/)) {
        buttonFeedback(label, "Value right of colon cannot be empty or end/start on comma", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};

function extraDataValidateColonSign(input, label) {
    if (!input.includes(":")) {
        buttonFeedback(label, "Must contain a colon sign", 3000, false);
        return false;
    }
    let value = input.split(":");
    if (!value[0].match(/^[A-z0-9]*$/g) || value[0] == "") {
        buttonFeedback(label, "Value left of colon can only be letters and numbers", 3000, false);
        return false;
    }
    else if (value[1] == "" || value[1].match(/,$/) || value[1].match(/^,/)) {
        buttonFeedback(label, "Value right of colon cannot be empty or end/start on comma", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
};

function validateNumbers(input, label) {
    if (isNaN(input) || input.includes(" ")) {
        buttonFeedback(label, "Must only contain numbers", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateRecommendationBoxKey(input, label) {
    if (!input.includes(",")) {
        if (!input.match(/^[A-z0-9]+$/g)) {
            buttonFeedback(label, "Box id can only contain letters and numbers", 3000, false);
            return false;
        }
        label.classList.remove("failure-red-background");
        return true;
    }
    else {
        let values = input.split(",");
        let error = false;
        values.forEach((value) => {
            if (!value.match(/^[A-z0-9]+$/g)) {
                error = true;
            }
        })
        if (error) {
            buttonFeedback(label, "One or more box id's contain illegal characters", 3000, false);
            return false;
        }
        label.classList.remove("failure-red-background");
        return true;
    }
}

function recommendationBoxKeyPresent(boxKeyElem, label) {
    // console.log(boxKeyElem);
    if (!boxKeyElem) {
        buttonFeedback(label, "No box Id(s) present in request url", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateNoSpecialCharacters(input, label) {
    if (!input.match(/^[A-z0-9]+$/)) {
        // console.log("Special characters present");
        buttonFeedback(label, "No special characters allowed", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function validateNoDuplicates(input, label) {
    // console.log(input.dataset.param);
    if (mainEndpointOutputElem.textContent.includes(input.dataset.param)) {
        // console.log(`${input.dataset.param} already exists.`);
        buttonFeedback(label, "No duplicate values allowed", 3000, false);
        return false;
    }
    label.classList.remove("failure-red-background");
    return true;
}

function recommendationBoxKeyPicker(ids, picked) {
    let splitIds = ids.split(",");
    if (splitIds[picked] != "undefined") {
        return splitIds[picked];
    }
    else {
        return splitIds[0];
    }
}
