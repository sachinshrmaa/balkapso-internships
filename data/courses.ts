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
    content: "this is a content",
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
    content:
      "<div class='content'><h4>Day 1: Foundations of Networking and Device Setup</h4><ul><li>Set up devices with basic configurations, interfaces, and VLANs.</li><li>Learn about OSI Model, TCP/IP, and IP addressing/subnetting.</li></ul><h4>Day 2: Routing, Switching, and Network Services</h4><ul><li>Explore static routing and basic switch setups.</li><li>Discover DHCP and NAT functionalities.</li></ul><h4>Day 3: Troubleshooting and Practical Application</h4><ul><li>Master CLI diagnostics and solve connectivity issues.</li><li>Apply knowledge to real-world scenarios.</li></ul></div>",
  },
];

export default courses;
