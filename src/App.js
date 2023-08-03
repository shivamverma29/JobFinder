import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [companies, setCompanies] = useState("");
  const [type, setType] = useState("Job");
  const [showResult, setShowResult] = useState(false);
  const [urls, setUrls] = useState([]);
  return (
    <div className="App">
      <Header />
      <Input
        setCompanies={setCompanies}
        setType={setType}
        setShowResult={setShowResult}
      />
      {showResult && (
        <Results
          companies={companies}
          type={type}
          setUrls={setUrls}
          urls={urls}
        />
      )}
    </div>
  );
}

export default App;
