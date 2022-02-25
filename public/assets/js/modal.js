const modalBoxIdContainerElem = document.querySelector(".modal-boxId-container");
const modalCloseBtnElem = document.querySelector(".modal-close-btn");

// openModal is called and receives the recomBoxIds comma separated, and the method/function reference to be called with the correct boxId to be used within the span eventListener.
function openModal(recomBoxIds, method){
    modalBoxIdContainerElem.textContent = "";
    modalOverlayWrapperElem.classList.remove("hidden");
    let splitIds = recomBoxIds.split(",");
    splitIds.forEach((id, index)=>{
        let span = document.createElement('span');
        span.classList.add("modal-boxId");
        span.textContent = id;
        span.dataset.boxId = index;
        modalBoxIdContainerElem.appendChild(span);

        span.addEventListener("click",(e)=>{
            method(e.target.dataset.boxId);
            modalOverlayWrapperElem.classList.add("hidden");
        });
    })
}

// Close overlay on close button.
modalCloseBtnElem.addEventListener("click",()=>{
    modalOverlayWrapperElem.classList.add("hidden");
});

// Close overlay on backdrop click.
modalOverlayWrapperElem.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal-wrapper")){
        modalOverlayWrapperElem.classList.add("hidden");
    }
})


