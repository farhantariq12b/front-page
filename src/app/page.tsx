import { Goldman, Rubik } from "next/font/google";

const GoldmanFont = Goldman({
  weight: "400",
  subsets: [],
});

const RubikFont = Rubik({
  weight: "300",
  subsets: [],
});

export default function Home() {
  return (
    <main className="flex items-center min-h-screen p-24">
      <div className="items-center max-w-screen-xl mx-auto lg:flex">
        <img src={"/bg.png"} width={420} height={618} alt="bg" />
        <div>
          <p
            className={`w-[600px] text-6xl font-extrabold lg:relative right-[16rem] bottom-8 ${GoldmanFont.className}`}
          >
            Turn Your Website Into Your Best Sales Person
          </p>
          <div className="lg:pl-32">
            <p className={`max-w-screen-sm text-2xl ${RubikFont.className}`}>
              Triple your sales with a pixel-perfect website. At SmartSite
              Studio, we don’t just design and write code, we build a
              revenue-driving machine for your business.
            </p>
            <div className="mt-7">
              <button
                className={`px-4 py-2 mr-4 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700 ${GoldmanFont.className}`}
              >
                Talk to Us
              </button>
              <button
                className={`px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent ${GoldmanFont.className}`}
              >
                See Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
