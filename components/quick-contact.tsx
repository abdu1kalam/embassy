import { ContactForm } from "./contact-form";

export const QuickContact = () => {
  return (
    <div className=" mt-16 max-w-[90%] m-auto lg:flex lg:w-full">
      <div className="space-y-2 lg:w-1/2">
        <h1 className="text-blue-800 font-bold text-2xl">
          Best Immigration & PR Visa Consultants in Hyderabad / Bangalore
        </h1>
        <h3 className="text-sm text-muted-foreground text-black font-semibold">
          About Gateway Visas - Immigration & PR Visa Consultants
        </h3>
        <p className="text-black text-justify">
          Gateway Visas is a trusted, reliable, and one of the top Immigration
          Consultants in India. It has been guiding and assisting the skilled
          and talented professionals within the visa process, as a top most
          Canada & Australia Immigration Consultants for nearly 12 plus years.
          Moreover, it’s also a prevalent consulting service for visa &
          immigration services. Now, Gateway Immigration & Education Consultants
          is also a most trusted & reliable Canada immigration Consultant and a
          popular name among the immigration applicants seeking a visa in
          Australia, Canada, Germany & the UK etc.
        </p>
        <button className="rounded-lg bg-slate-600 hover:bg-slate-700 text-white p-2">
          Read more
        </button>
      </div>
      <div className="mt-10 lg:w-1/2  lg:ml-10 lg:mt-0">
        <ContactForm />
      </div>
    </div>
  );
};
