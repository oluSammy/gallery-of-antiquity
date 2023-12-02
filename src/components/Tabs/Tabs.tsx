/* eslint-disable react/no-unescaped-entities */
import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";

import Image from "next/image";

const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList " aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Picture Gallery
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Virtual Reality Gallery
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab3">
        Video Gallery
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab4">
        Library
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <div className="relative">
        <figure className="h-[600px]">
          <Image
            src={"/musuem-gallery.png"}
            alt={"props.title"}
            width={400}
            height={500}
            className="max-lg:w-full w-full h-full object-cover"
          />
        </figure>
        <div className="absolute left-5 bottom-10 md:w-7/12 lg:w-3/12">
          <h3 className="text-white font-semibold text-[36px]">
            Picture Gallery
          </h3>
          <p className="font-extralight text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitamet,
            consectetur Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="text-white font-bold text-xl">₦5,000</p>
        </div>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <div className="relative">
        <figure className="h-[600px]">
          <Image
            src={"/musuem-gallery.png"}
            alt={"props.title"}
            width={400}
            height={500}
            className="max-lg:w-full w-full h-full object-cover"
          />
        </figure>
        <div className="absolute left-5 bottom-10 md:w-7/12 lg:w-3/12">
          <h3 className="text-white font-semibold text-[36px]">
            Virtual Reality Gallery
          </h3>
          <p className="font-extralight text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitamet,
            consectetur Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="text-white font-bold text-xl">₦5,000</p>
        </div>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab3">
      <div className="relative">
        <figure className="h-[600px]">
          <Image
            src={"/musuem-gallery.png"}
            alt={"props.title"}
            width={400}
            height={500}
            className="max-lg:w-full w-full h-full object-cover"
          />
        </figure>
        <div className="absolute left-5 bottom-10 md:w-7/12 lg:w-3/12">
          <h3 className="text-white font-semibold text-[36px]">
            Video Gallery
          </h3>
          <p className="font-extralight text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitamet,
            consectetur Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="text-white font-bold text-xl">₦5,000</p>
        </div>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab4">
      <div className="relative">
        <figure className="h-[600px]">
          <Image
            src={"/musuem-gallery.png"}
            alt={"props.title"}
            width={400}
            height={500}
            className="max-lg:w-full w-full h-full object-cover"
          />
        </figure>
        <div className="absolute left-5 bottom-10 md:w-7/12 lg:w-3/12">
          <h3 className="text-white font-semibold text-[36px]">Library</h3>
          <p className="font-extralight text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitamet,
            consectetur Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="text-white font-bold text-xl">Free Access</p>
        </div>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsDemo;
