const toggle = (value) => {
  Array.from(value.getElementsByClassName('line')).forEach((line) => {
    Array.from(line.getElementsByClassName('and-text')).forEach((text) => {
      text.classList.toggle('hide');
    });
  });
};

const animateAndLength = (type) => {
  const lineContainer = document.getElementById('animation-line-container');
  if (type == 'a-b') {
    lineContainer.classList.add('a-b');
    if (lineContainer.classList.contains('d-any')) {
      lineContainer.classList.remove('d-any');
    }
    return;
  }
  lineContainer.classList.add('d-any');
  if (lineContainer.classList.contains('a-b')) {
    lineContainer.classList.remove('a-b');
  }
};

const andTextAction = () => {
  const interval = 5000;
  const audienceBusiness = document.getElementById('audience-business');
  const designBusiness = document.getElementById('design-business');
  const designStrategy = document.getElementById('design-strategy');
  let nextShowIndex = 1;
  const values = [audienceBusiness, designBusiness, designStrategy];
  setInterval(() => {
    let previous = null;
    if (nextShowIndex > 0) {
      animateAndLength('d-any');
      previous = values[nextShowIndex - 1];
    } else {
      animateAndLength('a-b');
      previous = values[values.length - 1];
    }

    toggle(previous);
    const next = values[nextShowIndex];
    const onHideListener = () => {
      toggle(next);
      previous.removeEventListener('transitionend', onHideListener);
    };

    previous.addEventListener('transitionend', onHideListener);
    if (nextShowIndex == values.length - 1) {
      nextShowIndex = 0;
    } else {
      nextShowIndex++;
    }
  }, interval);
};

andTextAction();
