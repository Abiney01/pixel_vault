import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-10 px-10 py-6 lg:justify-start justify-center">
      {tabs.map((elem, idx) => (
        <button
          className={`${activeTab==elem?"bg-blue-700":"bg-gray-600"} transition active:scale-95 lg:px-5 px-3 py-2 uppercase font-medium cursor-pointer rounded`}
          key={idx}
          onClick={()=>dispatch(setActiveTabs(elem))}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
