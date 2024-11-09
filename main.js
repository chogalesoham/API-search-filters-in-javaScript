let cardMain = document.getElementById("main-card-contaner");
let userInput = document.getElementById("user-input");

const getApiData = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    data.forEach((card) => {
      console.log(card);
      return dynamicCard(card);
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

const dynamicCard = (data) => {
  const { category, price, title, image } = data;
  let div = document.createElement("div");
  div.className = "main-card-contaner";

  div.innerHTML = `
   <div class="card">
        <div class="card-img-container">
          <img
            src=${image}
            class="card-img"
          />
        </div>
        <div class="card-content">
          <h2 class="card-title">${title}</h2>
          <p class="card-description">
            ${category}
          </p>
          <div class="card-info">
            <span class="card-price">$ ${price}</span>
            <button class="card-btn" id="buyBtn">Buy Now</button>
          </div>
        </div>
      </div>
  `;

  cardMain.appendChild(div);
};

getApiData();
