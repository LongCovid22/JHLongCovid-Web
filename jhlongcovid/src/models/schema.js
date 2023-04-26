export const schema = {
    "models": {
        "MapData": {
            "name": "MapData",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "stateAbbrev": {
                    "name": "stateAbbrev",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lat": {
                    "name": "lat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "long": {
                    "name": "long",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "covidCount": {
                    "name": "covidCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "longCovid": {
                    "name": "longCovid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "phq8AboveTen": {
                    "name": "phq8AboveTen",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "recoveredCount": {
                    "name": "recoveredCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "longCovidOverFourWeeks": {
                    "name": "longCovidOverFourWeeks",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "longCovidOverTwelveWeeks": {
                    "name": "longCovidOverTwelveWeeks",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "topMedicalCondition": {
                    "name": "topMedicalCondition",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "covidSummary": {
                    "name": "covidSummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "CovidSummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "recoverySummary": {
                    "name": "recoverySummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "RecoverySummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "vaccinationSummary": {
                    "name": "vaccinationSummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "VaccinationSummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "globalHealthSummary": {
                    "name": "globalHealthSummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "GlobalHealthSummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "patientHealthQuestionnaireSummary": {
                    "name": "patientHealthQuestionnaireSummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "PatientHealthQuestionnaireSummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "symptomSummary": {
                    "name": "symptomSummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "SymptomSummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "medicalConditionsSummary": {
                    "name": "medicalConditionsSummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "MedicalConditionsSummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "socialSummary": {
                    "name": "socialSummary",
                    "isArray": false,
                    "type": {
                        "nonModel": "SocialSummary"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "totalFullEntries": {
                    "name": "totalFullEntries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MapData",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "level",
                            "lat",
                            "long"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byLevelAndNameAndState",
                        "queryField": "mapDataByLevelNameState",
                        "fields": [
                            "level",
                            "name",
                            "stateAbbrev"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastSubmission": {
                    "name": "lastSubmission",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "lastSignIn": {
                    "name": "lastSignIn",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "notificationFreq": {
                    "name": "notificationFreq",
                    "isArray": false,
                    "type": {
                        "enum": "NotificationFrequency"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "notificaitonMethod": {
                    "name": "notificaitonMethod",
                    "isArray": false,
                    "type": {
                        "enum": "NotificationMethod"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEmail",
                        "queryField": "usersByEmail",
                        "fields": [
                            "email",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SurveyEntry": {
            "name": "SurveyEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "surveyVersion": {
                    "name": "surveyVersion",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "surveyType": {
                    "name": "surveyType",
                    "isArray": false,
                    "type": {
                        "enum": "SurveyType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "covidEntry": {
                    "name": "covidEntry",
                    "isArray": false,
                    "type": {
                        "model": "CovidEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntryCovidEntryId"
                    }
                },
                "vaccinationEntry": {
                    "name": "vaccinationEntry",
                    "isArray": false,
                    "type": {
                        "model": "VaccinationEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntryVaccinationEntryId"
                    }
                },
                "socialDeterminantsEntry": {
                    "name": "socialDeterminantsEntry",
                    "isArray": false,
                    "type": {
                        "model": "SocialDeterminantsEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntrySocialDeterminantsEntryId"
                    }
                },
                "recoveryEntry": {
                    "name": "recoveryEntry",
                    "isArray": false,
                    "type": {
                        "model": "RecoveryEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntryRecoveryEntryId"
                    }
                },
                "globalHealthEntry": {
                    "name": "globalHealthEntry",
                    "isArray": false,
                    "type": {
                        "model": "GlobalHealthEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntryGlobalHealthEntryId"
                    }
                },
                "PatientHealthEntry": {
                    "name": "PatientHealthEntry",
                    "isArray": false,
                    "type": {
                        "model": "PatientHealthEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntryPatientHealthEntryId"
                    }
                },
                "symptomsEntry": {
                    "name": "symptomsEntry",
                    "isArray": false,
                    "type": {
                        "model": "SymptomEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntrySymptomsEntryId"
                    }
                },
                "monthlyEntry": {
                    "name": "monthlyEntry",
                    "isArray": false,
                    "type": {
                        "model": "MonthlyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "surveyEntry",
                        "targetName": "surveyEntryMonthlyEntryId"
                    }
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "surveyEntryCovidEntryId": {
                    "name": "surveyEntryCovidEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntryVaccinationEntryId": {
                    "name": "surveyEntryVaccinationEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntrySocialDeterminantsEntryId": {
                    "name": "surveyEntrySocialDeterminantsEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntryRecoveryEntryId": {
                    "name": "surveyEntryRecoveryEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntryGlobalHealthEntryId": {
                    "name": "surveyEntryGlobalHealthEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntryPatientHealthEntryId": {
                    "name": "surveyEntryPatientHealthEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntrySymptomsEntryId": {
                    "name": "surveyEntrySymptomsEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntryMonthlyEntryId": {
                    "name": "surveyEntryMonthlyEntryId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "SurveyEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEmail",
                        "queryField": "surveysByEmail",
                        "fields": [
                            "email",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateSurveyEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countySurveyEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byType",
                        "queryField": "surveysByType",
                        "fields": [
                            "surveyType",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CovidEntry": {
            "name": "CovidEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "covidEntrySurveyEntryId"
                    }
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "beenInfected": {
                    "name": "beenInfected",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "timesPositive": {
                    "name": "timesPositive",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "lastPositive": {
                    "name": "lastPositive",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "tested": {
                    "name": "tested",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "positiveTest": {
                    "name": "positiveTest",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "testMethod": {
                    "name": "testMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hospitalized": {
                    "name": "hospitalized",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "timesHospitalized": {
                    "name": "timesHospitalized",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "symptomatic": {
                    "name": "symptomatic",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "symptomsPreventScale": {
                    "name": "symptomsPreventScale",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "medicationsPrescribed": {
                    "name": "medicationsPrescribed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "medicationsTaken": {
                    "name": "medicationsTaken",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CovidEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateCovidEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countyCovidEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "VaccinationEntry": {
            "name": "VaccinationEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "vaccinationEntrySurveyEntryId"
                    }
                },
                "totalVaccineShots": {
                    "name": "totalVaccineShots",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "vaccinated": {
                    "name": "vaccinated",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "vaccineType": {
                    "name": "vaccineType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dateOfLastVaccine": {
                    "name": "dateOfLastVaccine",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "VaccinationEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateVaccEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countyVaccEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SocialDeterminantsEntry": {
            "name": "SocialDeterminantsEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "socialDeterminantsEntrySurveyEntryId"
                    }
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "hasMedicalInsurance": {
                    "name": "hasMedicalInsurance",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "difficultCoveringExpenses": {
                    "name": "difficultCoveringExpenses",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentWorkSituation": {
                    "name": "currentWorkSituation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "SocialDeterminantsEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateSocialDetEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countySocialDetEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RecoveryEntry": {
            "name": "RecoveryEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "recoveryEntrySurveyEntryId"
                    }
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "recovered": {
                    "name": "recovered",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "lengthOfRecovery": {
                    "name": "lengthOfRecovery",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RecoveryEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateRecovEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countyRecovEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "GlobalHealthEntry": {
            "name": "GlobalHealthEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "globalHealthEntrySurveyEntryId"
                    }
                },
                "healthRank": {
                    "name": "healthRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "physicalHealthRank": {
                    "name": "physicalHealthRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carryPhysicalActivities": {
                    "name": "carryPhysicalActivities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fatigueRank": {
                    "name": "fatigueRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "painLevel": {
                    "name": "painLevel",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "GlobalHealthEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateGHEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countyGHEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PatientHealthEntry": {
            "name": "PatientHealthEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "patientHealthEntrySurveyEntryId"
                    }
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "generalHealthResults": {
                    "name": "generalHealthResults",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": []
                },
                "totalScore": {
                    "name": "totalScore",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PatientHealthEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "statePatientHealthEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countyPatientHealthEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SymptomEntry": {
            "name": "SymptomEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "symptomEntrySurveyEntryId"
                    }
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "symptoms": {
                    "name": "symptoms",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "qualityOfLifeRank": {
                    "name": "qualityOfLifeRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "mentalHealthRank": {
                    "name": "mentalHealthRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "socialSatisfactionRank": {
                    "name": "socialSatisfactionRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carryOutSocialActivitiesRank": {
                    "name": "carryOutSocialActivitiesRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "anxietyInPastWeekRank": {
                    "name": "anxietyInPastWeekRank",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "medicalConditions": {
                    "name": "medicalConditions",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hasLongCovid": {
                    "name": "hasLongCovid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "SymptomEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateSymptomEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countySymptomEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MonthlyEntry": {
            "name": "MonthlyEntry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "countyState": {
                    "name": "countyState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "surveyEntry": {
                    "name": "surveyEntry",
                    "isArray": false,
                    "type": {
                        "model": "SurveyEntry"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "monthlyEntrySurveyEntryId"
                    }
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "enum": "Race"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "results": {
                    "name": "results",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MonthlyEntries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStateSortByDate",
                        "queryField": "stateMonthlyEntryByDate",
                        "fields": [
                            "state",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCountySortByDate",
                        "queryField": "countyMonthlyEntryByDate",
                        "fields": [
                            "countyState",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Race": {
            "name": "Race",
            "values": [
                "WHITE",
                "BLACK",
                "ASIAN",
                "NATIVE",
                "HISPANIC",
                "OTHER",
                "NONE"
            ]
        },
        "NotificationFrequency": {
            "name": "NotificationFrequency",
            "values": [
                "DAILY",
                "WEEKLY",
                "MONTHLY"
            ]
        },
        "NotificationMethod": {
            "name": "NotificationMethod",
            "values": [
                "EMAIL",
                "PUSH"
            ]
        },
        "SurveyType": {
            "name": "SurveyType",
            "values": [
                "DAILY",
                "WEEKLY",
                "MONTHLY",
                "GUEST"
            ]
        }
    },
    "nonModels": {
        "Response": {
            "name": "Response",
            "fields": {
                "statusCode": {
                    "name": "statusCode",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "body": {
                    "name": "body",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CovidSummary": {
            "name": "CovidSummary",
            "fields": {
                "beenInfected": {
                    "name": "beenInfected",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "timesPositive": {
                    "name": "timesPositive",
                    "isArray": false,
                    "type": {
                        "nonModel": "OneToThreePlus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hospitalized": {
                    "name": "hospitalized",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "timesHospitalized": {
                    "name": "timesHospitalized",
                    "isArray": false,
                    "type": {
                        "nonModel": "OneToThreePlus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tested": {
                    "name": "tested",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "positiveTest": {
                    "name": "positiveTest",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNoDontKnow"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "symptomatic": {
                    "name": "symptomatic",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "symptomsPreventScale": {
                    "name": "symptomsPreventScale",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToVeryMuch"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "medicationsPrescribed": {
                    "name": "medicationsPrescribed",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNoDontKnow"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "medicationsTakenCount": {
                    "name": "medicationsTakenCount",
                    "isArray": false,
                    "type": {
                        "nonModel": "MedicationsAvailable"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "YesNo": {
            "name": "YesNo",
            "fields": {
                "yes": {
                    "name": "yes",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "no": {
                    "name": "no",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SummaryResultsByDemo": {
            "name": "SummaryResultsByDemo",
            "fields": {
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryValues"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryValues"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryValues"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SummaryValues": {
            "name": "SummaryValues",
            "fields": {
                "ranges": {
                    "name": "ranges",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "values": {
                    "name": "values",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "OneToThreePlus": {
            "name": "OneToThreePlus",
            "fields": {
                "one": {
                    "name": "one",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "two": {
                    "name": "two",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "three": {
                    "name": "three",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "threePlus": {
                    "name": "threePlus",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "doNotKnow": {
                    "name": "doNotKnow",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "YesNoDontKnow": {
            "name": "YesNoDontKnow",
            "fields": {
                "yes": {
                    "name": "yes",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "no": {
                    "name": "no",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "doNotKnow": {
                    "name": "doNotKnow",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "NotAtAllToVeryMuch": {
            "name": "NotAtAllToVeryMuch",
            "fields": {
                "notAtAll": {
                    "name": "notAtAll",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "alittleBit": {
                    "name": "alittleBit",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "somewhat": {
                    "name": "somewhat",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "quiteABit": {
                    "name": "quiteABit",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "veryMuch": {
                    "name": "veryMuch",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MedicationsAvailable": {
            "name": "MedicationsAvailable",
            "fields": {
                "antiViral": {
                    "name": "antiViral",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "oralSteroids": {
                    "name": "oralSteroids",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "antiBiotics": {
                    "name": "antiBiotics",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "other": {
                    "name": "other",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "doNotKnow": {
                    "name": "doNotKnow",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RecoverySummary": {
            "name": "RecoverySummary",
            "fields": {
                "recovered": {
                    "name": "recovered",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "avglengthOfRecovery": {
                    "name": "avglengthOfRecovery",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryAvgByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SummaryAvgByDemo": {
            "name": "SummaryAvgByDemo",
            "fields": {
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryAvgValues"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryAvgValues"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryAvgValues"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SummaryAvgValues": {
            "name": "SummaryAvgValues",
            "fields": {
                "ranges": {
                    "name": "ranges",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "values": {
                    "name": "values",
                    "isArray": true,
                    "type": {
                        "nonModel": "CountAverage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CountAverage": {
            "name": "CountAverage",
            "fields": {
                "count": {
                    "name": "count",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "average": {
                    "name": "average",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VaccinationSummary": {
            "name": "VaccinationSummary",
            "fields": {
                "vaccinated": {
                    "name": "vaccinated",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNoDontKnow"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "totalVaccineShots": {
                    "name": "totalVaccineShots",
                    "isArray": false,
                    "type": {
                        "nonModel": "OneToFivePlus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "vaccineType": {
                    "name": "vaccineType",
                    "isArray": false,
                    "type": {
                        "nonModel": "VaccineTypes"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OneToFivePlus": {
            "name": "OneToFivePlus",
            "fields": {
                "one": {
                    "name": "one",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "two": {
                    "name": "two",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "three": {
                    "name": "three",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "four": {
                    "name": "four",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "five": {
                    "name": "five",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fivePlus": {
                    "name": "fivePlus",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "doNotKnow": {
                    "name": "doNotKnow",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VaccineTypes": {
            "name": "VaccineTypes",
            "fields": {
                "pfizer": {
                    "name": "pfizer",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "moderna": {
                    "name": "moderna",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "janssen": {
                    "name": "janssen",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "novavax": {
                    "name": "novavax",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "other": {
                    "name": "other",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "doNotKnow": {
                    "name": "doNotKnow",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "GlobalHealthSummary": {
            "name": "GlobalHealthSummary",
            "fields": {
                "healthRank": {
                    "name": "healthRank",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExcellentToPoor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "physicalHealthRank": {
                    "name": "physicalHealthRank",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExcellentToPoor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "carryPhysicalActivities": {
                    "name": "carryPhysicalActivities",
                    "isArray": false,
                    "type": {
                        "nonModel": "CompletelyToNotAtAll"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fatigueRank": {
                    "name": "fatigueRank",
                    "isArray": false,
                    "type": {
                        "nonModel": "NoneToVerySevere"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "avgpainLevel": {
                    "name": "avgpainLevel",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryAvgByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ExcellentToPoor": {
            "name": "ExcellentToPoor",
            "fields": {
                "excellent": {
                    "name": "excellent",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "veryGood": {
                    "name": "veryGood",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "good": {
                    "name": "good",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fair": {
                    "name": "fair",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "poor": {
                    "name": "poor",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CompletelyToNotAtAll": {
            "name": "CompletelyToNotAtAll",
            "fields": {
                "completely": {
                    "name": "completely",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "mostly": {
                    "name": "mostly",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "moderately": {
                    "name": "moderately",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "aLittle": {
                    "name": "aLittle",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "notAtAll": {
                    "name": "notAtAll",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "NoneToVerySevere": {
            "name": "NoneToVerySevere",
            "fields": {
                "none": {
                    "name": "none",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "mild": {
                    "name": "mild",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "moderate": {
                    "name": "moderate",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "severe": {
                    "name": "severe",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "verySevere": {
                    "name": "verySevere",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PatientHealthQuestionnaireSummary": {
            "name": "PatientHealthQuestionnaireSummary",
            "fields": {
                "littleInterestThings": {
                    "name": "littleInterestThings",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "downDepressedHopeless": {
                    "name": "downDepressedHopeless",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sleepProblems": {
                    "name": "sleepProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tiredNoEnergy": {
                    "name": "tiredNoEnergy",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "dietProblems": {
                    "name": "dietProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "badAboutSelf": {
                    "name": "badAboutSelf",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "concentrationProblems": {
                    "name": "concentrationProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "slowOrRestless": {
                    "name": "slowOrRestless",
                    "isArray": false,
                    "type": {
                        "nonModel": "NotAtAllToNearlyEveryDay"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "avgPHQScore": {
                    "name": "avgPHQScore",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryAvgByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "NotAtAllToNearlyEveryDay": {
            "name": "NotAtAllToNearlyEveryDay",
            "fields": {
                "notAtAll": {
                    "name": "notAtAll",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "severalDays": {
                    "name": "severalDays",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "moreThanHalfTheDays": {
                    "name": "moreThanHalfTheDays",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nearlyEveryDay": {
                    "name": "nearlyEveryDay",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SymptomSummary": {
            "name": "SymptomSummary",
            "fields": {
                "symptomCounts": {
                    "name": "symptomCounts",
                    "isArray": false,
                    "type": {
                        "nonModel": "SymptomsAvailabLe"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "qualityOfLife": {
                    "name": "qualityOfLife",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExcellentToPoor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "mentalHealthRank": {
                    "name": "mentalHealthRank",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExcellentToPoor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "socialSatisfactionRank": {
                    "name": "socialSatisfactionRank",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExcellentToPoor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "carryOutSocialActivitiesRank": {
                    "name": "carryOutSocialActivitiesRank",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExcellentToPoor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "anxietyInPastWeekRank": {
                    "name": "anxietyInPastWeekRank",
                    "isArray": false,
                    "type": {
                        "nonModel": "NeverToAlways"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SymptomsAvailabLe": {
            "name": "SymptomsAvailabLe",
            "fields": {
                "headache": {
                    "name": "headache",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "bodyMuscleAche": {
                    "name": "bodyMuscleAche",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "feverChillsSweatsFlushing": {
                    "name": "feverChillsSweatsFlushing",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "faintDizzyGoofy": {
                    "name": "faintDizzyGoofy",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "postExertionalMalaise": {
                    "name": "postExertionalMalaise",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "weaknessInArmsLegs": {
                    "name": "weaknessInArmsLegs",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "shortnessOfBreath": {
                    "name": "shortnessOfBreath",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "cough": {
                    "name": "cough",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "palpitations": {
                    "name": "palpitations",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "swellingOfLegs": {
                    "name": "swellingOfLegs",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "indigestionNausea": {
                    "name": "indigestionNausea",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "bladderProblem": {
                    "name": "bladderProblem",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nerveProblems": {
                    "name": "nerveProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "brainFog": {
                    "name": "brainFog",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "anxietyDepressionNightmares": {
                    "name": "anxietyDepressionNightmares",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "difficultyFallingAsleep": {
                    "name": "difficultyFallingAsleep",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sleepyDuringDaytime": {
                    "name": "sleepyDuringDaytime",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "loudSnoring": {
                    "name": "loudSnoring",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "uncomfortableFeelingsInLegs": {
                    "name": "uncomfortableFeelingsInLegs",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "skinRash": {
                    "name": "skinRash",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "lossOfChangeInSmell": {
                    "name": "lossOfChangeInSmell",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "excessiveThirst": {
                    "name": "excessiveThirst",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "excessiveDryMouth": {
                    "name": "excessiveDryMouth",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "visionProblems": {
                    "name": "visionProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hearingProblems": {
                    "name": "hearingProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fertilityProblemsForWomen": {
                    "name": "fertilityProblemsForWomen",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "NeverToAlways": {
            "name": "NeverToAlways",
            "fields": {
                "never": {
                    "name": "never",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rarely": {
                    "name": "rarely",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sometimes": {
                    "name": "sometimes",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "often": {
                    "name": "often",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "always": {
                    "name": "always",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MedicalConditionsSummary": {
            "name": "MedicalConditionsSummary",
            "fields": {
                "longCovid": {
                    "name": "longCovid",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNoDontKnow"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "newDiagnosisCounts": {
                    "name": "newDiagnosisCounts",
                    "isArray": false,
                    "type": {
                        "nonModel": "DiagnosisTypes"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DiagnosisTypes": {
            "name": "DiagnosisTypes",
            "fields": {
                "noNewDiagnosis": {
                    "name": "noNewDiagnosis",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "heartProblems": {
                    "name": "heartProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "lungProblems": {
                    "name": "lungProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "bloodClotLung": {
                    "name": "bloodClotLung",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sleepApnea": {
                    "name": "sleepApnea",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "memory": {
                    "name": "memory",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "migraine": {
                    "name": "migraine",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "stroke": {
                    "name": "stroke",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "seizure": {
                    "name": "seizure",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "kidneyProblems": {
                    "name": "kidneyProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "stomachProblems": {
                    "name": "stomachProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "psychologicalProblems": {
                    "name": "psychologicalProblems",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "diabetes": {
                    "name": "diabetes",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "autoImmuneDiseases": {
                    "name": "autoImmuneDiseases",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "mecfs": {
                    "name": "mecfs",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "other": {
                    "name": "other",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "notSure": {
                    "name": "notSure",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SocialSummary": {
            "name": "SocialSummary",
            "fields": {
                "hasMedicalInsurance": {
                    "name": "hasMedicalInsurance",
                    "isArray": false,
                    "type": {
                        "nonModel": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "difficultCoveringExpenses": {
                    "name": "difficultCoveringExpenses",
                    "isArray": false,
                    "type": {
                        "nonModel": "DifficultExpenses"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "currentWorkSituation": {
                    "name": "currentWorkSituation",
                    "isArray": false,
                    "type": {
                        "nonModel": "WorkingSituation"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DifficultExpenses": {
            "name": "DifficultExpenses",
            "fields": {
                "veryDifficult": {
                    "name": "veryDifficult",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "somewhatDifficult": {
                    "name": "somewhatDifficult",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "notAtAllDifficult": {
                    "name": "notAtAllDifficult",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "doNotKnow": {
                    "name": "doNotKnow",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "preferNotToAnswer": {
                    "name": "preferNotToAnswer",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorkingSituation": {
            "name": "WorkingSituation",
            "fields": {
                "atOffice": {
                    "name": "atOffice",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hybrid": {
                    "name": "hybrid",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "remote": {
                    "name": "remote",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "remoteAndParenting": {
                    "name": "remoteAndParenting",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "onJobLeave": {
                    "name": "onJobLeave",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "unemployed": {
                    "name": "unemployed",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "retired": {
                    "name": "retired",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "disability": {
                    "name": "disability",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "student": {
                    "name": "student",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "doNotKnow": {
                    "name": "doNotKnow",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "preferNotToAnswer": {
                    "name": "preferNotToAnswer",
                    "isArray": false,
                    "type": {
                        "nonModel": "SummaryResultsByDemo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.3.1",
    "version": "3272a08443132a260a945cb052bbf50b"
};