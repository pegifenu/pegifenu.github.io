import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="px-5">
      <div className="rows-2 mx-auto flex max-w-6xl flex-col gap-10 py-20 md:columns-2 md:flex-row">
        <ProfileCard />

        <div className="flex flex-col gap-5 text-white">
          <h1 className="text-4xl">pegifenu</h1>
          <p>
            Hi. I go by my screen name pegifenu on the Internet, but you can
            call me Peg. I’m an aspiring software engineer currently pursuing a
            degree in computer science.
          </p>
          <p>
            Outside of computer science, I am interested in mathematics, digital
            2D/3D art/animation, music performance and production, and
            reading/writing good stories.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
