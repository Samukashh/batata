const btn = document.getElementById("colorBtn");

/* BANCO DE DADOS */
const pokemonColors = [

  /* =========================
     GEN 1 - KANTO
     ========================= */
  
  ["Bulbasaur", "#78C850", "#38A36A", "#A8E6A3"],
  ["Ivysaur", "#78C850", "#2E8B57", "#4A7043"],
  ["Venusaur", "#3A7D44", "#2E8B57", "#1F4F2E"],
  ["Charmander", "#F08030", "#FF4500", "#FFD39B"],
  ["Charmeleon", "#E25822", "#B22222", "#FF8C69"],
  ["Charizard", "#F08030", "#2F4F4F", "#FFD700"],
  ["Squirtle", "#6890F0", "#3A6EA5", "#B0E0E6"],
  ["Wartortle", "#6890F0", "#1E4D8C", "#E6F0FA"],
  ["Blastoise", "#3A6EA5", "#1E3A5F", "#B0C4DE"],
  ["Caterpie", "#A8B820", "#6B8E23", "#E0F8D0"],
  ["Metapod", "#8FBC8F", "#556B2F", "#C0D890"],
  ["Butterfree", "#A890F0", "#F8D8FF", "#4A4A4A"],
  ["Weedle", "#C8A020", "#8B7500", "#FFE87C"],
  ["Kakuna", "#DAA520", "#B8860B", "#F5DEB3"],
  ["Beedrill", "#DAA520", "#2F2F2F", "#FFD700"],
  ["Pidgey", "#A89070", "#8B7355", "#F5F5DC"],
  ["Pidgeotto", "#A89070", "#8B4513", "#EEE8AA"],
  ["Pidgeot", "#A89070", "#8B4513", "#D2B48C"],
  ["Rattata", "#A040A0", "#4B0082", "#D8BFD8"],
  ["Raticate", "#8B5A2B", "#4B2E2E", "#FFE4B5"],
  ["Spearow", "#A89070", "#8B4513", "#FFD700"],
  ["Fearow", "#8B4513", "#2F2F2F", "#FFD700"],
  ["Ekans", "#A040A0", "#4B0082", "#FFD700"],
  ["Arbok", "#6A0DAD", "#2F2F2F", "#FFD700"],
  ["Pikachu", "#F8D030", "#FFD700", "#2F2F2F"],
  ["Raichu", "#F8A030", "#FFD700", "#8B4513"],
  ["Sandshrew", "#D2B48C", "#8B7355", "#EEE8AA"],
  ["Sandslash", "#C2A25A", "#8B7355", "#EEE8AA"],
  ["NidoranF", "#FFB6C1", "#C71585", "#8B008B"],
  ["Nidorina", "#DB7093", "#8B008B", "#FFC0CB"],
  ["Nidoqueen", "#9370DB", "#4B0082", "#FFD700"],
  ["NidoranM", "#87CEFA", "#1E90FF", "#4B0082"],
  ["Nidorino", "#6495ED", "#1E90FF", "#FFD700"],
  ["Nidoking", "#6A5ACD", "#2F2F2F", "#FFD700"],
  ["Clefairy", "#FFC0CB", "#FF69B4", "#FFF0F5"],
  ["Clefable", "#FFB6C1", "#FF69B4", "#FFF5EE"],
  ["Vulpix", "#FF8C00", "#B22222", "#FFD700"],
  ["Ninetales", "#F5DEB3", "#CD853F", "#FFF8DC"],
  ["Jigglypuff", "#FFB6C1", "#FF69B4", "#FFF0F5"],
  ["Wigglytuff", "#FFC0CB", "#FF69B4", "#FFF0F5"],
  ["Zubat", "#6A5ACD", "#2F2F2F", "#9370DB"],
  ["Golbat", "#483D8B", "#2F2F2F", "#9370DB"],
  ["Oddish", "#32CD32", "#006400", "#FF0000"],
  ["Gloom", "#556B2F", "#2F4F4F", "#FF69B4"],
  ["Vileplume", "#FF0000", "#2F4F4F", "#FFD700"],
  ["Paras", "#FF4500", "#8B0000", "#FFD700"],
  ["Parasect", "#8B0000", "#2F2F2F", "#FFD700"],
  ["Venonat", "#9370DB", "#4B0082", "#FFD700"],
  ["Venomoth", "#BA55D3", "#4B0082", "#FFD700"],
  ["Diglett", "#A0522D", "#654321", "#EEE8AA"],
  ["Dugtrio", "#8B4513", "#654321", "#EEE8AA"],
  ["Meowth", "#EEE8AA", "#DAA520", "#8B4513"],
  ["Persian", "#EEE8AA", "#DAA520", "#8B4513"],
  ["Psyduck", "#FFD700", "#F0E68C", "#FF8C00"],
  ["Golduck", "#1E90FF", "#4682B4", "#FFD700"],
  ["Mankey", "#D2B48C", "#8B7355", "#654321"],
  ["Primeape", "#EEE8AA", "#2F2F2F", "#8B4513"],
  ["Growlithe", "#FF8C00", "#B22222", "#FFF8DC"],
  ["Arcanine", "#FF8C00", "#8B0000", "#FFD700"],
  ["Poliwag", "#1E90FF", "#000080", "#FFFFFF"],
  ["Poliwhirl", "#1E90FF", "#000080", "#FFFFFF"],
  ["Poliwrath", "#1E90FF", "#2F4F4F", "#FFFFFF"],
  ["Abra", "#FFD700", "#DAA520", "#8B008B"],
  ["Kadabra", "#FFD700", "#DAA520", "#8B008B"],
  ["Alakazam", "#FFD700", "#DAA520", "#8B008B"],
  ["Machop", "#A9A9A9", "#696969", "#2F4F4F"],
  ["Machoke", "#808080", "#2F4F4F", "#2F2F2F"],
  ["Machamp", "#696969", "#2F2F2F", "#FFD700"],
  ["Bellsprout", "#ADFF2F", "#556B2F", "#FFD700"],
  ["Weepinbell", "#9ACD32", "#556B2F", "#FFD700"],
  ["Victreebel", "#6B8E23", "#556B2F", "#FFD700"]
  
  /* ... seguiria até Mew ... */
  /* =========================
     GEN 2 - JOHTO
     ========================= */
  
  ["Chikorita", "#78C850", "#98FB98", "#2E8B57"],
  ["Bayleef", "#78C850", "#6B8E23", "#FFE4B5"],
  ["Meganium", "#66CDAA", "#2E8B57", "#FFB6C1"],
  ["Cyndaquil", "#F08030", "#2F4F4F", "#FFD700"],
  ["Quilava", "#F08030", "#FF4500", "#FFD700"],
  ["Typhlosion", "#8B0000", "#F08030", "#FFD700"],
  ["Totodile", "#6890F0", "#3A6EA5", "#FFD700"],
  ["Croconaw", "#6890F0", "#2F4F4F", "#FFD700"],
  ["Feraligatr", "#3A6EA5", "#1E3A5F", "#FFD700"],
  ["Sentret", "#A89070", "#8B7355", "#FFE4B5"],
  ["Furret", "#D2B48C", "#8B7355", "#FFF5EE"],
  ["Hoothoot", "#8B7355", "#F5F5DC", "#FFD700"],
  ["Noctowl", "#8B7355", "#F5F5DC", "#FFD700"],
  ["Ledyba", "#FF0000", "#2F2F2F", "#F5F5DC"],
  ["Ledian", "#FF0000", "#2F2F2F", "#FFD700"],
  ["Spinarak", "#008000", "#2F2F2F", "#FF0000"],
  ["Ariados", "#8B0000", "#2F2F2F", "#FFD700"],
  ["Crobat", "#6A5ACD", "#2F2F2F", "#9370DB"],
  ["Chinchou", "#1E90FF", "#FFD700", "#2F4F4F"],
  ["Lanturn", "#1E90FF", "#FFD700", "#2F4F4F"],
  ["Pichu", "#F8D030", "#FFD700", "#2F2F2F"],
  ["Cleffa", "#FFC0CB", "#FF69B4", "#FFF0F5"],
  ["Igglybuff", "#FFC0CB", "#FF69B4", "#FFF0F5"],
  ["Togepi", "#FFFACD", "#FFD700", "#FF0000"],
  ["Togetic", "#F5F5F5", "#FFD700", "#FF0000"],
  ["Natu", "#228B22", "#2F2F2F", "#FF0000"],
  ["Xatu", "#2E8B57", "#2F2F2F", "#FF0000"]
  
  ];
  /* BOTÃO */
  btn.addEventListener("click", function(){

   const randomIndex = Math.floor(Math.random()*pokemonColors.length);
   
   const pokemon = pokemonColors[randomIndex];
   
   const name = pokemon[0];
   const primary = pokemon[1];
   const secondary = pokemon[2];
   const tertiary = pokemon[3];
   
   document.documentElement.style.setProperty('--primary-color', primary);
   document.documentElement.style.setProperty('--secondary-color', secondary);
   document.documentElement.style.setProperty('--tertiary-color', tertiary);
   
   console.log("Pokemon escolhido:", name);
   
   });