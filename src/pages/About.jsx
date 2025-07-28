import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <div className="rows-2 mx-auto flex max-w-300 flex-col gap-10 px-10 py-20 md:columns-2 md:flex-row">
      <ProfileCard />

      <div className="flex flex-col gap-5 text-white">
        <h1 className="text-4xl">pegifenu</h1>
        <p>
          Hi. I go by pegifenu or polyethylene glycol on the Internet, but you
          can call me Peg or Glycol. I’m an aspiring software engineer currently
          pursuing a degree in computer science.
        </p>
        <p>
          Outside of computer science, I enjoy and am improving my skills in
          mathematics, digital 2D/3D art/animation, music performance and
          production, and reading/writing good stories.
        </p>
        <p>
          Feel free to contact me if you are interested in working on a project
          together.
        </p>
      </div>
    </div>
  );
};

export default About;
