function AdviceSlip({ data, fetchNewAdvice, saveToFavorites }) {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{data.advice}</p>
      <button onClick={fetchNewAdvice}>Get More Advice</button>
      <button onClick={saveToFavorites}>Save to Favorites</button>
    </section>
  )
}

export default AdviceSlip