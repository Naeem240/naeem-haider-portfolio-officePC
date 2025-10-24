import React, { useState } from "react";

const projectDetails = {
  "1": {
    "title": "Career Ostad | AI-Powered Job Matching Platform",
    "description": [
      "💼 Career Ostad — A modern job and recruitment platform designed to connect companies with the most suitable candidates efficiently.",
      "The platform features three roles: Admin, Company, and Candidate, each with tailored dashboards to manage jobs, applications, and profiles effectively.",
      "AI-powered tools help match the perfect candidate to job listings or suggest ideal job opportunities for candidates based on their skills, experience, and preferences.",
      "Candidates can build resumes, get AI-driven feedback on how strong their profiles are, and receive personalized career advice to improve employability.",
      "Companies can post jobs, search for suitable candidates, and get AI suggestions to optimize their hiring decisions.",
      "The interface is fully responsive, optimized for mobile, tablet, and desktop, providing a consistent experience across devices.",
      "Security is ensured through Firebase Authentication and JWT tokens, protecting sensitive data and user interactions.",
      "Key development challenges included integrating AI-driven matching and advice while maintaining seamless multi-role functionality, solved through modular design and efficient state management.",
      "Future plans include adding real-time chat between candidates and companies, advanced analytics for hiring trends, and enhanced AI-driven career insights."
    ],
    "techStack": [
      "Next.js",
      "Next-Auth",
      "Express",
      "MongoDB",
      "Gemini AI API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    "liveUrl": "https://career-ostad.vercel.app/",
    "repoUrl": "https://github.com/Naeem240/CareerOstad-AI-Job-Matching",
    "challenges": "Integrating AI-driven candidate-job matching and personalized career advice while maintaining a smooth experience for multiple roles.",
    "improvements": "Adding real-time messaging, deeper AI analytics for career guidance, and improved candidate-company matching algorithms.",
    "images": [
      "https://i.ibb.co.com/TxN3ykyW/image.png",
      "https://i.ibb.co.com/tMfv6KjT/image.png",
      "https://i.ibb.co.com/0jMhCPZ5/image.png",
      "https://i.ibb.co.com/gbtJfnjr/image.png"
    ]
  },
  "2": {
    title: "Newsly",
    description: [
      "📰 Newsly — Your Modern News Aggregator Platform designed to deliver the latest news in a seamless, user-friendly experience.",
      "This platform empowers users with role-based access — Admins, Publishers, and Normal users all enjoy tailored dashboards ensuring efficient management and interaction.",
      "Premium memberships allow users to post unlimited articles, encouraging high-quality content creation and engagement.",
      "A robust article approval workflow guarantees that only curated, trusted news reaches readers.",
      "Advanced filtering and trending sorting ensure users can easily find the hottest and most relevant news.",
      "The interface is fully responsive, optimized for mobile, tablet, and desktop views, providing consistent experience across devices.",
      "Security is paramount: Firebase Authentication and JWT tokens protect sensitive routes and data.",
      "Image uploads are handled securely with ImgBB, offering real-time previews to streamline content creation.",
      "Throughout development, challenges centered around balancing complex role management with fluid UX, which was overcome by modular design and clear state handling.",
      "Future plans include integrating real-time notifications, AI-powered content recommendations, and enhanced analytics to boost user engagement."
    ],
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Firebase Authentication",
      "Express",
      "MongoDB",
      "SweetAlert2",
    ],
    liveUrl: "https://newsly-552bf.web.app/",
    repoUrl: "https://github.com/Naeem240/newsly-main",
    challenges:
      "Implementing seamless role-based access control alongside premium subscriptions while maintaining a fast, intuitive user experience.",
    improvements:
      "Adding push notifications, AI-driven content curation, and expanding mobile app support to increase user retention.",
    images: [
      "https://i.ibb.co.com/N6DpFrKh/image.png",
      "https://i.ibb.co.com/cXhgdJKR/image.png",
      "https://i.ibb.co.com/bgs39tcG/image.png",
      "https://i.ibb.co.com/twjV6Wx4/image.png",
      "https://i.ibb.co.com/RGy0j2Jh/image.png",
    ],
  },
  "3": {
    title: "LibriSphere",
    description: [
      "🌐 LibriSphere is a comprehensive and intuitive Library Management System designed to streamline book management and user experience.",
      "The platform features a clean, modern UI built with Tailwind CSS and powered by React and Framer Motion for smooth animations.",
      "Users and admins benefit from efficient resource management, powerful search and filtering, and engaging visual feedback.",
      "Responsive design ensures that LibriSphere looks stunning on all devices — from phones to desktops.",
      "Key challenges involved designing a UX that simplifies complex library operations while maintaining aesthetic appeal.",
      "We incorporated multiple third-party libraries to enhance user interactivity, including SweetAlert2 for notifications and React Tooltip for additional guidance.",
      "Looking forward, plans include adding user reviews, a recommendation engine, and deeper integration with backend data analytics.",
    ],
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
      "Axios",
      "SweetAlert2",
      "React Tooltip",
    ],
    liveUrl: "https://libri-sphere.web.app",
    repoUrl: "https://github.com/Naeem240/libri-sphere",
    challenges:
      "Balancing advanced library management features with a simple, elegant user interface that is accessible to all user types.",
    improvements:
      "Enhancing search filters, integrating social features, and optimizing for large-scale library collections.",
    images: [
      "https://i.ibb.co.com/k2QPCjW7/image.png",
      "https://i.ibb.co.com/YBkbtWXP/image.png",
      "https://i.ibb.co.com/v4vwXyR1/image.png",
      "https://i.ibb.co.com/nqzyHz0Z/image.png",
      "https://i.ibb.co.com/kgYqZqnM/image.png",
    ],
  },
  "4": {
    title: "RoomSync",
    description: [
      "RoomSync is a specialized roommate matching platform catering primarily to male students and professionals.",
      "It provides a tailored matching system that pairs users based on lifestyle preferences, location, and compatibility to ensure harmonious living arrangements.",
      "Users can create detailed profiles, browse potential roommates, and communicate securely within the platform.",
      "Built with React, Vite, and Tailwind CSS, the site offers a fast, responsive, and modern UI enhanced with smooth animations.",
      "The biggest development challenge was implementing the matching algorithm and secure, real-time messaging within a simple and intuitive interface.",
      "Planned improvements include adding support for female roommates, a mobile app, and further refining the matching logic using AI techniques.",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React CountUp",
      "React Typing Animation",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://room-sync-5dd52.web.app/",
    repoUrl: "https://github.com/Naeem240/roomsync-main",
    challenges:
      "Creating an effective and privacy-respecting matching system with smooth real-time communication was technically demanding.",
    improvements:
      "Expanding user profiles, integrating AI for better matching, and launching companion mobile apps for iOS and Android.",
    images: [
      "https://i.ibb.co.com/M5xTx96Z/image.png",
      "https://i.ibb.co.com/xqj7Jsdh/image.png",
      "https://i.ibb.co.com/xwcyn6r/image.png",
      "https://i.ibb.co.com/qYtK0sFv/image.png",
      "https://i.ibb.co.com/Q7m3CmXJ/image.png",
    ],
  },
};

export default function ProjectDetail({ id }) {
  const detail = projectDetails[id];
  const [mainImage, setMainImage] = useState(detail.images[0]);

  if (!detail)
    return <p className="text-center text-red-500">Project not found.</p>;

  return (
    <div className="w-full mx-auto p-6 bg-black px-6 md:px-10 lg:px-15 rounded-lg shadow-lg text-white space-y-6">
      <h2 className="text-3xl text-center font-bold text-[#f306f3]">{detail.title}</h2>

      {/* Image Gallery */}
      <div>
        <img
          src={mainImage}
          alt={`${detail.title} screenshot`}
          className="border-2 border-[#f306f3] w-full rounded-lg mb-4 shadow-lg object-cover object-top max-h-96"
          loading="lazy"
        />
        <div className="flex gap-3 justify-center overflow-x-auto">
          {detail.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setMainImage(img)}
              className={`w-20 h-12 rounded-md overflow-hidden border-2 ${mainImage === img
                ? "border-[#f306f3]"
                : "border-transparent hover:border-[#f306f3]"
                } transition-colors duration-300 shrink-0`}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={img}
                alt={`${detail.title} thumbnail ${i + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Description paragraphs */}
      <h3 className="font-bold text-xl mb-2">Project Details:</h3>
      <div className="space-y-3 text-gray-300 text-justify">
        {detail.description.map((para, i) => (
          <p key={i} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="font-bold text-xl mb-2">Tech Stack:</h3>
        <ul className="list-disc list-inside text-gray-200 grid grid-cols-2 gap-x-4 gap-y-1">
          {detail.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex gap-6 text-[#f306f3] text-lg font-semibold">
        <a
          href={detail.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Live Project
        </a>
        <a
          href={detail.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub Repo
        </a>
      </div>

      {/* Challenges */}
      <div>
        <h3 className="font-bold text-xl mb-2">Challenges Faced:</h3>
        <p className="text-gray-300 leading-relaxed">{detail.challenges}</p>
      </div>

      {/* Improvements */}
      <div>
        <h3 className="font-bold text-xl mb-2">
          Potential Improvements & Future Plans:
        </h3>
        <p className="text-gray-300 leading-relaxed">{detail.improvements}</p>
      </div>
    </div>
  );
}
