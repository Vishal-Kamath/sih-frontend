import { FC } from "react";

const QuestionPage: FC = () => {
  return (
    <main className="pt-header-offset px-3vw flex items-start justify-center h-full bg-gray-50/50 min-h-screen">
      <div className="max-w-3xl flex flex-col bg-white p-5 rounded-md border-1 border-gray-300 gap-3">
        <h3 className="font-normal text-md mb-5">
          Does your child look at you when you call his/her name?
        </h3>

        <div className="p-4 border-1 hover:bg-sky-50 hover:border-sky-100 border-gray-100 bg-gray-50 rounded-md">
          Always
        </div>
        <div className="p-4 border-1 hover:bg-sky-50 hover:border-sky-100 border-gray-100 bg-gray-50 rounded-md">
          Usually
        </div>
        <div className="p-4 border-1 hover:bg-sky-50 hover:border-sky-100 border-gray-100 bg-gray-50 rounded-md">
          Sometimes
        </div>
        <div className="p-4 border-1 hover:bg-sky-50 hover:border-sky-100 border-gray-100 bg-gray-50 rounded-md">
          Rarely
        </div>
        <div className="p-4 border-1 hover:bg-sky-50 hover:border-sky-100 border-gray-100 bg-gray-50 rounded-md">
          Never
        </div>
      </div>
    </main>
  );
};

export default QuestionPage;
