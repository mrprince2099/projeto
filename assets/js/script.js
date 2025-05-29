// Obter elementos DOM
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

//Definir imagens e resultado possíveis
const botImages = ["./assets/rock.png", "./assets/paper.png", "./assets/scissors.png"];
const outcomes = {
  RR: "Draw",
  RP: "BOT",
  RS: "YOU",
  PP: "Draw",
  PR: "YOU",
  PS: "BOT",
  SS: "Draw",
  SR: "BOT",
  SP: "YOU"
};

//Manipulador de eventos para clique em imagem
function handleOptionClick(event) {
  const clickedImage = event.currentTarget;
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

  // Redefine os resultados e exibe "Aguarde..."
  botResult.src = botResult.src = "./assets/pedra.png";
  botResult.src = botResult.src = "./assets/papel.png";
  userResult.src = botResult.src = "./assets/pedra.png";
  result.textContent = "Wait...";

  optionImages.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex);
  });

  gameContainer.classList.add("start");

  setTimeout(() => {
    gameContainer.classList.remove("start");

     // Definir imagens de usuário e bot 
    const userImageSrc = clickedImage.querySelector("img").src;
    userResult.src = userImageSrc;

    const randomNumber = Math.floor(Math.random() * botImages.length);
    const botImageSrc = botImages[randomNumber];
    userResult.src = userImageSrc;

    const userValue = ["R", "P", "S"][clickedIndex];
    const botValue = ["R", "P", "S"][randomNumber];
    const outcomeKey = userValue + botValue;
    const outcome = outcomes[outcomeKey] || "Unknown";
    
    // Exibe o resultado
    result.textContent = botValue === userValue ? "Match Draw" : `${outcome} WiN!`;
  }, 2500);
}

// Anexar ouvintes de eventos ás imagens de opções
optionImages.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});