/* Bronze Section */

// Grab the Header Element
let header = document.getElementById('header');

// Manipulate the Text For the Header
header.textContent = "JavaScript Made This!!";

// Make Text of Header Bold
header.style.fontWeight = 'bold';

// Make Font Size of Header Larger
header.style.fontSize = '18px';

// Remove ID Attribute From Header Since It Needs to be a Class
// According to the Stylesheet
header.removeAttribute('id');

// Add Header Class to Header Element From Stylesheet
header.classList.add('header');

// Create Paragraph Element to Hold Text About Who Wrote The
// Javascript Code
let para = document.createElement('p');

// Set Paragraph Element To The Required Text
// Including a Span Tag to Hold a Name
para.innerHTML =  '<span class="name">Zach</span> wrote the JavaScript';

// Make The Text of the Paragraph Element Bold
para.style.fontWeight = 'bold';

// Make The Font Size of the Paragraph Element Smaller
para.style.fontSize = '14px';

// Append Paragraph Element To Header
header.appendChild(para);


/* Silver Section */

// Grab the Messages Container
let messages = document.getElementsByClassName('messages');

// Grab All the Messages From the Left
let leftMessages = document.getElementsByClassName('left');

// Grab All the Messages From the Right
let rightMessages = document.getElementsByClassName('right');

// Change Text of First Message
leftMessages[0].textContent = 'How Are You?';

// Change Text of Second Message
rightMessages[0].textContent = 'I am Good. What About You?';

// Change Text of Third Message
leftMessages[1].textContent = 'I Hate My Current Job';

// Change Text of Fourth Message
rightMessages[1].textContent = 'Go to V-School Then!';

// Grab The Clear Button
let clearMessages = document.getElementById('clear-button');

// Add Event Listener to Clear Button to Delete All Messages
clearMessages.addEventListener('click', (e) => {
    // While Parent Element Still Has Child Elements
    // Iterate Over Messages and Delete the First Child
    // Until Nothing is Left
    while (messages[0].firstElementChild) {
        // Assign First Element Child to Variable
        let firstElChild = messages[0].firstElementChild;
        messages[0].removeChild(firstElChild);
    }
});


/* Gold Section */

// Grab Drop-down Box of Themes
let themeChoices = document.getElementById('theme-drop-down');
console.log('Themes: ', themeChoices.value);

// Add Event Listener to Select Element to
// Listen for Changes on That Element
themeChoices.addEventListener('change', (e) => {
    // Assign a Variable to the Children Elements of Messages
    let allMessages = messages[0].children;

    // Check To See If There Are Existing Messages
    if (allMessages.length) {
      // Iterate Over All Messages Variable
      for (let i = 0; i <= allMessages.length; i++) {
        // Check If Theme's Value is Set to 'theme-one'
        if (themeChoices.value === "theme-one") {
          // Check to See If Message Has a Class of "left"
          if (allMessages[i].classList.contains("left")) {
            // Apply a Blue Background Color to the Div
            allMessages[i].style.backgroundColor = "blue";
            // Change The Color of the Text to White for Readability
            allMessages[i].style.color = 'white';
          } else {
            // Apply a Brown Background Color to the Div
            allMessages[i].style.backgroundColor = "brown";
          }
        } else if (themeChoices.value === "theme-two") {
          // Repeat Same Logic as Above
          if (allMessages[i].classList.contains("left")) {
            allMessages[i].style.backgroundColor = "red";
          } else {
            allMessages[i].style.backgroundColor = "black";
            // Change The Color of the Text to White for Readability
            allMessages[i].style.color = 'white';
          }
        }
      }
    } else {
        alert('There Are Currently No Messages to Apply Styling To!');
    }
});
