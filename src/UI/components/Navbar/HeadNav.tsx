import { Link } from "react-router-dom";

export const HeadNav = () => {
  return (
      <div className="flex items-center justify-between w-full">
        <Link to="/">
          Logo
        </Link>
      </div>
  );
};
