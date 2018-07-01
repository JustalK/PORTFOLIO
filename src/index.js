import './assets/less/main.less';

function component() {
    var element = document.createElement('div');
    element.setAttribute('id', 'main-element' );
    
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello, world 2!';

    return element;
}

document.body.appendChild(component());
