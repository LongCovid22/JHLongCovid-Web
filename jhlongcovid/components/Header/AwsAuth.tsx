import React from "react";
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function AwsAuth () {
    return (
        <>
        
            Hello World

            <Button onClick={signOut}>Sign out</Button>
        </>
    )
}


export default withAuthenticator(AwsAuth)