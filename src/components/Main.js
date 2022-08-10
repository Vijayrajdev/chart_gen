import React from "react";
import mainImage from "../Data/main.svg";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { ChartContext } from "../App";
import { useNavigate } from "react-router";

const Main = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [username, setUserName] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [chartType, setChartType] = React.useState("");
  const [chartInfo, setChartInfo] = React.useContext(ChartContext);
  const Navigate = useNavigate();

  const handleUsername = (e) => {
    setUserName(e.target.value);
    setChartInfo({ userName: e.target.value });
  };
  const handleChart = (e) => {
    setChartType(e.target.value);
    setChartInfo({ userName: username, ChartType: e.target.value });
  };

  const handleSubmit = () => {
    chartInfo
      ? Navigate(`/${chartInfo.ChartType}`, setShowModal(false))
      : Navigate("/", setShowModal(false));
  };

  return (
    <div className="flex flex-col justify-between md:items-center p-4 md:p-6 gap-6 md:gap-8 md:mt-12 mt-8">
      {/* Modal */}
      <div>
        {showModal ? (
          <>
            <div className="justify-center text-white items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bgModal outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 md:m-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md md:text-3xl md:w-96 font-semibold">
                      Enter X And Y axis 📈
                    </h3>
                    <button
                      type="button"
                      className=" text-white text-xl hover:text-red-400 cursor-pointer"
                      onClick={() => setShowModal(false)}
                    >
                      <MdOutlineClose />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto md:m-2">
                    <div className="mb-6">
                      <form className="flex flex-col gap-2 md:gap-4">
                        <label className="text-sm md:text-md font-semibold">
                          Username
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-blue-200"
                          placeholder="Jhon doe"
                          type="name"
                          name="name"
                          onChange={handleUsername}
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Chart type
                        </label>
                        <select
                          id="Grade"
                          onChange={handleChart}
                          className="border text-sm text-black rounded outline-blue-200 block w-full p-2.5 "
                        >
                          <option selected="">Choose</option>
                          <option value="line">Line</option>
                          <option value="bar">Bar</option>
                          <option value="area">Area</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex gap-4 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="border border-slate-100 rounded bg-slate-100 text-sm md:text-md px-4 py-2 text-black hover:text-red-400 cursor-pointer"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="border rounded border-blue-500 bg-white text-sm md:text-md px-4 py-2 text-blue-500  hover:bg-blue-300 hover:text-black cursor-pointer"
                      type="button"
                    >
                      Dive in
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        {/* Main */}
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-8  text-center">
        <h1 className="text-3xl md:text-6xl font-cinzel text-gradient text-center">
          Chart Generator
        </h1>

        <p className="text-sm md:text-2xl font-thin text-gradient">
          This is the app that is designed and developed to generate a chart for
          the users.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 md:gap-4 border text-xs md:text-lg px-4 py-2 rounded text-white hover:bg-blue-100 hover:text-black"
        >
          <FiBarChart2 className="text-lg md:text-xl" />
          <p className="hover:text-black">Get Started</p>
        </button>
      </div>
      <div className="md:w-[800px]">
        <img src={mainImage} alt="Main" />
      </div>
    </div>
  );
};

export default Main;
