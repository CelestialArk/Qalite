import NavMenu from "../components/NavMenu";
import Options from "../components/Options";

function page() {
  return (
    <div className="h-screen w-full flex flex-row gap-6 ">
      <NavMenu />
      <Options />
    </div>
  );
}

export default page;
