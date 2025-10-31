import "./App.css";
import Card from "./components/Card";
import ZoomOnScroll from "./components/ZoomOnScroll";

function App() {
  const cardData = [
    {
      title: "Stay motivated and reach your goals",
      description:
        " Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
      // imageUrl: "",
    },
    {
      title: "Talk about anything, anytime, anywhere",
      description:
        "Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.",
      // imageUrl: "",
    },
    {
      title: "Build a relationship with your tutor",
      description:
        " Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level.",
      // imageUrl: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center px-5 py-40">
        <div className="flex flex-col items-center  m-auto gap-6  ">
          <h1 className="text-6xl font-sans text-center max-w-140 text-[#12205A]">
            Introducing Speak Tutor. The world’s best language teacher.
          </h1>
          <p className="text-center text-[#8990AD] text-[15px] font-semibold max-w-140 ">
            Speak Tutor is your very own language tutor, dedicated to helping
            you improve 24/7. It may surprise you with all of its unique
            abilities.
          </p>
        </div>
        <div className=" flex flex-col w-200 px-20 py-5 mb-10 relative">
          <Card data={cardData} />
        </div>
        <div className="flex flex-col items-center max-w-3xl p-4 m-auto gap-6 ">
          <button className="btn btn-primary">jersica</button>
          <h1 className=" text-center text-4xl text-[#12205A]">
            “The first time I used Speak Tutor, I couldn’t believe it wasn’t a
            real person. It feels like it understands my motivations at a deep
            level and every lesson is made just for me.”
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
