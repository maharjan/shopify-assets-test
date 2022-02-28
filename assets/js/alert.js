window.addEventListener('DOMContentLoaded', function() {
    var popContainer = document.getElementById('popupAdContainer');
    var hiddenButton = document.createElement('button');
    hiddenButton.id= 'hidden-button';
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

    setTimeout(function() {
        popContainer.appendChild(parentDiv);
        this.document.getElementById('hidden-button').click();
    }, 5000);
})
