const plants = [
  {name:"Syngonium",char:"Arrow-shaped climbing plant.",imp:"Indoor air purification.",care:"Indirect light, moderate watering."},
  {name:"Philodendron",char:"Large glossy leaves.",imp:"Improves indoor air quality.",care:"Indirect light, moist soil."},
  {name:"Golden Dust Croton",char:"Yellow-speckled leaves.",imp:"Decorative foliage.",care:"Bright sunlight."},
  {name:"Chinese Evergreen",char:"Variegated leaves.",imp:"Removes toxins.",care:"Low light."},
  {name:"Devil’s Backbone",char:"Zigzag succulent stem.",imp:"Drought-resistant plant.",care:"Minimal watering."},
  {name:"Aluminium Plant",char:"Silver-patterned leaves.",imp:"Indoor décor.",care:"Indirect light."},
  {name:"Broken Heart Plant",char:"Holes in leaves.",imp:"Ornamental climber.",care:"Support, indirect light."},
  {name:"Variegated Croton",char:"Multi-colored foliage.",imp:"Landscape beauty.",care:"Full sun."},
  {name:"Lucky Bamboo",char:"Bamboo-like stalks.",imp:"Symbol of luck.",care:"Clean water."},
  {name:"Peace Lily",char:"White flowers.",imp:"Air purifier.",care:"Moist soil."},
  {name:"Money Plant (Pothos)",char:"Heart-shaped leaves.",imp:"Easy indoor plant.",care:"Low maintenance."},
  {name:"Ajwain Plant",char:"Medicinal aromatic leaves.",imp:"Aids digestion.",care:"Full sunlight."},
  {name:"Tecoma",char:"Yellow trumpet flowers.",imp:"Attracts bees.",care:"Pruning required."},
  {name:"Leopard Ginger Lily",char:"Spotted flowers.",imp:"Garden ornamental.",care:"Moist soil."},
  {name:"Tulsi",char:"Sacred medicinal herb.",imp:"Boosts immunity.",care:"Daily sunlight."},
  {name:"Leopard Plant",char:"Spotted leaves.",imp:"Shade ornamental.",care:"Cool area."},
  {name:"Heart Lily",char:"Heart-shaped foliage.",imp:"Decorative plant.",care:"Indirect light."},
  {name:"Insulin Plant",char:"Spiral leaves.",imp:"Controls blood sugar.",care:"Partial sunlight."},
  {name:"Prajapati (Butterfly Plant)",char:"Butterfly-attracting flowers.",imp:"Supports biodiversity.",care:"Full sunlight."},
  {name:"Black Mondo Grass",char:"Dark foliage grass.",imp:"Landscape design.",care:"Partial shade."},
  {name:"Papaya",char:"Soft stem fruit tree.",imp:"Nutritious fruit.",care:"Full sun."},
  {name:"Cotton Plant",char:"Fiber-producing shrub.",imp:"Textile industry.",care:"Warm climate."},
  {name:"Jade Plant",char:"Succulent leaves.",imp:"Symbol of prosperity.",care:"Low watering."},
  {name:"Copper Leaf",char:"Copper-colored leaves.",imp:"Decorative shrub.",care:"Bright sunlight."},
  {name:"Giant Philodendron",char:"Very large leaves.",imp:"Landscape décor.",care:"Moist soil."},
  {name:"Rose",char:"Fragrant thorny flower.",imp:"Perfumes and beauty.",care:"Pruning needed."},
  {name:"Different Types of Money Plant",char:"Golden, Marble and Neon varieties.",imp:"Air purifier.",care:"Easy care."},
  {name:"Bio-Enzymes of Citrus",char:"Fermented citrus solution.",imp:"Eco-friendly cleaner.",care:"Store airtight."},
  {name:"Jeevamrut",char:"Organic liquid fertilizer.",imp:"Improves soil microbes.",care:"Use fresh."},

  {name:"Snake Plant",char:"Tall sword-shaped leaves.",imp:"Excellent air purifier.",care:"Low water, indirect light."},
  {name:"Spider Plant",char:"Long arching leaves.",imp:"Removes indoor pollutants.",care:"Bright indirect light."},
  {name:"Aloe Vera",char:"Succulent medicinal plant.",imp:"Used for skin care and medicine.",care:"Minimal watering."},
  {name:"Areca Palm",char:"Feathery green fronds.",imp:"Natural humidifier.",care:"Bright indirect sunlight."},
  {name:"Rubber Plant",char:"Large glossy leaves.",imp:"Improves indoor air quality.",care:"Moderate watering."},
  {name:"ZZ Plant",char:"Shiny dark green leaves.",imp:"Very low-maintenance plant.",care:"Low light and little water."},
  {name:"Ficus Benjamina",char:"Small tree with dense foliage.",imp:"Popular indoor ornamental plant.",care:"Bright indirect light."},
  {name:"Dracaena",char:"Long narrow leaves.",imp:"Air-purifying houseplant.",care:"Moderate watering."},
  {name:"Anthurium",char:"Bright red heart-shaped flowers.",imp:"Decorative flowering plant.",care:"Indirect sunlight."},
  {name:"Begonia",char:"Colorful flowers and leaves.",imp:"Garden decoration.",care:"Moist soil."},
  {name:"Marigold",char:"Bright yellow-orange flowers.",imp:"Repels pests naturally.",care:"Full sunlight."},
  {name:"Hibiscus",char:"Large colorful flowers.",imp:"Medicinal and ornamental uses.",care:"Regular watering."},
  {name:"Jasmine",char:"Fragrant white flowers.",imp:"Used in perfumes.",care:"Full sunlight."},
  {name:"Lavender",char:"Purple aromatic flowers.",imp:"Used for essential oils.",care:"Well-drained soil."},
  {name:"Mint",char:"Aromatic herb.",imp:"Used in food and medicine.",care:"Regular watering."},
  {name:"Curry Leaf Plant",char:"Small aromatic leaves.",imp:"Used in cooking.",care:"Full sunlight."},
  {name:"Neem",char:"Medicinal evergreen tree.",imp:"Natural pesticide and medicine.",care:"Low maintenance."},
  {name:"Moringa",char:"Fast-growing nutritious tree.",imp:"Rich in vitamins and minerals.",care:"Full sunlight."},
  {name:"Sunflower",char:"Large yellow flower.",imp:"Produces edible seeds.",care:"Full sunlight."},
  {name:"Orchid",char:"Exotic colorful flowers.",imp:"Highly valued ornamental plant.",care:"Indirect light and humidity."}
];
const container = document.getElementById("plantContainer");
const search = document.getElementById("search");

function speak(text){
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function displayPlants(list){
  container.innerHTML="";
  list.forEach((p,i)=>{
    container.innerHTML+=`
    <div class="card">
      <h3 class="plant-title" onclick="toggle(${i})">${p.name}</h3>
      <div class="details" id="d${i}">
        <p><b>Characteristics:</b> ${p.char}</p>
        <p><b>Importance:</b> ${p.imp}</p>
        <p><b>Care:</b> ${p.care}</p>
        <button onclick="speak('${p.name}. ${p.imp}')">🔊 Listen</button>
      </div>
    </div>`;
  });
}

function toggle(i){
  document.getElementById("d"+i).parentElement.classList.toggle("active");
}

search.addEventListener("input",()=>{
  displayPlants(
    plants.filter(p=>p.name.toLowerCase().includes(search.value.toLowerCase()))
  );
});

displayPlants(plants);
