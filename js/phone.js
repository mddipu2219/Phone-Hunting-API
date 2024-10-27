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
  //   showAll container when length of the container less than 12 other then show  showAll button
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  phones = phones.slice(0, 12);
  // show outcomes
  phones.forEach((phone) => {
    // console.log(phone);
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
    
    <div class="card-actions justify-center"><button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
    </div>
  </div>
</div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
  toggleLoodingSpinner(false);
};

// hanle show all btn details
const handleShowDetails = async (id) => {
  //   console.log("show all btn clicked", id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  console.log(data);
  showDetails(phone);
};
const showDetails = (phone) => {
  console.log(phone);
  const phoneName = document.getElementById("show-modals-phone-name");
  phoneName.innerText = phone.name;
  //
  const showDetailsContainer = document.getElementById("show-detail-container");
  showDetailsContainer.innerHTML = `
    <img class='mb-2' src=${phone.image} alt="Phone Image" />
    <p><span>Storage:</span> ${phone.mainFeatures.storage}</p>
    <p><span>DisplaySize:>${phone.mainFeatures.displaySize}</p>
    <p><span>sensors:</span> ${phone.mainFeatures.sensors}</p>
    <p><span>memory:</span> ${phone.mainFeatures.memory}</p>
    <p class='mb-3><span>brand:</span> ${phone.brand}</p>
  `;

  const myModal = document.getElementById("my_modal_5");
  myModal.showModal();
};

// search handler
const searchHandler = () => {
  toggleLoodingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  loadPhone(searchText);
};
// search handler2 recap

// const searchHandler2 = () => {
//   toggleLoodingSpinner(true);
//   const searchField = document.getElementById("search-field2");
//   const searchText = searchField.value;
//   loadPhone(searchText);
// };
// loading ring
const toggleLoodingSpinner = (isLoading) => {
  const LoadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    LoadingSpinner.classList.remove("hidden");
  } else {
    LoadingSpinner.classList.add("hidden");
  }
};

// loadPhone();
