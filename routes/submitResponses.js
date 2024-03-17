export const submitBulkResponses = async (req, res) => {
  const form_id = "YOUR_FORM_ID HERE";
  const submitUrl = `https://docs.google.com/forms/u/0/d/e/${form_id}/formResponse`;

  const randomData = generateRandomData();
  let htmlContent = "";
  try {
    const responses = await Promise.all(
      randomData.map(async (data) => {
        console.log("Submitting data:", data);

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });

        const response = await fetch(submitUrl, {
          method: "POST",
          body: formData,
        });

        // Get the response text regardless of status
        htmlContent = await response.text();

        // Check if response is okay, but don't return immediately
        if (response.ok) {
          console.log("Responses submitted successfully", htmlContent);
        } else {
          console.error("Error submitting responses:", htmlContent);
        }
      })
    );

    res
      .status(200)
      .send({ success: "Bulk responses submitted", htmlContent, randomData });
  } catch (error) {
    console.error("Error submitting responses:", error);
    res.status(500).send({ error: "Error submitting responses", htmlContent });
  }
};

function generateRandomData() {
  const randomData = [];

  // Random functions to generate values for each entry
  const generateAge = () => {
    const ageOptions = ["23-30", "18-22"];
    return ageOptions[Math.floor(Math.random() * ageOptions.length)];
  };

  const generateMaritalStatus = () => {
    const maritalStatusOptions = ["Married without kids", "Unmarried"];
    return maritalStatusOptions[
      Math.floor(Math.random() * maritalStatusOptions.length)
    ];
  };

  const generateIndustry = () => {
    const industryOptions = [
      "IT",
      "Marketing and logistics",
      "Financial Services",
    ];
    return industryOptions[Math.floor(Math.random() * industryOptions.length)];
  };

  const generateCommuteDistance = () => {
    const commuteDistanceOptions = ["5 - 10 km", "Less than 5 km"];
    return commuteDistanceOptions[
      Math.floor(Math.random() * commuteDistanceOptions.length)
    ];
  };

  const generateCommuteMode = () => {
    const commuteModeOptions = [
      "Public Bus",
      "Personal Vehicle",
      "Metro",
      "Car Pooling",
    ];
    return commuteModeOptions[
      Math.floor(Math.random() * commuteModeOptions.length)
    ];
  };

  const generateCommuteTime = () => {
    const commuteTimeOptions = ["1-2 hrs", "2-3 hrs", "30-60 minutes"];
    return commuteTimeOptions[
      Math.floor(Math.random() * commuteTimeOptions.length)
    ];
  };

  const generateCommuteSpending = () => {
    const commuteSpendingOptions = ["8000 -12999", "3000 - 7999"];
    return commuteSpendingOptions[
      Math.floor(Math.random() * commuteSpendingOptions.length)
    ];
  };

  const generateCommutePercentage = () => {
    const commutePercentageOptions = ["30-40%", "20-30%", "10-20%"];
    return commutePercentageOptions[
      Math.floor(Math.random() * commutePercentageOptions.length)
    ];
  };

  const generateOpinion = () => {
    const opinionOptions = [
      "Not at all",
      "Slightly",
      "Moderately",
      "Significantly",
      "Extremely",
    ];
    return opinionOptions[Math.floor(Math.random() * opinionOptions.length)];
  };

  const generateOpinionHealth = () => {
    const opinionHealthOptions = ["Sometimes", "Rarely", "Often"];
    return opinionHealthOptions[
      Math.floor(Math.random() * opinionHealthOptions.length)
    ];
  };

  const generateInCharge = () => {
    const inChargeOptions = [
      "Goverment",
      "Transportation company",
      "Individual customer",
    ];
    return inChargeOptions[Math.floor(Math.random() * inChargeOptions.length)];
  };

  const generateSuggestions = () => {
    const suggestionsOptions = [
      "Incentivize alternative commute methods (shuttle service, carpooling)",
      "Promote flexible work arrangements (like hybrid work)",
      "Address traffic congestion through infrastructure improvements",
    ];
    return suggestionsOptions[
      Math.floor(Math.random() * suggestionsOptions.length)
    ];
  };
  const generateGender = () => {
    const genderOptions = ["Male", "Female"];
    return genderOptions[Math.floor(Math.random() * genderOptions.length)];
  };
  const generateIncome = () => {
    const incomeOptions = ["5-10 lacs", "10-15 lacs", "15 & above"];
    return incomeOptions[Math.floor(Math.random() * incomeOptions.length)];
  };
  const opinion = () => {
    const options = ["Strongly agree", "Agree", "Disagree"];
    return options[Math.floor(Math.random() * options.length)];
  };
  for (let i = 0; i < 100; i++) {
    randomData.push({
      // "entry.191538577": generateAge(),
      // "entry.1859038897": generateMaritalStatus(),
      // "entry.1213353851": generateIndustry(),
      // "entry.124641652": generateCommuteDistance(),
      // "entry.2077596814": generateCommuteMode(),
      // "entry.506198375": generateCommuteTime(),
      // "entry.462189972": generateCommuteSpending(),
      // "entry.2123262233": generateCommutePercentage(),
      // "entry.1401171789": generateOpinion(),
      // "entry.619039647": generateOpinion(),
      // "entry.853251421": generateOpinion(),
      // "entry.282603250": generateOpinion(),
      // "entry.1779184165": generateOpinion(),
      // "entry.197804971": generateOpinionHealth(),
      // "entry.2112399261": generateOpinionHealth(),
      // "entry.1396711820": generateOpinionHealth(),
      // "entry.310156099": generateOpinionHealth(),
      // "entry.631761392": "Strongly agree",
      // "entry.1489953347": opinion(),
      // "entry.1209887497": opinion(),
      // "entry.661226697": opinion(),
      // "entry.513283183": opinion(),
      // "entry.1341835086": opinion(),
      // "entry.835750975": opinion(),
      // "entry.1509036754": generateInCharge(),
      // "entry.1516123990": generateSuggestions(),
      // "entry.1516123990": generateSuggestions(),
      // "entry.1516123990": generateSuggestions(),
      // "entry.94606288": generateGender(), // Fixed value
      // "entry.1633184877": generateIncome(), // Fixed value
      // sample data put your entries here from the google form
    });
  }

  return randomData;
}

export default submitBulkResponses;
