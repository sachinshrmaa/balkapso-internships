import { CourseData } from "../types/course";

const courses: CourseData[] = [
  {
    id: 1,
    slug: "civil-engineering",
    name: "Winter Internship for Civil Engineering Students",
    description:
      "Upgrade your civil engineering skills with our hands-on 1 month winter training program. Gain valuable experience in structural design, AutoCAD, soil testing, and more.",
    price: 12000,
    offerPrice: 3000,
    registration_link: "https://forms.gle/im6rHCq1fJ59LMCu8",
    thumbnail: "/civil-internship.png",
    content: '<ul className="ml-10"><li className="list-disc">Learn the basics of structural design</li><li className="list-disc">Master AutoCAD, the industry-standard drafting software</li><li className="list-disc">Learn to frame estimate.</li><li className="list-disc">Understand the importance of soil testing and its techniques</li><li className="list-disc">Understand the concepts of SFD and BMD in real life structure</li><li className="list-disc">Experience real-world retrofitting projects</li><li className="list-disc">Visit ongoing construction sites</li></ul>',
  },
  {
    id: 2,
    slug: "computer-engineering",
    name: "Intensive Winter Training on Modern Web Development",
    description:
      "Learn HTML5, CSS3, JavaScript, React, Next.js, Git, Node.js, MongoDB, authentication, deployment, and more. Build real-world projects, optimize performance, and create a stunning portfolio.",
    price: 6000,
    offerPrice: 3000,
    registration_link: "https://forms.gle/CacuaZirXxJXxqWW7",
    thumbnail: "/computer-internship.png",
    content: "",
  },
];

export default courses;
