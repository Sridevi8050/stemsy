
import { useState } from "react";
import Header from "../Header";

function Settings() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div>
      <Header />
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-2xl">Settings</span>
      </div>

      <div className="space-y-7 p-5">
        
        <div className="bg-white shadow-sm rounded-sm p-7 max-w-4xl mx-auto">
          <h1 className="text-lg font-semibold">Profile details</h1>
          <img
            className="h-16 w-16 rounded-full border border-black mt-3"
            src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SLKWUUNrOzR60xknm4TB8aY9cmgdTiStnsd0kyrKrLR9niS1HAMFkVB16Fi6lnxol1oJ--eZ66QiPNf94Cx-XzutinOCNPyBNqZaiKszH4tvtU0IZQwwvWaw7j2avj0viBEqiG~~TlTm1dyJ5VmMyT2PuzdmNUr9vbAl3RJkK1RPjv7-7hUUNifNX52571diVfNxGUMfF6Sva1FzBP0xJRJ5h23hea983WyxBBLmi-S3Q7j9LdFKr7UxKG0pFBUNTxtvVQxll3tCO4uEGLLHSSG1NAmAa~i0Ap7YDl-trt3hCo4WLuM7FgYYsYb2JI9H65uqpyRSQ3t~jEmlX64v5Q__"
            alt="Profile"
          />

          
          <div className="flex flex-wrap gap-5 mt-5">
            <div className="w-full md:w-1/2">
              <label htmlFor="username" className="block text-sm text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full border p-2 rounded-md focus:ring focus:ring-indigo-300"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border p-2 rounded-md focus:ring focus:ring-indigo-300"
              />
            </div>
          </div>
        </div>

        
        <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-sm p-5">
          <h1 className="text-lg font-semibold">Settings</h1>

          
          <div className="flex justify-between items-center mt-4">
            <h4>Dark Mode</h4>
            <div className="h-8 w-20 bg-gray-300 rounded-3xl flex items-center justify-between p-1">
              <button
                className={`h-full w-8 rounded-full transition-all ${
                  activeButton === 1 ? "bg-white" : "bg-gray-300"
                }`}
                onClick={() => setActiveButton(1)}
              ></button>
              <button
                className={`h-full w-8 rounded-full transition-all ${
                  activeButton === 2 ? "bg-white" : "bg-gray-300"
                }`}
                onClick={() => setActiveButton(2)}
              ></button>
            </div>
          </div>

          
          <div className="flex justify-between items-center mt-4">
            <h4>Accessibility Mode</h4>
            <div className="h-8 w-20 bg-gray-300 rounded-3xl flex items-center justify-between p-1">
              <button
                className={`h-full w-8 rounded-full transition-all ${
                  activeButton === 1 ? "bg-white" : "bg-gray-300"
                }`}
                onClick={() => setActiveButton(1)}
              ></button>
              <button
                className={`h-full w-8 rounded-full transition-all ${
                  activeButton === 2 ? "bg-white" : "bg-gray-300"
                }`}
                onClick={() => setActiveButton(2)}
              ></button>
            </div>
          </div>
        </div>

        
        <div className="max-w-2xl mx-auto bg-white shadow-sm rounded-sm p-5 space-y-3">
          <div className="shadow-sm h-10 rounded-sm pt-1 pl-4 flex items-center cursor-pointer hover:bg-gray-200">
            Security
          </div>
          <div className="shadow-sm h-10 rounded-sm pt-1 pl-4 flex items-center cursor-pointer hover:bg-gray-200">
            Privacy Policy
          </div>
          <div className="shadow-sm h-10 rounded-sm pt-1 pl-4 flex items-center cursor-pointer hover:bg-gray-200">
            Terms and Conditions
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
