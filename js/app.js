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
/*
<!-- Rubric Interface and Architecure Criteria 1 - Architecture. : The project should have a structure like the one shown below. All files shown 
  must be present and the app must successfully render a home page with clear design and functionality added when index.html is 
  loaded in the browser. No errors should display in console.
  css
- styles.css    
index.html
js
- app.js
README.md
*/
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
       /* Rubric Landing Page Behavior Criteria 3 - Scroll to Anchor. : When clicking an item from the navigation menu, the link 
       should scroll to the appropriate section. */
      section.scrollIntoView({ behavior: 'smooth' });
      // Add class 'active' to section when near top of viewport
      /*activateSection(sectionId);
      activateNav(anchor);*/
    });
    /* Rubric Landing Page Behavior Criteria 1 - Navigation. : Navigation is built dynamically as an unordered list. Start 
        with empty ul and dynamically build navigation using Append, appendChild, and innerHTML. */
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
  /* Rubric Landing Page Behavior Criteria 2 - Section Active State. : It should be clear which section is being viewed while 
    scrolling through the page. */
  window.addEventListener('scroll', () => {
    // Get the current position of the scrollbar
    let lastPoint= 0;
    const viewportHeight = window.innerHeight;
    let verticalDistance;
    if (window.scrollY > lastPoint) {
      verticalDistance = viewportHeight/3;
  } else {
      verticalDistance = viewportHeight*2/3;
  }
  lastPoint = window.scrollY;

    // Check each section to find the active one
    sections.forEach((section) => {
      const position = section.getBoundingClientRect();

      // Add or remove the active class based on the scroll position
      if (position.top < verticalDistance && position.bottom > verticalDistance) {
        activateSection(section.id);
        activateNav(document.querySelector(`a[href="#${section.id}"]`));
      }
    });
  });
});
