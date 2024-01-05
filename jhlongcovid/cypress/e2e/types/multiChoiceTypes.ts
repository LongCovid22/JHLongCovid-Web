export enum SYMPTOMS {
  HEADACHE = "Headache",
  BODYACHES = "Body or muscle aches",
  FEVERCHILLS = "Fever, chills, sweats or flushing",
  DIZZINESS = "Feeling faint, dizzy, 'goofy'; difficulty thinking soon after standing up from a sitting or lying position",
  POSTEXERTIONALMALAISE = "Feeling sick after you exert yourself physically or mentally ('post-exertional malaise')",
  WEAKNESSARMSLEGS = "Weakness in arms or legs",
  SHORTNESSOFBREATH = "Shortness of breath (trouble breathing)",
  COUGH = "Cough",
  PALPITATIONS = "Palpitations, racing heart, arrhythmia, or skipped beats",
  LEGSWELLING = "Swelling of your legs",
  INDIGESTIONNAUSEA = "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation",
  BLADDERPROBLEMS = "Bladder problems including incontinence, trouble passing urine or emptying bladder",
  NERVEPROBLEMS = "Nerve problems including tremor, shaking, numbness, tingling, or burning",
  BRAINFOG = "Problems thinking or concentrating ('brain fog')",
  MENTALHEALTH = "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief",
  SLEEPPROBLEMS = "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week",
  DAYTIMESLEEPINESS = "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week",
  SNORING = "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
  LEGDISCOMFORT = "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement",
  SKINRASH = "Skin rash",
  LOSSOFORCHANGEINSMELLTASTE = "Loss of or change in smell or taste",
  EXCESSIVETHIRST = "Excessive thirst",
  EXCESSIVELYDRYMOUTH = "Excessively dry mouth",
  VISIONPROBLEMS = "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, 'snow')",
  HEARINGPROBLEMS = "Problems with hearing (hearing loss, ringing in ears)",
  PROBLEMSWITHFERTILITYMENSTRUALCYCLE = "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms",
}


export enum DEPRESSIONRESPONSES {
  NOTATALL = "0",
  SEVERALDAYS = "1",
  MORETHANHALFTHEDAYS = "2",
  NEARLYEVERYDAY = "3",
}

export enum DEPRESSIONQUESTIONS {
  LITTLEINTEREST = "0",
  FEELINGDOWN = "1",
  TROUBLESLEEPING = "2",
  FEELINGTIRED = "3",
  POORAPPETITE = "4",
  FEELINGBADABOUTYOURSELF = "5",
  TROUBLECONCENTRATING = "6",
  MOVINGORSPEAKINGSLOWLY = "7",
}

export enum NEWDIAGNOSIS {
  HEARTPROBLEMS = "Heart problems, such as heart failure or arrhythmia (e.g., 'atrial fibrillation')",
  LUNGPROBLEMS = "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease",
  BLOODCLOTS = "Blood clots in the lung ('pulmonary embolism'), leg or arm ('deep vein thrombosis')",
  SLEEPAPNEA = "Sleep apnea or insomnia",
  MEMORYIMPAREMENT = "Memory or cognitive impairment or dementia",
  MIGRAINE = "Migraine or other headache disorder",
  STROKE = "Stroke",
  SEIZURE = "Seizure or epilepsy",
  KIDNEYPROBLEMS = "Kidney problems or kidney disease",
  STOMACHPROBLEMS = "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome",
  PSYCHOLOGICALPROBLEMS = "Psychological problems or psychiatric problems, like depression or anxiety or psychosis",
  DIABETES = "Diabetes",
  AUTOIMMUNEDISEASES = "Autoimmune diseases (such as systemic lupus, thyroid disease)",
  CHRONICCONDITIONS = "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)",
  NOTSURE = "Not sure",
  NONEWDIAGNOSES = "No new diagnoses since the beginning of 2020"
}

export type NEWDIAGNOSISTYPE = NEWDIAGNOSIS | string;