import React, {useState} from "react"

export const Add = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=00f92fc40dcf90afef9e945331d4cbe1&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };


  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" 
            placeholder="search for a movie"
            value={query}
            onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
