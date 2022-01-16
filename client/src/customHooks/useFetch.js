import { useEffect, useState } from "react";

const useFetch = (callback) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callback();
        setData((data) => {
          return {
            ...data,
            ...res.data,
          };
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  return data;
};

export default useFetch;
