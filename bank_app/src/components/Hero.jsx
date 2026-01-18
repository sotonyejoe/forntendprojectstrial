import discount from '../assets/discount.svg';
import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-8 h-8' />
       <p className={`${styles.paragraph} ml-2`}>
         <span className="ml-2 text-white">20% </span> 
         <span>Discount for {''}  </span> 
         <span className='text-white'>1 Month Account</span>
       </p>
      </div>

      <div className='flex flex-row jusitfy-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semi-bold ss:text-[72px] 
        text-[52px] text-white ss:leading-[100px] leading-18.75'>The Next <br className='sm:block hidden' />{" "}
        <span className='text-gradient'>Generation </span>{" "}
        Payment Method</h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;


