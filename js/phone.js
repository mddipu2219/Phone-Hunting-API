const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  DisplayPhones(phones);
};
const DisplayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  //   clearing phone conrainer card when we search another card
  phoneContainer.textContent = "";

  phones.forEach((phone) => {
    console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `
    <div class="card card-compact pt-10 mb-10 bg-gray-100 gap-4 shadow-xl">
  <figure>
    <img 
    
      src=${phone.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    
    <div class="card-actions justify-self-auto ;">
      <button class="btn btn-primary">Show details</button>
    </div>
  </div>
</div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
};
// search handler
const searchHandler = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};
// loadPhone();
