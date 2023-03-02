import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {useState} from 'react';

const useCloudDetector = (image: any) => {
  const [shouldRemove, setShouldRemove] = useState(false);

  const uploadImage = async () => {
    try {
      const response = await axios.get(image?.dataURL, {responseType: 'blob'});

      await axios.post(
        `https://us-central1-gophr-hackathon.cloudfunctions.net/file-upload`,
        response.data,
        {
          headers: {
            'Content-Type': image.file.type,
          },
        },
      );
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const {mutateAsync, isLoading, isSuccess} = useMutation(
    ['uploadImage'],
    async () => await uploadImage(),
    {
      onSuccess: () => {
        setShouldRemove(true);
      },
    },
  );

  return {
    isLoading,
    isSuccess,
    mutateAsync,
    setShouldRemove,
    shouldRemove,
  };
};

export default useCloudDetector;
