'use strict'

function showNotification({top = 0, right = 0, className, html}) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    
    
    notification.style.cssText  = ` 
    top: ${ top }px;
    right: ${right}px`;
    
    if(className) {
        notification.classList.add(className);
    }

    notification.textContent = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}
    
  // test it
let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);