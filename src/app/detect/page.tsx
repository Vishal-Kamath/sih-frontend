import Link from "next/link";
import { FC } from "react";

const DetectionPage: FC = () => {
  return (
    <main className="pt-header-offset flex justify-center h-full bg-gray-50/50 min-h-screen items-center px-3vw">
      <div className="flex flex-col gap-4 max-w-lg">
        <h3 className="text-2xl font-bold">Detection for Autism</h3>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sunt
          quidem cum, ipsam esse possimus eius sit amet, reiciendis ut
          reprehenderit fuga asperiores illo perferendis necessitatibus ipsum
          assumenda, quis itaque.
        </p>
        <Link
          href="/detect/q/1"
          className="border-1 border-gray-500 px-5 py-2 rounded-full text-center w-fit bg-slate-50 hover:border-gray-800 hover:bg-sky-100"
        >
          Start Test
        </Link>
      </div>
    </main>
  );
};

export default DetectionPage;
