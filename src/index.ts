function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello,', 'Mojolicious!'].join(' ');
  return element;
}

document.body.appendChild(component());
