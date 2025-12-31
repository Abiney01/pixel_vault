import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice"

const CollectionPage = () => {
  const collection = useSelector(state=>state.collection.items)
  const dispatch = useDispatch()
  return (
    <div className="overflow-auto p-10">
      {collection.length > 0 ? <div className="flex justify-between mb-10">
        <h2 className="lg:text-3xl text-xl font-medium">Your Collections</h2>
        <button onClick={()=>dispatch(clearCollection())} className="active:scale-95 transition cursor-pointer bg-red-600 lg:px-6 lg:py-3 px-2 py-1 lg:text-lg font-medium rounded">Clear Collection</button>
      </div> : <h2 className="lg:text-4xl text-3xl text-center font-medium">Collection is empty</h2> }
      <div className="flex lg:justify-start justify-center flex-wrap gap-6">
      {collection.map((item,idx)=>(
        <div key={idx}><CollectionCard item = {item}/></div>
      ))}
    </div>
    </div>
  )
}

export default CollectionPage