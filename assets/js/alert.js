window.addEventListener('load', function() {
    var popContainer = document.getElementById('popupAdContainer');
    var hiddenButton = document.createElement('button');
    hiddenButton.id= 'popup-hidden-button';
    hiddenButton.hidden=true;
    hiddenButton.setAttribute('data-open','pop-modal');
    popContainer.appendChild(hiddenButton);

    var parentDiv = document.createElement('div');
    parentDiv.id= 'pop-modal';
    parentDiv.className= 'pop-modal';
    parentDiv.setAttribute('data-animation','slideInOutLeft');

    var div1 = document.createElement('div');
    div1.className= 'pop-modal-dialog';

    var header = document.createElement('header');
    header.className= 'pop-modal-header';
    header.innerHTML= 'This is just header';
    
    var closeButton = document.createElement('button');
    closeButton.className= 'pop-modal-close';
    closeButton.setAttribute('aria-label', 'close modal');
    header.appendChild(closeButton);

    var section = document.createElement('section');
    section.className = 'pop-modal-content';

    var sectionContent ='<p><strong>Press ✕, ESC, or click outside of the modal to close it</strong></p>';
    var sectionMainContent ='<p>John Doe is missing!</p>'
    section.innerHTML =sectionContent;
    section.innerHTML +=sectionMainContent;
    
    var footer= document.createElement('footer');
    footer.className= 'pop-modal-footer';
    footer.innerHTML= 'Just a normal footer. Nothing to see here!';

    div1.appendChild(header);
    div1.appendChild(section);
    div1.appendChild(footer)
    parentDiv.appendChild(div1);
    popContainer.appendChild(parentDiv);

    setTimeout(function() {   
        document.getElementById('popup-hidden-button').click();
    }, 5000);
});

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".pop-modal.is-visible")) {
    document.querySelector(".pop-modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".pop-modal.is-visible")) {
    document.querySelector(".pop-modal.is-visible").classList.remove(isVisible);
  }
});
