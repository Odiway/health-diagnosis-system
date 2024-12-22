'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Disease {
  name: string;
  severity: string;
  treatment: string;
  prevention: string;
  riskFactors: string;
  causes: string;
  matchPercentage: number;
}

const ResultPage: React.FC = () => {
  const searchParams = useSearchParams();
  const diagnosisData = searchParams.get('diagnosis');

  let diagnosis: Disease[] | null = null;

  // Parse the diagnosis data
  try {
    diagnosis = diagnosisData ? JSON.parse(diagnosisData) : null;

    // Ensure diagnosis is an array
    if (!Array.isArray(diagnosis)) {
      diagnosis = null;
    }
  } catch (error) {
    console.error('Error parsing diagnosis data:', error);
  }

  // If diagnosis data is invalid or missing, show error message
  if (!diagnosis) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-8">Diagnosis Result</h1>
        <p className="text-lg text-center text-red-500">
          No diagnosis found. Please go back and check your symptoms.
        </p>
        <div className="text-center mt-4">
          <Link href="/" className="text-blue-500 hover:text-blue-600">Go back to Symptoms Check</Link>
        </div>
      </div>
    );
  }

  // Render diagnosis results
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-8">Diagnosis Result</h1>
      {diagnosis.map((disease, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold">{disease.name}</h2>
          <p><strong>Severity:</strong> {disease.severity}</p>
          <p><strong>Treatment:</strong> {disease.treatment}</p>
          <p><strong>Prevention:</strong> {disease.prevention}</p>
          <p><strong>Risk Factors:</strong> {disease.riskFactors}</p>
          <p><strong>Causes:</strong> {disease.causes}</p>
          <p><strong>Match Percentage:</strong> {disease.matchPercentage}%</p>
          <hr className="my-4" />
        </div>
      ))}
      <div className="text-center mt-4">
        <Link href="/" className="text-blue-500 hover:text-blue-600">Go back to Symptoms Check</Link>
      </div>
    </div>
  );
};

export default ResultPage;
