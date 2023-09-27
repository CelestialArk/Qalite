import RegisterForm from "../components/RegisterForm";

function page() {
  return (
    <div className="flex justify-center lg:h-screen items-center flex-col-reverse  gap-11 lg:flex-row p-6">
      <div className="flex items-center">
        <RegisterForm />
      </div>
      <div className="p-10 flex flex-col gap-4 justify-center h-full">
        <div className="text-7xl font-bold">Sign Up For Qalite</div>
        <div className="font-semibold text-xl">
          Join our premium service and enjoy the freedom of choosing your own
          cars.
        </div>
      </div>
    </div>
  );
}

export default page;
