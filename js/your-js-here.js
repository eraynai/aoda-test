// JavaScript Document

const menuButton = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
  this.setAttribute('aria-expanded', String(!isExpanded));
  primaryNav.hidden = isExpanded;
});
