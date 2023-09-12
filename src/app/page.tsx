import Link from "next/link";

export default function Home() {
  return (
    <main className="py-header-offset px-3vw bg-gray-50/50 h-full min-h-screen">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/detect"
            className="bg-slate-100 rounded-lg p-10 h-[15rem] w-full hover:shadow-md"
          >
            Take a Test
          </Link>
          <div className="bg-slate-100 rounded-lg p-10 h-[15rem] w-full flex justify-end hover:shadow-md">
            Blog 1
          </div>
          <div className="bg-slate-100 rounded-lg p-10 h-[15rem] w-full flex hover:shadow-md">
            Blog 2
          </div>
          <div className="bg-slate-100 rounded-lg p-10 h-[15rem] w-full flex justify-end hover:shadow-md">
            Blog 3
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl">About</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            reiciendis temporibus atque est in animi culpa, iure totam deleniti
            molestias autem itaque voluptate numquam quos dolore consectetur
            eaque minus perspiciatis! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Minima reiciendis temporibus atque est in animi
            culpa, iure totam deleniti molestias autem itaque voluptate numquam
            quos dolore consectetur eaque minus perspiciatis! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Minima reiciendis temporibus
            atque est in animi culpa, iure totam deleniti molestias autem itaque
            voluptate numquam quos dolore consectetur eaque minus perspiciatis!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            reiciendis temporibus atque est in animi culpa, iure totam deleniti
            molestias autem itaque voluptate numquam quos dolore consectetur
            eaque minus perspiciatis! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Minima reiciendis temporibus atque est in animi
            culpa, iure totam deleniti molestias autem itaque voluptate numquam
            quos dolore consectetur eaque minus perspiciatis!
          </p>
        </div>
      </div>
    </main>
  );
}
