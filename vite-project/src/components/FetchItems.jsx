import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
   const fetchStatus = useSelector(store => store.fetchStatus);
   console.log(fetchStatus);
   const dispatch = useDispatch();

   useEffect(() => {
     if (fetchStatus.fetchDone) return;

     const controller = new AbortController();
     const signal = controller.signal;
     
     dispatch(fetchStatusActions.markFetchingStarted());

     fetch("http://localhost:8097/items", { signal })
       .then((res) => res.json())
       .then(({ items }) => {
         dispatch(fetchStatusActions.markFetchDone());
         dispatch(fetchStatusActions.markFetchingFinished());
         dispatch(itemsActions.addInitialItems(items));
        
       })
       .catch(error => {
         if (error.name === 'AbortError') {
           console.log('Fetch aborted');
         } else {
           console.error('Error fetching items:', error);
         }
       });

     return () => {
       console.log("cleaning up useEffect");
       controller.abort();
     };
   }, [dispatch, fetchStatus.fetchDone]);

   return (
     <>
      
     </>
   );
}

export default FetchItems;
