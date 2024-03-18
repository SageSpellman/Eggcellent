// Array of words and hints
const wordsAndHints = [
    { word: "banana", hint: "Yellow fruit" },
    { word: "elephant", hint: "Large mammal with a trunk" },
    { word: "computer", hint: "Electronic device for processing data" },
    { word: "mountain", hint: "Large natural elevation" },
    { word: "guitar", hint: "Musical instrument with strings" },
    { word: "pizza", hint: "Popular Italian dish" },
    { word: "sunflower", hint: "Bright yellow flower" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "oxygen", hint: "Element essential for respiration" },
    { word: "jazz", hint: "Genre of music with improvisation" },
    { word: "penguin", hint: "Flightless bird in the Southern Hemisphere" },
    { word: "umbrella", hint: "Protective device for rain" },
    { word: "volcano", hint: "Mountain that erupts" },
    { word: "chocolate", hint: "Sweet food made from cocoa beans" },
    { word: "rainbow", hint: "Colorful arc in the sky" },
    { word: "octopus", hint: "Sea creature with eight arms" },
    { word: "astronaut", hint: "Person who travels to space" },
    { word: "dragon", hint: "Mythical creature with wings and fire-breathing ability" },
    { word: "piano", hint: "Musical instrument with black and white keys" },
    { word: "soccer", hint: "Sport played with a round ball" },
    { word: "library", hint: "Place with books for borrowing" },
    { word: "telephone", hint: "Communication device with a receiver and dial" },
    { word: "tiger", hint: "Large feline with orange fur and black stripes" },
    { word: "raincoat", hint: "Waterproof garment worn in rainy weather" },
    { word: "strawberry", hint: "Red fruit with small seeds on the outside" },
    { word: "helicopter", hint: "Aircraft with rotating blades" },
    { word: "puzzle", hint: "Game or problem that tests ingenuity" },
    { word: "diamond", hint: "Hard precious stone" },
    { word: "robot", hint: "Mechanical device capable of performing tasks" },
    { word: "garden", hint: "Area with plants and flowers" },
    { word: "candle", hint: "Wax stick with a wick used for illumination" },
    { word: "island", hint: "Landmass surrounded by water" },
    { word: "tornado", hint: "Violent rotating column of air" },
    { word: "fireworks", hint: "Explosive display of light and sound" },
    { word: "unicorn", hint: "Mythical horse with a horn on its forehead" },
    { word: "bicycle", hint: "Two-wheeled vehicle propelled by pedals" },
    { word: "zebra", hint: "African animal with black and white stripes" },
    { word: "camera", hint: "Device for capturing photographs or videos" },
    { word: "cactus", hint: "Desert plant with spines" },
    { word: "submarine", hint: "Watercraft capable of operating underwater" },
    { word: "firefighter", hint: "Person who extinguishes fires" },
    { word: "waterfall", hint: "Flowing water descending steeply" },
    { word: "skyscraper", hint: "Very tall building" },
    { word: "dinosaur", hint: "Extinct reptile from prehistoric times" },
    { word: "painting", hint: "Artwork created with brushes and colors" },
    { word: "rainforest", hint: "Lush forest with high rainfall" },
    { word: "basketball", hint: "Sport played with a round ball and hoop" },
    { word: "crown", hint: "Symbol of royalty worn on the head" }
];

const randomIndex = Math.floor(Math.random() * wordsAndHints.length);
const selectedWord = wordsAndHints[randomIndex].word;
const selectedHint = wordsAndHints[randomIndex].hint;

console.log("Word:", selectedWord);
console.log("Hint:", selectedHint);