

 
 
 function showConverter(id) {
      document.querySelectorAll('.converter').forEach(div => div.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }

    function convertDistance() {
      const value = parseFloat(document.getElementById('distanceInput').value);
      const type = document.getElementById('distanceType').value;
      if (isNaN(value) || value < 0) {
        document.getElementById('kmResult').textContent = "Veuillez entrer une valeur numérique valide.";
        return;
      }
      let result = '';
      switch (type) {
        case 'km_miles':
          result = `${value} km = ${(value * 0.621371).toFixed(2)} miles`;
          break;
        case 'km_m':
          result = `${value} km = ${(value * 1000).toFixed(2)} m`;
          break;
        case 'mm_km':
          result = `${value} mm = ${(value / 1000000).toFixed(6)} km`;
          break;
        case 'm_km':
          result = `${value} m = ${(value / 1000).toFixed(6)} km`;
          break;
        case 'cm_km':
          result = `${value} cm = ${(value / 100000).toFixed(6)} km`;
          break;
        case 'km_cm':
          result = `${value} km = ${(value * 100000).toFixed(2)} cm`;
          break;
        case 'mm_m':
          result = `${value} mm = ${(value / 1000).toFixed(3)} m`;
          break;
        case 'm_mm':
          result = `${value} m = ${(value * 1000).toFixed(0)} mm`;
          break;
        case 'cm_m':
          result = `${value} cm = ${(value / 100).toFixed(2)} m`;
          break;
        case 'm_cm':
          result = `${value} m = ${(value * 100).toFixed(0)} cm`;
          break;
      }
      document.getElementById('kmResult').textContent = result;
    }

    function convertTemp() {
      const value = parseFloat(document.getElementById('celsiusInput').value);
      const type = document.getElementById('tempType').value;
      let result = '';
      if (isNaN(value) || value < 0) {
        document.getElementById('celsiusResult').textContent = "Veuillez entrer une valeur numérique valide.";
        return;
      }
      if (type === 'c_f') {
        result = `${value}°C = ${(value * 9 / 5 + 32).toFixed(2)}°F`;
      } else if (type === 'f_c') {
        result = `${value}°F = ${((value - 32) * 5 / 9).toFixed(2)}°C`;
      } else if (type === 'c_k') {
        result = `${value}°C = ${(value + 273.15).toFixed(2)} K`;
      }
      document.getElementById('celsiusResult').textContent = result;
    }

    async function convertCurrency() {
      const from = document.getElementById('fromCurrency').value;
      const to = document.getElementById('toCurrency').value;
      const amount = parseFloat(document.getElementById('amount').value);

      if (isNaN(amount)) {
        document.getElementById('conversionResult').textContent = "Veuillez entrer un montant valide.";
        return;
      }
      if (from === to) {
        document.getElementById('conversionResult').textContent = "Les devises doivent être différentes.";
        return;
      }

      try {
        // API gratuite pour taux de change
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        if (!response.ok) throw new Error("Erreur API");

        const data = await response.json();
        const rate = data.rates[to];

        if (!rate) {
          document.getElementById('conversionResult').textContent = "Conversion non disponible pour ces devises.";
          return;
        }

        const converted = (amount * rate).toFixed(2);
        let symbolFrom;
        let symbolTo;

        switch (from) {
          case "EUR":
            symbolFrom = "€ 🇪🇺";
            break;
          case "USD":
            symbolFrom = "$ 🇺🇸";
            break;
          case "GBP":
            symbolFrom = "£ 🇬🇧";
            break;
          case "JPY":
            symbolFrom = "¥ 🇯🇵";
            break;
          case "CHF":
            symbolFrom = "CHF 🇨🇭";
            break;
          case "CAD":
            symbolFrom = "C$ 🇨🇦";
            break;
          case "AUD":
            symbolFrom = "A$ 🇦🇺";
            break;
          case "MAD":
            symbolFrom = "د.م. 🇲🇦";
            break;
          case "DZD":
            symbolFrom = "د.ج 🇩🇿";
            break;
          default:
            symbolFrom = from;
        }

        switch (to) {
            case "EUR":
            symbolTo = "€ 🇪🇺";
            break;
          case "USD":
            symbolTo = "$ 🇺🇸";
            break;
          case "GBP":
            symbolTo = "£ 🇬🇧";
            break;
          case "JPY":
            symbolTo = "¥ 🇯🇵";
            break;
          case "CHF":
            symbolTo = "CHF 🇨🇭";
            break;
          case "CAD":
            symbolTo = "C$ 🇨🇦";
            break;
          case "AUD":
            symbolTo = "A$ 🇦🇺";
            break;
          case "MAD":
            symbolTo = "د.م. 🇲🇦";
            break;
          case "DZD":
            symbolTo = "د.ج 🇩🇿";
            break;
          default:
            symbolTo = to;
        }

        document.getElementById('conversionResult').textContent = `${amount} ${symbolFrom} = ${converted} ${symbolTo} (Taux: ${rate})`;
      } catch (error) {
        document.getElementById('conversionResult').textContent = "Erreur lors de la conversion. Veuillez réessayer plus tard.";
        console.error(error);
      }
    }
    showConverter('distance');
    function convertWeight() {
      const value = parseFloat(document.getElementById('weightInput').value);
      const type = document.getElementById('weightType').value;
      if (isNaN(value) || value < 0) {
        document.getElementById('weightResult').textContent = "Veuillez entrer une valeur numérique valide.";
        return;
      }
      let result = '';
      switch (type) {
        case 'kg_lb':
          result = `${value} kg = ${(value * 2.20462).toFixed(2)} lb`;
          break;
        case 'lb_kg':
          result = `${value} lb = ${(value / 2.20462).toFixed(2)} kg`;
          break;
        case 'kg_g':
          result = `${value} kg = ${(value * 1000).toFixed(2)} g`;
          break;
        case 'g_kg':
          result = `${value} g = ${(value / 1000).toFixed(2)} kg`;
          break;
      }
      document.getElementById('weightResult').textContent = result;
    }

    showConverter('weight')