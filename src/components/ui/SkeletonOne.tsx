import Image from "next/image";

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}

          <Image
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};
