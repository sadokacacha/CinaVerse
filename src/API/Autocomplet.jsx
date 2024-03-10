import "./APIII.css";
function Autocomplet({ data }) {
  const fetchData = async () => {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${movieQuery}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "40ba1af8f2msh883d8db74efd9abp172060jsn23ef17945acc",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (!data || !Array.isArray(data.d)) {
        throw new Error("Invalid data format");
      }

      setMovieSuggestions(data.d);
    } catch (error) {
      console.error("Error fetching movie suggestions:", error);
    }
  };

  return {
    fetchData,
  };
}

export default Autocomplet;
