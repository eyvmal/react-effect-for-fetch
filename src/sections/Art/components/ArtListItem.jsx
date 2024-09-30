import PublicationHistoryList from "./PublicationHistoryList.jsx";

function ArtListItem({ item }) {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://boolean-uk-api-server.fly.dev${item.imageURL}`}
          alt="image"
        />
      </div>
      <h3>{item.title}</h3>
      <p>Artist: {item.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList history={item.publicationHistory} />
    </li>
  );
}

export default ArtListItem;
