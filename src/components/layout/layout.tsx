import { ReactElement } from "react";
import ParticlesCustom from "./../particles/particles";

export const Layout = ({ children }: {children: ReactElement }) => {
  return (
    <section className="h-screen pt-8 sm:pt-12 relative lg:py-48 z-[1] bg-blue">
      <div className="particles">
        <ParticlesCustom />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mt-14">
          <div className="mt-6">
            <h1 className="text-4xl font-black tracking-normal text-white sm:text-6xl md:text-7xl">
              Nearest cities
              <span className="text-primary">.</span>
            </h1>
            <h2 className="mt-4 text-lg text-white sm:text-xl">
              Search for the city and find the nearest ones
            </h2>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
