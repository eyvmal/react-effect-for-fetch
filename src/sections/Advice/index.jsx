import {useEffect, useState} from "react";
import AdviceSlip from "./components/AdviceSlip.jsx";
import FavouriteSlipsList from "./components/FavouriteSlipsList.jsx";

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [data, setData] = useState({
    "slip": {
      "id": 0,
      "advice": ""
    }
  });
  const [favoriteSlips, setFavoriteSlips] = useState([]);

  const fetchAdvice = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  };
  
  useEffect(() => {
    fetchAdvice();
  }, []);

  const saveToFavorites = () => {
    if (!favoriteSlips.find((slip) => slip.id === data.slip.id)) {
      setFavoriteSlips([...favoriteSlips, data.slip]);
    }
  };
  
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip data={data.slip} fetchNewAdvice={fetchAdvice} saveToFavorites={saveToFavorites} />
      <FavouriteSlipsList list={favoriteSlips}/>
    </section>
  )
}

export default AdviceSection
