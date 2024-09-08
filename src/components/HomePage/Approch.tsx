import priority from "../../assets/priority.png";
import extractionImage from "../../assets/efficientDataExtraction.png";
import routing from "../../assets/routing1.png";
import predictiveMaintance from "../../assets/priority.png";
import continuousImp from "../../assets/continuousImprovement.png";

const data = [
  {
    id: 1,
    title: "Automated Categorization and Prioritization",
    description:
      "Our proposed solution will streamline complaint management by integrating AI with the Rail Madad platform to automatically categorize complaints using image and video recognition. Urgency levels will be defined, and a feedback system will continuously improve model accuracy and performance.",
    image: priority,
  },
  {
    id: 2,
    title: "Enhanced Data Extraction",
    description:
      "After a complaint is made, the proposed solution will utilize Optical Character Recognition (OCR) that will extract and verify additional textual details from images or videos, such as signs or documents, to enhance the context of the complaint. Metadata analysis, including extracting timestamps and locations, will further support faster and more accurate resolution of the complaint.",
    image: extractionImage,
  },
  {
    id: 3,
    title: "Automated Response and Routing",
    description:
      "An AI chatbot will acknowledge complaints with a drop-down menu for user input, collecting necessary details for AI-based categorization. For smart routing, the system will assign complaints to the correct department via a super admin who designates mini admins. AI will optimize routing based on common resolution paths.",
    image: routing,
  },
  {
    id: 4,
    title: "Predictive Maintenance",
    description:
      "Our proposed solution will use machine learning to predict recurring issues by analyzing data trends, identifying common problems in specific zones or trains, and enabling proactive checks on the most problematic areas to reduce future complaints.",
    image: predictiveMaintance,
  },
  {
    id: 5,
    title: "Feedback and Continuous Improvement",
    description:
      "We will rely on sentiment analysis using certain keywords and classifications to spot areas of improvement. Tracking performance of the entire complaint resolution process will help us identify redundant departments and monitor resolution speed. User experience will be enhanced by our solution’s feedback section.",
    image: continuousImp,
  },
];

const Approch = () => {
  return (
    <div className="p-8 min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        Proposed Solution
      </h1>

      <div className="flex flex-col items-center space-y-12">
        {data.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row items-center w-full max-w-4xl 
                    transition-all
                    hover:scale-105
                    ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } bg-white shadow-md rounded-lg overflow-hidden`}
          >
            <div className="md:w-1/2">
              <img src={section.image} alt={section.title} className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-red-500 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approch;
