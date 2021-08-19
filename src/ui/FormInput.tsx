import React from 'react';
import { Field } from 'react-final-form';
import { KeyboardTypeOptions } from 'react-native';
import styled from 'styled-components/native';

interface IFormInput {
  name: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}
export default function FormInput({
  name,
  placeholder,
  keyboardType,
  autoCapitalize,
}: IFormInput) {
  return (
    <Field name={name} placeholder={placeholder}>
      {({ input, placeholder }) => {
        return (
          <StyledTextInput
            placeholder={placeholder}
            onChangeText={input.onChange}
            autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
            keyboardType={keyboardType ? keyboardType : 'default'}
            value={input.value}
          />
        );
      }}
    </Field>
  );
}

const StyledTextInput = styled.TextInput`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;
