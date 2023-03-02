import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const useLastResults = () => {
  const getLastResults = async () => {
    try {
      const {data} = await axios.get(
        ` https://us-central1-gophr-hackathon.cloudfunctions.net/get-results`,
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery(['lastResults'], async () => await getLastResults());
};

export default useLastResults;
