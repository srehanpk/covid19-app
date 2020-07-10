import { useEffect, useState } from "react";
import axios from "axios";

export const Fetch = () => {
  const [globalData, setGlobalData] = useState({});
  const [dailyData, setDailyData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = `https://covid19.mathdro.id/api`;
    const url1 = `https://api.covid19api.com/summary`;
    async function covid() {
      const {
        data: { confirmed, recovered, deaths },
      } = await axios.get(url);

      const data = {
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
      };


      setGlobalData(data);

      const fetchApi = await axios.get(`${url}/daily`);
      const forCharts = await fetchApi.data;


      setDailyData(forCharts);

      const api = await axios.get(url1);
      const forCountry = await api.data;


      const forList = await forCountry.Countries;
      const list1 = await forList.map((name) => name.Country);

      setCountryData(forCountry);
      setList(list1);
    }

    covid();
  }, [setGlobalData, setDailyData, setCountryData, setList]);

  return { globalData, dailyData, countryData, list };
};
