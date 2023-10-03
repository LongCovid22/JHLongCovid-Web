import {
    Tabs,
    Tab,
    TabList,
  } from "@chakra-ui/react";

  import React, {  useState } from "react";


  export const LongCovidToggle: React.FC<{ covidDataToggle: number, setCovidDataToggle: React.Dispatch<React.SetStateAction<number>> }> = ({ covidDataToggle, setCovidDataToggle }) => {
    const covidToggleRadius = "15px";
    return (
        <>
            <Tabs
                ringColor={"spiritBlue.200"}
                color={"heritageBlue.600"}
                variant={'unstyled'}
                h="100%"
                onClick={() => {
                    if (covidDataToggle === 0) {
                        setCovidDataToggle(1)
                    } else {
                        setCovidDataToggle(0)
                    }
                }}
                index={covidDataToggle}
                bg={"gray.200"}
                style={{ borderRadius: covidToggleRadius }}
            >
                <TabList>
                    <Tab
                        style={{ borderRadius: `${covidToggleRadius} 0px   0px   ${covidToggleRadius}` }}
                        _selected={{ color: 'white', bg: 'heritageBlue.600' }}
                        fontSize={"13px"}
                    >
                        LONG COVID DATA
                    </Tab>
                    <Tab
                        style={{ borderRadius: ` 0px ${covidToggleRadius} ${covidToggleRadius} 0px  `, whiteSpace: 'pre' }}
                        _selected={{ color: 'white', bg: 'heritageBlue.600' }}
                        // onClick={}
                        fontSize={"13px"}
                    >
                        {'         ALL DATA         '}
                    </Tab>
                </TabList>
            </Tabs></>
    )
}