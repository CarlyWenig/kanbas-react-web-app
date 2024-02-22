import ModuleList from "../Modules/List";
import Status from "../Status";
import BlackBox from "./blackbox";

function Home() {
  return (
    <div>
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

      <div className="small-screen-div">
        <BlackBox />
        <ModuleList />
      </div>
    </div>
  );
}
export default Home;
