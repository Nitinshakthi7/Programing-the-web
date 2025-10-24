let allCountries = [];
let filteredCountries = [];

window.addEventListener('load', function() {
    fetchAllCountries();
});

function fetchAllCountries() {
    const loading = document.getElementById('loading');
    const grid = document.getElementById('countries-grid');
    
    loading.style.display = 'block';
    
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load data file');
            }
            return response.json();
        })
        .then(data => {
            allCountries = data;
            filteredCountries = data;
            loading.style.display = 'none';
            displayCountries(filteredCountries);
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
            loading.textContent = 'Error loading countries. Please check if data.json exists.';
        });
}

function displayCountries(countries) {
    const grid = document.getElementById('countries-grid');
    grid.innerHTML = '';
    countries.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
    });
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.onclick = function() {
        showCountryDetail(country);
    };
    const flag = document.createElement('div');
    flag.className = 'country-flag';
    const flagImg = document.createElement('img');
    flagImg.src = country.flags.png;
    flagImg.alt = country.name;
    flag.appendChild(flagImg); 
    const info = document.createElement('div');
    info.className = 'country-info'; 
    const name = document.createElement('h3');
    name.textContent = country.name;
    const population = document.createElement('p');
    population.innerHTML = '<strong>Population:</strong> ' + country.population.toLocaleString();
    const region = document.createElement('p');
    region.innerHTML = '<strong>Region:</strong> ' + country.region;
    const capital = document.createElement('p');
    const capitalName = country.capital || 'N/A';
    capital.innerHTML = '<strong>Capital:</strong> ' + capitalName;
    info.appendChild(name);
    info.appendChild(population);
    info.appendChild(region);
    info.appendChild(capital);
    card.appendChild(flag);
    card.appendChild(info);
    return card;
}

function handleSearch() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const clearButton = document.getElementById('clear-button');
    const selectedRegion = document.getElementById('region-filter').value;
    
    if (searchText.length > 0) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }

    filterCountries(searchText, selectedRegion);
}

function handleRegionChange() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const selectedRegion = document.getElementById('region-filter').value;
    
    filterCountries(searchText, selectedRegion);
}

function filterCountries(searchText, region) {
    let result = allCountries;

    if (searchText) {
        result = result.filter(country => 
            country.name.toLowerCase().includes(searchText)
        );
    }

    if (region) {
        result = result.filter(country => country.region === region);
    }
    
    filteredCountries = result;
    displayCountries(filteredCountries);
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    handleSearch();
}

function showCountryDetail(country) {
    const homePage = document.getElementById('home-page');
    const detailPage = document.getElementById('detail-page');
    homePage.style.display = 'none';
    detailPage.style.display = 'block';
    
    document.getElementById('detail-flag-img').src = country.flags.png;
    document.getElementById('detail-flag-img').alt = country.name;
    document.getElementById('detail-name').textContent = country.name;
    document.getElementById('detail-native-name').textContent = country.nativeName || country.name;
    document.getElementById('detail-population').textContent = country.population.toLocaleString();
    document.getElementById('detail-region').textContent = country.region;
    document.getElementById('detail-subregion').textContent = country.subregion || 'N/A';
    document.getElementById('detail-capital').textContent = country.capital || 'N/A';
    document.getElementById('detail-tld').textContent = country.topLevelDomain ? country.topLevelDomain[0] : 'N/A';
    
    const currencies = country.currencies 
        ? country.currencies.map(curr => curr.name).join(', ')
        : 'N/A';
    document.getElementById('detail-currencies').textContent = currencies;
    
    const languages = country.languages 
        ? country.languages.map(lang => lang.name).join(', ')
        : 'N/A';
    document.getElementById('detail-languages').textContent = languages;
   
    const borderContainer = document.getElementById('border-countries-container');
    const borderButtons = document.getElementById('border-buttons');
    borderButtons.innerHTML = '';
    
    if (country.borders && country.borders.length > 0) {
        borderContainer.style.display = 'flex';
        country.borders.forEach(borderCode => {
            const button = document.createElement('button');
            button.className = 'border-button';
            button.textContent = getBorderCountryName(borderCode);
            button.onclick = function() {
                const borderCountry = allCountries.find(c => c.alpha3Code === borderCode);
                if (borderCountry) {
                    showCountryDetail(borderCountry);
                }
            };
            borderButtons.appendChild(button);
        });
    } else {
        borderContainer.style.display = 'none';
    }
    window.scrollTo(0, 0);
}

function getBorderCountryName(borderCode) {
    const country = allCountries.find(c => c.alpha3Code === borderCode);
    return country ? country.name : borderCode;
}

function goBack() {
    const homePage = document.getElementById('home-page');
    const detailPage = document.getElementById('detail-page');    
    homePage.style.display = 'block';
    detailPage.style.display = 'none';
    window.scrollTo(0, 0);
}

function toggleDarkMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    const modeText = document.getElementById('mode-text');
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        modeIcon.textContent = '☀️';
        modeText.textContent = 'Light Mode';
    } else {
        modeIcon.textContent = '🌙';
        modeText.textContent = 'Dark Mode';
    }
}
