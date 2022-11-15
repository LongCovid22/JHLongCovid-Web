export const checkEmptyDemoFields = (answer: any) => {
  let emptyFields = [];
  let demographics = answer as {
    zip: string;
    age: string;
    race: string;
    sex: string;
  };
  if (demographics.zip === "") {
    emptyFields.push("zip code");
  }
  if (demographics.age === "") {
    emptyFields.push("age");
  }
  if (demographics.race === "") {
    emptyFields.push("race");
  }
  if (demographics.sex === "") {
    emptyFields.push("sex");
  }

  return emptyFields;
};
