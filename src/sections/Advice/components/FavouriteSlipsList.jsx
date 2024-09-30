function FavouriteSlipsList({ list }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.advice}</li>
        ))}
      </ul>
    </section>
  )
}

export default FavouriteSlipsList