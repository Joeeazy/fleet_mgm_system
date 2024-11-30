import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Fleet Management System</h1>
          <p className="text-xl mt-2">Managing your fleet with efficiency</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-blue-100">
            <Link to={"/signup"}> Sign Up</Link>
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-blue-100">
            <Link to={"/login"}> Log In</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
