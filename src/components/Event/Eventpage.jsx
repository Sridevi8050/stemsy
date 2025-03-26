

import React from "react";
import Header from "../Header";
import Eventitem from "./Eventitem";
import Filterdropdownevent from "./Filterdropdownevent";
import { Link } from "react-router-dom";

function Eventpage() {
  const events = [
    {
      date: "12",
      month: "June",
      title: "Science Fair",
      author: "Miss Shweta",
      time: "Mon 12 June | 5:00 PM",
      image:
        "https://s3-alpha-sig.figma.com/img/dbb2/a5be/03f259b82a0fb223d92ccbc5e0fc9f10?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l68vezHn0n6alPkTsFksEQctkxZbdIZIP9YSo0DOCilkCZNrzbnmTiY1-lxKoUf3m13ECvLQGCtwVycE~ACzf9ZRv6Ov~s2FaYfuKqELuHjIVIQZc1Won2Zqkzi~y2vssNtpE~53QyF29pl~AORA3Qjty-8Fv3i2IiBu21-l9WyzmZ-jpwkRxIC4MYjwUVKV8CC1mBkXLO~HstMUxPWCpUcHyoPqHJCu506F-lACMw0x4ohGg1S65sg0HYrhjjkbc1B2VTryCwciFS~2G-wP7sYAUdyavOKQNIFz3UuvCUs~siVaXDdnOxAHgcIwPLdBK2siOK7ibyJV-4ReYgTb7A__",
    },
    {
      date: "28",
      month: "June",
      title: "Stem Q/A",
      author: "Miss Shweta",
      time: "Mon 28 June | 5:00 PM",
      image:
        "https://s3-alpha-sig.figma.com/img/fa54/a0d5/15cc63b557ba2b8532574a8984830bf8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dz1vQzFQof-8LSUQy5x8fYpwZH8kCx-3C8kVsMF5iVIzOZ8eTRBVwZQ4ZW1nQ6wpeokP6yT2h2ozfkdDyqRYr4WjQJ7feC84MWJHmGYp751-skGT3jQi-ji6pi~MjdZycg8FeX04hAuXT0u9urNg1A2A5OANe09pb6vmx4iJYzPCbEif0Dg22aPghBtoBi752wLi0gLxbD9dCJCWTbLh9EzbxCt9j9zMsP9kQGcgmPDPXJzJDrlAhXPpQPx-t7IUH7ezbbNmx~11VhZE90QSl9WRTa8X4RuXiR4Vpmwb2gJy9RQLLIFE8WZyMKSQYIAO8JkA~zCqV0EduK6kpn7EVA__",
    },
    {
      date: "28",
      month: "June",
      title: "Love to Learn",
      author: "Miss Shweta",
      time: "Mon 28 June | 5:00 PM",
      image:
        "https://s3-alpha-sig.figma.com/img/24cd/ec44/5d50d8b95e30d99fc4bbd4b12db77356?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TicictCZjZh2Nwe9CHBX9nOcDktgpU6k5aFi3i9yg06A8AzgrhoTI-l9BaqanQHH5n1mgP3ZNPm7OScJhZR92OxYR28MWID99QmNtknEBpssMSDOlSyLzPsSM2U6aBZXxMeWDEuaaL1Guyt37D-iwUVHO-RNVsWyh18opElQRhBTDnteCdVO84SSlTfRGDUXg5aHhgiT1tBHb4YvmJiCpuHtu~JxPfrNzHd3FkNemLYUJ4pUedQpQMqxwCTmV7HLmogfBcbT6ReDxe81mvF2av92GftBKFeZlARHHX3~qih1dsAvzEsoUkOjOpemI1Vkf1zjkAkP3vR7PUsZYrMGjA__",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-2xl font-semibold">Events</span>
      </div>

      {/* Event Banner */}
      <div
        className="mt-10 mx-auto rounded-lg p-7 text-white space-y-3 bg-cover bg-center w-full sm:w-[80%] md:w-[70%] h-[200px]"
        style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/3cf4/0d83/4ffdd3087a2cc6f8bb621ada30a2454b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i82-VX5r46bLKb7GNhkIGCzNlCNvnb7LFvrdHBEXa1RfjCWH6x14Ugt3JNLqSWaPyTIBAY2LNBVdIT5Kw1eNxYtA2spurXNbWutee5zTrWmn2QsSXrb5n4pW9UsNev2Hg3rTgtZHuuyVunjML0gJHmHsAooXZLgvPriY8npBdgSVRdoQ1ha-gO2UDwVSqFJz6X9AT9OemKw4~moq2d3SXmSrmFmZ5X-dXdhKEOs-X~OMzE2i4VI6WIcP1XjSvd9LXiMbeALNcCf4Gn4OCV63QM9j6fR7HpRyktTDB6cDsGmLG4kmH~SoFbHMEgm4rRlbBTQNX6Ts~ClHokPt85g~tA__)` }}
      >
        <h1 className="text-2xl">A thrilling STEM event and explore the future of science and technology!</h1>
        <button className="bg-[#3066BE] rounded-sm p-2 px-4">View</button>
      </div>

      {/* Upcoming Events */}
      <div className="p-8 mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <Filterdropdownevent className="pr-30"/>
        </div>

        <Link to="/event1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 ">
            {events.map((event, index) => (
              <Eventitem key={index} {...event} />
            ))}
          </div>
        </Link>
        <h1 className="text-2xl font-semibold">Event you may like</h1>
        <Link to="/event1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {events.map((event, index) => (
              <Eventitem key={index} {...event} />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Eventpage;
