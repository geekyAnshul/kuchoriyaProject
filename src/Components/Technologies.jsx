import React from 'react';
import { useState } from 'react';

const techData = {
    Mobile: [
      { name: "iOS", img: "https://th.bing.com/th/id/OIP.9g4dkKVAUyciOuDI9_vEYQHaHa?rs=1&pid=ImgDetMain" },
      { name: "Android", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
      { name: "Flutter", img: "https://th.bing.com/th/id/OIP.lQMxn6huGV1vQ_hZAQbfLAHaHa?rs=1&pid=ImgDetMain" },
      { name: "React Native", img: "https://www.web-premiere.fr/wp-content/uploads/2019/05/react.svg" },
      { name: "Kotlin", img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
      { name: "Swift", img: "https://tschinz.gitbooks.io/swift-cheat-sheet/content/source/img/swift.png" },
      { name: "Titanium", img: "https://th.bing.com/th/id/OIP.4m36o_aGPLj_69-wsq_H6gHaFl?w=900&h=678&rs=1&pid=ImgDetMain" },
      { name: "xamarin", img: "https://e7.pngegg.com/pngimages/835/587/png-clipart-xamarin-computer-icons-mobile-app-development-user-interface-android-menu-button-blue-logo.png" },
    ],
    Frontend: [
        { name: "ReactJS", img: "https://www.web-premiere.fr/wp-content/uploads/2019/05/react.svg" },
      { name: "Vue.js", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
      { name: "Angular", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
        { name: "TypeScript", img: "https://www.logicbig.com/tutorials/misc/typescript/images/typescript.png" },
        { name: "TailwindCSS", img: "https://www.svgrepo.com/show/374118/tailwind.svg" },
        { name: "Bootstrap", img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
  
    ],
    Backend: [
      { name: "Node.js", img: "https://th.bing.com/th/id/OIP.K8n8iUVJN-3BTb9szXFesQHaHa?rs=1&pid=ImgDetMain" },
      { name: "Express.js", img: "https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain" },
      { name: "Django", img: "https://th.bing.com/th/id/OIP.lDn1_5NxaMxQRnA47YSp8gHaHa?rs=1&pid=ImgDetMain" },
      { name: "Java", img: "https://th.bing.com/th/id/OIP.sHwuYXwSWrSSLhrNRdRSPQAAAA?w=450&h=450&rs=1&pid=ImgDetMain" },
      { name: "Python", img: "https://th.bing.com/th/id/OIP.VkFNjxDRJh4rh1hNl3bItwAAAA?w=450&h=451&rs=1&pid=ImgDetMain" },
    ],
  };

const Technologies = () => {
    const [activeTab, setActiveTab] = useState("Mobile");
  return (
    <div className="container poppins mx-auto px-4 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4  py-8 poppins relative">
        

      <h2 className="text-3xl font-bold mb-4">Technologies <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
      We work with
</span></h2>
      <p className="text-lg mb-12">
        It's crucial to collaborate with specialists who are knowledgeable about the newest technologies in today's quickly increasing digital landscape.
      </p>
      <div className="tech-stack-container">
     
      <div className="tabs">
        {Object.keys(techData).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

    
      <div className="technologies">
        {techData[activeTab].map((tech, index) => (
          <div
            key={index}
            className="tech-item fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={tech.img} alt={tech.name} className="tech-icon object-cover" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Technologies;