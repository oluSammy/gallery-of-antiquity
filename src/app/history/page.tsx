"use client";

import PageLayout from "@/containers/PageLayout";
import React from "react";

import Image from "next/image";
import HistorySection from "@/components/HistorySection/HistorySection";

const page = () => {
  return (
    <PageLayout>
      <div className="lg:px-0 px-5 ">
        <div className="container mx-auto py-20">
          <h2 className="text-black font-semibold text-4xl mb-10">
            History Of Nigeria
          </h2>
          <p className="text-[#4C5760] font-light text-xl lg:text-2xl sans leading-8">
            Nigeria has 36 states and a Federal Capital Territory. In
            alphabetical order, the states are as follows: Abia, Adamawa, Akwa
            Ibom, Anambra, Bauchi, Bayelsa, Benue, Borno, Cross River, Delta,
            Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano,
            Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo,
            Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe, Zamfara. The
            states are further divided into 774 Local Government Areas.
          </p>
          <p className="text-[#4C5760] font-light text-xl lg:text-2xl sans leading-8 mt-8">
            The Federal Capital Territory is located in Abuja, the national
            capital city of Nigeria.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-x-5 ">
            <div className="lg:col-span-6 col-span-full">
              <figure>
                <Image
                  src="https://res.cloudinary.com/olumorinsamuel/image/upload/v1705535959/states-of-nigeria-map_1_dtj3rr.png"
                  alt="Nigeria Map"
                  width={700}
                  height={538}
                  className="w-full h-full"
                />
              </figure>
            </div>
            <div className="lg:col-span-6 col-span-full lg:mt-0 mt-10">
              <figure>
                <Image
                  src="https://res.cloudinary.com/olumorinsamuel/image/upload/v1705535959/image_36_tyyzln.png"
                  alt="Nigeria Map"
                  width={700}
                  height={538}
                  className="w-full h-full"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-[#4C5760] font-light text-2xl leading-8 sans py-20 ">
          <p>
            Nigeria is a West African country located in the Northern and
            Eastern Hemispheres of the Earth. It is bordered by four countries.
            These are Niger, Chad, Cameroon, and Benin to the north, northeast,
            east, and west respectively. Nigeria also has a coastline on the
            Gulf of Guinea. Nigeria Bordering Countries: Cameroon, Chad, The
            Niger, Benin. Nigeria is a West African country located in the
            Northern and Eastern Hemispheres of the Earth. It is bordered by
            four countries. These are Niger, Chad, Cameroon, and Benin to the
            north, northeast, east, and west respectively. Nigeria also has a
            coastline on the Gulf of Guinea.
          </p>
          <p className="mt-10">
            Nigeria Bordering Countries: Cameroon, Chad, The Niger, Benin.
            Nigeria is a West African country located in the Northern and
            Eastern Hemispheres of the Earth. It is bordered by four countries.
            These are Niger, Chad, Cameroon, and Benin to the north, northeast,
            east, and west respectively. Nigeria also has a coastline on the
            Gulf of Guinea. Nigeria Bordering Countries: Cameroon, Chad, The
            Niger, Benin.
          </p>
        </div>

        <div className="container mx-auto text-[#4C5760] font-light text-2xl leading-8 sans py-20 ">
          <h2 className="text-black font-semibold text-4xl mb-10">
            History Of Lagos
          </h2>
          <p>
            The island of Lagos was inhabited by Yoruba fishermen and hunters at
            least since the 15th century. In 1472, Portuguese explorers arrived,
            and began to trade, eventually followed by other Europeans. The area
            fell under the domain of Benin in the 16th century. By 1600, it
            served as a frontier town, and Benin limited its local presence to
            soldiers led by four military commanders. This military presence as
            well as the exchange with European traders resulted in economic
            growth, as locals would travel along the coast and from further
            inland to Lagos Island for trade; at this point, clothes were the
            main item sold at and exported from the island as well as Benin as a
            whole. In the 17th century, the trade with the Portuguese also began
            to increase, as Onim became a center of the Atlantic slave trade.
            The local obas (kings) developed good relations with the Portuguese.
          </p>
          <p className="mt-8">
            By the early 19th century, it was a small kingdom and a tributary to
            the Oyo Empire. Like many West African states, Onim developed strong
            diplomatic as well as economic links to South America. It sent
            embassies to the Portuguese colony of Brazil, and became one of the
            first countries to recognize the independence of Brazil in 1823.
            Meanwhile, the Oyo Empire had begun to collapse. This allowed Lagos
            to assume the leading economic position regionally, becoming the
            most important market in the Yoruba territories as well as growing
            substantially.
          </p>
          <p className="mt-8">
            From the crowning of Ado as its Oba, Lagos (then called Eko) had
            served as a major center for slave-trade, from which then Oba of
            Benin and all of his successors for over two centuries supported —
            until 1841, when Oba Akitoye ascended to the throne of Lagos and
            attempted to ban slave trading. Local merchants strongly opposed the
            intended move, and deposed and exiled the king, and installed
            Akitoye&#39;s brother Kosoko as Oba. Exiled to Europe, Akitoye met with
            British authorities, who had banned slave trading in 1807, and who
            therefore decided to support the deposed Oba to regain his throne.
            In the &#39;Reduction of Lagos&#39;, the British militarily intervened in
            1851, reinstalling Akitoye as Oba of Lagos. Lagos subsequently
            signed a treaty which ushered in the British consular period. In
            practical terms, however, British influence over the kingdom had
            become absolute.
          </p>
        </div>

        <div className="container mx-auto py-10">
          <div className="grid grid-cols-12 gap-x-10 items-center">
            <div className="lg:col-span-6 col-span-full">
              <figure>
                <Image
                  src="https://res.cloudinary.com/olumorinsamuel/image/upload/v1705536872/image_38_s3rkyx.png"
                  alt="Nigeria Map"
                  width={700}
                  height={538}
                  className="w-full h-full"
                />
              </figure>
            </div>
            <div className="lg:col-span-6 col-span-full lg:mt-0 mt-10">
              <figure>
                <Image
                  src="https://res.cloudinary.com/olumorinsamuel/image/upload/v1705536872/image_37_ucincc.png"
                  alt="Nigeria Map"
                  width={700}
                  height={538}
                  className="w-full h-full"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-10 mb-10">
          <div className="grid grid-cols-12 gap-x-8 items-stretch ">
            <div className="lg:col-span-3 col-span-full">
              <figure>
                <Image
                  src="https://res.cloudinary.com/olumorinsamuel/image/upload/v1705537136/Frame_1000002715_uknrpj.png"
                  alt="Nigeria Map"
                  width={700}
                  height={538}
                  className="w-full h-full"
                />
              </figure>
            </div>
            <div className="lg:col-span-9 col-span-full lg:mt-0 mt-10 ">
              <div className="text-[#4C5760] font-light sans leading-[30px] text-[22px]">
                <p>
                  All Obas of Lagos trace their lineage to Ashipa,a war captain
                  of the Oba of Benin. Ashipa was rewarded with the title of the
                  Oloriogun (or War leader) and received the Oba of Benin&#39;s
                  sanction to govern Lagos on his behalf. Some Benin accounts of
                  history have the Ashipa as son or grandson of the Oba of
                  Benin. Other accounts note that Ashipa is a Yoruba corruption
                  of the Benin name Aisika-hienbore (translated &#39;we shall
                  not desert this place&#39;).
                </p>
                <p className="mt-8">
                  Ashipa received a sword and royal drum as symbols of his
                  authority from the Oba of Benin on his mission to Lagos.
                  Additionally, the Oba of Benin deployed a group of Benin
                  officers charged with preserving Benin&#39;s interests in
                  Lagos. These officers, led by Eletu Odibo, were the initial
                  members of the Akarigbere class of Lagos White Cap Chiefs.
                  Nigeria Bordering Countries: Cameroon, Chad, The Niger, Benin.
                  Nigeria is a West African country located in the Northern and
                  Eastern Hemispheres of the Earth. It is bordered by four
                  countries. These are Niger, Chad, Cameroon, and Benin to the
                  north, northeast, east, and west respectively. Nigeria also
                  has a coastline on the Gulf of Guinea. Nigeria Bordering
                  Countries: Cameroon, Chad, The Niger, Benin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <HistorySection title="History of other Nigerian states" />
      </div>
    </PageLayout>
  );
};

export default page;
