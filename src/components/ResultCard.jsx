import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";
const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };
  return (
    <div className="lg:w-[18vw] w-full relative h-80 bg-white rounded-xl overflow-hidden ">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            src={item.src}
            autoPlay
            loop
            muted
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-center w-full px-4 py-6 absolute bottom-0 text-white"
      >
        <h2 className="lg:text-lg font-semibold capitalize lg:h-14 h-12 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => addToCollection(item)}
          className="bg-red-600 active:scale-95 text-white rounded lg:px-3 px-2 py-1 ml-2 font-medium cursor-pointer "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
