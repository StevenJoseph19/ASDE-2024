import { useEffect, useState,useCallback } from "react";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);
  const fetchHouses =  useCallback(async () => {
    const rsp = await fetch("/houses.json");
    const houses = await rsp.json();
    setAllHouses(houses);
  },[]);
  useEffect(
    () => {
      // const fetchHouses = async () => {
      //   const rsp = await fetch("/houses.json");
      //   const houses = await rsp.json();
      //   setAllHouses(houses);
      fetchHouses();
    },
    // fetchHouses();
    // subscribe
    // return ()=>{
    // unsubcribe
    // }
    [fetchHouses]
  );

  return allHouses;
};

export default useHouses;
