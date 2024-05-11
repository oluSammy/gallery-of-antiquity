import DarkHero from "@/components/DarkHero/DarkHero";
import PageLayout from "@/containers/PageLayout";
import Image from "next/image";

const page = () => {
  return (
    <PageLayout>
      <DarkHero subtitle=" The Future Of Museum" title="Making Of DAP Centre" />

      <div className="container text-[#4C5760] text-3xl mx-auto my-20 lg:px-0 px-2">
        <p className="font-light text-justify">
        Gallery of Antiquity is unique in bringing together under one roof
          the culture of the nation, spanning tribes and people . No other
          museum is responsible for collections of the same depth and breadth,
          beauty and significance.
        </p>
        <p className="font-light mt-12 text-justify">
          Its objects allow us to explore the extraordinary diversity of human
          cultures, from small communities to vast empires, to discover the many
          forms and expressions human beings have given to every aspect of life,
          and to realize how closely they are interconnected.
        </p>
      </div>

      <div className="container mx-auto mb-20">
        <h3 className="text-black font-semibold text-3xl mb-4 lg:px-0 px-2">
          Early Stage
        </h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-full lg:col-span-7">
            <figure className="relative w-full h-[600px] ">
              <Image
                src="/dap-early-02.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
            <p className="text-3xl text-[#202021]  lg:px-0 px-2">
              Landed property
            </p>
            <p className="text-[#A39D9D] font-medium text-6xl  lg:px-0 px-2">
              Making of DAP Centre
            </p>
          </div>
          <div className="col-span-full lg:col-span-5">
            <figure className="relative w-full h-[390px] mb-2.5 ">
              <Image
                src="/dap-early-02.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
            <figure className="relative w-full h-[200px] ">
              <Image
                src="/dap-early-01.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto container mb-32">
        <h3 className="text-black font-semibold text-3xl mb-4  lg:px-0 px-2">
          Completing Stage
        </h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-full lg:col-span-4">
            <figure className="relative w-full h-[200px] ">
              <Image
                src="/completed-daps-01.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
            <p className="sans text-[#202021] text-3xl font-light mb-4  lg:px-0 px-2">
              Outside View after Building on the 8months. Beautiful View of the
              surroundings DAP Centre.
            </p>
            <p className="text-[#A39D9D] font-medium text-6xl  lg:px-0 px-2">
              Making of DAP Centre
            </p>
          </div>
          <div className="col-span-full lg:col-span-8">
            <figure className="relative w-full h-[450px] ">
              <Image
                src="/completed-daps-02.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="mx-auto container mb-32">
        <h3 className="text-black font-semibold text-3xl mb-4  lg:px-0 px-2">
          Inside DAP centre
        </h3>
        <div className="grid grid-cols-12 gap-4 lg:px-0 px-2">
          <div className="col-span-full lg:col-span-6">
            <figure className="relative w-full h-[600px]">
              <Image
                src="/inside-dap.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
          </div>
          <div className="col-span-full lg:col-span-6">
            <figure className="relative w-full h-[290px] mb-3">
              <Image
                src="/inside-dap-01.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
            <figure className="relative w-full h-[300px]">
              <Image
                src="/inside-dap-01.png"
                alt="Dap Early stages"
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
            </figure>
          </div>
        </div>
        <p className="text-[#A39D9D] font-medium text-6xl">
          Making of DAP Centre
        </p>
      </div>
    </PageLayout>
  );
};

export default page;
