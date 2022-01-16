import Slider from "../Slider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  console.log("cate : ", category);
  console.log("category re-render");
  return (
    <div className="w-full">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl font-bold text-gray-200 hover:underline">
          {category?.category}
        </h1>
        {category?.id && (
          <Link
            to={`/browser/category/${category.id}`}
            className="text-sm font-semibold text-gray-300 hover:underline"
          >
            SEE ALL
          </Link>
        )}
      </div>
      <Slider playlist={category?.list} />
    </div>
  );
};

Categories.propTypes = {
  category: PropTypes.object,
};

export default Categories;
