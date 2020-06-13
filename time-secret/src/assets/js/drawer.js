const drawerIcon = document.getElementById('drawer-button');
const drawerNav = document.getElementById('drawer');
const main = document.getElementsByTagName('body')[0];

let drawerOpened = false;

export default () => {
  drawerIcon.addEventListener('click', () => {
    drawerIcon.classList.toggle('active');
    drawerOpened = !drawerOpened;
    drawerNav.setAttribute('aria-expanded', `${drawerOpened}`);
    main.classList.toggle('drawer-opened');
    console.log('aaaaaaaaaa');
  });
};
