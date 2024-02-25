import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

RealTimeBenefits.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  linkLabel: PropTypes.string,
};

export function RealTimeBenefits({ img, alt, label, link, linkLabel, icon }) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <img src={img} alt={alt} />
      <p className='text-lg md:text-xl lg:text-2xl text-center'>{label}</p>
      <Link to={link} className='flex items-center gap-2'>
        <span>{linkLabel}</span>
        <span className='text-[#409CD4]'>{icon}</span>
      </Link>
    </div>
  );
}
