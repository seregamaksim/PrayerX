import React from 'react';
import { Field, Form } from 'react-final-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { actions } from '../store/ducks';
import CommentIcon from '../ui/icons/CommentIcon';

interface IAddCommentInputProps {
  prayerId: number;
}
interface INewCommentValue {
  body: string;
}

export default function AddCommentInput({ prayerId }: IAddCommentInputProps) {
  const dispatch = useDispatch();

  function onSubmit(values: INewCommentValue) {
    const data = {
      prayerId: prayerId,
      values: { ...values },
    };
    dispatch({ type: actions.comments.addComment.type, data: data });
  }

  return (
    <InputWrap>
      <InputView>
        <CommentIcon width={22} height={22} style={{ marginRight: 15 }} />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, form }: any) => (
            <View style={{ flexGrow: 1 }}>
              <Field name="body" placeholder="Add a comment...">
                {({ input, placeholder }) => {
                  return (
                    <StyledInput
                      placeholder={placeholder}
                      onChange={input.onChange}
                      value={input.value}
                      onSubmitEditing={() => {
                        handleSubmit(values);
                        form.reset();
                      }}
                    />
                  );
                }}
              </Field>
            </View>
          )}
        />
      </InputView>
    </InputWrap>
  );
}

const InputWrap = styled.View``;
const InputView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  border: 1px solid #e5e5e5;
  border-top-width: 0;
  border-radius: 10px;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
`;
const StyledInput = styled.TextInput`
  display: flex;
  flex-grow: 1;
  font-size: 17px;
  line-height: 20px;
  color: #9c9c9c;
  width: 100%;
  padding: 15px 0;
`;
