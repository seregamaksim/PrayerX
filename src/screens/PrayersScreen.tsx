import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { actions, selectors } from '../store/ducks';
import PlusIcon from '../ui/icons/PlusIcon';

interface INewPrayerValue {
  title: string;
}

export default function PrayersScreen({ route }: any) {
  const dispatch = useDispatch();
  const { columnId } = route.params;
  const dataPrayers = useSelector(
    selectors.prayers.selectPrayersByColumnId(columnId),
  );

  useEffect(() => {
    dispatch({ type: actions.prayers.getPrayers.type });
    console.log('dataPrayers', dataPrayers);
  }, [dispatch]);

  function onSubmit(values: INewPrayerValue) {
    const data = { columnId: columnId, values };
    console.log('columnId', columnId);

    console.log('values', values);
  }
  return (
    <Container>
      <InputWrap>
        <InpuView>
          <PlusIcon width={22} height={22} style={{ marginRight: 15 }} />
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <View>
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
    </Container>
  );
}

const Container = styled.ScrollView`
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
`;
const StyledInput = styled.TextInput`
  font-size: 17px;
  line-height: 20px;
  color: #9c9c9c;
`;
