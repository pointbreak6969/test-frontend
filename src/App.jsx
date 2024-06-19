function App() {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your desired functionality here
  };

  return (
    <>
      <h1>React App</h1>
      <p>Start editing to see some magic happen!</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
