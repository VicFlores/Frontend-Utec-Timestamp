import axios from 'axios';
import React, { useRef, useState } from 'react';
import { customAxios } from '../../axiosConfig';
import { useRouter } from 'next/router';
import {
  UploadPhotoCardContainer,
  UploadPhotoCardInfo,
  UploadPhotoCardInput,
  UploadPhotoCardLabel,
  UploadPhotoCardPhoto,
  UploadPhotoCardFigure,
  UploadPhotoCardSpan,
  UploadPhotoMain,
  UploadPhotoMainContainer,
  Button,
  Message,
} from './styles';

const UploadImages = ({ authToken, decoded }: any) => {
  const { query } = useRouter();
  const inputOnePhotoRef = useRef<any>();
  const inputTwoPhotoRef = useRef<any>();
  const [onePhotoMessage, setOnePhotoMessage] = useState('Message');
  const [twoPhotoMessage, setTwoPhotoMessage] = useState('Message');

  const [oneImageSrc, setOneImageSrc] = useState(
    'https://res.cloudinary.com/vicflores11/image/upload/v1667063893/frontend-utec-timestamp/pexels-photo-5641960_oc0dgz.jpg'
  );

  const [twoImageSrc, setTwoImageSrc] = useState(
    'https://res.cloudinary.com/vicflores11/image/upload/v1667262267/frontend-utec-timestamp/pexels-photo-3284698_c9w9ds.jpg'
  );

  const inputOnePhotoHandler = (event: any) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setOneImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  const inputTwoPhotoHandler = (event: any) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setTwoImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  const uploadOnePhoto = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    const files = inputOnePhotoRef.current.files[0];
    formData.append('file', files);
    formData.append('upload_preset', 'k1r7fu9r');

    const resCloudinary = await axios.post(
      'https://api.cloudinary.com/v1_1/vicflores11/image/upload',
      formData
    );

    customAxios.defaults.headers.put['token'] = authToken;
    customAxios.defaults.headers.put['role'] = decoded.rol;
    const response = await customAxios.put(`/users/upload/${query.id}`, {
      photo_example_1: resCloudinary.data.secure_url,
    });

    setOnePhotoMessage(response.data);
  };

  const uploadTwoPhoto = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    const files = inputTwoPhotoRef.current.files[0];
    formData.append('file', files);
    formData.append('upload_preset', 'k1r7fu9r');

    const resCloudinary = await axios.post(
      'https://api.cloudinary.com/v1_1/vicflores11/image/upload',
      formData
    );

    customAxios.defaults.headers.put['token'] = authToken;
    customAxios.defaults.headers.put['role'] = decoded.rol;
    const response = await customAxios.put(`/users/upload/${query.id}`, {
      photo_example_2: resCloudinary.data.secure_url,
    });

    setTwoPhotoMessage(response.data);
  };

  return (
    <UploadPhotoMainContainer>
      <UploadPhotoMain>
        <UploadPhotoCardContainer>
          <UploadPhotoCardFigure>
            <UploadPhotoCardPhoto src={oneImageSrc} />
          </UploadPhotoCardFigure>

          <UploadPhotoCardInfo>
            <UploadPhotoCardLabel>
              <UploadPhotoCardInput
                type={'file'}
                ref={inputOnePhotoRef}
                onChange={inputOnePhotoHandler}
              />
              <UploadPhotoCardSpan />
            </UploadPhotoCardLabel>

            <Button type='submit' onClick={uploadOnePhoto}>
              Upload Photo
            </Button>
          </UploadPhotoCardInfo>

          {onePhotoMessage !== 'Message' ? (
            <Message>{onePhotoMessage}</Message>
          ) : null}
        </UploadPhotoCardContainer>

        <UploadPhotoCardContainer>
          <UploadPhotoCardFigure>
            <UploadPhotoCardPhoto src={twoImageSrc} />
          </UploadPhotoCardFigure>

          <UploadPhotoCardInfo>
            <UploadPhotoCardLabel>
              <UploadPhotoCardInput
                type={'file'}
                ref={inputTwoPhotoRef}
                onChange={inputTwoPhotoHandler}
              />
              <UploadPhotoCardSpan />
            </UploadPhotoCardLabel>

            <Button type='submit' onClick={uploadTwoPhoto}>
              Upload Photo
            </Button>
          </UploadPhotoCardInfo>

          {twoPhotoMessage !== 'Message' ? (
            <Message>{twoPhotoMessage}</Message>
          ) : null}
        </UploadPhotoCardContainer>
      </UploadPhotoMain>
    </UploadPhotoMainContainer>
  );
};

export default UploadImages;
