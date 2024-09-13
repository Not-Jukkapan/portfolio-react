import MyImage from '../assets/bg1.png';

const FlipCard = () => {
    return (
        <div className="relative w-96 h-48 perspective-1000">
            <div
                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-linear transform-gpu hover:animate-rotate-y"
            >
                <div className='bg-white '>

               <img src={MyImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
