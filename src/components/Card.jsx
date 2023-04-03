import firstImg from '../assets/image-equilibrium.jpg';
import clock from '../assets/icon-clock.svg';
import ether from '../assets/icon-ethereum.svg';
import view from '../assets/icon-view.svg';
import avatar from '../assets/image-avatar.png';

export default function Card() {
  return (
    <article className="bg-VerydarkblueC rounded-2xl flex flex-col shadow-2xl p-8 gap-6 w-[23rem]">
      <div className="relative">
        <img
          src={firstImg}
          alt="cardImg"
          className="w-[304px] h-[304px] rounded-2xl"
        />
        <div className="flex justify-center top-0 place-items-center absolute w-full h-full group">
          <img
            src={view}
            alt="viewImg"
            className="w-[3rem] h-[3rem] opacity-0 group-hover:opacity-100"
          />
          <div className="absolute rounded-2xl w-full h-full group-hover:bg-Cyan/40"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <a className="text-white font-semibold text-2xl hover:text-Cyan hover:cursor-pointer">
          Equilibrium #3429
        </a>
        <p className="text-Softblue">
          Our Equilibrium collection promotes balance and calm
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <img src={ether} alt="" className="max-h-5" />
            <p className="text-Cyan font-bold text-xl">0.041ETH</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={clock} alt="clockImg" className="max-h-5" />

            <p className="text-Softblue">3 days left</p>
          </div>
        </div>
        <hr className="border-VerydarkblueL" />
        <div className="flex gap-1 items-center text-lg">
          <img
            src={avatar}
            alt="avatar img"
            className="border-white border-2 rounded-full mr-4 max-h-[2rem]"
          />
          <p className="text-Softblue">Creation of</p>
          <a className="text-white hover:text-Cyan hover:cursor-pointer">
            Jules Wyvern
          </a>
        </div>
      </div>
    </article>
  );
}
