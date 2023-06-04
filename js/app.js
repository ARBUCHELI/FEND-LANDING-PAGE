/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Begin Main Functions
 * Start Helper Functions
*/
// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Get the navbar list element and define variables
  const navbarList = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');
  const fragment = document.createDocumentFragment();
  
  /**
   * End Variables
   */
  sections.forEach((section) => {
    const sectionId = section.id;
    const sectionNav = section.getAttribute('data-nav');
  
    // build the nav
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    // Build menu 
    anchor.classList.add('menu__link');
    anchor.href = `#${sectionId}`;
    anchor.textContent = sectionNav;
  
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      // Scroll to section on link click
      // Scroll to anchor ID using scrollIntoView event
      section.scrollIntoView({ behavior: 'smooth' });
      // Add class 'active' to section when near top of viewport
      /*activateSection(sectionId);
      activateNav(anchor);*/
    });
  
    listItem.appendChild(anchor);
    fragment.appendChild(listItem);
  });
  
  const backToTopItem = document.createElement('li');
  const backToTopAnchor = document.createElement('a');
  backToTopAnchor.classList.add('menu__link');
  backToTopAnchor.href = '#top';
  backToTopAnchor.textContent = 'Back to Top';
  
  backToTopAnchor.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activateNav(backToTopAnchor);
  });
  
  backToTopItem.appendChild(backToTopAnchor);
  fragment.appendChild(backToTopItem);
  
  navbarList.appendChild(fragment);

  // Helper functions
  const activateSection = (sectionId) => {
    sections.forEach((section) => {
      section.classList.remove('activated-section');
    });
    // Set sections as active
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('activated-section');
  };

  const activateNav = (clickedNav) => {
    const navItems = document.querySelectorAll('.menu__link');
    navItems.forEach((navItem) => {
      navItem.classList.remove('activated-nav');
    });
    // Set clicked nav as active
    clickedNav.classList.add('activated-nav');
  };

  window.addEventListener('scroll', () => {
    // Get the current position of the scrollbar
    const scrollPosition = window.scrollY + 10;

    // Check each section to find the active one
    sections.forEach((section) => {
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      // Add or remove the active class based on the scroll position
      if (scrollPosition > offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activateSection(section.id);
        activateNav(document.querySelector(`a[href="#${section.id}"]`));
      }
    });
  });
});
