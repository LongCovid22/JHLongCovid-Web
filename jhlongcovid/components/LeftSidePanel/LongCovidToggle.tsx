import {
    Tabs,
    Tab,
    TabList,
    Text,
    VStack,
    Center
} from "@chakra-ui/react";

import React, { useState, useRef, useEffect } from "react";

import { RealOrMock } from "../../pages";

import mockResult from "../../mockResult.json";


export const LongCovidToggle: React.FC<{ rOM?: RealOrMock, 
    covidDataToggle: number, 
    setCovidDataToggle: React.Dispatch<React.SetStateAction<number>>,
    realData: any
}> = ({rOM, covidDataToggle, setCovidDataToggle, realData }) => {

    const covidToggleRadius = "15px";
    const [width, setWidth] = useState(0);
    const myDivRef = useRef();
    const [longCovidPop, setLongCovidPop] = useState<number>(0);
    const [allDataPop, setAllDataPop] = useState<number>(0);

    useEffect(() => {
        console.log(rOM);
        if (rOM === RealOrMock.MOCK) {
            setLongCovidPop(mockResult.county.covidSummary.covidAndLongCovidOrLongCovidOver4Weeks.total);
            setAllDataPop(mockResult.county.totalFullEntries);
        } else if (rOM === RealOrMock.REAL) {
            setLongCovidPop(realData.longCovid);
            setAllDataPop(realData.totalFullEntries);
        }
    } , [rOM, realData]);

    return (

        <div style={{ width: "100%" }} >
            <Center w='100%'>
                <VStack>
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
                    </Tabs>
                    <Text fontSize='md'>
                        {(covidDataToggle === 0) ? `You are viewing statistics amongst the (${longCovidPop}) participants that have a Long COVID history in the region.` : `You are viewing numbers amongst the (${allDataPop}) survey participants in the region.`}
                    </Text>
                </VStack>
            </Center>

        </div>

    )
}