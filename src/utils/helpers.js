export function formatMovieObject(json) {
  return ({
    title: json.Title,
    plot: json.Plot
  })
}
