const motorbike = {
    brand: "Yamaha",
    speed: 0,
    revs: 0,
    kilometres: 10000,
    cc: 250,
    on: false,
    gearbox: ["Neutral", "First", "Second", "Third"],
    ignition: function() {
      motorbike.on = !motorbike.on
    }
  }

  const motorbike2 = {
    brand: "Honda",
    speed: 0,
    revs: 0,
    kilometres: 10000,
    cc: 250,
    on: false,
    gearbox: ["Neutral", "First", "Second", "Third"],
    ignition: function() {
      motorbike.on = !motorbike.on
    }
  }

  const motorbike3 = {
    brand: "BMW",
    speed: 0,
    revs: 0,
    kilometres: 10000,
    cc: 250,
    on: false,
    gearbox: ["Neutral", "First", "Second", "Third"],
    ignition: function() {
      motorbike.on = !motorbike.on
    }
  }
  
  if (motorbike.kilometres > "5000") {
    console.log("You should not buy this one")
  };

  const motorbikes = [motorbike, motorbike2, motorbike3];

  const searchTerm = "BMW";

  const foundMotorbike = motorbikes.find((motorbike) => {
    return motorbike.brand === searchTerm;
  });

  console.warn("My motorbike is",foundMotorbike);

  console.log(motorbike.brand)
  console.log(motorbike.cc)
  console.log(motorbikes)
  console.log(motorbike.on);
  