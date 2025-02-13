import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagId = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item => bagId.includes(item.id));

  return (
    <main className="flex flex-col items-center justify-center w-full px-4 py-10"> {/* Center the main content */}
      <div className="bag-page w-full lg:w-3/4 flex flex-col lg:flex-row gap-4"> {/* Flexbox layout with gap */}
        <div className="bag-items-container w-full lg:w-2/3 p-4"> {/* Width adjustments and padding */}
          {finalItems.map(item => <BagItem key={item.id} item={item} />)}
        </div>
        <div className="w-full lg:w-1/3 p-4"> {/* Width adjustments and padding */}
          <BagSummary />
        </div>
      </div>
    </main>
  )
}

export default Bag;
