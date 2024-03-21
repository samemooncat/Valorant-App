import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useFetch } from "./useFetch";
import RoutesMenu from "./components/RoutesMenu";
import Home from "./screens/Home";
import Maps from "./screens/Maps";

function App() {
 /*  const { data, loading, error } = useFetch(
    "https://valorant-api.com/v1/agents"
  ); */

  return (
    <div className="App">
      <Router>
        <RoutesMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapas" element={<Maps />} />
        </Routes>
      </Router>

      {/*  <h1>Fetch Like a PRO</h1>
      <div className="card">
        <ul>
          {error && <li>error {error}...</li>}
          {loading && <li>Loading...</li>}
          {data?.map((agent) => (
            <>
              <li key={agent.uuid}>{agent.displayName}</li>
              <img src={agent.killfeedPortrait} alt="" />
            </>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default App;
