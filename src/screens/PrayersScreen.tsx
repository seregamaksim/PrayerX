import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Animated,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { actions, selectors } from '../store/ducks';
import PlusIcon from '../ui/icons/PlusIcon';
import { SwipeListView } from 'react-native-swipe-list-view';

interface INewPrayerValue {
  title: string;
}
interface ISwipeData {
  direction: 'left' | 'right';
  isOpen: boolean;
  key: number;
  value: number;
}
export default function PrayersScreen({ route }: any) {
  const dispatch = useDispatch();
  const { columnId } = route.params;
  const [animationIsRunning, setAnimationIsRunning] = useState(false);
  const dataPrayers = useSelector(
    selectors.prayers.selectPrayersByColumnId(columnId),
  );
  const rowTranslateAnimatedValues: any = {};
  dataPrayers.forEach((item, i) => {
    rowTranslateAnimatedValues[`${item.id}`] = new Animated.Value(1);
  });
  const [listViewData, setListView] = useState(
    dataPrayers.map(item => ({
      ...item,
      key: item.id,
    })),
  );

  useEffect(() => {
    dispatch({ type: actions.prayers.getPrayers.type });
  }, [dispatch]);

  const onSwipeValueChange = (swipeData: ISwipeData) => {
    const { key, value } = swipeData;
    console.log('swipeData', swipeData);

    if (value < -Dimensions.get('window').width && !animationIsRunning) {
      setAnimationIsRunning(true);
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        const newData = [...listViewData];
        const prevIndex = listViewData.findIndex(item => item.key === key);
        newData.splice(prevIndex, 1);
        setListView(newData);
        console.log('end');
        setAnimationIsRunning(false);
      });
    }
  };
  const renderItem = (data: any) => (
    <Animated.View style={styles.rowFrontContainer}>
      <Pressable
        onPress={() => console.log('You touched me')}
        style={styles.rowFront}>
        <View>
          <Text>{data.item.title}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </View>
    </View>
  );

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
      <SwipeListView
        disableRightSwipe
        data={listViewData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-Dimensions.get('window').width}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
      />
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
`;
const StyledInput = styled.TextInput`
  font-size: 17px;
  line-height: 20px;
  color: #9c9c9c;
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  rowFrontContainer: {},
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});
