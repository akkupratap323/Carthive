import { useSelector } from "react-redux"
import HomeItems from "../components/HomeItems"


const Home = () => {
   
    const items =  useSelector(store => store.items);
    console.log("got items",items)

    return (
        <main>
         <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl p-4">
      {items.map(item => (
        <HomeItems key={item.id} item={item} />
      ))}
    </div>
    </main> 
    )
}

export default Home