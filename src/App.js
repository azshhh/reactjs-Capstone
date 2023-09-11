import "./App.css";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
  ];

  return (
    <div className="App">
      {categories.map(({ title }) => (
        <div className="categories-container">
          <div className="category-container">
            {/* <img src="" alt="" /> */}
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
