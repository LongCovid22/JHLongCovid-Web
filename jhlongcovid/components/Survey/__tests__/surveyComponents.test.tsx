
import { render, screen, fireEvent } from '@testing-library/react';
import {Provider} from 'react-redux';
import { Welcome } from '../SurveyBody/Welcome';
import { SurveyWrapper } from '../SurveyWrapper';
import { createStore } from "../../../redux/store";
import React from "react";
import { Modal } from '@chakra-ui/react';

test('Testing Welcome Screen loads properly', () => {
  render(
  <Provider store = {createStore()}>
    <Modal isOpen={true} onClose={() => {}}>
      <SurveyWrapper onClose={() => {console.log('closed')}}/>
    </Modal>
    
  </Provider>
  );
});