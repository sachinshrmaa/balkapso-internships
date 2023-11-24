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
    content:
      '<div className="ml-6"><li className="list-disc">Learn the basics of structural design</li><li className="list-disc">Master AutoCAD, the industry-standard drafting software</li><li className="list-disc">Learn to frame estimate.</li><li className="list-disc">Understand the importance of soil testing and its techniques</li><li className="list-disc">Understand the concepts of SFD and BMD in real life structure</li><li className="list-disc">Experience real-world retrofitting projects</li><li className="list-disc">Visit ongoing construction sites</li></div>',
    instructorImg: "/img/instructors/solmon.png",
    instructorDetails:
      "<p>Solmon Sharma embarked on his educational journey by earning a Bachelor's degree in Civil Engineering, laying a solid foundation for his remarkable career. Fuelled by a deep thirst for knowledge, he pursued a Master's degree in Structural Engineering, immersing himself in the intricacies of designing and analyzing structures. Currently, Solmon is actively pursuing a Ph.D. in Retrofitting from LPU, further enriching his expertise and understanding in this specialized domain.</p><p className='py-4'>Throughout his professional journey, Solmon Sharma has assumed diverse roles that have enriched his comprehensive understanding of civil engineering. Starting as a teacher at Greendale School, he had the privilege of sharing his vast knowledge and unwavering passion with students, igniting their interest in the field. Following this, Solmon served as an Assistant Manager at Flexituff International Pvt. Ltd., an esteemed Australia-based company, where he actively participated in various civil engineering and construction projects, gaining invaluable industry experience.</p><p>Before that, Solmon worked as a Junior Engineer in RMDD (Rural Management and Development Department) and Roads & Bridges. During his tenure, he contributed to essential infrastructure projects, further refining his practical skills. These experiences provided Solmon with an intimate understanding of the challenges and intricacies of real-world construction, granting him a well-rounded perspective on the industry.</p>"
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
      '<div className="ml-6"><li className="list-disc"> Introduction to Web Development </li><li className="list-disc"> Front-End Development using HTML and CSS</li><li className="list-disc"> JavaScript Fundamentals </li><li className="list-disc"> Advanced JavaScript </li><li className="list-disc"> Introduction to React </li><li className="list-disc"> Front-End Development with NextJS </li><li className="list-disc"> Version Control with Git and GitHub </li><li className="list-disc"> Back-End Development Basics </li><li className="list-disc">Full Stack Development </li><li className="list-disc">Advanced Topics Final Project and Portfolio Development</li></div>',
    instructorImg: "/img/instructors/sachin.jpg",
    instructorDetails:
      "Hello, I am Sachin, an experienced web developer with over 4 years of experience building websites for various freelance clients. I have a particular interest in web design and am excited to share my knowledge in this area with you in this training. I've also won 1st position in an inter-college web design competition and was awarded by the Additional Chief Secretary of Sikkim hosted by ICFAI college, Sikkim, giving me a deeper understanding of what it takes to succeed in this field. I look forward to creating an engaging and informative environment for you to learn the basics of web development.",
  },
];

export default courses;
