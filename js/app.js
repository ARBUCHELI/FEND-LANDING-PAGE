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
  // Geting the navbar list element, the section, and defining variables
  const navbarList = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');
  const fragment = document.createDocumentFragment();
  
  /**
   * End Variables
   * Iterating over the sections using a forEach method for building the nav
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
    
    // Creating functionality for scrolling to the selected section when clicking the nav items.
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
  
  // Creating an extra nav item used for scrolling back to the top of the page.
  const backToTopItem = document.createElement('li');
  const backToTopAnchor = document.createElement('a');
  backToTopAnchor.classList.add('menu__link');
  backToTopAnchor.href = '#top';
  backToTopAnchor.textContent = 'Back to Top';
  
  // Adding functionality for scrolling back to the top of the page.
  backToTopAnchor.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activateNav(backToTopAnchor);
  });
  
  backToTopItem.appendChild(backToTopAnchor);
  fragment.appendChild(backToTopItem);
  
  navbarList.appendChild(fragment);

  // Helper functions
  // Function used for adding the "activated-section" to the sections.
  const activateSection = (sectionId) => {
    sections.forEach((section) => {
      section.classList.remove('activated-section');
    });
    // Set sections as active
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('activated-section');
  };

  // Function used for adding the "activated-nav" to the nav items.
  const activateNav = (clickedNav) => {
    const navItems = document.querySelectorAll('.menu__link');
    navItems.forEach((navItem) => {
      navItem.classList.remove('activated-nav');
    });
    // Set clicked nav as active
    clickedNav.classList.add('activated-nav');
  };

  /** 
   * In order to implement the functionality of adding the "activated-section" class, whewn scrolling, I found a solution that 
   * I consider a little bit simpler, and I used two different built-in Web API methods (offseTop, and offsetHeight)
   */
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
