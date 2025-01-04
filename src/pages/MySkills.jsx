const MySkills = () => {
  const skills = [
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "React.js", level: 85 },
    { name: "HTML & CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
  ];
  return (
    <div className="md:my-10">
      <div className="md:w-1/2 mx-auto text-center space-y-3 mb-16 md:my-10 mt-5 lg:my-16">
        <h1 className="md:text-5xl text-3xl font-bold inline-flex animate-text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-bg-[200%_auto] text-center text-transparent">
          My Skills
        </h1>
        <p className="text-gray-400">
          I’m a beginner frontend web developer excited to learn and grow. Here
          are the tools and technologies I’m working with to build awesome web
          experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-28 md:px-10 px-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-purple-600 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Proficiency: {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
