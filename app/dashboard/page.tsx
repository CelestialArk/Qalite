import NavMenu from "../components/NavMenu";

function page() {
  return (
    <div className="h-screen w-full flex flex-row ">
      <NavMenu />
      <div className="flex flex-col lg:flex-row justify-center items-center p-4 w-full">
        <p className="text-7xl font-bold"></p>
        <p className="text-7xl font-bold"></p>
      </div>
    </div>
  );
}

export default page;
