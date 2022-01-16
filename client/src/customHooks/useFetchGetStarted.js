import { useEffect, useState } from "react";
import categories from "../api/categories";
import { defaultCates } from "../Constants/categories";

export const useFetchCategoryGetStarted = () => {
  const [getStarted, setGetStarted] = useState(null);

  useEffect(() => {
    const fetCategories = async () => {
      const topLists = await categories.GetCategoryPlaylists("toplists", {
        limit: 6,
      });
      const vietnamese = await categories.GetCategoryPlaylists("vietnamese", {
        limit: 6,
      });
      const kpop = await categories.GetCategoryPlaylists("kpop", {
        limit: 6,
      });
      const pop = await categories.GetCategoryPlaylists("pop", {
        limit: 6,
      });
      const chill = await categories.GetCategoryPlaylists("chill", {
        limit: 6,
      });
      const sleep = await categories.GetCategoryPlaylists("sleep", {
        limit: 6,
      });

      const updateList = defaultCates.map((item) => {
        let obj = null;
        switch (item.category) {
          case "Top Lists": {
            obj = {
              id: "toplists",
              category: "Top Lists",
              list: [...topLists.data.playlists.items],
            };
            break;
          }
          case "Vietnamese Music": {
            obj = {
              id: "vietnamese",
              category: "Vietnamese Music",
              list: [...vietnamese.data.playlists.items],
            };
            break;
          }
          case "Pop": {
            obj = {
              id: "pop",
              category: "Pop",
              list: [...pop.data.playlists.items],
            };
            break;
          }
          case "K-Pop": {
            obj = {
              id: "kpop",
              category: "Kpop",
              list: [...kpop.data.playlists.items],
            };
            break;
          }
          case "Chill": {
            obj = {
              id: "chill",
              category: "Chill",

              list: [...chill.data.playlists.items],
            };
            break;
          }
          case "Sleep": {
            obj = {
              id: "sleep",
              category: "Sleep",
              list: [...sleep.data.playlists.items],
            };
            break;
          }
          default:
            break;
        }
        return obj;
      });

      setGetStarted([...updateList]);
    };
    fetCategories();
  }, []);
  return getStarted;
};
