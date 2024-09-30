function PublicationHistoryList({ history }) {
  return (
    <ul>
      {history.map((pub, index) => (
        <li key={index}>{pub}</li>
      ))}
    </ul>
  );
}

export default PublicationHistoryList;
