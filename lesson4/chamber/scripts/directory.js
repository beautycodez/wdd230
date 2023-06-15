const url = 'https://beautycodez.github.io/wdd230/lesson4/chamber/data/data-companies.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayCompanies(data.companies);
  }
  
  getCompaniesData();

const displayCompanies = (companies) => {
    const cards = document.querySelector('div.directory-container'); // select the output container element

    companies.forEach((company) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${company.companyName}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Portrait of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');
        portrait.setAttribute('class', "company-pictures");

        // Build the paragraph
        p.innerHTML = `<strong>Address</strong>: ${company.address} <br>
                       <strong>Phone</strong>: ${company.phone} <br> 
                       <strong>website</strong>: ${company.website}<br> 
                       <strong>Membership</strong>: ${company.membership}
                       `;

        // Build the cards
        card.setAttribute('class', "card-sections")
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(p);

        cards.appendChild(card);
    }); // end of forEach loop
} // end of function expression