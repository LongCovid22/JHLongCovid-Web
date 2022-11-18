export const processCovidEntry = (
  questionStack: any[],
  answerStack: any[],
  questions: any
) => {
  let answers = [];
  let schema = [];

  for (var i = 0; i < questionStack.length; i++) {
    const questionInfo = questionStack[i];
    if (questionInfo.section === 1) {
      schema.push(
        questions[questionInfo.section][questionInfo.question].schemaInfo
      );
      answers.push(answerStack[i]);
    }
  }

  let entries: any = {};
  for (var i = 0; i < questionStack.length; i++) {
    const s = schema[i];
    const a = answers[i];

    if (s.type === "Int") {
      const splitAnswer = a.split(" ")[0];
      entries[s.field] = parseInt(splitAnswer);
    } else if (s.type === "Boolean") {
      if (a === "Yes") {
        entries[s.field] = true;
      } else if (a === "No") {
        entries[s.field] = false;
      } else {
        entries[s.field] = null;
      }
    } else if (s.type === "AWSDateTime") {
      entries[s.field] = new Date(a);
    } else {
      if (s.field === "medicationsTaken") {
        if (a.other !== "") {
          a.choices.push(a.other);
          entries[s.field] = a.choices;
        } else {
          entries[s.field] = a.choices;
        }
      } else {
        entries[s.field] = a;
      }
    }
  }

  return { CovidEntry: entries };
};

export const processRecoveryEntry = (
  questionStack: any[],
  answerStack: any[],
  questions: any
) => {
  let answers = [];
  let schema = [];

  for (var i = 0; i < questionStack.length; i++) {
    const questionInfo = questionStack[i];
    if (questionInfo.section === 2) {
      schema.push(
        questions[questionInfo.section][questionInfo.question].schemaInfo
      );
      answers.push(answerStack[i]);
    }
  }

  let entries: any = {};
  for (var i = 0; i < questionStack.length; i++) {
    const s = schema[i];
    const a = answers[i];

    if (s.type === "Int") {
      const splitAnswer = a.split(" ")[0];
      entries[s.field] = parseInt(splitAnswer);
    } else if (s.type === "Boolean") {
      if (a === "Yes") {
        entries[s.field] = true;
      } else if (a === "No") {
        entries[s.field] = false;
      } else {
        entries[s.field] = null;
      }
    } else {
      entries[s.field] = a;
    }
  }

  return { RecoveryEntry: entries };
};

export const processVaccinationEntry = (
  questionStack: any[],
  answerStack: any[],
  questions: any
) => {
  let answers = [];
  let schema = [];

  for (var i = 0; i < questionStack.length; i++) {
    const questionInfo = questionStack[i];
    if (questionInfo.section === 3) {
      schema.push(
        questions[questionInfo.section][questionInfo.question].schemaInfo
      );
      answers.push(answerStack[i]);
    }
  }

  let entries: any = {};
  for (var i = 0; i < questionStack.length; i++) {
    const s = schema[i];
    const a = answers[i];

    if (s.type === "Int") {
      const splitAnswer = a.split(" ")[0];
      entries[s.field] = parseInt(splitAnswer);
    } else if (s.type === "Boolean") {
      if (a === "Yes") {
        entries[s.field] = true;
      } else if (a === "No") {
        entries[s.field] = false;
      } else {
        entries[s.field] = null;
      }
    } else if (s.type === "AWSDateTime") {
      entries[s.field] = new Date(a);
    } else {
      if (s.field === "medicationsTaken") {
        if (a.other !== "") {
          a.choices.push(a.other);
          entries[s.field] = a.choices;
        } else {
          entries[s.field] = a.choices;
        }
      } else {
        entries[s.field] = a;
      }
    }
  }

  return { VaccinationEntry: entries };
};

export const processGlobalHealthEntry = (
  questionStack: any[],
  answerStack: any[],
  questions: any
) => {
  let answers = [];
  let schema = [];

  for (var i = 0; i < questionStack.length; i++) {
    const questionInfo = questionStack[i];
    if (questionInfo.section === 4) {
      schema.push(
        questions[questionInfo.section][questionInfo.question].schemaInfo
      );
      answers.push(answerStack[i]);
    }
  }

  let entries: any = {};
  for (var i = 0; i < questionStack.length; i++) {
    const s = schema[i];
    const a = answers[i];

    if (s.type === "Int") {
      const splitAnswer = a.split(" ")[0];
      entries[s.field] = parseInt(splitAnswer);
    } else if (s.type === "Boolean") {
      if (a === "Yes") {
        entries[s.field] = true;
      } else if (a === "No") {
        entries[s.field] = false;
      } else {
        entries[s.field] = null;
      }
    } else if (s.type === "AWSDateTime") {
      entries[s.field] = new Date(a);
    } else {
      if (s.field === "medicationsTaken") {
        if (a.other !== "") {
          a.choices.push(a.other);
          entries[s.field] = a.choices;
        } else {
          entries[s.field] = a.choices;
        }
      } else {
        entries[s.field] = a;
      }
    }
  }

  return { GlobalHealthEntry: entries };
};

export const processSymptomEntry = (
  questionStack: any[],
  answerStack: any[],
  questions: any
) => {
  let answers = [];
  let schema = [];
  let answerFormats = [];
  const symptoms = [
    "Headache",
    "Body or muscle aches",
    "Fever, chills, sweats or flushing",
    "Feeling faint, dizzy, “goofy”; difficulty thinking soon after standing up from a sitting or lying position",
    "Feeling sick after you exert yourself physically or mentally (“post-exertional malaise”)",
    "Weakness in arms or legs",
    "Shortness of breath (trouble breathing)",
    "Cough",
    "Palpitations, racing heart, arrhythmia, or skipped beats",
    "Swelling of your legs",
    "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation",
    "Bladder problems including incontinence, trouble passing urine or emptying bladder",
    "Nerve problems including tremor, shaking, numbness, tingling, or burning",
    "Problems thinking or concentrating (“brain fog”)",
    "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief",
    "Nerve problems including tremor, shaking, numbness, tingling, or burning sensation",
    "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week",
    "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week",
    "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
    "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement",
    "Skin rash",
    "Loss of or change in smell or taste",
    "Excessive thirst",
    "Excessively dry mouth",
    "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, “snow”)",
    "Problems with hearing (hearing loss, ringing in ears)",
    "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms",
  ];

  for (var i = 0; i < questionStack.length; i++) {
    const questionInfo = questionStack[i];
    if (questionInfo.section === 5) {
      answerFormats.push(
        questions[questionInfo.section][questionInfo.question].answerFormat
      );
      schema.push(
        questions[questionInfo.section][questionInfo.question].schemaInfo
      );
      answers.push(answerStack[i]);
    }
  }

  let entries: any = {};
  for (var i = 0; i < questionStack.length; i++) {
    const s = schema[i];
    const a = answers[i];
    const af = answerFormats[i];
    if (af === "scale") {
      let reportedSymptoms = [];
      for (var j = 0; j < a.length; j++) {
        if (a[j] === "1") {
          reportedSymptoms.push(symptoms[j]);
        }
      }

      entries[s.field] = reportedSymptoms;
    } else {
      if (s.type === "Int") {
        const splitAnswer = a.split(" ")[0];
        entries[s.field] = parseInt(splitAnswer);
      } else if (s.type === "Boolean") {
        if (a === "Yes") {
          entries[s.field] = true;
        } else if (a === "No") {
          entries[s.field] = false;
        } else {
          entries[s.field] = null;
        }
      } else if (s.type === "AWSDateTime") {
        entries[s.field] = new Date(a);
      } else {
        entries[s.field] = a;
      }
    }
  }

  return { SymptomEntry: entries };
};
