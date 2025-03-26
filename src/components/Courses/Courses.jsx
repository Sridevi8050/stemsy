
import React from "react";
import Header from "../Header";
import FilterDropdown from "../FilterDropdown";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

const courseData = [
  {
    title: "Developing Kids Website from Scratch",
    instructor: "John Doe",
    duration: "10 hrs",
    image: "https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Jane Smith",
    duration: "8 hrs",
    image: "https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fRYup6fKFvQxaNcB27vIZOfa2m~X0tMdSTbVHVIU3WlNBT~tLRnhmi3P58HGD9JhDON7Ko6vkeMxmvR5GHSDrv0TL91RyZ5I2Yr-MShpic~SDFFXN5wCchArnXH0C~iQygH1KtI0kqEFmvCyzL4cV8p8oS-KTq99VZydcf3psegogzFyhA7RcJkKoD0-BNGjcLZdLIaoDywgis-yQQDuFQzwejm4G4hkwurCveVbYlqt44lRiLwQUgcnDW9hAMc325BaMXylRnFQcVdR4pTl8mk87EEdJnDQrLm5GQZKZNYvPiHC8qYd~zKmbCFwu4Z9~PewDIKl~8FecigUlEVwtQ__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Michael Johnson",
    duration: "6 hrs",
    image: "https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AC1ctdoUt0PvEHPftVjWog-POIfOyul87lqjwqMPvVl-mnGclJ5ddnfV0h3vCNzIaYxHV778xfSDAHq-tMsLyRZD30MOXpVYCRVz3vgOQMD54L39s9We3-hSpBOvFrB2U9L89pdq-cqrK8gWPPTT7UzzucoeEwfPrvD2XCTClP3Ed3GGPoQ0SqUA2LGJYlBX6W7sgxk3MryqEExWM3SFtlgQDd85EtowwP-IEcTQAH1ljZYwtL6iUHSrUQZyusSghRaWhjuTWITPGNuepNx9Hy-yQzg-O9p9kLUZ7px06-ixrYxmxonXLEkbineWZtBuZL6khluY0VF022ZjiFlkgw__",
  },
  {
    title: "Developing Kids Website from Scratchs",
    instructor: "Emma Wilson",
    duration: "12 hrs",
    image: "https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Robert Brown",
    duration: "9 hrs",
    image: "https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fRYup6fKFvQxaNcB27vIZOfa2m~X0tMdSTbVHVIU3WlNBT~tLRnhmi3P58HGD9JhDON7Ko6vkeMxmvR5GHSDrv0TL91RyZ5I2Yr-MShpic~SDFFXN5wCchArnXH0C~iQygH1KtI0kqEFmvCyzL4cV8p8oS-KTq99VZydcf3psegogzFyhA7RcJkKoD0-BNGjcLZdLIaoDywgis-yQQDuFQzwejm4G4hkwurCveVbYlqt44lRiLwQUgcnDW9hAMc325BaMXylRnFQcVdR4pTl8mk87EEdJnDQrLm5GQZKZNYvPiHC8qYd~zKmbCFwu4Z9~PewDIKl~8FecigUlEVwtQ__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Alice Davis",
    duration: "7 hrs",
    image: "https://s3-alpha-sig.figma.com/img/dd98/852f/abc600267ef14cec873839c4d3d2cbc5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hwlyXDEyqinHdkTjWtwZEep6tY~fbqK4iZAfp0DTDXcr9JKfNLlwIEsXt9dUBjgbgMmKgzfpU2St3wllE-nqqKWhwQEUBNzjwzWyC67is0v51r43GGxJtYlvAQcphjPhOIMdMAOv9jL-HwJShNlh34KfYFd1kvRM18JwXnzRJAt4egDEXk9HSX6f1KX5gwrDwFX3lkKLpCIg2DfIO5vz7UjQNEFNaunhBD8Nea78b08G195U3VwoUpEi0Jc5b1HtSqydRAGUXb-YPNjxFuYYaqL6AAldr6MUGn9118CzrGA6i4BPNDOsf2xJCQOh2bkTLP4eQ4tEl~fZF~PvV~BdcA__",
  },
];

function Course() {
  return (
    <div>
      <Header />
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-lg sm:text-xl md:text-2xl font-semibold">Course</span>
      </div>

      {/* Category Buttons */}
      <div className="h-auto shadow-sm flex flex-wrap justify-center gap-3 p-3">
        {["Information-Technology", "Maths", "Science", "Artificial-Intelligence"].map((category, index) => (
          <button
            key={index}
            className="rounded-sm px-3 py-1 text-blue-600 border border-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Subcategory Buttons */}
      <div className="h-auto shadow-sm flex flex-wrap justify-center gap-3 p-3">
        {["Web Development", "Java", "C++", "Design", "Python", "Data Science"].map((sub, index) => (
          <button key={index} className="px-3 py-1 opacity-60 hover:opacity-100 hover:underline transition">
            {sub}
          </button>
        ))}
        <div>
          <FilterDropdown />
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 pt-6">
        {courseData.map((course, index) => (
          <Link to="/aboutcourse" key={index}>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img className="rounded-lg w-full h-40 object-cover" src={course.image} alt={course.title} />
              <div className="pt-3">
                <h1 className="text-lg font-semibold">{course.title}</h1>
                <p className="text-sm text-gray-500">Course by: {course.instructor}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm flex items-center">
                    <HiOutlineClock className="text-blue-600 mr-1" /> {course.duration}
                  </span>
                  <span className="text-sm flex items-center">
                    <CiCalendar className="text-blue-600 mr-1" /> Modules
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Course;
