import React from 'react';
import { Field, Form } from 'react-final-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { actions } from '../store/ducks';
import PlusIcon from '../ui/icons/PlusIcon';

interface IAddPrayerInputProps {
  columnId: number;
}
interface INewPrayerValue {
  title: string;
}

export default function AddPrayerInput({ columnId }: IAddPrayerInputProps) {
  const dispatch = useDispatch();

  function onSubmit(values: INewPrayerValue) {
    console.log('values', values);

    const data = {
      columnId: columnId,
      values: { description: 'descr', ...values },
    };
    dispatch({ type: actions.prayers.addPrayer.type, data: data });
  }

  return (
    <InputWrap>
      <InpuView>
        <PlusIcon width={22} height={22} style={{ marginRight: 15 }} />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, form }: any) => (
            <View style={{ flexGrow: 1 }}>
              <Field name="title" placeholder="Add a prayer...">
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
      </InpuView>
    </InputWrap>
  );
}

const InputWrap = styled.View`
  padding: 15px;
`;
const InpuView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
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
  padding: 15px 0;
`;
