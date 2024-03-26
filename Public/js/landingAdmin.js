const cantonesPorProvincia = {
    alajuela: ["Alajuela", "San Ramón", "Grecia", "San Mateo", "Atenas", "Naranjo", "Palmares", "Poás", "Orotina", "San Carlos", "Zarcero", "Sarchí", "Upala", "Los Chiles", "Guatuso"],
    cartago: ["Cartago", "Paraíso", "La Unión", "Jiménez", "Turrialba", "Alvarado", "Oreamuno", "El Guarco"],
    guanacaste: ["Liberia", "Nicoya", "Santa Cruz", "Bagaces", "Carrillo", "Cañas", "Abangares", "Tilarán", "Nandayure", "La Cruz", "Hojancha"],
    heredia: ["Heredia", "Barva", "Santo Domingo", "Santa Bárbara", "San Rafael"],
    limon: ["Limón", "Pococí", "Siquirres", "Talamanca", "Matina", "Guácimo"],
    sanjose: ["San José", "Escazú", "Desamparados", "Puriscal", "Tarrazú", "Aserrí", "Mora", "Goicoechea", "Santa Ana", "Alajuelita", "Vásquez de Coronado", "Acosta", "Tibás", "Moravia", "Montes de Oca", "Turrubares", "Dota", "Curridabat", "Pérez Zeledón"],
    puntarenas: ["Puntarenas", "Esparza", "Buenos Aires", "Montes de Oro", "Osa", "Quepos", "Golfito", "Coto Brus", "Parrita", "Corredores", "Garabito"]
};

const distritosPorCanton = {
    alajuela: {
        alajuela: ["Alajuela", "San José", "Carrizal", "San Antonio", "Guácima", "San Isidro", "Río Segundo", "Desamparados", "Turrúcares"],
        sanramon: ["San Ramón", "Santiago", "San Juan", "Piedades Norte", "Piedades Sur", "San Rafael", "San Isidro", "Ángeles", "Alfaro", "Volio", "Concepción", "Zapotal", "Peñas Blancas"],
        grecia: ["Grecia", "San Isidro", "San José", "San Roque", "Tacares", "Río Cuarto", "Puente de Piedra", "Bolívar"],
        sanmateo: ["San Mateo", "Desmonte", "Jesús María"],
        atenas: ["Atenas", "Jesús", "Mercedes", "San Isidro", "Concepción", "San José", "Santa Eulalia", "Escobal"],
        naranjo: ["Naranjo", "San Miguel", "San José", "Cirrí Sur", "San Jerónimo"],
        palmares: ["Palmares", "Zaragoza", "Buenos Aires", "Santiago", "Candelaria"],
        poas: ["San Pedro", "San Juan", "San Rafael", "Carrillos", "Sabana Redonda"],
        orotina: ["Orotina", "El Mastate", "Hacienda Vieja"],
        sancarlos: ["Quesada", "Florencia", "Buenavista", "Cutris", "Pital", "Venecia", "La Fortuna", "La Tigra", "La Palmera"],
        zarcero: ["Zarcero", "Laguna", "Tapesco", "Guadalupe", "Palmira"],
        sarchi: ["Sarchí Norte", "Sarchí Sur", "Toro Amarillo", "Rodríguez"],
        upala: ["Upala", "Aguas Claras", "San José (Pizote)", "Delicias", "Dos Ríos", "Yolillal", "Canalete"],
        loschiles: ["Los Chiles", "Caño Negro", "El Amparo", "San Jorge"],
        guatuso: ["San Rafael", "Buenos Aires", "Katira"]
    },
    cartago: {
        cartago: ["Cartago", "Oriental", "Occidental", "Carmen", "San Nicolás", "Aguacaliente (San Francisco)", "Guadalupe (Arenilla)", "Corralillo", "Tierra Blanca", "Dulce Nombre", "Llano Grande", "Quebradilla"],
        paraiso: ["Paraíso", "Santiago", "Orosi", "Santa Rosa", "Cachí"],
        launion: ["Tres Ríos", "San Diego", "San Juan", "San Rafael"],
        jimenez: ["Juan Viñas", "Tucurrique", "Pejibaye"],
        turrialba: ["Turrialba", "La Suiza", "Peralta", "Santa Cruz", "Santa Teresita", "Pavones", "Tuis", "Tres Equis", "La Isabel", "Chirripó"],
        alvarado: ["Pacayas", "Cervantes", "Capellades"]
    },
    guanacaste: {
        liberia: ["Liberia", "Cañas Dulces", "Mayorga", "Nacascolo", "Curubandé"],
        nicoya: ["Nicoya", "Mansión", "San Antonio", "Quebrada Honda", "Sámara", "Nosara", "Belén de Nosarita"],
        santacruz: ["Santa Cruz", "Bolívar", "Veintisiete de Abril", "Tempate", "Cartagena", "Cuajiniquil", "Diría"],
        bagaces: ["Bagaces", "La Fortuna", "Mogote", "Río Naranjo"],
        carrillo: ["Filadelfia", "Palmira", "Sardinal", "Belén"],
        canas: ["Cañas", "Palmira", "San Miguel", "Bebedero", "Porozal"],
        abangares: ["Las Juntas", "Sierra", "San Juan", "Colorado"],
        tilaran: ["Tilarán", "Quebrada Grande", "Tronadora", "Santa Rosa", "Libano", "Tierras Morenas"],
        nandayure: ["Carmona", "Santa Rita", "Zapotal", "San Pablo", "Porvenir", "Bejuco"],
        lacruz: ["La Cruz", "Santa Cecilia", "La Garita", "Santa Elena"],
        hojancha: ["Hojancha", "Huacas", "Matambú"]
    },
    heredia: {
        heredia: ["Heredia", "Mercedes", "San Francisco", "Ulloa", "Vargas"],
        barva: ["Barva", "San Pedro", "San Pablo", "San Roque", "Santa Lucía"],
        santodomingo: ["Santo Domingo", "San Vicente", "San Miguel", "Paracito", "Santo Tomás", "Santa Rosa"],
        santabarbara: ["Santa Bárbara", "San Pedro", "Santo Domingo", "Jesús", "Purabá"],
        sanrafael: ["San Rafael", "San Josecito", "Santiago", "Ángeles", "Concepción"]
    },
    limon: {
        limon: ["Limón", "Valle La Estrella", "Río Blanco", "Matama"],
        pococi: ["Guápiles", "Jiménez", "La Rita", "Roxana", "Cariari", "Colorado"],
        siquirres: ["Siquirres", "Pacuarito", "Florida", "Germania", "Cairo"],
        talamanca: ["Bratsi", "Sixaola", "Cahuita", "Telire"],
        matina: ["Matina", "Batán", "Carrandí"],
        guacimo: ["Guácimo", "Mercedes", "Pocora", "Río Jiménez", "Duacarí"]
    },
    sanjose: {
        sanjose: ["San José", "Escazú", "Desamparados", "Puriscal", "Tarrazú", "Aserrí", "Mora", "Goicoechea", "Santa Ana", "Alajuelita", "Vásquez de Coronado", "Acosta", "Tibás", "Moravia", "Montes de Oca", "Turrubares", "Dota", "Curridabat", "Pérez Zeledón"]
    },
    puntarenas: {
        puntarenas: ["Puntarenas", "Pitahaya", "Chomes", "Lepanto","Paquera", "Manzanillo", "Guacimal", "Barranca", "Monteverde", "Isla del Coco"],
        esparza: ["Espíritu Santo", "San Juan Grande", "Macacona", "San Rafael", "San Jerónimo"],
        buenosaires: ["Buenos Aires", "Volcán", "Potrero Grande", "Boruca", "Pilas"],
        montesdeoro: ["Miramar", "La Unión", "San Isidro"],
        osa: ["Ciudad Cortés", "Palmar", "Sierpe", "Bahía Ballena", "Piedras Blancas"],
        quepos: ["Quepos", "Savegre", "Naranjito"],
        golfito: ["Golfito", "Puerto Jiménez", "Guaycará", "Pavón"],
        cotobrus: ["San Vito", "Sabalito", "Agua Buena", "Limoncito", "Pittier"],
        parrita: ["Parrita", "Cabo Matapalo", "Damas"],
        corredores: ["Corredor", "La Cuesta", "Canoas", "Laurel"],
        garabito: ["Jacó", "Tárcoles"]
    }
};
const provinciaDropdown = document.getElementById("provincia");
const cantonDropdown = document.getElementById("canton");
const distritoDropdown = document.getElementById("distrito");

provinciaDropdown.addEventListener("change", updateCantones);
cantonDropdown.addEventListener("change", updateDistritos);


function updateCantones() {
    const provincia = provinciaDropdown.value;
    const cantones = cantonesPorProvincia[provincia];
    cantonDropdown.innerHTML = "";
    distritoDropdown.innerHTML = ""; // Reiniciar el dropdown de distritos
    cantones.forEach(canton => {
        const option = document.createElement("option");
        option.text = canton;
        cantonDropdown.add(option);
    });
}

function updateDistritos() {
    const provincia = provinciaDropdown.value;
    const canton = cantonDropdown.value;
    const distritos = distritosPorCanton[provincia][canton.toLowerCase()]; // Asegúrate de que los nombres coincidan en minúsculas
    distritoDropdown.innerHTML = "";
    distritos.forEach(distrito => {
        const option = document.createElement("option");
        option.text = distrito;
        distritoDropdown.add(option);
    });
}


updateCantones(); // Llamar a esta función al cargar la página para inicializar los dropdowns
