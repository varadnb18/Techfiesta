// import React from "react";
// import Title from "../UI/Title";
// import "./Pages.css";
// import varad from "../../Images/varad.webp";

// function NewFP() {
//   return (
//     <div className="element">
//       <div className="image-container">
//         <img src={varad} alt="Shape" className="top-image" />
//       </div>
//       <div className="mr-5 ml-5">
//         <Title />
//       </div>
//       <div className="grid grid-cols-2 w-full h-full mt-2">
//         <div className="relative flex justify-center items-center w-[36rem] mx-auto ">
//           <div className="flex flex-col items-start max-w-[40rem] mx-auto text-left translate-y-[-45px] translate-x-[25px]">
//             <h1 className="text-[52px] font-medium leading-[1.1] ">
//               <span className="A">A</span>n{" "}
//               <span className="word">AI-driven</span> <br />
//               virtual trainer for <br />
//               better health and fitness
//             </h1>
//             <p className="text-gray-500 text-lg mt-4 ">
//               Boost Productivity with AI for Effective Compliance,
//               <br /> Improved Adherence, and Impactful Results
//             </p>
//             <button className="demo mt-4 text-white px-6 py-4 rounded-2xl text-lg font-semibold">
//               Book A Demo
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col items-center p-10 mr-4">
//           {/* Top Image */}
//           <div className="rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               src="https://www.youtube.com/embed/3TJ_sOgMZd8?autoplay=1&controls=0&enablejsapi=1&rel=0&loop=1&modestbranding=1&showsearch=0&showinfo=0&autohide=1&playsinline=1&cc_load_policy=0"
//               title="Trainer Video"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               className="w-[570px] h-[315px] rounded-sm"
//             />
//           </div>

//           {/* Feature Cards */}
//           <div className="mt-3 flex gap-4">
//             {/* Card 1 - Prescriptive Feedback */}
//             <div className="w-[275px] p-6 bg-[#c0fcdc] rounded-md shadow-md flex flex-col items-center">
//               <img
//                 src="https://www.elitefitforyou.com/img/prescriptive_feedback.8251a5e6.svg"
//                 alt="Feedback"
//                 className="w-full mb-2 h-[100px]"
//               />
//               <h3 className="text-lg font-bold text-center">
//                 PRESCRIPTIVE FEEDBACK
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Real-time prescriptive feedback improves movement quality.
//               </p>
//             </div>

//             {/* Card 2 - Accuracy Score */}
//             <div className="w-[275px] p-6 border-2 border-[#c0fcdc] rounded-md shadow-md flex flex-col items-center">
//               <img
//                 src="https://www.elitefitforyou.com/img/accuracy_score.fc64ae27.svg"
//                 alt="Accuracy Score"
//                 className="w-full mb-2 h-[100px]"
//               />
//               <h3 className="text-lg font-bold text-center">ACCURACY SCORE</h3>
//               <p className="text-gray-600 text-center">
//                 Real-time accuracy scores assess movement correctness.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewFP;

import React from "react";
import Title from "../UI/Title";
import "./Pages.css";
import varad from "../../Images/varad.webp";

function NewFP() {
  return (
    <div className="element">
      <div className="image-container">
        <img src={varad} alt="Shape" className="top-image" />
      </div>
      <div className="mr-5 ml-5">
        <Title />
      </div>
      <div className="grid grid-cols-2 w-full mt-2 h-[40.3rem]">
        <div className="relative flex justify-center items-center w-[36rem] mx-auto ">
          <div className="flex flex-col items-start max-w-[40rem] mx-auto text-left translate-y-[-45px] translate-x-[25px]">
            <h1 className="text-[52px] font-medium leading-[1.1] ">
              <span className="A">A</span>n{" "}
              <span className="word">AI-driven</span> <br />
              virtual trainer for <br />
              better health and fitness
            </h1>
            <p className="text-gray-500 text-lg mt-4 ">
              Boost Productivity with AI for Effective Compliance,
              <br /> Improved Adherence, and Impactful Results
            </p>
            <button className="demo mt-4 text-white px-6 py-4 rounded-2xl text-lg font-semibold">
              Book A Demo
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center p-10 mr-32 h-[600px]">
          {/* Top Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/3TJ_sOgMZd8?autoplay=1&controls=0&enablejsapi=1&rel=0&loop=1&modestbranding=1&showsearch=0&showinfo=0&autohide=1&playsinline=1&cc_load_policy=0"
              title="Trainer Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-[630px] h-[530px] rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFP;
