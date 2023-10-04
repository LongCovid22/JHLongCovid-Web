import {
    Tabs,
    Tab,
    TabList,
    Text,
    VStack,
    Center
} from "@chakra-ui/react";

import React, { useState, useRef, useEffect } from "react";


export const LongCovidToggle: React.FC<{ covidDataToggle: number, setCovidDataToggle: React.Dispatch<React.SetStateAction<number>> }> = ({ covidDataToggle, setCovidDataToggle }) => {



    const covidToggleRadius = "15px";
    const [width, setWidth] = useState(0);
    const myDivRef = useRef();

    return (

        <div style ={{width: "100%"}} >
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
                        {(covidDataToggle === 0) ? 'You are viewing statistics amongst the (13) participants that have a Long COVID history in the region.' : 'You are viewing numbers amongst the (75) participants in the region.'}
                    </Text>
                </VStack>
            </Center>

        </div>

    )
}