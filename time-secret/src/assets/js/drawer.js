const drawerIcon = document.getElementById('drawer-button');

export default () => {
  drawerIcon.addEventListener('click', () => {
    drawerIcon.classList.toggle('active');
  });
};
