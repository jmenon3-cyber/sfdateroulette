const ideas = [
  {
    id: 1,
    title: "Sunset at Lands End + Hot Chocolate",
    mood: ["romantic", "chill"],
    time: "night",
    budget: "$",
    neighborhood: "Outer Richmond",
    description:
      "Catch golden hour on the coastal trail, then warm up with hot chocolate nearby.",
    why: "Cinematic views with an easy, cozy finish that feels way fancier than it costs.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Lands%20End%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Hot%20chocolate%20Outer%20Richmond%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=hot%20chocolate&find_loc=Outer%20Richmond%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 2,
    title: "Ferry Building Snack Crawl",
    mood: ["foodie", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Embarcadero",
    description:
      "Share small bites from a few vendors instead of committing to one spot—sweet, savory, and something fizzy.",
    why: "Lots of tiny choices keeps it fun, low-pressure, and conversation never stalls.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Ferry%20Building%20Marketplace%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.ferrybuildingmarketplace.com/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=Ferry%20Building%20food&find_loc=Embarcadero%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 3,
    title: "Golden Gate Park Picnic + Rowboat",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Golden Gate Park",
    description:
      "Pack a picnic, then rent a rowboat for a slow lap on the lake before stretching out in the grass.",
    why: "Picnic feels intimate, rowing gets playful, and you’ll both laugh at the steering.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Golden%20Gate%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Rowboat%20rental%20Golden%20Gate%20Park%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 4,
    title: "Mission Murals + Paleta Taste Test",
    mood: ["foodie", "playful"],
    time: "day",
    budget: "$",
    neighborhood: "Mission",
    description:
      "Wander the mural alleys, then do a ‘best bite’ vote with paletas or pastries you can split.",
    why: "Colorful streets + sugar rush = instant good mood and easy photo moments.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Clarion%20Alley%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Paletas%20Mission%20District%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=paletas&find_loc=Mission%20District%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 5,
    title: "North Beach Bookstore + Gelato Stroll",
    mood: ["romantic", "chill"],
    time: "night",
    budget: "$$",
    neighborhood: "North Beach",
    description:
      "Start with a bookish vibe (browse and pick a poem or weird title), then stroll the lantern-lit streets with gelato in hand.",
    why: "Old-SF charm makes it feel like a movie date without trying too hard.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=City%20Lights%20Booksellers%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Gelato%20North%20Beach%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.citylights.com/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=gelato&find_loc=North%20Beach%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 6,
    title: "Twin Peaks Stargaze + Thermos Tea",
    mood: ["romantic", "chill"],
    time: "night",
    budget: "$",
    neighborhood: "Twin Peaks",
    description:
      "Bring a warm drink, bundle up, and watch the city sparkle from above for 20–30 minutes.",
    why: "Big romance energy for almost no money—just vibes, lights, and quiet time.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Twin%20Peaks%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 7,
    title: "Ocean Beach Fire Rings + S'mores",
    mood: ["romantic", "chaotic"],
    time: "night",
    budget: "$$",
    neighborhood: "Outer Sunset",
    description:
      "Claim a fire ring, build a tiny beach feast, and embrace the wind as part of the adventure.",
    why: "A little chaos (sand + wind) turns into a core memory when you lean into it.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Ocean%20Beach%20Fire%20Pits%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 8,
    title: "Japantown Karaoke + Late-Night Ramen",
    mood: ["playful", "chaotic", "foodie"],
    time: "night",
    budget: "$$",
    neighborhood: "Japantown",
    description:
      "Do one hour of karaoke, then reward your best (or worst) performance with ramen nearby.",
    why: "Singing breaks the ice fast, and ramen is the perfect post-laugh reset.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Japantown%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Karaoke%20Japantown%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Ramen%20Japantown%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=karaoke&find_loc=Japantown%2C%20San%20Francisco%2C%20CA",
        "https://www.yelp.com/search?find_desc=ramen&find_loc=Japantown%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 9,
    title: "Hayes Valley Wine-Bar Wander",
    mood: ["romantic", "chill"],
    time: "night",
    budget: "$$",
    neighborhood: "Hayes Valley",
    description:
      "Pick two spots max: one cozy glass of wine, then a second place for a nightcap or dessert.",
    why: "Small neighborhood + lots of options makes it feel effortless and flirty.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Hayes%20Valley%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=wine%20bar&find_loc=Hayes%20Valley%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 10,
    title: "Presidio Tunnel Tops + Food-Truck Picnic",
    mood: ["chill", "foodie"],
    time: "day",
    budget: "$$",
    neighborhood: "Presidio",
    description:
      "Hang at the lawns and viewpoints, then grab something casual from nearby food stands/trucks.",
    why: "Big views, lots of space, and casual food keeps it relaxed but still special.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Presidio%20Tunnel%20Tops%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Food%20trucks%20Presidio%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=food%20trucks&find_loc=Presidio%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 11,
    title: "Painted Ladies Photo Challenge + Coffee",
    mood: ["playful", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Alamo Square",
    description:
      "Do a mini scavenger list: ‘best dog,’ ‘best outfit,’ ‘best skyline shot’—then coffee and recap.",
    why: "A tiny game turns a classic spot into a shared inside joke instantly.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Alamo%20Square%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Coffee%20near%20Alamo%20Square%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=coffee&find_loc=Alamo%20Square%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 12,
    title: "Castro Theater Night + Post-Movie Walk",
    mood: ["romantic", "chill"],
    time: "night",
    budget: "$$",
    neighborhood: "Castro",
    description:
      "See a movie/event in an iconic SF venue, then take a short walk after to debrief and vibe-check the night.",
    why: "A classic date format that still feels special because the neighborhood energy is so good.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Castro%20Theatre%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.castrotheatre.com/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=dessert&find_loc=Castro%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 13,
    title: "Exploratorium After Dark + Drinks",
    mood: ["playful", "chaotic"],
    time: "night",
    budget: "$$",
    neighborhood: "Embarcadero",
    description:
      "Do hands-on exhibits with a date-night crowd, then grab a drink and compare favorite demos.",
    why: "Built-in conversation starters everywhere—zero awkward small talk required.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Exploratorium%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Bars%20near%20Exploratorium%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.exploratorium.edu/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=bars&find_loc=Embarcadero%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 14,
    title: "Cal Academy NightLife",
    mood: ["playful", "chaotic"],
    time: "night",
    budget: "$$",
    neighborhood: "Golden Gate Park",
    description:
      "Do a museum night with music + exhibits, then take a quick moonlit walk in the park after.",
    why: "It’s science-meets-party energy—fun, unexpected, and very SF.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=California%20Academy%20of%20Sciences%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.calacademy.org/"],
      yelp: [],
    },
  },
  {
    id: 15,
    title: "SFMOMA + Nearby Pastry Split",
    mood: ["chill"],
    time: "day",
    budget: "$$",
    neighborhood: "SoMa",
    description:
      "Pick a few floors (don’t try to do everything), then split one fancy pastry as a sweet finale.",
    why: "Art gives you things to react to together—low pressure, high connection.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=SFMOMA%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Pastries%20near%20SFMOMA%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.sfmoma.org/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=bakery&find_loc=SoMa%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 16,
    title: "de Young Tower Views + Park Stroll",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Golden Gate Park",
    description:
      "Do the tower for sweeping city/ocean views, then wander the nearby gardens and paths slowly.",
    why: "A perfect balance of ‘wow’ moments and quiet walking-and-talking time.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=de%20Young%20Museum%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.famsf.org/"],
      yelp: [],
    },
  },
  {
    id: 17,
    title: "Chinatown Dim Sum + Alleyway Wandering",
    mood: ["foodie", "playful"],
    time: "day",
    budget: "$$",
    neighborhood: "Chinatown",
    description:
      "Order a few shareable plates, then explore the side alleys, shops, and little surprises.",
    why: "It’s sensory in the best way—lots to see, smell, taste, and laugh about.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Chinatown%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Dim%20sum%20Chinatown%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=dim%20sum&find_loc=Chinatown%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 18,
    title: "Clement Street 'One-Bite' Crawl",
    mood: ["foodie", "playful"],
    time: "day",
    budget: "$",
    neighborhood: "Inner Richmond",
    description:
      "Create a rule: you can only get items you can split. Aim for 4–5 mini stops, not a full meal.",
    why: "A choose-your-own-adventure food tour that stays casual and fun.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Clement%20Street%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=restaurants&find_loc=Clement%20St%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 19,
    title: "Valencia Bookstores + Dessert Duet",
    mood: ["chill", "romantic"],
    time: "day",
    budget: "$$",
    neighborhood: "Mission",
    description:
      "Browse bookstores and gift shops, then sit down for one dessert you both agree on.",
    why: "Browsing together is surprisingly intimate—dessert gives it a clean ‘finale.’",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Valencia%20Street%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Dessert%20Valencia%20Street%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=dessert&find_loc=Valencia%20St%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 20,
    title: "Dogpatch Gallery Hop + Brewery Patio",
    mood: ["chill", "foodie"],
    time: "night",
    budget: "$$",
    neighborhood: "Dogpatch",
    description:
      "Pop into a couple small galleries or studios, then post up on a patio with a beer and fries.",
    why: "It feels like discovering a quieter SF—low crowds, lots of hidden gems.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Dogpatch%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Galleries%20Dogpatch%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=brewery&find_loc=Dogpatch%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 21,
    title: "Potrero Hill Viewpoint + Takeout Pizza Picnic",
    mood: ["romantic", "chill"],
    time: "night",
    budget: "$$",
    neighborhood: "Potrero Hill",
    description:
      "Grab takeout, then eat it somewhere with a skyline view while the city lights come on.",
    why: "Comfort food + a view is undefeated—and it’s naturally cozy and low-key.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Potrero%20Hill%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Potrero%20Hill%20viewpoint%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=pizza&find_loc=Potrero%20Hill%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 22,
    title: "Bernal Heights Summit Hike + Burrito",
    mood: ["active", "foodie"],
    time: "day",
    budget: "$",
    neighborhood: "Bernal Heights",
    description:
      "Do a short hike to the top, then cool down with a burrito (split it if you want it extra cute).",
    why: "You earn your food, get panoramic views, and feel like you accomplished something together.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Bernal%20Heights%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Burrito%20Bernal%20Heights%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=burrito&find_loc=Bernal%20Heights%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 23,
    title: "Crissy Field Bike + Warming Drinks",
    mood: ["active", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Marina",
    description:
      "Bike the waterfront at an easy pace, stop for photos, then grab something warm to drink.",
    why: "Active but not intense—scenery carries the date so it never feels forced.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Crissy%20Field%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Coffee%20Marina%20District%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=coffee&find_loc=Marina%20District%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 24,
    title: "Fort Point Photo Scavenger Hunt",
    mood: ["playful", "active"],
    time: "day",
    budget: "$",
    neighborhood: "Presidio",
    description:
      "Make a list: ‘coolest shadow,’ ‘best bridge angle,’ ‘weirdest texture’—then compare shots.",
    why: "Turning sightseeing into a game creates instant chemistry and inside jokes.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Fort%20Point%20National%20Historic%20Site%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 25,
    title: "Aquatic Park Hang + Irish Coffee Moment",
    mood: ["playful", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Aquatic Park",
    description:
      "Watch the swimmers and boats, then grab a warm Irish coffee nearby and people-watch.",
    why: "It’s quirky-local energy plus a classic SF drink—memorable without being complicated.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Aquatic%20Park%20Cove%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Irish%20coffee%20near%20Aquatic%20Park%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=irish%20coffee&find_loc=Fisherman%27s%20Wharf%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 26,
    title: "Embarcadero Sunset Skate/Blade + Street Snacks",
    mood: ["playful", "active"],
    time: "day",
    budget: "$$",
    neighborhood: "Embarcadero",
    description:
      "Skate or blade along the promenade, then refuel with something quick and snacky.",
    why: "Movement keeps it light and flirty, and snacks prevent any ‘hangry’ moments.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Embarcadero%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=street%20food&find_loc=Embarcadero%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 27,
    title: "North Beach Live Jazz + Pizza Slice",
    mood: ["romantic", "foodie"],
    time: "night",
    budget: "$$",
    neighborhood: "North Beach",
    description:
      "Catch a jazz set, then keep it casual with a slice and a slow walk around the neighborhood.",
    why: "Music sets the mood; pizza keeps it grounded—romantic without being precious.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=North%20Beach%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Live%20jazz%20North%20Beach%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=live%20jazz&find_loc=North%20Beach%2C%20San%20Francisco%2C%20CA",
        "https://www.yelp.com/search?find_desc=pizza&find_loc=North%20Beach%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 28,
    title: "Civic Center Rush-Tix Show + Late Bites",
    mood: ["romantic", "chaotic"],
    time: "night",
    budget: "$$",
    neighborhood: "Civic Center",
    description:
      "Try for last-minute tickets, then grab late-night bites and recap your favorite moments.",
    why: "A little spontaneity makes it feel like an adventure—and a show is instant date-night energy.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Civic%20Center%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=late%20night%20food&find_loc=Civic%20Center%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 29,
    title: "Grace Cathedral Labyrinth + Nob Hill Views",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Nob Hill",
    description:
      "Walk the labyrinth quietly, then step outside for classic Nob Hill scenery and a slow stroll.",
    why: "Peaceful, reflective, and surprisingly romantic—great for meaningful conversation.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Grace%20Cathedral%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://gracecathedral.org/"],
      yelp: [],
    },
  },
  {
    id: 30,
    title: "Russian Hill Steps + Ina Coolbrith Picnic",
    mood: ["romantic", "active"],
    time: "day",
    budget: "$",
    neighborhood: "Russian Hill",
    description:
      "Wander a few stair streets, then pause at Ina Coolbrith Park with snacks and a view.",
    why: "It feels like discovering secret SF corners, and the view makes it feel big-deal.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Ina%20Coolbrith%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Filbert%20Steps%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 31,
    title: "Pacific Heights Architecture Walk + Fancy Pastry",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Pacific Heights",
    description:
      "Stroll the prettiest blocks, do a ‘dream house’ commentary track, then split a bakery pastry.",
    why: "People-watching + home-spotting is elite conversation fuel and quietly romantic.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Pacific%20Heights%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Bakery%20Pacific%20Heights%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=bakery&find_loc=Pacific%20Heights%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 32,
    title: "Fillmore Live Music + Small Plates",
    mood: ["romantic", "foodie"],
    time: "night",
    budget: "$$",
    neighborhood: "Fillmore",
    description:
      "Start with small plates you can share, then catch live music nearby for a classic night out.",
    why: "Sharing food builds closeness, and music gives the night a natural arc.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=The%20Fillmore%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=small%20plates&find_loc=Fillmore%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 33,
    title: "Union Square Ice Skating + Hot Chocolate",
    mood: ["playful", "romantic"],
    time: "night",
    budget: "$$",
    neighborhood: "Union Square",
    description:
      "Hold hands, wobble a little, laugh a lot—then recover with hot chocolate and a slow walk.",
    why: "It’s cheesy in the best way, and falling (a little) is basically guaranteed bonding.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Union%20Square%20Ice%20Rink%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Hot%20chocolate%20Union%20Square%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=hot%20chocolate&find_loc=Union%20Square%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 34,
    title: "Mission Bay Mini-Golf + Food Truck Dinner",
    mood: ["playful", "foodie"],
    time: "night",
    budget: "$$",
    neighborhood: "Mission Bay",
    description:
      "Play a quick round, keep score with silly stakes, then grab dinner from nearby food trucks.",
    why: "Cute competitive energy + casual food keeps it fun and never overly serious.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Stagecoach%20Greens%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Spark%20Social%20SF%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://sparksocialsf.com/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=food%20trucks&find_loc=Mission%20Bay%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 35,
    title: "South Beach Waterfront Walk + Ballpark-Style Bites",
    mood: ["chill", "foodie"],
    time: "night",
    budget: "$$",
    neighborhood: "South Beach",
    description:
      "Walk the water with the lights reflecting, then grab something snacky and stadium-adjacent nearby.",
    why: "Feels like a mini vacation: water, lights, and playful comfort food.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=South%20Beach%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Oracle%20Park%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=casual%20food&find_loc=South%20Beach%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 36,
    title: "Treasure Island Sunset + Wine Date",
    mood: ["romantic", "foodie"],
    time: "night",
    budget: "$$$",
    neighborhood: "Treasure Island",
    description:
      "Go for a skyline sunset from a new angle, then do a wine-focused stop to linger a little longer.",
    why: "It’s a ‘special occasion’ vibe without needing a huge plan—just views and a toast.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Treasure%20Island%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Wine%20bar%20Treasure%20Island%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=wine%20bar&find_loc=Treasure%20Island%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 37,
    title: "Sutro Baths Hike + Cozy Cafe Reset",
    mood: ["active", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Outer Richmond",
    description:
      "Walk the dramatic coastal ruins and trails, then grab coffee/tea and warm up together.",
    why: "Big nature energy first, then a cozy decompression—perfect pacing for a date.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Sutro%20Baths%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Coffee%20Outer%20Richmond%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=coffee&find_loc=Outer%20Richmond%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 38,
    title: "Ocean Beach Surf Lesson + Post-Surf Tacos",
    mood: ["active", "playful"],
    time: "day",
    budget: "$$$",
    neighborhood: "Outer Sunset",
    description:
      "Take a lesson (or rent boards if you already know), then celebrate with tacos and warm layers.",
    why: "Learning together is bonding, and you’ll both feel brave after getting in the ocean.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Ocean%20Beach%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Surf%20lessons%20Outer%20Sunset%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Tacos%20Outer%20Sunset%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=tacos&find_loc=Outer%20Sunset%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 39,
    title: "Conservatory of Flowers + Tea Garden Stroll",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Golden Gate Park",
    description:
      "Do lush greenhouse vibes, then wander to the tea garden area for a slow, scenic walk.",
    why: "It’s basically a romantic movie set—gentle, pretty, and easy to talk in.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Conservatory%20of%20Flowers%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Japanese%20Tea%20Garden%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://conservatoryofflowers.org/"],
      yelp: [],
    },
  },
  {
    id: 40,
    title: "Haight Thrift Store Challenge",
    mood: ["playful", "chaotic"],
    time: "day",
    budget: "$$",
    neighborhood: "Haight-Ashbury",
    description:
      "Give each other a mission: ‘find the funniest shirt,’ ‘best jacket under $20,’ then reveal picks.",
    why: "Silly tasks create instant laughter and show off each other’s sense of humor.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Haight-Ashbury%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Thrift%20stores%20Haight%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 41,
    title: "Noe Valley Recipe Run + Cook Together",
    mood: ["romantic", "chill", "foodie"],
    time: "night",
    budget: "$$",
    neighborhood: "Noe Valley",
    description:
      "Pick a recipe, shop for ingredients, then cook as a team with a playlist and a drink.",
    why: "It’s intimate without being too intense—teamwork + homemade food = real connection.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Noe%20Valley%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Grocery%20store%20Noe%20Valley%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 42,
    title: "Mission Fancy Cocktails + Dessert Pairing",
    mood: ["romantic", "chaotic"],
    time: "night",
    budget: "$$$",
    neighborhood: "Mission",
    description:
      "Do one thoughtfully-made cocktail each, then split a dessert (or two) as the night’s finale.",
    why: "Feels indulgent and grown-up, but still playful if you keep it to 2 stops max.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Mission%20District%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Cocktail%20bars%20Mission%20District%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=cocktail%20bars&find_loc=Mission%20District%2C%20San%20Francisco%2C%20CA",
        "https://www.yelp.com/search?find_desc=dessert&find_loc=Mission%20District%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 43,
    title: "Presidio Yoda Fountain + Picnic Blanket Hang",
    mood: ["playful", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Presidio",
    description:
      "Do a quick nerd-cute landmark moment, then post up on a lawn with snacks and no agenda.",
    why: "Low-pressure and slightly goofy—great for a first date or a ‘we need fresh air’ date.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Yoda%20Fountain%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 44,
    title: "Musee Mecanique Vintage Arcade + Wharf Walk",
    mood: ["playful", "chaotic"],
    time: "day",
    budget: "$$",
    neighborhood: "Fisherman's Wharf",
    description:
      "Play weird old-school arcade games, then take a breezy walk along the water to unwind.",
    why: "Being goofy together is the fastest path to chemistry—and the games do the work.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Musee%20Mecanique%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Fisherman%27s%20Wharf%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://museemecanique.com/"],
      yelp: [],
    },
  },
  {
    id: 45,
    title: "Palace of Fine Arts Lagoon Loop + Golden Hour Sit",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Marina",
    description:
      "Do a slow loop around the lagoon, take dramatic ‘film still’ photos, then sit and watch the light change.",
    why: "It’s gorgeous, calm, and makes you feel like you left the city without actually leaving the city.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Fine%20Arts%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 46,
    title: "Baker Beach Picnic + Golden Gate Views",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Presidio",
    description:
      "Bring a blanket and snacks, take in the bridge views, and stay long enough to actually relax.",
    why: "Iconic SF scenery, lots of space, and a naturally calm vibe for real conversation.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Baker%20Beach%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 47,
    title: "Glen Canyon Hike + Village Coffee",
    mood: ["active", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Glen Park",
    description:
      "Do a short canyon hike that feels surprisingly wild, then end with coffee in the neighborhood.",
    why: "A nature escape that feels far away, followed by a cozy ‘back in the city’ landing.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Glen%20Canyon%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Coffee%20Glen%20Park%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=coffee&find_loc=Glen%20Park%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 48,
    title: "Ferry to Angel Island Hike + Picnic",
    mood: ["active", "romantic"],
    time: "day",
    budget: "$$",
    neighborhood: "Embarcadero",
    description:
      "Start at the Ferry Building, ride out for a mini adventure, hike a bit, then picnic with views.",
    why: "It feels like a getaway without a road trip—perfect for a longer, more memorable date.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Angel%20Island%20State%20Park%20California",
        "https://www.google.com/maps/search/?api=1&query=Ferry%20Building%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.parks.ca.gov/"],
      yelp: [],
    },
  },
  {
    id: 49,
    title: "Pier 7 Golden Hour Photo Walk + Boba",
    mood: ["chill", "romantic"],
    time: "day",
    budget: "$",
    neighborhood: "Embarcadero",
    description:
      "Walk out on the pier at golden hour, take a few photos, then grab boba and keep strolling.",
    why: "Simple, scenic, and gives you something to do with your hands (and your nerves).",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Pier%207%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Boba%20Embarcadero%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=boba&find_loc=Embarcadero%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 50,
    title: "Symphony/Opera Night + Pre-Show Dessert",
    mood: ["romantic"],
    time: "night",
    budget: "$$$",
    neighborhood: "Civic Center",
    description:
      "Dress up a little, go to a performance, then do dessert after and talk about your favorite parts.",
    why: "Instantly elegant—perfect for anniversaries, celebrations, or ‘let’s be fancy’ energy.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Davies%20Symphony%20Hall%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=War%20Memorial%20Opera%20House%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://www.sfsymphony.org/", "https://www.sfopera.com/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=dessert&find_loc=Civic%20Center%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 51,
    title: "Golden Gate Park Disc Golf + Snack Pack",
    mood: ["active", "playful"],
    time: "day",
    budget: "$",
    neighborhood: "Golden Gate Park",
    description:
      "Play a casual round (no skill required), then chill on the grass with snacks and water.",
    why: "Goofy and active, with built-in moments to hype each other up (or roast each other gently).",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Disc%20golf%20Golden%20Gate%20Park%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 52,
    title: "Dolores Park People-Watching + Sandwich Split",
    mood: ["chill", "playful"],
    time: "day",
    budget: "$",
    neighborhood: "Mission",
    description:
      "Grab a sandwich, find a sunny spot, and make up stories about the dogs and outfits passing by.",
    why: "The park is built-in entertainment—easy, social, and very SF.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Mission%20Dolores%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Sandwiches%20near%20Dolores%20Park%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=sandwiches&find_loc=Dolores%20Park%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 53,
    title: "Muni Roulette: Random Line to the End + Find-a-Treat",
    mood: ["chaotic", "playful"],
    time: "day",
    budget: "$",
    neighborhood: "Market Street",
    description:
      "Pick a random Muni line, ride to the last stop, then find one snack or drink wherever you land.",
    why: "A controlled dose of chaos that turns the whole city into a game (and a story).",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Powell%20Street%20Station%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=bakery&find_loc=San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 54,
    title: "Japantown Tea + Stationery Browsing",
    mood: ["romantic", "chill"],
    time: "day",
    budget: "$$",
    neighborhood: "Japantown",
    description:
      "Do tea first, then wander shops for cute finds—stickers, pens, little gifts, or a shared postcard.",
    why: "Slow and sweet, with tiny whimsical moments that feel oddly intimate.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Japantown%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Tea%20Japantown%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=tea&find_loc=Japantown%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 55,
    title: "Coit Tower + North Beach Espresso Crawl",
    mood: ["active", "foodie"],
    time: "day",
    budget: "$$",
    neighborhood: "Telegraph Hill",
    description:
      "Do the climb and the views, then reward yourselves with a mini espresso tour in North Beach.",
    why: "Views + caffeine = high energy without trying too hard (and it’s very classic SF).",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Coit%20Tower%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Coffee%20North%20Beach%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=coffee&find_loc=North%20Beach%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 56,
    title: "Irving Street Banh Mi + Park Stroll",
    mood: ["foodie", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Inner Sunset",
    description:
      "Split a banh mi (or two), then take a mellow walk into the park to digest and chat.",
    why: "Cheap and delicious, then calm and green—perfect ‘easy date’ pacing.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Irving%20Street%20Inner%20Sunset%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Banh%20mi%20Inner%20Sunset%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=banh%20mi&find_loc=Inner%20Sunset%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 57,
    title: "Lyon Street Steps + Picnickable Pastries",
    mood: ["active", "playful"],
    time: "day",
    budget: "$",
    neighborhood: "Presidio Heights",
    description:
      "Do the steps at your own pace, then sit somewhere pretty with pastries as your reward.",
    why: "Short workout + treat = the best kind of balance (and you’ll feel accomplished).",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Lyon%20Street%20Steps%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Bakery%20Presidio%20Heights%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=bakery&find_loc=Presidio%20Heights%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 58,
    title: "Indie Film at The Roxie + Ice Cream Walk",
    mood: ["romantic", "chill"],
    time: "night",
    budget: "$$",
    neighborhood: "Mission",
    description:
      "Catch an indie screening, then take a relaxed walk for ice cream and a post-movie debrief.",
    why: "A cozy ‘real date’ vibe with built-in conversation fuel after the credits roll.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Roxie%20Theater%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Ice%20cream%20Mission%20District%20San%20Francisco%2C%20CA",
      ],
      websites: ["https://roxie.com/"],
      yelp: [
        "https://www.yelp.com/search?find_desc=ice%20cream&find_loc=Mission%20District%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
  {
    id: 59,
    title: "McLaren Park Swings + Sunset Walk",
    mood: ["playful", "chill"],
    time: "day",
    budget: "$",
    neighborhood: "Excelsior",
    description:
      "Lean into playground nostalgia, then walk the open park paths as the light starts to soften.",
    why: "Playful in a disarming way—swings instantly lower the guard and raise the smiles.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=John%20McLaren%20Park%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [],
    },
  },
  {
    id: 60,
    title: "Heron's Head Park Birdwatch + Warm Drinks",
    mood: ["chill", "romantic"],
    time: "day",
    budget: "$",
    neighborhood: "Bayview",
    description:
      "Do a slow waterfront walk, spot birds, and end with coffee/tea somewhere nearby.",
    why: "Underrated, peaceful, and different from the usual SF spots—great for a thoughtful date.",
    links: {
      maps: [
        "https://www.google.com/maps/search/?api=1&query=Heron%27s%20Head%20Park%20San%20Francisco%2C%20CA",
        "https://www.google.com/maps/search/?api=1&query=Coffee%20Bayview%20San%20Francisco%2C%20CA",
      ],
      websites: [],
      yelp: [
        "https://www.yelp.com/search?find_desc=coffee&find_loc=Bayview%2C%20San%20Francisco%2C%20CA",
      ],
    },
  },
];

export default ideas;
