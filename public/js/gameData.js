export const levels = [
    {
      id: "coast",
      title: "Olympic Coast",
      prompt: "Select 3 garments to survive the Olympic Coast",
      background: "./images/Coast.png",
      garments: [
        { id: "raincoat", name: "Raincoat", image: "./images/rainCoat.jpg", correct: true, points: 4 },
        { id: "rainPants", name: "Rain pants", image: "./images/rainPants.jpg", correct: true, points: 3 },
        { id: "thermalTop", name: "Thermal Top", image: "./images/thermalTop.jpg", correct: true, points: 3 },
        { id: "puffer", name: "Puffer Jacket", image: "./images/puffer.jpg", correct: false, points: 0 },
        { id: "fleece", name: "Fleece Jacket", image: "./images/fleece.jpg", correct: false, points: 0 },
        { id: "pufferPants", name: "Puffer Pants", image: "./images/pufferPants.jpg", correct: false, points: 0 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/windBreaker.jpg", correct: false, points: 0 },
        { id: "desertTop", name: "Tank Top", image: "./images/desertTop.jpg", correct: false, points: 0 },
        { id: "desertPants", name: "Cargo Pants", image: "./images/desertPants.jpg", correct: false, points: 0 }
      ]
    },
    {
      id: "forest",
      title: "Temperate Rain Forest",
      prompt: "Select 3 garments to survive the temperate rainforest",
      background: "./images/Forest.png",
      garments: [
        { id: "raincoat", name: "Raincoat", image: "./images/rainCoat.jpg", correct: true, points: 4 },
        { id: "rainPants", name: "Rain pants", image: "./images/rainPants.jpg", correct: false, points: 0 },
        { id: "thermalTop", name: "Thermal Top", image: "./images/thermalTop.jpg", correct: true, points: 3 },
        { id: "puffer", name: "Puffer Jacket", image: "./images/puffer.jpg", correct: false, points: 0 },
        { id: "fleece", name: "Fleece Jacket", image: "./images/fleece.jpg", correct: false, points: 0 },
        { id: "pufferPants", name: "Puffer Pants", image: "./images/pufferPants.jpg", correct: false, points: 0 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/windBreaker.jpg", correct: false, points: 0 },
        { id: "desertTop", name: "Tank Top", image: "./images/desertTop.jpg", correct: false, points: 0 },
        { id: "desertPants", name: "Cargo Pants", image: "./images/desertPants.jpg", correct: true, points: 3 }
      ]
    },
    {
      id: "dunes",
      title: "Dunes",
      prompt: "Select 3 garments to survive the Juniper Dunes",
      background: "./images/Desert.png",
      garments: [
        { id: "raincoat", name: "Raincoat", image: "./images/rainCoat.jpg", correct: false, points: 0 },
        { id: "rainPants", name: "Rain pants", image: "./images/rainPants.jpg", correct: false, points: 0 },
        { id: "thermalTop", name: "Thermal Top", image: "./images/thermalTop.jpg", correct: true, points: 0 },
        { id: "puffer", name: "Puffer Jacket", image: "./images/puffer.jpg", correct: false, points: 0 },
        { id: "fleece", name: "Fleece Jacket", image: "./images/fleece.jpg", correct: false, points: 0 },
        { id: "pufferPants", name: "Puffer Pants", image: "./images/pufferPants.jpg", correct: false, points: 0 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/windBreaker.jpg", correct: true, points: 4 },
        { id: "desertTop", name: "Tank Top", image: "./images/desertTop.jpg", correct: true, points: 3 },
        { id: "desertPants", name: "Cargo Pants", image: "./images/desertPants.jpg", correct: true, points: 3 }
      ]
    },
    {
      id: "alpine",
      title: "Alpine",
      background: "./images/Alpine.png",
      prompt: "Select 3 garments to survive the alpine",
      garments: [
        { id: "raincoat", name: "Raincoat", image: "./images/rainCoat.jpg", correct: false, points: 0 },
        { id: "rainPants", name: "Rain pants", image: "./images/rainPants.jpg", correct: false, points: 0 },
        { id: "thermalTop", name: "Thermal Top", image: "./images/thermalTop.jpg", correct: false, points: 0 },
        { id: "puffer", name: "Puffer Jacket", image: "./images/puffer.jpg", correct: true, points: 4 },
        { id: "fleece", name: "Fleece Jacket", image: "./images/fleece.jpg", correct: true, points: 3 },
        { id: "pufferPants", name: "Puffer Pants", image: "./images/pufferPants.jpg", correct: true, points: 3 },
        { id: "windBreaker", name: "Wind Breaker", image: "./images/windBreaker.jpg", correct: false, points: 0 },
        { id: "desertTop", name: "Tank Top", image: "./images/desertTop.jpg", correct: false, points: 0 },
        { id: "desertPants", name: "Cargo Pants", image: "./images/desertPants.jpg", correct: false, points: 0 }
      ]
    }
  ];