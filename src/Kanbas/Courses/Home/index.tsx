import ModuleList from "../Modules/List";
import Status from "../Status";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        {/* <h2>Home</h2> */}
        <ModuleList />
      </div>
      <div className="col-2">
        {/* <h2>Status</h2> */}
        <Status />
      </div>
    </div>
  );
}
export default Home;
