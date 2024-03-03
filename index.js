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
