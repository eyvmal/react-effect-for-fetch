import {useEffect, useState} from "react";

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);
  
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
