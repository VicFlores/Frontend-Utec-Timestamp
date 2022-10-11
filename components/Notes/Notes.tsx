import React, { useContext, useEffect, useState } from 'react';
import { customAxios } from '../../axiosConfig';
import { AuthContext } from '../../context/AuthTokenContext';
import { TArrayResponse } from '../../types/TArrayResponse';
import { useRouter } from 'next/router';
import {
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginContainer,
} from '../Login/styles';

import {
  Item,
  Label,
  UserNoteCardForm,
  UserNoteCardFormContainer,
  UserNoteCardFormTextArea,
  UserNoteContainer,
} from './styles';
import Layout from '../Layout/Layout';

const Notes = () => {
  const { authCookie, cookieDecoded }: any = useContext(AuthContext);
  const router = useRouter();
  const [timestamp, setTimestamp] = useState<TArrayResponse>();
  const _id = router.query._id;

  useEffect(() => {
    if (authCookie?.data) {
      const findOneTimestampByCode = async () => {
        const getTimestampByCode = await customAxios.get(
          `/timestamp/specific/${_id}`,
          {
            headers: {
              token: authCookie.data,
              role: cookieDecoded.data?.role,
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
    }
  }, [_id]);

  return (
    <Layout>
      <UserNoteContainer>
        <UserNoteCardFormContainer>
          {timestamp?.data ? (
            timestamp.data.map((value: any) => {
              return (
                <UserNoteCardForm key={value._id}>
                  <LoginCardFormTitle>
                    Teacher's note information
                  </LoginCardFormTitle>

                  <Item>
                    <Label>First Name</Label>
                    <LoginCardFormInput
                      defaultValue={value.result.name}
                      placeholder='Name'
                      type='text'
                      readOnly
                    />
                  </Item>

                  <Item>
                    <Label>Last Name</Label>
                    <LoginCardFormInput
                      defaultValue={value.result.lastname}
                      placeholder='Lastname'
                      type='text'
                      readOnly
                    />
                  </Item>

                  <Item>
                    <Label>Email</Label>
                    <LoginCardFormInput
                      defaultValue={value.result.email}
                      placeholder='Email'
                      type='email'
                      readOnly
                    />
                  </Item>

                  <Item>
                    <Label>Dialing</Label>
                    <LoginCardFormInput
                      defaultValue={value.dialing}
                      placeholder='Dialing'
                      type='text'
                      readOnly
                    />
                  </Item>

                  <Item>
                    <Label>Note of permission</Label>
                    <UserNoteCardFormTextArea
                      defaultValue={value.note}
                      readOnly
                    />
                  </Item>
                </UserNoteCardForm>
              );
            })
          ) : (
            <UserNoteCardForm key={Math.floor(Math.random() * 5) + 1}>
              <LoginCardFormTitle>
                Teacher's note information
              </LoginCardFormTitle>
              <LoginCardFormInput
                placeholder='Teacher code'
                type='text'
                readOnly
              />
              <LoginCardFormInput placeholder='Name' type='text' readOnly />
              <LoginCardFormInput placeholder='Lastname' type='text' readOnly />
              <LoginCardFormInput placeholder='Email' type='email' readOnly />
              <LoginCardFormInput placeholder='Dialing' type='text' readOnly />
            </UserNoteCardForm>
          )}
        </UserNoteCardFormContainer>
      </UserNoteContainer>
    </Layout>
  );
};

export default Notes;
