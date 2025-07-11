const LACountyWildfireData = {
    hazardZones: [
        {
            id: "very_high_1",
            name: "San Gabriel Mountains - Very High",
            severity: "Very High",
            type: "polygon",
            coordinates: [
                [34.3776, -118.1543],
                [34.3776, -117.6435],
                [34.2456, -117.6435],
                [34.2456, -118.1543]
            ],
            description: "Angeles National Forest area with steep terrain and dense vegetation"
        },
        {
            id: "very_high_2", 
            name: "Santa Monica Mountains - Very High",
            severity: "Very High",
            type: "polygon",
            coordinates: [
                [34.1678, -118.7834],
                [34.1678, -118.4521],
                [34.0234, -118.4521],
                [34.0234, -118.7834],
                [34.1678, -118.7834]
            ],
            description: "Malibu and western Santa Monica Mountains with Mediterranean vegetation"
        },
        {
            id: "very_high_3",
            name: "Antelope Valley Foothills - Very High", 
            severity: "Very High",
            type: "polygon",
            coordinates: [
                [34.6543, -118.3456],
                [34.6543, -117.8765],
                [34.5234, -117.8765],
                [34.5234, -118.3456],
                [34.6543, -118.3456]
            ],
            description: "Northern LA County foothills with chaparral and grassland"
        },
        {
            id: "high_1",
            name: "Eastern San Fernando Valley - High",
            severity: "High", 
            type: "polygon",
            coordinates: [
                [34.2876, -118.4321],
                [34.2876, -118.2543],
                [34.1987, -118.2543],
                [34.1987, -118.4321],
                [34.2876, -118.4321]
            ],
            description: "Foothill communities including parts of Burbank, Glendale, and Pasadena"
        },
        {
            id: "moderate_1",
            name: "Central LA Basin - Moderate",
            severity: "Moderate",
            type: "polygon", 
            coordinates: [
                [34.1234, -118.4567],
                [34.1234, -118.1234],
                [33.9876, -118.1234],
                [33.9876, -118.4567],
                [34.1234, -118.4567]
            ],
            description: "Urban areas with lower vegetation density"
        }
    ],

    historicalFires: [
        {
            id: "station_fire_2009",
            name: "Station Fire",
            year: 2009,
            acres: 160557,
            location: [34.2778, -118.1347],
            startDate: "2009-08-26",
            endDate: "2009-10-16", 
            fatalities: 2,
            structuresDestroyed: 209,
            cause: "Arson",
            description: "Largest fire in LA County history, burned in Angeles National Forest"
        },
        {
            id: "palisades_fire_2025",
            name: "Palisades Fire",
            year: 2025,
            acres: 23713,
            location: [34.0522, -118.5701],
            startDate: "2025-01-07",
            endDate: "2025-01-31",
            fatalities: 5,
            structuresDestroyed: 5300,
            cause: "Under investigation",
            description: "Devastating January fire that destroyed Pacific Palisades neighborhoods during extreme Santa Ana winds"
        },
        {
            id: "eaton_fire_2025", 
            name: "Eaton Fire",
            year: 2025,
            acres: 14117,
            location: [34.1897, -118.1312],
            startDate: "2025-01-07",
            endDate: "2025-01-31",
            fatalities: 16,
            structuresDestroyed: 9418,
            cause: "Under investigation", 
            description: "Catastrophic fire in Altadena and Pasadena foothills, among deadliest in LA County history"
        },
        {
            id: "woolsey_fire_2018",
            name: "Woolsey Fire", 
            year: 2018,
            acres: 96949,
            location: [34.1014, -118.7834],
            startDate: "2018-11-08",
            endDate: "2018-11-21",
            fatalities: 3,
            structuresDestroyed: 1643,
            cause: "Equipment failure",
            description: "Devastating fire that burned through Malibu and Thousand Oaks"
        },
        {
            id: "saddleridge_fire_2019",
            name: "Saddleridge Fire",
            year: 2019,
            acres: 8799,
            location: [34.3123, -118.4567],
            startDate: "2019-10-10",
            endDate: "2019-10-31",
            fatalities: 1,
            structuresDestroyed: 19,
            cause: "Undetermined", 
            description: "Burned in Porter Ranch and Granada Hills areas"
        },
        {
            id: "la_tuna_fire_2017",
            name: "La Tuna Fire",
            year: 2017, 
            acres: 7194,
            location: [34.2654, -118.2987],
            startDate: "2017-09-01", 
            endDate: "2017-09-09",
            fatalities: 0,
            structuresDestroyed: 5,
            cause: "Undetermined",
            description: "Burned in Verdugo Mountains, largest fire in LA city limits"
        },
        {
            id: "creek_fire_2017",
            name: "Creek Fire", 
            year: 2017,
            acres: 15619,
            location: [34.3876, -118.2345],
            startDate: "2017-12-05",
            endDate: "2017-12-24",
            fatalities: 1,
            structuresDestroyed: 123,
            cause: "Undetermined",
            description: "Burned in Shadow Hills, Sunland-Tujunga areas"
        },
        {
            id: "sand_fire_2016",
            name: "Sand Fire",
            year: 2016,
            acres: 41383,
            location: [34.4756, -118.5234],
            startDate: "2016-07-22",
            endDate: "2016-08-05", 
            fatalities: 1,
            structuresDestroyed: 18,
            cause: "Vehicle",
            description: "Burned in Santa Clarita area and Angeles National Forest"
        },
        {
            id: "bridge_fire_2020",
            name: "Bridge Fire",
            year: 2020,
            acres: 8172,
            location: [34.4123, -118.2987],
            startDate: "2020-09-08",
            endDate: "2020-09-23",
            fatalities: 0,
            structuresDestroyed: 5,
            cause: "Undetermined",
            description: "Burned in northern Angeles National Forest during active fire season"
        },
        {
            id: "bobcat_fire_2020",
            name: "Bobcat Fire", 
            year: 2020,
            acres: 115997,
            location: [34.2415, -117.8756],
            startDate: "2020-09-06",
            endDate: "2020-12-22",
            fatalities: 0,
            structuresDestroyed: 171,
            cause: "Undetermined",
            description: "One of largest fires in LA County history, burned in San Gabriel Mountains"
        },
        {
            id: "lake_fire_2020",
            name: "Lake Fire",
            year: 2020, 
            acres: 31089,
            location: [34.5234, -118.4567],
            startDate: "2020-08-12",
            endDate: "2020-09-04",
            fatalities: 0,
            structuresDestroyed: 21,
            cause: "Human caused",
            description: "Burned in northern LA County near Lake Hughes"
        },
        {
            id: "ranch2_fire_2021",
            name: "Ranch2 Fire",
            year: 2021,
            acres: 4707,
            location: [34.4876, -118.3245],
            startDate: "2021-08-13", 
            endDate: "2021-08-28",
            fatalities: 0,
            structuresDestroyed: 5,
            cause: "Undetermined",
            description: "Burned in Castaic area during hot, dry conditions"
        },
        {
            id: "fairview_fire_2022",
            name: "Fairview Fire", 
            year: 2022,
            acres: 7539,
            location: [34.1234, -118.5432],
            startDate: "2022-09-05",
            endDate: "2022-09-19",
            fatalities: 0,
            structuresDestroyed: 35,
            cause: "Human caused",
            description: "Burned in western LA County foothill areas"
        },
        {
            id: "rabbit_fire_2023",
            name: "Rabbit Fire",
            year: 2023,
            acres: 8051,
            location: [34.5678, -118.2109],
            startDate: "2023-07-08",
            endDate: "2023-07-22", 
            fatalities: 0,
            structuresDestroyed: 12,
            cause: "Lightning",
            description: "Lightning-caused fire in northern LA County mountains"
        },
        {
            id: "york_fire_2023",
            name: "York Fire",
            year: 2023,
            acres: 93063,
            location: [35.0123, -117.8901],
            startDate: "2023-07-28", 
            endDate: "2023-08-16",
            fatalities: 0,
            structuresDestroyed: 2,
            cause: "Lightning",
            description: "Large fire that burned in eastern LA County and San Bernardino County"
        },
        {
            id: "line_fire_2024",
            name: "Line Fire",
            year: 2024,
            acres: 5632,
            location: [34.3456, -118.1876],
            startDate: "2024-09-12",
            endDate: "2024-09-26",
            fatalities: 0,
            structuresDestroyed: 8,
            cause: "Arson",
            description: "Human-caused fire in Angeles National Forest foothills"
        }
    ],

    highRiskCommunities: [
        {
            name: "Malibu",
            location: [34.0259, -118.7798],
            riskLevel: "Extreme",
            population: 10654,
            wildlandUrbanInterface: true,
            evacuationRoutes: ["PCH", "Malibu Canyon Rd", "Topanga Canyon Blvd"]
        },
        {
            name: "Altadena", 
            location: [34.1897, -118.1312],
            riskLevel: "Very High",
            population: 42777,
            wildlandUrbanInterface: true,
            evacuationRoutes: ["I-210", "Lake Ave", "Fair Oaks Ave"]
        },
        {
            name: "La Crescenta",
            location: [34.2324, -118.2437],
            riskLevel: "Very High", 
            population: 19653,
            wildlandUrbanInterface: true,
            evacuationRoutes: ["I-210", "Foothill Blvd", "Angeles Crest Hwy"]
        },
        {
            name: "Topanga",
            location: [34.0944, -118.6048],
            riskLevel: "Very High",
            population: 8289,
            wildlandUrbanInterface: true, 
            evacuationRoutes: ["Topanga Canyon Blvd", "PCH"]
        },
        {
            name: "Agua Dulce",
            location: [34.4961, -118.3259],
            riskLevel: "Very High",
            population: 3342,
            wildlandUrbanInterface: true,
            evacuationRoutes: ["Sierra Hwy", "Agua Dulce Canyon Rd"]
        }
    ],

    weatherStations: [
        {
            id: "RAWS_1",
            name: "Mount Wilson",
            location: [34.2259, -118.0576], 
            elevation: 5710,
            type: "RAWS",
            parameters: ["Wind Speed", "Wind Direction", "Temperature", "Humidity", "Fuel Moisture"]
        },
        {
            id: "RAWS_2", 
            name: "Malibu Hills",
            location: [34.0789, -118.7234],
            elevation: 1200,
            type: "RAWS",
            parameters: ["Wind Speed", "Wind Direction", "Temperature", "Humidity", "Fuel Moisture"]
        },
        {
            id: "RAWS_3",
            name: "Pacoima Dam", 
            location: [34.3456, -118.4123],
            elevation: 2400,
            type: "RAWS", 
            parameters: ["Wind Speed", "Wind Direction", "Temperature", "Humidity", "Fuel Moisture"]
        }
    ],

    evacuationCenters: [
        {
            name: "Zuma Beach",
            location: [34.0154, -118.8229],
            address: "30000 Pacific Coast Hwy, Malibu, CA 90265",
            capacity: 5000,
            type: "Beach Assembly Point"
        },
        {
            name: "Pierce College", 
            location: [34.2406, -118.5947],
            address: "6201 Winnetka Ave, Woodland Hills, CA 91371", 
            capacity: 10000,
            type: "Large Animal Evacuation"
        },
        {
            name: "Pasadena City College",
            location: [34.1560, -118.1318],
            address: "1570 E Colorado Blvd, Pasadena, CA 91106",
            capacity: 8000,
            type: "General Population"
        }
    ],

    utils: {
        getHazardColor: function(severity) {
            const colors = {
                "Very High": "#ff0000",
                "High": "#ff6600", 
                "Moderate": "#ffcc00",
                "Low": "#99ff99",
                "Non-wildland": "#cccccc"
            };
            return colors[severity] || "#cccccc";
        },
        getFireSizeCategory: function(acres) {
            if (acres >= 100000) return "Mega Fire";
            if (acres >= 10000) return "Large Fire";
            if (acres >= 1000) return "Medium Fire"; 
            if (acres >= 100) return "Small Fire";
            return "Very Small Fire";
        },
        formatFirePopup: function(fire) {
            return `
                <h3>${fire.name}</h3>
                <p><strong>Year:</strong> ${fire.year}</p>
                <p><strong>Size:</strong> ${fire.acres.toLocaleString()} acres</p>
                <p><strong>Duration:</strong> ${fire.startDate} to ${fire.endDate}</p>
                <p><strong>Structures Lost:</strong> ${fire.structuresDestroyed}</p>
                <p><strong>Cause:</strong> ${fire.cause}</p>
                <p><strong>Description:</strong> ${fire.description}</p>
            `;
        },
        formatCommunityPopup: function(community) {
            return `
                <h3>${community.name}</h3>
                <p><strong>Risk Level:</strong> ${community.riskLevel}</p>
                <p><strong>Population:</strong> ${community.population.toLocaleString()}</p>
                <p><strong>WUI Community:</strong> ${community.wildlandUrbanInterface ? 'Yes' : 'No'}</p>
                <p><strong>Evacuation Routes:</strong> ${community.evacuationRoutes.join(', ')}</p>
            `;
        }
    }
};

// Shelter data with required properties

const shelters = [
    {
        coords: [34.0522, -118.2437],
        name: "Downtown LA Emergency Shelter",
        capacity: 150,
        available: 25,
        phone: "(213) 555-0123",
        address: "123 Main St, Los Angeles, CA",
        services: ["Meals", "Medical", "Counseling"]
    },
    {
        coords: [34.04, -118.70],
        name: "Our Lady of Malibu Church - Sheridan Hall",
        capacity: 150,
        available: 25,
        phone: "(213) 555-0123",
        address: "123 Main St, Los Angeles, CA",
        services: ["Meals", "Medical", "Counseling"]
    },
    {
        coords: [34.0361, -118.7006],
        name: "Our Lady of Malibu Church - Sheridan Hall",
        capacity: null,
        available: null,
        phone: "310-456-2361",
        address: "3625 Winter Canyon Rd, Malibu, CA 90265",
        services: ["Coffee With Friends (weekly)", "Book Club Series", "Educational Events", "12-Step Meetings", "Soup Suppers", "Musical Performances"]
    },
    {
        coords: [34.0356, -118.8195],
        name: "Malibu High School New Gym",
        capacity: null,
        available: "Opening August 2025",
        phone: "(310) 457-6801",
        address: "30215 Morning View Dr, Malibu, CA 90265",
        services: ["Multi-sport court", "Fitness studio", "Ocean-view deck"]
    },
    {
        coords: [34.1371, -118.6616],
        name: "Camp Gilmore at Camp Lawrence Daley",
        capacity: 75,
        available: "Year-round",
        phone: "(818) 222-6327",
        address: "26801 Dorothy Dr, Calabasas, CA 91302",
        services: ["Summer camps", "Retreats", "Conferences"]
    },
    {
        coords: [34.1395, -118.7050],
        name: "Arthur E. Wright Middle School Gymnasium",
        capacity: null,
        available: "Contact school administration",
        phone: "(818) 880-4614",
        address: "4029 Las Virgenes Rd, Calabasas, CA 91302",
        services: ["Middle school gymnasium"]
    },
    {
        coords: [34.1521, -118.8085],
        name: "Calvary Community Church - Westlake Village",
        capacity: null,
        available: "Yes",
        phone: "(818) 991-8040",
        address: "5495 Via Rocas, Westlake Village, CA 91362",
        services: ["Church services", "Weddings", "Community events"]
    },
    {
        coords: [34.1540, -118.7610],
        name: "Lindero Canyon Middle School",
        capacity: null,
        available: "Contact school administration",
        phone: "(818) 889-2134",
        address: "5844 Larboard Ln, Agoura Hills, CA 91301",
        services: ["Middle school gymnasium"]
    },
    {
        coords: [34.1367, -118.7020],
        name: "Calabasas Community Center",
        capacity: null,
        available: "Yes",
        phone: "(818) 479-8180",
        address: "27040 Malibu Hills Rd, Calabasas, CA 91301",
        services: ["Recreational programs", "Fitness studio", "Rock climbing wall", "Multipurpose rooms"]
    },
    {
        coords: [34.1363, -118.6520],
        name: "Calabasas High School Multipurpose Room 2",
        capacity: null,
        available: "Contact school administration",
        phone: "(818) 222-7177",
        address: "22855 Mulholland Hwy, Calabasas, CA 91302",
        services: ["Multipurpose room for school events"]
    },
    {
        coords: [34.1360, -118.6510],
        name: "Alice C. Stelle Middle School Gymnasium",
        capacity: null,
        available: "Contact school administration",
        phone: "(818) 224-4107",
        address: "22450 Mulholland Hwy, Calabasas, CA 91302",
        services: ["Middle school gymnasium"]
    },
    {
        coords: [34.0689, -118.4452],
        name: "Santa Monica Family Shelter",
        capacity: 75,
        available: 5,
        phone: "(310) 555-0456",
        address: "456 Ocean Ave, Santa Monica, CA",
        services: ["Family Services", "Childcare", "Job Training"]
    },
    {
        coords: [34.1017, -118.3406],
        name: "Hollywood Community Shelter",
        capacity: 200,
        available: 0,
        phone: "(323) 555-0789",
        address: "789 Hollywood Blvd, Hollywood, CA",
        services: ["Mental Health", "Substance Abuse", "Meals"]
    },
    {
        coords: [34.0195, -118.4912],
        name: "Venice Beach Shelter",
        capacity: 100,
        available: 45,
        phone: "(310) 555-0321",
        address: "321 Venice Blvd, Venice, CA",
        services: ["Emergency Housing", "Meals", "Showers"]
    },
    {
        coords: [34.0736, -118.2400],
        name: "East LA Community Center",
        capacity: 80,
        available: 12,
        phone: "(323) 555-0654",
        address: "654 Cesar Chavez Ave, Los Angeles, CA",
        services: ["Bilingual Services", "Family Support", "Meals"]
    },
    {
        coords: [34.1446, -118.1445],
        name: "Pasadena Civic Auditorium",
        address: "300 E. Green St, Pasadena, CA 91101",
        capacity: 120,
        available: 30,
        phone: "(626) 555-0987",
        services: ["Emergency Housing", "Medical", "Meals"]
    },
    {
        coords: [34.0491, -118.4463],
        name: "Westwood Recreation Center",
        address: "1350 S. Sepulveda Blvd, Los Angeles, CA 90025",
        capacity: 60,
        available: 8,
        phone: "(310) 555-0234",
        services: ["Family Services", "Meals", "Counseling"]
    },
    {
        coords: [34.2619, -118.4330],
        name: "Ritchie Valens Recreation Center",
        address: "10736 Laurel Canyon Blvd, Pacoima, CA 91331",
        capacity: 90,
        available: 15,
        phone: "(818) 555-0567",
        services: ["Emergency Housing", "Childcare", "Meals"]
    },
    {
        coords: [34.0365, -118.4567],
        name: "Stoner Recreation Center",
        address: "1835 Stoner Ave, Los Angeles, CA 90025",
        capacity: 50,
        available: 0,
        phone: "(310) 555-0890",
        services: ["Family Services", "Meals", "Medical"]
    },
    {
        coords: [34.1930, -118.4490],
        name: "Van Nuys Recreation Center",
        address: "14301 Vanowen St, Van Nuys, CA 91405",
        capacity: 110,
        available: 22,
        phone: "(818) 555-0345",
        services: ["Emergency Housing", "Mental Health", "Meals"]
    },
    {
        coords: [34.0820, -117.7650],
        name: "Pomona Fairplex",
        address: "1101 W. McKinley Ave, Pomona, CA 91768",
        capacity: 300,
        available: 75,
        phone: "(909) 555-0678",
        services: ["Large Capacity", "Meals", "Medical", "Family Services"]
    },
    {
        coords: [34.1358, -118.0368],
        name: "Arcadia Community Center",
        address: "375 Campus Dr, Arcadia, CA 91007",
        capacity: 85,
        available: 18,
        phone: "(626) 555-0912",
        services: ["Emergency Housing", "Meals", "Counseling"]
    },
    {
        coords: [34.0755, -118.3511],
        name: "Pan Pacific Recreation Center",
        address: "7600 Beverly Blvd, Los Angeles, CA 90036",
        capacity: 95,
        available: 6,
        phone: "(323) 555-0123",
        services: ["Emergency Housing", "Medical", "Meals"]
    },
    {
        coords: [34.0995, -118.3387],
        name: "Hollywood High School",
        address: "1521 Highland Ave, Los Angeles, CA 90028",
        capacity: 200,
        available: 40,
        phone: "(323) 555-0456",
        services: ["Large Capacity", "Family Services", "Meals", "Medical"]
    },
    {
        coords: [34.0762, -118.2606],
        name: "LA Dream Center Emergency Shelter",
        address: "2301 Bellevue Ave, Los Angeles, CA 90026",
        capacity: 180,
        available: 35,
        phone: "(213) 555-0789",
        services: ["Emergency Housing", "Substance Abuse", "Mental Health", "Meals"]
    },
    {
        coords: [34.0154, -118.8229],
        name: "Zuma Beach",
        address: "30000 Pacific Coast Hwy, Malibu, CA 90265",
        capacity: 5000,
        available: 5000,
        phone: "Not Available",
        services: ["Assembly Point"]
    },
    { 
        coords: [34.2406, -118.5947],
        name: "Pierce College",
        address: "6201 Winnetka Ave, Woodland Hills, CA 91371", 
        capacity: 10000,
        available: 10000,
        phone: "Not Available",
        services: ["Large Animal Evacuation"]
    },
    {
        coords: [34.1560, -118.1318],
        name: "Pasadena City College",
        address: "1570 E Colorado Blvd, Pasadena, CA 91106",
        capacity: 8000,
        available: 8000,
        phone: "Not Available",
        services: ["Large Capacity", "Family Services"]
    }
];


// List of hospitals 

const hospitals = [
    {
      coords: [34.0614, -118.3805],
      name: "Cedars-Sinai Medical Center",
      capacity: 915,
      available: "Open; some outpatient offices temporarily closed",
      phone: "(310) 423-3277",
      address: "8700 Beverly Blvd, Los Angeles, CA 90048",
      services: ["Level I Trauma Center", "Emergency Services", "Virtual Care", "Specialty Clinics"]
    },
    {
      coords: [34.0635, -118.2034],
      name: "Los Angeles General Medical Center",
      capacity: 600,
      available: "Open",
      phone: "(323) 409-2800",
      address: "2051 Marengo St, Los Angeles, CA 90033",
      services: ["Level I Trauma Center", "Emergency Services", "Burn Center", "Neonatal ICU", "Teaching Hospital"]
    },
    {
      coords: [34.0584, -118.2919],
      name: "Children's Hospital Los Angeles",
      capacity: 495,
      available: "Open",
      phone: "(323) 660-2450",
      address: "4650 Sunset Blvd, Los Angeles, CA 90027",
      services: ["Level I Pediatric Trauma Center", "Emergency Services", "Pediatric Specialties"]
    },
    {
      coords: [34.0522, -118.2551],
      name: "California Hospital Medical Center",
      capacity: 318,
      available: "Open",
      phone: "(213) 748-2411",
      address: "1401 S Grand Ave, Los Angeles, CA 90015",
      services: ["Level II Trauma Center", "Emergency Services", "Cardiology", "Obstetrics", "Neonatal ICU"]
    },
    {
      coords: [34.1371, -118.6616],
      name: "Kaiser Permanente Woodland Hills Medical Center",
      capacity: 274,
      available: "Open",
      phone: "(818) 719-2000",
      address: "5601 De Soto Ave, Woodland Hills, CA 91367",
      services: ["Emergency Services", "Outpatient Clinics", "Specialty Care"]
    },
    {
      coords: [34.0635, -118.2034],
      name: "Huntington Hospital",
      capacity: 544,
      available: "Open",
      phone: "(626) 397-5000",
      address: "100 W California Blvd, Pasadena, CA 91105",
      services: ["Level II Trauma Center", "Emergency Services", "Cardiology", "Orthopedics"]
    },
    {
      coords: [34.0522, -118.2437],
      name: "Martin Luther King Jr. Community Hospital",
      capacity: 131,
      available: "Open",
      phone: "(424) 338-8000",
      address: "1680 E 120th St, Los Angeles, CA 90059",
      services: ["Emergency Services", "Primary Care", "Specialty Clinics"]
    },
    {
      coords: [33.8283, -118.2922],
      name: "Harbor–UCLA Medical Center",
      capacity: 570,
      available: "Open",
      phone: "(424) 306-4000",
      address: "1000 W Carson St, Torrance, CA 90502",
      services: ["Level I Trauma Center", "Emergency Services", "Teaching Hospital"]
    }
  ];

// Global map and state variables
let map;
let allMarkers = [];
let activeFilters = new Set(['available', 'limited', 'full']);
let wildfireLayers = {};
let hospitalLayerGroup = L.layerGroup();



// Function to get status text

function getMarkerColor(available) {
    if (typeof available !== 'number') return '#6c757d'; // Gray for unknown
    if (available === 0) return '#dc3545';  //Red place is full
    if (available < 10) return '#ffc107';  //Yellow - limited space
    return '#28a745';  //Green - available
}

function getStatusText(available) {
    if (typeof available !== 'number') return 'Unknown';
    if (available === 0) return 'Full';
    if (available < 10) return 'Limited';
    return 'Available';
}

function getStatusClass(available) {
    if (typeof available !== 'number') return 'status-unknown';
    if (available === 0) return 'status-full';
    if (available < 10) return 'status-limited';
    return 'status-available';
}

function getStatusType(available) {
    if (typeof available !== 'number') return 'unknown';
    if (available === 0) return 'full';
    if (available < 10) return 'limited';
    return 'available';
}

// Function to initialize the map
function initializeMap() {
    // Initialize the map
    map = L.map('map').setView([34.05, -118.25], 10);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// Function to add wildfire data to map
function addWildfireLayers() {
    // Create layer groups
    wildfireLayers.hazardZones = L.layerGroup();
    wildfireLayers.historicalFires = L.layerGroup();
    
    // Add hazard zones
    LACountyWildfireData.hazardZones.forEach(zone => {
        const color = LACountyWildfireData.utils.getHazardColor(zone.severity);
        const polygon = L.polygon(zone.coordinates, {
            color: color,
            fillColor: color,
            fillOpacity: 0.3,
            weight: 2
        }).bindPopup(`<b>${zone.name}</b><br>${zone.description}`);
        
        polygon.addTo(wildfireLayers.hazardZones);
    });
    
    // Add historical fires
    LACountyWildfireData.historicalFires.forEach(fire => {
        const fireIcon = L.divIcon({
            className: 'fire-marker',
            html: `<div style="background:#ff0000;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">F</div>`,
            iconSize: [20, 20]
        });
        
        const marker = L.marker(fire.location, { icon: fireIcon })
            .bindPopup(LACountyWildfireData.utils.formatFirePopup(fire));
        
        marker.addTo(wildfireLayers.historicalFires);
    });
    
    // Add layer control to map
    L.control.layers(null, {
        "Fire Hazard Zones": wildfireLayers.hazardZones,
        "Historical Fires": wildfireLayers.historicalFires
    }).addTo(map);
}

// Function to create shelter markers
function createShelterMarkers() {
    shelters.forEach((shelter) => {
        // Provide defaults for missing data
        const available = (typeof shelter.available === 'number') ? shelter.available : 0;
        const capacity = shelter.capacity || 'Unknown';
        const phone = shelter.phone || 'Not available';
        const services = shelter.services || ['Contact for details'];

        const markerColor = getMarkerColor(available);
        const statusText = getStatusText(available);
        const statusClass = getStatusClass(available);
        const statusType = getStatusType(available);

        // Create custom marker using divIcon
        const customIcon = L.divIcon({
            className: 'custom-shelter-marker',
            html: `<div style="
                background: ${markerColor};
                border: 3px solid #fff;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                cursor: pointer;
            ">🏠</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });

        // Create marker
        let marker = L.marker(shelter.coords, { icon: customIcon });

        // Store additional data on marker
        marker.shelterData = {
            ...shelter,
            available: available,
            capacity: capacity,
            phone: phone,
            services: services,
            statusType: statusType,
            statusClass: statusClass,
            statusText: statusText
        };

        // Create popup content
        const popupContent = `
            <div class="popup-content">
                <strong>${shelter.name}</strong><br><br>
                <strong>Address:</strong> ${shelter.address}<br>
                <strong>Phone:</strong> <a href="tel:${phone}">${phone}</a><br>
                <strong>Capacity:</strong> ${capacity} beds<br>
                <strong>Available Beds:</strong> <span class="${statusClass}">${available} (${statusText})</span><br>
                <strong>Services:</strong> ${services.join(', ')}
            </div>
        `;

        marker.bindPopup(popupContent);

        // Add click event
        marker.on('click', function() {
            console.log(`Shelter clicked: ${shelter.name}`);
        });

        // Add to map if filter is active
        if (activeFilters.has(statusType)) {
            marker.addTo(map);
        }

        // Store marker reference
        allMarkers.push(marker);
    });
}

// Function to create hospital markers
function createHospitalMarkers() {
    hospitals.forEach((hospital) => {
        const customIcon = L.divIcon({
            className: 'custom-hospital-marker',
            html: `<div style="
                background: #17a2b8;
                border: 3px solid #fff;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                cursor: pointer;
            ">🏥</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });

        const marker = L.marker(hospital.coords, { icon: customIcon });

        const popupContent = `
            <div class="popup-content">
                <strong>${hospital.name}</strong><br><br>
                <strong>Address:</strong> ${hospital.address}<br>
                <strong>Phone:</strong> <a href="tel:${hospital.phone}">${hospital.phone}</a><br>
                <strong>Capacity:</strong> ${hospital.capacity} beds<br>
                <strong>Status:</strong> ${hospital.available}<br>
                <strong>Services:</strong> ${hospital.services.join(', ')}
            </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(map);
        allMarkers.push(marker);
    });
}

// Function to filter markers based on active filters
function filterMarkers() {
    allMarkers.forEach(marker => {
        const statusType = marker.shelterData.statusType;
        if (activeFilters.has(statusType)) {
            if (!map.hasLayer(marker)) {
                marker.addTo(map);
            }
        } else {
            if (map.hasLayer(marker)) {
                map.removeLayer(marker);
            }
        }
    });
}

// Function to handle user location
function addUserLocation() {
    function onLocationFound(e) {
        const radius = Math.round(e.accuracy / 2);
        
        // Create user location marker
        const userIcon = L.divIcon({
            className: 'custom-user-marker',
            html: `<div style="
                background: #007bff;
                border: 3px solid #fff;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                cursor: pointer;
            ">📍</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        const userMarker = L.marker(e.latlng, { icon: userIcon }).addTo(map);
        
        // Add popup to user location
        userMarker.bindPopup(`
            <div class="popup-content">
                <strong>Your Location</strong><br>
                Accuracy: ${radius} meters<br>
                <em>Click on shelter markers to see details</em>
            </div>
        `).openPopup();
        
        // Add accuracy circle
        L.circle(e.latlng, radius, {
            color: '#007bff',
            fillColor: '#007bff',
            fillOpacity: 0.1,
            weight: 2
        }).addTo(map);

        // Find nearest shelter
        findNearestShelter(e.latlng);
    }

    function onLocationError(e) {
        console.log('Location access denied or unavailable:', e.message);
        showLocationError('Location access denied. You can still browse shelter locations.');
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    // Try to locate user
    map.locate({ setView: true, maxZoom: 16, timeout: 10000 });
}

// Function to find and highlight nearest shelter
function findNearestShelter(userLocation) {
    let nearestShelter = null;
    let shortestDistance = Infinity;

    shelters.forEach(shelter => {
        const shelterLatLng = L.latLng(shelter.coords[0], shelter.coords[1]);
        const distance = userLocation.distanceTo(shelterLatLng);
        
        if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestShelter = shelter;
        }
    });

    if (nearestShelter) {
        const distanceKm = (shortestDistance / 1000).toFixed(2);
        console.log(`Nearest shelter: ${nearestShelter.name} (${distanceKm} km away)`);
        
        // Add a circle around the nearest shelter
        L.circle([nearestShelter.coords[0], nearestShelter.coords[1]], {
            color: '#28a745',
            fillColor: '#28a745',
            fillOpacity: 0.1,
            radius: 500,
            weight: 2,
            dashArray: '5, 5'
        }).addTo(map);
    }
}

// Function to show location error message
function showLocationError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'location-error';
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #dc3545;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    // Remove error message after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

// Function to create legend control
function addLegend() {
    const legend = L.control({ position: 'topright' });

    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'legend-control');
        div.innerHTML = `
            <h4>Shelter Availability</h4>
            <div class="legend-item" data-status="available">
                <div class="legend-color" style="background: #28a745;"></div>
                <div class="legend-text">Available</div>
            </div>
            <div class="legend-item" data-status="limited">
                <div class="legend-color" style="background: #ffc107;"></div>
                <div class="legend-text">Limited</div>
            </div>
            <div class="legend-item" data-status="full">
                <div class="legend-color" style="background: #dc3545;"></div>
                <div class="legend-text">Full</div>
            </div>
            <div class="legend-item" data-status="unknown">
                <div class="legend-color" style="background: #6c757d;"></div>
                <div class="legend-text">Unknown</div>
            </div>
            <div class="filter-controls">
                <button id="show-all" class="filter-button secondary">Show All</button>
                <button id="hide-all" class="filter-button secondary">Hide All</button>
            </div>
        `;

        const showAllBtn = div.querySelector('#show-all');
        const hideAllBtn = div.querySelector('#hide-all');
        if (showAllBtn && hideAllBtn) {
            showAllBtn.addEventListener('click', showAllShelters);
            hideAllBtn.addEventListener('click', hideAllShelters);
        }

        L.DomEvent.disableClickPropagation(div);
        return div;
    };

    legend.addTo(map);
}

// Function to toggle filter
function toggleFilter(status) {
    if (activeFilters.has(status)) {
        activeFilters.delete(status);
    } else {
        activeFilters.add(status);
    }
    filterMarkers();
}

// Function to show all shelters
function showAllShelters() {
    activeFilters = new Set(['available', 'limited', 'full']);
    filterMarkers();
    updateLegendDisplay();
}

// Function to hide all shelters
function hideAllShelters() {
    activeFilters = new Set();
    filterMarkers();
    updateLegendDisplay();
}

// Function to update legend display
function updateLegendDisplay() {
    const legendItems = document.querySelectorAll('.legend-item');
    legendItems.forEach(item => {
        const status = item.dataset.status;
        if (activeFilters.has(status)) {
            item.classList.remove('inactive');
            item.classList.add('active');
        } else {
            item.classList.remove('active');
            item.classList.add('inactive');
        }
    });
}

// Function to add search functionality
function addSearchControl() {
    const searchControl = L.control({ position: 'topleft' });
    
    searchControl.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'search-control');
        div.innerHTML = `
            <input type="text" id="shelter-search" placeholder="Search shelters..." 
                   style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 200px;">
        `;
        
        const searchInput = div.querySelector('#shelter-search');
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            searchShelters(query);
        });
        
        L.DomEvent.disableClickPropagation(div);
        return div;
    };
    
    searchControl.addTo(map);
}

// Function to search shelters
function searchShelters(query) {
    if (!query) {
        // Show all markers based on current filters
        filterMarkers();
        return;
    }
    
    allMarkers.forEach(marker => {
        const shelter = marker.shelterData;
        const matchesSearch = 
            shelter.name.toLowerCase().includes(query) ||
            shelter.address.toLowerCase().includes(query) ||
            (shelter.services && shelter.services.some(service => service.toLowerCase().includes(query)));
        
        const matchesFilter = activeFilters.has(shelter.statusType);
        
        if (matchesSearch && matchesFilter) {
            if (!map.hasLayer(marker)) {
                marker.addTo(map);
            }
        } else {
            if (map.hasLayer(marker)) {
                map.removeLayer(marker);
            }
        }
    });
}

// Main initialization function
function initializeApp() {
    try {
        const mapElement = document.getElementById('map');
        if (!mapElement) {
            throw new Error('Map element not found. Make sure you have a div with id="map" in your HTML.');
        }

        initializeMap();
        addWildfireLayers();
        createShelterMarkers();
        createHospitalMarkers();
        addUserLocation();
        addLegend();
        addSearchControl();

        console.log('LA Wildfire App initialized successfully');
        console.log(`Loaded ${shelters.length} shelters and ${LACountyWildfireData.historicalFires.length} historical fires`);

        mapElement.classList.remove('map-loading');
    } catch (error) {
        console.error('Error initializing app:', error);
        showLocationError('Error loading map. Please refresh the page.');
    }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if Leaflet is loaded
    if (typeof L !== 'undefined') {
        // Small delay to ensure DOM is fully ready
        setTimeout(initializeApp, 100);
    } else {
        console.error('Leaflet library not loaded');
        showLocationError('Map library not loaded. Please check your internet connection.');
    }
});

// Unified global namespace
window.LAWildfireApp = {
    init: initializeApp,
    data: LACountyWildfireData,
    shelters: shelters,
    map: () => map,
    showAllShelters: showAllShelters,
    hideAllShelters: hideAllShelters,
    toggleWildfireLayer: function(layerName, visible) {
        if (wildfireLayers[layerName]) {
            visible ? wildfireLayers[layerName].addTo(map) : map.removeLayer(wildfireLayers[layerName]);
        }
    }
};
