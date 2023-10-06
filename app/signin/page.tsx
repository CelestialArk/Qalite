import LoginForm from "../components/LoginForm";

function page() {
  return (
    <div className="flex lg:h-screen flex-col-reverse lg:flex-row justify-center items-center gap-6">
      <LoginForm />
      <div className="flex flex-col gap-4 lg:w-1/2 p-11">
        <div className="text-7xl font-bold text-start">SignIn To Qalite </div>
        <div className="text-xl font-semibold ">
          And get easy access to the cars of your dreams for renting.
        </div>
      </div>
    </div>
  );
  2;
}

export default page;
