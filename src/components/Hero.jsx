import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className="bg-primary-light py-24">
      <div className="mx-auto max-w-7xl px-8 md:grid-cols-2-items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I am Mony</h1>
          <p className="mt-4 text-3xl text-dark capitalize tracking-wide">Front-End Developer</p>
          <p className="mt-2 text-lg text-dark capitalize tracking-wide">turning ideas into interctive reality</p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-mid hover:text-black duration-300" />
            </a>

            <a href="#">
              <FaLinkedin className="h-8 w-8 text-mid hover:text-black duration-300" />
            </a>

            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-mid hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article></article>
      </div>
    </div>
  );
};
export default Hero;
