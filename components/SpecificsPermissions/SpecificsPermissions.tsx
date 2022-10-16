import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { customAxios } from '../../axiosConfig';
import { TArrayResponse } from '../../types/TArrayResponse';
import {
  LoginCardForm,
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginCardImage,
  LoginCardImageContainer,
} from '../Login/styles';
import {
  Item,
  Label,
  SpecificPermissionCardFormTextArea,
  UserNoteCardFormContainer,
  UserNoteContainer,
} from './styles';

const SpecificsPermissions = ({ authToken, decoded }: any) => {
  const router = useRouter();
  const [timestamp, setTimestamp] = useState<TArrayResponse>();
  const _id = router.query._id;

  useEffect(() => {
    const findOneTimestampByCode = async () => {
      const getTimestampByCode = await customAxios.get(
        `/timestamp/specific/${_id}`,
        {
          headers: {
            token: authToken,
            role: decoded.rol,
          },

          params: {
            limit: 10,
            skip: 0,
          },
        }
      );

      setTimestamp(getTimestampByCode);
    };
    findOneTimestampByCode();
  }, [_id]);

  return (
    <UserNoteContainer>
      <UserNoteCardFormContainer>
        <LoginCardImageContainer>
          <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661552262/frontend-utec-timestamp/undraw_web_search_re_efla_xbw3x1.svg' />
        </LoginCardImageContainer>
        {timestamp?.data ? (
          timestamp.data.map((value: any) => {
            return (
              <LoginCardForm key={value._id}>
                <LoginCardFormTitle>
                  Teacher's note information
                </LoginCardFormTitle>

                <Item>
                  <Label>First Name</Label>
                  <LoginCardFormInput
                    readOnly
                    placeholder='Name'
                    type='text'
                    defaultValue={value.result.name}
                  />
                </Item>

                <Item>
                  <Label>Last Name</Label>
                  <LoginCardFormInput
                    readOnly
                    placeholder='Lastname'
                    type='text'
                    defaultValue={value.result.lastname}
                  />
                </Item>

                <Item>
                  <Label>Email</Label>
                  <LoginCardFormInput
                    readOnly
                    placeholder='Email'
                    type='email'
                    defaultValue={value.result.email}
                  />
                </Item>

                <Item>
                  <Label>Dialing</Label>
                  <LoginCardFormInput
                    readOnly
                    placeholder='Dialing'
                    type='text'
                    defaultValue={value.dialing}
                  />
                </Item>

                <Item>
                  <Label>Note of permission</Label>
                  <LoginCardFormInput
                    readOnly
                    placeholder='Dialing'
                    type='text'
                    defaultValue={value.note}
                  />
                  {/* <SpecificPermissionCardFormTextArea
                      defaultValue={value.note}
                      readOnly
                    /> */}
                </Item>
              </LoginCardForm>
            );
          })
        ) : (
          <LoginCardForm key={Math.floor(Math.random() * 5) + 1}>
            <LoginCardFormTitle>Teacher's note information</LoginCardFormTitle>
            <LoginCardFormInput
              placeholder='Teacher code'
              type='text'
              readOnly
            />
            <LoginCardFormInput placeholder='Name' type='text' readOnly />
            <LoginCardFormInput placeholder='Lastname' type='text' readOnly />
            <LoginCardFormInput placeholder='Email' type='email' readOnly />
            <LoginCardFormInput placeholder='Dialing' type='text' readOnly />
          </LoginCardForm>
        )}
      </UserNoteCardFormContainer>
    </UserNoteContainer>
  );
};

export default SpecificsPermissions;
