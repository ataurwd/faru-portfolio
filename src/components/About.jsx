import aboutimg from "../assets/about.webp";
const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-10 px-5 md:px-20 md:mt-10 gap-10">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={aboutimg}
          alt="Web Development Journey"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h4 className="underline font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">About ME</h4>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Our Journey into the World of Web Development
        </h2>
        <p className="mb-6 leading-relaxed">
          It all began with a simple curiosity: how does the internet really
          work? From creating our first basic webpage to mastering the
          intricacies of modern frameworks, web development has been more than
          just coding – it’s been an adventure of creativity, problem-solving,
          and endless learning. Each line of code tells a story of growth,
          innovation, and the desire to build something impactful for the
          digital world.
        </p>
        <p className="mb-6 leading-relaxed">
          Our mission is to make learning web development accessible and
          enjoyable for everyone. Whether you are just starting out or looking
          to refine your skills, we’re here to guide you through this exciting
          journey. Dive into hands-on projects, explore interactive lessons, and
          join a community passionate about turning ideas into reality on the
          web. Let’s learn, create, and grow together!
        </p>
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
