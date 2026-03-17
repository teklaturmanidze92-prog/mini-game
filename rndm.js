const request = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("fact-text").textContent = data.text;
  });

console.log(request);
