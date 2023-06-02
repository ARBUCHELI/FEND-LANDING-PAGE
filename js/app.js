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
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//----------------------------------------------------------------------------------------------------------------
// Wait for the DOM content to load
/*document.addEventListener('DOMContentLoaded', () => {
    // Get the navbar list element
    const navbarList = document.getElementById('navbar__list');
    
    // Get all the sections in the document
    const sections = document.querySelectorAll('section');
    
    // Create a document fragment to store the menu items
    const fragment = document.createDocumentFragment();
    
    // Loop over each section and create a menu item for it
    sections.forEach((section) => {
    // Get the section ID and data-nav attribute
    const sectionId = section.id;
    const sectionNav = section.getAttribute('data-nav');

    // Create a new list item
const listItem = document.createElement('li');

// Create a new anchor element for the menu item
const anchor = document.createElement('a');
anchor.classList.add('menu__link');
anchor.href = `#${sectionId}`;
anchor.textContent = sectionNav;

// Add a click event listener to the anchor
anchor.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default jump behavior

  // Scroll to the corresponding section smoothly
  section.scrollIntoView({ behavior: 'smooth' });
});

// Add the anchor element to the list item
listItem.appendChild(anchor);

// Add the list item to the document fragment
fragment.appendChild(listItem);

});

// Create a menu item for going back to the top
const backToTopItem = document.createElement('li');
const backToTopAnchor = document.createElement('a');
backToTopAnchor.classList.add('menu__link');
backToTopAnchor.href = '#top'; // Assuming you have an element with the ID 'top' at the top of the page
backToTopAnchor.textContent = 'Back to Top';

// Add a click event listener to the back to top anchor
backToTopAnchor.addEventListener('click', (event) => {
event.preventDefault(); // Prevent the default jump behavior

// Scroll to the top of the page smoothly
window.scrollTo({ top: 0, behavior: 'smooth' });

});

// Add the back to top anchor to the menu item
backToTopItem.appendChild(backToTopAnchor);

// Add the back to top menu item to the fragment
fragment.appendChild(backToTopItem);

// Append the document fragment to the navbar list
navbarList.appendChild(fragment);


function activateSection(sectionId) {
    // Remove the active class from all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.remove('your-active-class');
    });
  
    // Add the active class to the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('your-active-class');
  }
});*/document.addEventListener('DOMContentLoaded', () => {
  const navbarList = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');
  const fragment = document.createDocumentFragment();

  sections.forEach((section) => {
    const sectionId = section.id;
    const sectionNav = section.getAttribute('data-nav');

    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.classList.add('menu__link');
    anchor.href = `#${sectionId}`;
    anchor.textContent = sectionNav;

    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
      activateSection(sectionId);
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
  });

  backToTopItem.appendChild(backToTopAnchor);
  fragment.appendChild(backToTopItem);

  navbarList.appendChild(fragment);

  const activateSection = (sectionId) => {
    sections.forEach((section) => {
      section.classList.remove('your-active-class');
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('your-active-class');
  };
});
