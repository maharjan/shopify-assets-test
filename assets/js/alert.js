window.alert("Hello & welcom to shopify");

window.addEventListener("load", function() {
    var parentDiv = document.getElementById("popupAdContainer");
    parentDiv.className= "popup-modal";

    var div1 = document.createElement("div");
    div1.className= "popup-modal-dialog";

    var header = document.createElement("header");
    header.className= "popup-modal-header";
    header.innerHTML= "This is just header";
    
    var closeButton = document.createElement("button");
    closeButton.className= "pop-modal-close";
    closeButton.ariaLabel = "close modal";
    header.appendChild(closeButton);

    var section = document.createElement("section");
    section.className = "pop-modal-content";

    var sectionContent ="<p><strong>Press ✕, ESC, or click outside of the modal to close it</strong></p>";
    var sectionMainContent ="<p>John Doe is missing!</p>"
    section.innerHTML =sectionContent;
    section.innerHTML +=sectionMainContent;
    
    var footer= document.createElement("footer");
    footer.className= "pop-modal-footer";
    footer.innerHTML= "Just a normal footer. Nothing to see here!";

    div1.appendChild(header);
    div1.appendChild(section);
    div1.appendChild(footer)
    parentDiv.appendChild(div1);
})
