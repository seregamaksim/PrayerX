import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Keyboard, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { actions, selectors } from '../store/ducks';
import PlusIcon from '../ui/icons/PlusIcon';
import PrayersList from '../components/PrayersList';

interface INewPrayerValue {
  title: string;
}

export default function PrayersScreen({ route }: any) {
  const dispatch = useDispatch();
  const { columnId } = route.params;

  function onSubmit(values: INewPrayerValue) {
    const data = { columnId: columnId, values: { description: '', ...values } };
    dispatch({ type: actions.prayers.addPrayer.type, data: data });
  }
  return (
    <Container>
      <InputWrap>
        <InpuView>
          <PlusIcon width={22} height={22} style={{ marginRight: 15 }} />
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
              <View style={{ flexGrow: 1 }}>
                <Field name="title" placeholder="Add a prayer...">
                  {({ input, placeholder }) => {
                    return (
                      <StyledInput
                        placeholder={placeholder}
                        onChange={input.onChange}
                        value={input.value}
                        onSubmitEditing={handleSubmit}
                      />
                    );
                  }}
                </Field>
              </View>
            )}></Form>
        </InpuView>
      </InputWrap>
      <PrayersList columnId={columnId} />
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  display: flex;
  background-color: #fff;
`;
const InputWrap = styled.View`
  padding: 15px;
`;
const InpuView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border: 1px solid #e5e5e5;
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
`;
