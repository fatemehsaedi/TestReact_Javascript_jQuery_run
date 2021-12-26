import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const getCode = async () => {
    let data = {};
    data = await fetch("http://localhost:7501/GetJsData")
      .then((response) => response.json())
      .then((data) => data);
    const script = document.createElement("script");
    script.id = "Codes";
    script.innerHTML = `
    function runCode(){${data.jsCode}}
    $( document ).ready(function() {
      ${data.jqueryCode}
    });
    `;
    document.body.appendChild(script);
  };

  const runJSScript = () => {
    window.runCode();
  };

  const changeRoute = () => {
    navigate("/testRoute");
    navigate(0);
  };

  useEffect(() => {
    getCode();
  }, []);

  return (
    <>
      <h1>Test for running js and jquery in React</h1>
      <p>This is only a sample code !!!!!!!</p>
      <hr />
      <button onClick={() => runJSScript()}>Get and run js code!</button>
      <button onClick={() => changeRoute()}>change route!</button>
    </>
  );
}

export default Home;
