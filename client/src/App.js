function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8000");
    console.log(res);
  };
  get();
  return <div className="App">{}</div>;
}

export default App;
