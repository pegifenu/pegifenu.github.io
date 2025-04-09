import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row px-10 py-20">
      <ProfileCard className="" />
      <div className="flex flex-col text-white pl-10 gap-5">
        <h1 className="text-5xl">Daphne Feng</h1>
        <p>I’m an aspiring software engineer currently pursuing a degree in Computer Science at UCLA.</p>
      </div>
      
    </div>
  );
}

export default About;