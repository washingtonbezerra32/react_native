import React, { Component } from 'react';
import Principal from './src/components/helloword';
import Banana from './src/components/bananas';
import Lots from "./src/components/lots_of_greetings";
import Blink from "./src/components/blinkapp";
import Lotsofstyles from "./src/components/lotsofstyles";
import  FixedDimensionsBasics from "./src/components/FixedDimensionsBasics";
import  FlexDimensionsBasics from "./src/components/FlexDimensionsBasics";
import  Flex from "./src/flex/FlexDirectionBasics";
import  JustifyContentBasics from "./src/flex/JustifyContentBasics";
import  AlignItemsBasics from "./src/flex/AlignItemsBasics";
import  PizzaTranslator from "./src/components/PizzaTranslator";
import  ButtonBasics from "./src/components/ButtonBasics";
import  Touchables from "./src/components/Touchables";
import  IScrolledDownAndWhatHappenedNextShockedMe from "./src/components/IScrolledDownAndWhatHappenedNextShockedMe";
import  FlatListBasics from "./src/list/FlatListBasics";
import  SectionListBasics from "./src/list/SectionListBasics";
import  FetchExample from "./src/networking/FetchExample";







import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
        <FetchExample />
    );
  }
}

