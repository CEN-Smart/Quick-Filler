import { Link } from "react-router-dom";

export function LearnMoreButton({label,href}) {
  return (
    <Link to={href} className='bg-[#409CD4] text-white px-4 py-2 rounded-md'>
      {label}
    </Link>
  );
}
