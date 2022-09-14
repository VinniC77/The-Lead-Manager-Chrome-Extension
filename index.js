let myLeads = [];

// 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads);

// // 2. Push a new value to the array
// myLeads.push('www.google.com');

// // 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads);

// // 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads);

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// localStorage.setItem('google site', 'google.com') // to create an item
// localStorage.getItem('google site') // to bring the value - google.com
// localStorage.clear(); // to clear the localStorage

localStorage.clear();
// Get the leads from the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads));

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads);
}


const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener('click', () => {
  myLeads.push(tabs[0].url)
  localStorage.setItem(myLeads, JSON.stringify(myLeads))
  render(myLeads);
})


function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // With the above code we are doing 3 things:
    // - Creating an html tag (<li>)
    // - Setting a text content with myLeads[i]
    // - Appending (anexando) something to a variable with ulEl.innerHTML
    // - So, there is another way to write the code to have the same result:
    // const li = document.createElement('li');
    // li.textContent = myLeads[i];
    // ulEl.append(li);
    // A more performed way to write it would be like this:
    // listItems += "<li><a href=" + myLeads[i] + " target='_blank'>" + myLeads[i] + "</a></li>";
    listItems += `<li>
                    <a href="${leads[i]}" target="_blank">
                        ${leads[i]}
                    </a>
                  </li>
                `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})


// Store it in a variable, leadsFromLocalStorage
// Log out the variable

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
});