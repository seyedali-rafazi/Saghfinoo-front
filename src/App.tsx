import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-red-300 text-3xl">Vite + React</h1>
      <h1 className="text-primary text-5xl">
        سلام خوبین این برنامه من برای شماهاس
      </h1>
      <p>سلام این یک تست است</p>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
