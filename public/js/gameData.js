export const levels = [
    {
      id: "coast",
      title: "Olympic Coast",
      prompt: "Select 3 garments to survive the Olympic Coast",
      background: "./images/Coast.png",
      garments: [
        { id: "RainTrench", name: "Heavy-Duty Rain Coat", image: "./images/CoastJacket.png", category: "jacket", correct: true, points: 0 },
        { id: "rainPants", name: "Rain pants", image: "./images/CoastPants.png", category: "bottom", correct: true, points: 3 },
        { id: "FleeceZip-Up", name: "Fleece Zip-up", image: "./images/CoastBaseLayer.png", category: "top", correct: true, points: 3 },
        { id: "shell", name: "Shell Jacket", image: "./images/AlpineJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "baseLayer", name: "Fleece Base Layer", image: "./images/AlpineBaseLayer.png", category: "top", correct: false, points: 0 },
        { id: "shellPants", name: "Shell Pants", image: "./images/AlpinePants.png", category: "bottom", correct: false, points: 0 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/DesertJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "desertTop", name: "Tech Top", image: "./images/DesertShirt.png", category: "top", correct: false, points: 0 },
        { id: "desertSkirt", name: "Nylon Skort", image: "./images/DesertSkort.png", category: "bottom", correct: false, points: 0 },
        { id: "rainJacket", name: "Rain Jacket", image: "./images/RainforestJacket.png", category: "jacket", correct: false, points: 4 },
        { id: "rainTop", name: "Nylon Top", image: "./images/RainforestTop.png", category: "top", correct: false, points: 3 },
        { id: "convertablePants", name: "Convertable Pants", image: "./images/RainforestPant.png", category: "bottom", correct: false, points: 3 }
      ]
    },
    {
      id: "forest",
      title: "Temperate Rain Forest",
      prompt: "Select 3 garments to survive the temperate rainforest",
      background: "./images/Forest.png",
      garments: [
        { id: "raincoat", name: "Raincoat", image: "./images/CoastJacket.png", category: "jacket", correct: true, points: 0 },
        { id: "rainPants", name: "Rain pants", image: "./images/CoastPants.png", category: "bottom", correct: false, points: 0 },
        { id: "FleeceZip-Up", name: "Fleece Zip-Up", image: "./images/CoastBaseLayer.png", category: "top", correct: true, points: 0 },
        { id: "shell", name: "Shell Jacket", image: "./images/AlpineJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "baseLayer", name: "Fleece Base Layer", image: "./images/AlpineBaseLayer.png", category: "top", correct: false, points: 0 },
        { id: "shellPants", name: "Shell Pants", image: "./images/AlpinePants.png", category: "bottom", correct: false, points: 0 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/DesertJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "desertTop", name: "Tech Top", image: "./images/DesertShirt.png", category: "top",correct: false, points: 0 },
        { id: "desertSkirt", name: "Nylon Skort", image: "./images/DesertSkort.png", category: "bottom", correct: true, points: 0 },
        { id: "rainJacket", name: "Rain Jacket", image: "./images/RainforestJacket.png", category: "jacket", correct: false, points: 4 },
        { id: "rainTop", name: "Nylon Top", image: "./images/RainforestTop.png", category: "top", correct: false, points: 3 },
        { id: "convertablePants", name: "Convertable Pants", image: "./images/RainforestPant.png", category: "bottom", correct: false, points: 3 }
      ]
    },
    {
      id: "dunes",
      title: "Dunes",
      prompt: "Select 3 garments to survive the Juniper Dunes",
      background: "./images/Desert.png",
      garments: [
        { id: "raincoat", name: "Raincoat", image: "./images/CoastJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "rainPants", name: "Rain pants", image: "./images/CoastPants.png",category: "bottom",  correct: false, points: 0 },
        { id: "FleeceZip-Up", name: "Fleece Zip-Up", image: "./images/CoastBaseLayer.png", category: "top", correct: true, points: 0 },
        { id: "shell", name: "Shell Jacket", image: "./images/AlpineJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "baseLayer", name: "Fleece Base Layer", image: "./images/AlpineBaseLayer.png", category: "top", correct: false, points: 0 },
        { id: "shellPants", name: "Shell Pants", image: "./images/AlpinePants.png", category: "bottom", correct: false, points: 0 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/DesertJacket.png", category: "jacket", correct: true, points: 4 },
        { id: "desertTop", name: "Tech Top", image: "./images/DesertShirt.png", category: "top", correct: true, points: 3 },
        { id: "desertSkirt", name: "Nylon Skort", image: "./images/DesertSkort.png", category: "bottom", correct: true, points: 3 },
        { id: "rainJacket", name: "Rain Jacket", image: "./images/RainforestJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "rainTop", name: "Nylon Top", image: "./images/RainforestTop.png", category: "top", correct: false, points: 0 },
        { id: "convertablePants", name: "Convertable Pants", image: "./images/RainforestPant.png", category: "bottom", correct: false, points: 0 }
      ]
    },
    {
      id: "alpine",
      title: "Alpine",
      background: "./images/Alpine.png",
      prompt: "Select 3 garments to survive the alpine",
      garments: [
        { id: "raincoat", name: "Raincoat", image: "./images/CoastJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "rainPants", name: "Rain pants", image: "./images/CoastPants.png", category: "bottom", correct: false, points: 0 },
        { id: "FleeceZip-Up", name: "Fleece Zip-Up", image: "./images/CoastBaseLayer.png", category: "top", correct: false, points: 0 },
        { id: "shell", name: "Shell Jacket", image: "./images/AlpineJacket.png", category: "jacket", correct: true, points: 4 },
        { id: "baseLayer", name: "Fleece Base Layer", image: "./images/AlpineBaseLayer.png", category: "top", correct: true, points: 3 },
        { id: "shellPants", name: "Shell Pants", image: "./images/AlpinePants.png", category: "bottom", correct: true, points: 3 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/DesertJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "desertTop", name: "Tech Top", image: "./images/DesertShirt.png", category: "top", correct: false, points: 0 },
        { id: "desertSkirt", name: "Nylon Skort", image: "./images/DesertSkort.png", category: "bottom", correct: false, points: 0 },
        { id: "rainJacket", name: "Rain Jacket", image: "./images/RainforestJacket.png", category: "jacket", correct: false, points: 0 },
        { id: "rainTop", name: "Nylon Top", image: "./images/RainforestTop.png", category: "top", correct: false, points: 0 },
        { id: "convertablePants", name: "Convertable Pants", image: "./images/RainforestPant.png", category: "bottom", correct: false, points: 0 }
      ]
    }
  ];