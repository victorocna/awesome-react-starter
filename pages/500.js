import { Button } from '../components';

const Page = () => {
  return (
    <div className="h-screen  bg-gradient-to-r from-primary to-secondary bg-center">
      <main className="w-full">
        <div className=" ">
          <div className="text-center h-screen p-10 flex flex-col justify-center items-center">
            <div className="flex gap-5">
              <div>
                <p className="text-white text-lg font-semibold my-4">
                  Ne pare rău, a apărut o eroare care ne împiedică să afișăm corect pagina.
                </p>
                <p className="text-white text-lg font-semibold my-4">
                  Te rugăm să rescrii link-ul sau să apeși direct butonul de mai jos.
                </p>
              </div>
            </div>

            <Button
              href="/"
              className="py-3 px-6 text-base inline-block cursor-pointer w-full text-center text-white
               font-semibold sm:w-auto my-4 bg-accent shadow-lg rounded-full no-underline"
            >
              Spre pagina principală
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
