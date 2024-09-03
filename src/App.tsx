import "./App.scss";

function App() {
  return (
    <>
      <section>
        <div className="stopwatch-container">
          <h1>StopWatch</h1>
          <h3>00:00:00</h3>
          <div className="button-container">
            <button>Start/Stop</button>
            <button>Reset</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
