import { useState, useEffect } from "react"; 
import axios from "axios";

function useAxios(baseUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('');
  // const [fullUrl, setFullUrl] = useState('');

  // useEffect(() => {
  //   setFullUrl(`${baseUrl}${url}`);
  // }, [url, baseUrl]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(`${baseUrl}${url}`);
  //       setData(response.data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setIsLoading(false);
  //   };

  //   if (url !== '') {
  //     fetchData();
  //   }

  //   return () => {
  //     // Cleanup function
  //   };
  // }, [url,baseUrl]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(`${baseUrl}${url}`);
  //       setData(response.data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setIsLoading(false);
  //   };
  
  //   if (url !== '') {
  //     fetchData();
  //   }
  
  //   return () => {
  //     // Cleanup function
  //   };
  // }, [url, baseUrl]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${baseUrl}${url}`);
        // Ensure response data is always an array
        const responseData = Array.isArray(response.data) ? response.data : [response.data];
        setData(responseData);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
  
    if (url !== '') {
      fetchData();
    }
  
    return () => {
      // Cleanup function
    };
  }, [url, baseUrl]);

  const clearData = () =>{
    setData([]);
  }

  return { data, isLoading, error, setUrl, clearData };
}

export default useAxios;






//ORIG
// function useAxios(baseUrl) {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [url, setUrl]=useState('');
//     // const [baseUrl, setbaseUrl]=useState(baseUrl);
//     const [fullUrl, setfullUrl]=useState('');

//   useEffect(() =>{
//     setfullUrl(`${baseUrl}${url}`)

//   }, [url,baseUrl])
  
//     useEffect(() => {     

//       const fetchData = async () => {
//         debugger;
//         setIsLoading(true);
//         try {
//           const response = await axios.get(fullUrl);
//           setData(response.data);
//         } catch (error) {
//           setError(error);
//         }
//         setIsLoading(false);
//       };
  
//     if(fullUrl !== ''){
//       fetchData();
//   }
  
//       // Cleanup function
//       return () => {};
//     }, [fullUrl]);
  
//     return { data, isLoading, error, setUrl};
//   }

// export default useAxios;