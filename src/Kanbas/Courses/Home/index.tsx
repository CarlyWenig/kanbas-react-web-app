import { useEffect, useState } from "react";
import ModuleList from "../Modules/List";
import Status from "../Status";
import BlackBox from "./blackbox";

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div>
        <div className="small-screen-div">
          <BlackBox />
          <ModuleList />
        </div>
      </div>
    );
  } else {
    return (
      <div className="full-screen-div">
        <div className="d-flex">
          <div className="row">
            <div className="col-9">
              <ModuleList />
            </div>
            <div className="col-3">
              <Status />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
