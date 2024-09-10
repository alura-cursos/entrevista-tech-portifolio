export async function fetchMovie(movieName) {
  const URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}&plot=full`;

  try {
    const res = await fetch(URL);
    if(!res.ok) {
      throw new Error(`Falha: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function fetchTranslation(moviePlot) {
  const URL = "http://localhost:5000/translate";
  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      q: moviePlot,
      source: "en",
      target: "pt",
      format: "text"
    }),
    headers: { "Content-Type": "application/json" }
  });

  const translatedObj = await res.json();
  return translatedObj;
}
