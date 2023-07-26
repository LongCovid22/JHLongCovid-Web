
import { render, screen, fireEvent } from '@testing-library/react';
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

  test('Welcome screen unit test', async() => {
    
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
    fireEvent.change(screen.getByPlaceholderText(/Enter Email/i), { target: { value: 'leo.hubert3@gmail.com' } });
  
    fireEvent.click(screen.getByText('Next'));    
    fireEvent.click(screen.getByText(/Find My Location/i));    
    expect(await screen.findByText(/New York County, New York/i, {}, { timeout: 2000 })).toBeInTheDocument();

  

  })
});