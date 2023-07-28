
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import {Provider} from 'react-redux';
import { createStore } from "../../../redux/store";
import React from "react";

import '@testing-library/jest-dom/extend-expect';
import { Survey } from '../../Header/Survey';
import { TestContext } from '../../Header/ProfileCheckin';
import path from 'path';

// dotenv.config();
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env.local') });




console.log(process.env.GOOGLEMAPS_API_KEY);

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const clickRadioWithTextAndClickNext = (answer: string): void => {
  fireEvent.click(screen.getByRole('radio', { name: new RegExp(answer, 'i') }));
  fireEvent.click(screen.getByText('Next'));
}

const targetInputWithTestIdAndFillWithValue = (target: string, value: string) => {
  fireEvent.change(screen.getByTestId(target), { target: { value: value } });
}


const clickScaleRadioButton = (question: string, value: number): void => {
    const text = screen.getByText(new RegExp(question, 'i'));
    // Find the div containing "feeling bad about yourself"
    const feelingBadDiv = text.parentElement;
    // Find the sibling div (nextElementSibling) that contains the input you want
    const siblingDiv = feelingBadDiv?.nextElementSibling;
    // Find the input with value="0" within the sibling div
    const inputWithValue0 = siblingDiv?.querySelector('input[value="'+ value +'"]');
    
    expect(inputWithValue0).toBeInTheDocument(); // Check if the input element is in the document
    fireEvent.click(inputWithValue0!);
}


describe("Geolocation Test", () => {
  let mockGeolocation;
  beforeEach(() => {
    mockGeolocation = {
      getCurrentPosition: jest.fn()
        .mockImplementation((success) => success({
          coords: {
            latitude: 40.7831,
            longitude: -73.9712,
          },
        })),
      watchPosition: jest.fn(),
      clearWatch: jest.fn(),
    };
    (global as any).navigator.geolocation = mockGeolocation;
    global.scrollTo = jest.fn();
    // delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
  });

  afterAll(() => {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
  });

  //needed for env within jest. dotenv includes everything in .env.local in root to process.env
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });
  
  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  test('Welcome screen unit test', async () => {
    const test = true;
    const { debug } = render(
      <Provider store={createStore()}>
        <TestContext.Provider value={test}>
          <Survey></Survey>
        </TestContext.Provider>
      </Provider>
    );
    const ParticipateButton = screen.getByText('Participate');
    fireEvent.click(ParticipateButton);
  
    const welcomeText = screen.getByText('Welcome to the Johns Hopkins Long COVID Dashboard!');
    const descriptionText1 = screen.getByText('The COVID-19 pandemic has caused unprecedented health and social challenges worldwide. To better understand the long-term consequences of this disease, a team of researchers from Johns Hopkins University and other institutions has developed this dashboard to amplify the voices of Long-COVID sufferers and raise awareness of their challenges and needs.');
    const descriptionText2 = screen.getByText('Your feedback on COVID-19 is important to us. We want to know how the pandemic has impacted your well-being, lifestyle, work, or social connections. Please fill out our survey questionnaire to share your experiences with us.');
    const BeginSurvey = screen.getByText('Begin Survey');
    expect(welcomeText).toBeInTheDocument();
    expect(descriptionText1).toBeInTheDocument();
    expect(descriptionText2).toBeInTheDocument();
    expect(BeginSurvey).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Begin Survey'));
    expect(screen.getByText(/Thank you for considering participation/i)).toBeInTheDocument();
    expect(screen.getByText(/Thank you for your time and your contribution to this crucial/i)).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText(/Enter Email/i), { target: { value: 'hopkinslongcovidteam@gmail.com' } });
  
    fireEvent.click(screen.getByText('Next'));    
    fireEvent.click(screen.getByText(/Find My Location/i));    
    expect(await screen.findByText(/New York County, New York/i, {}, { timeout: 4000 })).toBeInTheDocument();

    const ageInput = screen.getByTestId('age-input').querySelector('input');
    if(ageInput) {
      fireEvent.change(ageInput, { target: { value: '23' } });
    }
    targetInputWithTestIdAndFillWithValue('sex-input', 'Male');
    targetInputWithTestIdAndFillWithValue('height-ft-input', '5');
    targetInputWithTestIdAndFillWithValue('height-in-input', '10');
    targetInputWithTestIdAndFillWithValue('weight-input', '150');
    
    clickRadioWithTextAndClickNext('Asian');
    clickRadioWithTextAndClickNext('Yes');
    clickRadioWithTextAndClickNext('1 infection');
    clickRadioWithTextAndClickNext('Yes');
    clickRadioWithTextAndClickNext('1 COVID');

    fireEvent.change(screen.getByPlaceholderText('Enter date'), { target: { value: '2023-11-08' } });
    fireEvent.click(screen.getByText('Next'));
    clickRadioWithTextAndClickNext('Yes');
    clickRadioWithTextAndClickNext('Yes');
    clickRadioWithTextAndClickNext('Yes');
    clickRadioWithTextAndClickNext('Not at all');
    clickRadioWithTextAndClickNext('Yes');
    
    fireEvent.click(screen.getByDisplayValue(/Antiviral/i));
    fireEvent.click(screen.getByText('Next'));

    clickRadioWithTextAndClickNext('Yes');

    fireEvent.change(screen.getByPlaceholderText('Enter number of days'), { target: { value: '5' } });
    fireEvent.click(screen.getByText('Next'));
    
    clickRadioWithTextAndClickNext('Yes');

    clickRadioWithTextAndClickNext('Do not know');

    clickRadioWithTextAndClickNext('Unsure');

    clickRadioWithTextAndClickNext('Pfizer');
    clickRadioWithTextAndClickNext('Excellent');
    clickRadioWithTextAndClickNext('Excellent');
    clickRadioWithTextAndClickNext('Completely');
    clickRadioWithTextAndClickNext('None');

    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByDisplayValue(/Headache/i));
    fireEvent.click(screen.getByText('Next'));

    clickRadioWithTextAndClickNext('Excellent');
    clickRadioWithTextAndClickNext('Excellent');
    clickRadioWithTextAndClickNext('Excellent');
    clickRadioWithTextAndClickNext('Never');


    clickScaleRadioButton('Little interest or pleasure in doing things?', 0);
    clickScaleRadioButton('Feeling down, depressed, or hopeless?', 0);
    clickScaleRadioButton('Trouble falling or staying asleep, or sleeping too much?', 0);
    clickScaleRadioButton('Feeling tired or having little energy?', 0);
    clickScaleRadioButton('Poor appetite or overeating?', 0);
    clickScaleRadioButton('Feeling bad about yourself', 0);
    clickScaleRadioButton('Trouble concentrating on things', 0);
    clickScaleRadioButton('Moving or speaking so slowly', 0);    


    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByDisplayValue(/Heart problems/i));
    fireEvent.click(screen.getByText('Next'));


    clickRadioWithTextAndClickNext('Yes');
    clickRadioWithTextAndClickNext('Yes');
    clickRadioWithTextAndClickNext('Very difficult');
    clickRadioWithTextAndClickNext('Working outside of the home');

    fireEvent.click(screen.getByText('Skip'));
    fireEvent.click(screen.getByText('Finish'));

    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i), {
      timeout: 10000,
    });


    //get whatever data we have already from the store
    debug(undefined, 70000);
  }, 20000)
});



