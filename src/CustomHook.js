import { useEffect, useState } from 'react';



const useAsyncHook = ( url, searchBook) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getUserAssignments = (url, searchBook) => {
       
      return fetch(
         `${url}?q=${searchBook}`
       );

   }
     useEffect(() => {
        const fetchBookList = async () => {
          try {
            const response = await getUserAssignments(url,searchBook);
            //const response = await axios('${url}?q=${searchBook}');
            const jsonData = await response.json();
            let data = jsonData.items.map(item => {
               console.log(item.volumeInfo.title);
               return item.volumeInfo.title;
             })
            setResult(data);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            setError(error.message);
          }
        };
        if (searchBook !== "") {
         fetchBookList();
         }
       }, [searchBook, url]);
      return [result, loading, error];
 }

 export default useAsyncHook;

//  axios
//   .get(`${API_BASE_URL}/students`)
//   .then(response => {
//      return response.data
//   })
//   .then(data => {
//      console.log(data)
//   })
//   .catch(error => {
//      console.log(error.response.data.error)
//   })

// export const post = async ( link,data ) => {
//    const option = {
//        method: 'post',
//        url: `${URL}${link}`,
//        validateStatus: function (status) {
//            return status >= 200 && status < 300; // default
//          },
//        data
//    };
   
//    try {
//        const response = await axios(option);
//    } catch (error) {
//        const { response } = error;
//        const { request, ...errorObject } = response; // take everything but 'request'
//        console.log(errorObject);
//    }