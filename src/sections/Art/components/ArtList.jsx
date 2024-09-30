import ArtListItem from "./ArtListItem.jsx";

function ArtList({ data }) {
  return (
    <ul className="art-list">
      {data.map((item) => (
        <ArtListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ArtList;
