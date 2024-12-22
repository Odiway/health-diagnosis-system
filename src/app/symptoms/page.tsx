'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const diseases = [
  { name: 'Cold', symptoms: ['cough', 'runny nose', 'sore throat'] },
  { name: 'Flu', symptoms: ['fever', 'fatigue', 'cough', 'headache', 'sore throat'] },
  { name: 'COVID-19', symptoms: ['fever', 'cough', 'shortness of breath', 'fatigue', 'headache'] },
  { name: 'Pneumonia', symptoms: ['fever', 'cough', 'chest pain', 'shortness of breath'] },
];

type SymptomKeys =
  | 'fever'
  | 'cough'
  | 'fatigue'
  | 'soreThroat'
  | 'shortnessOfBreath'
  | 'headache'
  | 'runnyNose'
  | 'chestPain';

const SymptomsPage: React.FC = () => {
  const router = useRouter();
  const [symptoms, setSymptoms] = useState<Record<SymptomKeys, boolean>>({
    fever: false,
    cough: false,
    fatigue: false,
    soreThroat: false,
    shortnessOfBreath: false,
    headache: false,
    runnyNose: false,
    chestPain: false,
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleSymptomChange = (checked: boolean) => {
    const currentSymptom = symptomList[currentStep] as SymptomKeys;
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [currentSymptom]: checked,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < symptomList.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedSymptoms = Object.keys(symptoms).filter(
      (symptom) => symptoms[symptom as SymptomKeys]
    );
    const diagnosis = getDiagnosis(selectedSymptoms);

    router.push(`/result?diagnosis=${encodeURIComponent(JSON.stringify(diagnosis))}`);
  };

  const getDiagnosis = (selectedSymptoms: string[]) => {
    const possibleDiseases = diseases
      .map((disease) => {
        const matchCount = disease.symptoms.filter((symptom) =>
          selectedSymptoms.includes(symptom)
        ).length;
        return { ...disease, matchCount };
      })
      .filter((disease) => disease.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);

    if (possibleDiseases.length === 0) {
      return 'No matching diseases found.';
    }

    return possibleDiseases.map((disease) => ({
      name: disease.name,
      symptoms: disease.symptoms,
      matchPercentage: ((disease.matchCount / disease.symptoms.length) * 100).toFixed(0),
    }));
  };

  const symptomList = Object.keys(symptoms);
  const currentSymptom = symptomList[currentStep] as SymptomKeys;

  // Render a fallback if the currentSymptom is undefined
  if (!currentSymptom) {
    return <div>Error: No symptom available.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-700">Symptom Checker</h1>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {currentStep + 1} / {symptomList.length}
            </div>
          </div>
          <div className="w-full bg-teal-200 rounded-full">
            <div
              className="bg-teal-500 text-xs leading-none py-1 text-center text-teal-100 font-bold rounded-full"
              style={{ width: `${((currentStep + 1) / symptomList.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">{`Do you have ${currentSymptom.replace(
            /([A-Z])/g,
            ' $1'
          ).toLowerCase()}?`}</h2>

          <div className="mt-4 flex justify-center space-x-4">
            {/* "Yes" Button */}
            <button
              type="button"
              onClick={() => handleSymptomChange(true)}
              className={`py-2 px-6 rounded-lg ${
                symptoms[currentSymptom]
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Yes
            </button>

            {/* "No" Button */}
            <button
              type="button"
              onClick={() => handleSymptomChange(false)}
              className={`py-2 px-6 rounded-lg ${
                !symptoms[currentSymptom]
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          {currentStep < symptomList.length - 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Check Diagnosis
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SymptomsPage;
