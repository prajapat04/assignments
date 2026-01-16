const cartLinks = {
  original: {
    single: "#original-single",
    double: "#original-double"
  },
  lily: {
    single: "#lily-single",
    double: "#lily-double"
  },
  rose: {
    single: "#rose-single",
    double: "#rose-double"
  }
};
const fragranceRadios = document.querySelectorAll(
  'input[name="fragrance"]'
);
const purchaseRadios = document.querySelectorAll(
  'input[name="purchase"]'
);

const addToCartBtn = document.getElementById("addToCart");

const singleCard = document.querySelector(".subscription-card");
const doubleRadio = document.querySelector(
  'input[name="purchase"][value="double"]'
);


function updateProductState() {
  const selectedFragrance = document.querySelector(
    'input[name="fragrance"]:checked'
  ).value;

  const selectedPurchase = document.querySelector(
    'input[name="purchase"]:checked'
  ).value;

  // Update CTA link
  addToCartBtn.href =
    cartLinks[selectedFragrance][selectedPurchase];

  // Expand / collapse logic
  if (selectedPurchase === "single") {
    singleCard.style.display = "block";
  } else {
    singleCard.style.display = "none";
  }
}

fragranceRadios.forEach(radio => {
  radio.addEventListener("change", updateProductState);
});

purchaseRadios.forEach(radio => {
  radio.addEventListener("change", updateProductState);
});

// Init on load
updateProductState();
