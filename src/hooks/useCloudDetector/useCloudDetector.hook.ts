import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {useState} from 'react';

const useCloudDetector = (image: any) => {
  const [shouldRemove, setShouldRemove] = useState(false);
  const uploadImage = async () => {
    // const formData = new FormData();
    // formData.append('image', image);
    try {
      await axios.post(
        `https://us-central1-gophr-hackathon.cloudfunctions.net/file-upload`,
        image,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  // const { mutateAsync: uploadImage } = useMutation<TContact, Error, { userId: TUser['id']; profileId: TProfile['id'] }>(

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
