// app/diseases/[id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface DiseaseInfo {
  id: number;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string;
  causes: string[];
}

const diseaseDetails: { [key: number]: DiseaseInfo }  = {
  1: {
    id:1,
    name: "Influenza (Flu)",
    description: "A contagious respiratory illness caused by influenza viruses, affecting the nose, throat, and sometimes lungs.",
    symptoms: ["Fever", "Cough", "Sore throat", "Muscle aches", "Fatigue"],
    treatment: "Rest, hydration, over-the-counter pain relievers, and antiviral medications if prescribed.",
    causes: ["Influenza virus types A, B, or C"],
  },
  2: {
    id:2,
    name: "Tuberculosis (TB)",
    description: "A bacterial infection that primarily affects the lungs but can spread to other organs.",
    symptoms: ["Persistent cough", "Chest pain", "Fatigue", "Weight loss", "Fever and night sweats"],
    treatment: "A long course of antibiotics, typically lasting 6–9 months.",
    causes: ["Mycobacterium tuberculosis bacteria"],
  },
  3: {
    id:3,
    name: "Malaria",
    description: "A serious disease transmitted by Anopheles mosquitoes infected with Plasmodium parasites.",
    symptoms: ["High fever", "Chills", "Headache", "Nausea", "Sweating"],
    treatment: "Antimalarial drugs like chloroquine, artemisinin-based therapies, or quinine.",
    causes: ["Plasmodium parasites (via mosquito bites)"],
  },
  4: {
    id:4,
    name: "COVID-19",
    description: "A viral illness caused by the SARS-CoV-2 virus, ranging from mild respiratory symptoms to severe complications.",
    symptoms: ["Fever", "Cough", "Shortness of breath", "Loss of taste or smell", "Fatigue"],
    treatment: "Supportive care, antiviral medications (e.g., remdesivir), and hospitalization in severe cases.",
    causes: ["SARS-CoV-2 virus (transmitted via respiratory droplets)"],
  },
  5: {
    id:5,
    name: "HIV/AIDS",
    description: "A chronic condition caused by the Human Immunodeficiency Virus, leading to immune system failure if untreated.",
    symptoms: ["Weight loss", "Recurrent infections", "Fatigue", "Swollen lymph nodes", "Night sweats"],
    treatment: "Antiretroviral therapy (ART) to suppress the virus and prevent progression.",
    causes: ["Human Immunodeficiency Virus (HIV), primarily through blood, sexual contact, or vertical transmission."],
  },
  6: {
    id:6,
    name: "Diabetes Mellitus",
    description: "A group of diseases that affect how your body uses blood sugar (glucose).",
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision", "Slow-healing sores"],
    treatment: "Lifestyle changes, insulin therapy, and medications to control blood sugar.",
    causes: ["Insufficient insulin production or insulin resistance"],
  },
  7: {
    id:7,
    name: "Hypertension (High Blood Pressure)",
    description: "A condition where the force of the blood against artery walls is consistently too high.",
    symptoms: ["Headaches", "Shortness of breath", "Nosebleeds (often asymptomatic)"],
    treatment: "Lifestyle changes, blood pressure medications, and regular monitoring.",
    causes: ["Obesity", "Stress", "Poor diet", "Genetics"],
  },
  8: {
    id:8,
    name: "Asthma",
    description: "A chronic respiratory condition that inflames and narrows airways, causing difficulty breathing.",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
    treatment: "Inhalers (bronchodilators), corticosteroids, and avoiding triggers.",
    causes: ["Allergies", "Air pollution", "Genetics"],
  },
  9: {
    id:9,
    name: "Alzheimer's Disease",
    description: "A progressive neurodegenerative disorder that affects memory, thinking, and behavior.",
    symptoms: ["Memory loss", "Confusion", "Difficulty performing familiar tasks"],
    treatment: "No cure; treatments focus on symptom management (medications, lifestyle modifications).",
    causes: ["Age, genetics, and lifestyle factors"],
  },
  10: {
    id:10,
    name: "Hepatitis A",
    description: "A liver infection caused by the hepatitis A virus (HAV), often spread through contaminated food or water.",
    symptoms: ["Fatigue", "Nausea", "Abdominal pain", "Jaundice"],
    treatment: "Supportive care; usually resolves without treatment.",
    causes: ["Hepatitis A virus, transmitted via contaminated food or water"],
  },
  11: {
    id:11,
    name: "Hepatitis B",
    description: "A liver infection caused by the hepatitis B virus (HBV), which can become chronic.",
    symptoms: ["Abdominal pain", "Dark urine", "Joint pain", "Fatigue", "Jaundice"],
    treatment: "Antiviral medications, liver monitoring, and sometimes transplantation for severe cases.",
    causes: ["Hepatitis B virus, spread through blood or bodily fluids"],
  },
  12: {
    id:12,
    name: "Hepatitis C",
    description: "A viral infection that causes liver inflammation, often leading to serious liver damage.",
    symptoms: ["Fatigue", "Nausea", "Abdominal pain", "Yellowing of the skin and eyes"],
    treatment: "Antiviral medications that can eliminate the virus from the body.",
    causes: ["Hepatitis C virus, transmitted through contaminated blood"],
  },
  13: {
    id:13,
    name: "Pneumonia",
    description: "An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus.",
    symptoms: ["Cough", "Chest pain", "Fever", "Shortness of breath"],
    treatment: "Antibiotics or antiviral medications depending on the cause, rest, and fluids.",
    causes: ["Bacteria, viruses, or fungi"],
  },
  14: {
    id:14,
    name: "Stroke",
    description: "A medical emergency where poor blood flow to the brain causes brain cells to die.",
    symptoms: ["Sudden numbness or weakness", "Confusion", "Trouble speaking", "Vision problems", "Severe headache"],
    treatment: "Emergency medical treatment to restore blood flow and reduce brain damage.",
    causes: ["Blocked or burst blood vessel in the brain"],
  },
  15: {
    id:115,
    name: "Cancer (General)",
    description: "A group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.",
    symptoms: ["Fatigue", "Unexplained weight loss", "Pain", "Lumps or growths", "Changes in skin appearance"],
    treatment: "Surgery, radiation therapy, chemotherapy, and immunotherapy.",
    causes: ["Genetics, environmental factors, lifestyle habits"],
  },
  16: {
    id:16,
    name: "Osteoarthritis",
    description: "A common type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
    symptoms: ["Joint pain", "Stiffness", "Loss of flexibility", "Swelling"],
    treatment: "Pain relief, physical therapy, medications, or joint replacement in severe cases.",
    causes: ["Age, joint injury, obesity, genetics"],
  },
  17: {
    id:17,
    name: "Psoriasis",
    description: "An autoimmune disorder that leads to the rapid growth of skin cells, causing scales and red patches on the skin.",
    symptoms: ["Red patches of skin", "Itching", "Cracked skin", "Nail changes"],
    treatment: "Topical treatments (creams), phototherapy, and systemic medications for severe cases.",
    causes: ["Genetic predisposition, immune system dysfunction"],
  },
  18: {
    id:18,
    name: "Eczema (Atopic Dermatitis)",
    description: "A chronic skin condition that causes red, itchy, and inflamed skin.",
    symptoms: ["Itching", "Dry skin", "Red patches", "Cracked skin"],
    treatment: "Topical steroids, moisturizers, and avoiding triggers.",
    causes: ["Genetics, environmental factors"],
  },
  19: {
    id:19,
    name: "Crohn's Disease",
    description: "A type of inflammatory bowel disease (IBD) that causes inflammation of the digestive tract.",
    symptoms: ["Abdominal pain", "Diarrhea", "Fatigue", "Weight loss", "Anemia"],
    treatment: "Medications to control inflammation, immune system suppressants, surgery in severe cases.",
    causes: ["Genetics, immune system dysfunction"],
  },
  20: {
    id:20,
    name: "Irritable Bowel Syndrome (IBS)",
    description: "A gastrointestinal disorder causing symptoms like stomach cramps, bloating, and changes in bowel movements.",
    symptoms: ["Abdominal pain", "Bloating", "Diarrhea or constipation"],
    treatment: "Dietary changes, stress management, and medications to control symptoms.",
    causes: ["Stress, gut bacteria imbalance, food intolerance"],
  },
  // The rest of the diseases follow the same pattern as above.
  21: {
    id:21,
    name: "Acid Reflux (GERD)",
    description: "A chronic digestive condition where stomach acid or bile irritates the food pipe lining.",
    symptoms: ["Heartburn", "Regurgitation", "Chest pain", "Difficulty swallowing"],
    treatment: "Antacids, proton pump inhibitors (PPIs), lifestyle changes.",
    causes: ["Weakening of the lower esophageal sphincter"]
    },
  22: {
    id:22,
    name: "Disease 22",
    description: "A detailed description of Disease 22.",
    symptoms: ["Symptom C", "Symptom D"],
    treatment: "Treatment for Disease 22.",
    causes: ["Cause C", "Cause D"],
  },
  23: {
    id:23,
    name: "Disease 23",
    description: "A detailed description of Disease 23.",
    symptoms: ["Symptom E", "Symptom F"],
    treatment: "Treatment for Disease 23.",
    causes: ["Cause E", "Cause F"],
  },
  24: {
    id:24,
    name: "Disease 24",
    description: "A detailed description of Disease 24.",
    symptoms: ["Symptom G", "Symptom H"],
    treatment: "Treatment for Disease 24.",
    causes: ["Cause G", "Cause H"],
  },
  25: {
    id:25,
    name: "Disease 25",
    description: "A detailed description of Disease 25.",
    symptoms: ["Symptom I", "Symptom J"],
    treatment: "Treatment for Disease 25.",
    causes: ["Cause I", "Cause J"],
  },
  26: {
    id:26,
    name: "Disease 26",
    description: "A detailed description of Disease 26.",
    symptoms: ["Symptom K", "Symptom L"],
    treatment: "Treatment for Disease 26.",
    causes: ["Cause K", "Cause L"],
  },
  27: {
    id:27,
    name: "Disease 27",
    description: "A detailed description of Disease 27.",
    symptoms: ["Symptom M", "Symptom N"],
    treatment: "Treatment for Disease 27.",
    causes: ["Cause M", "Cause N"],
  },
  28: {
    id:28,
    name: "Disease 28",
    description: "A detailed description of Disease 28.",
    symptoms: ["Symptom O", "Symptom P"],
    treatment: "Treatment for Disease 28.",
    causes: ["Cause O", "Cause P"],
  },
  29: {
    id:29,
    name: "Disease 29",
    description: "A detailed description of Disease 29.",
    symptoms: ["Symptom Q", "Symptom R"],
    treatment: "Treatment for Disease 29.",
    causes: ["Cause Q", "Cause R"],
  },
  30: {
    id:30,
    name: "Disease 30",
    description: "A detailed description of Disease 30.",
    symptoms: ["Symptom S", "Symptom T"],
    treatment: "Treatment for Disease 30.",
    causes: ["Cause S", "Cause T"],
  },
  31: {
    id:31,
    name: "Disease 31",
    description: "A detailed description of Disease 31.",
    symptoms: ["Symptom U", "Symptom V"],
    treatment: "Treatment for Disease 31.",
    causes: ["Cause U", "Cause V"],
  },
  32: {
    id:32,
    name: "Disease 32",
    description: "A detailed description of Disease 32.",
    symptoms: ["Symptom W", "Symptom X"],
    treatment: "Treatment for Disease 32.",
    causes: ["Cause W", "Cause X"],
  },
  33: {
    id:33,
    name: "Disease 33",
    description: "A detailed description of Disease 33.",
    symptoms: ["Symptom Y", "Symptom Z"],
    treatment: "Treatment for Disease 33.",
    causes: ["Cause Y", "Cause Z"],
  },
  34: {
    id:34,
    name: "Disease 34",
    description: "A detailed description of Disease 34.",
    symptoms: ["Symptom A", "Symptom B"],
    treatment: "Treatment for Disease 34.",
    causes: ["Cause A", "Cause B"],
  },
  35: {
    id:35,
    name: "Disease 35",
    description: "A detailed description of Disease 35.",
    symptoms: ["Symptom C", "Symptom D"],
    treatment: "Treatment for Disease 35.",
    causes: ["Cause C", "Cause D"],
  },
  36: {
    id:36,
    name: "Disease 36",
    description: "A detailed description of Disease 36.",
    symptoms: ["Symptom E", "Symptom F"],
    treatment: "Treatment for Disease 36.",
    causes: ["Cause E", "Cause F"],
  },
  37: {
    id:37,
    name: "Disease 37",
    description: "A detailed description of Disease 37.",
    symptoms: ["Symptom G", "Symptom H"],
    treatment: "Treatment for Disease 37.",
    causes: ["Cause G", "Cause H"],
  },
  38: {
    id:38,
    name: "Disease 38",
    description: "A detailed description of Disease 38.",
    symptoms: ["Symptom I", "Symptom J"],
    treatment: "Treatment for Disease 38.",
    causes: ["Cause I", "Cause J"],
  },
  39: {
    id:39,
    name: "Disease 39",
    description: "A detailed description of Disease 39.",
    symptoms: ["Symptom K", "Symptom L"],
    treatment: "Treatment for Disease 39.",
    causes: ["Cause K", "Cause L"],
  },
  40: {
    id:40,
    name: "Disease 40",
    description: "A detailed description of Disease 40.",
    symptoms: ["Symptom M", "Symptom N"],
    treatment: "Treatment for Disease 40.",
    causes: ["Cause M", "Cause N"],
  },
  41: {
    id:41,
    name: "Disease 41",
    description: "A detailed description of Disease 41.",
    symptoms: ["Symptom O", "Symptom P"],
    treatment: "Treatment for Disease 41.",
    causes: ["Cause O", "Cause P"],
  },
  42: {
    id:42,
    name: "Disease 42",
    description: "A detailed description of Disease 42.",
    symptoms: ["Symptom Q", "Symptom R"],
    treatment: "Treatment for Disease 42.",
    causes: ["Cause Q", "Cause R"],
  },
  43: {
    id:43,
    name: "Disease 43",
    description: "A detailed description of Disease 43.",
    symptoms: ["Symptom S", "Symptom T"],
    treatment: "Treatment for Disease 43.",
    causes: ["Cause S", "Cause T"],
  },
  44: {
    id:44,
    name: "Disease 44",
    description: "A detailed description of Disease 44.",
    symptoms: ["Symptom U", "Symptom V"],
    treatment: "Treatment for Disease 44.",
    causes: ["Cause U", "Cause V"],
  },
  45: {
    id:45,
    name: "Disease 45",
    description: "A detailed description of Disease 45.",
    symptoms: ["Symptom W", "Symptom X"],
    treatment: "Treatment for Disease 45.",
    causes: ["Cause W", "Cause X"],
  },
  46: {
    id:46,
    name: "Disease 46",
    description: "A detailed description of Disease 46.",
    symptoms: ["Symptom Y", "Symptom Z"],
    treatment: "Treatment for Disease 46.",
    causes: ["Cause Y", "Cause Z"],
  },
  47: {
    id:47,
    name: "Disease 47",
    description: "A detailed description of Disease 47.",
    symptoms: ["Symptom A", "Symptom B"],
    treatment: "Treatment for Disease 47.",
    causes: ["Cause A", "Cause B"],
  },
  48: {
    id:48,
    name: "Disease 48",
    description: "A detailed description of Disease 48.",
    symptoms: ["Symptom C", "Symptom D"],
    treatment: "Treatment for Disease 48.",
    causes: ["Cause C", "Cause D"],
  },
  49: {
    id:49,
    name: "Disease 49",
    description: "A detailed description of Disease 49.",
    symptoms: ["Symptom E", "Symptom F"],
    treatment: "Treatment for Disease 49.",
    causes: ["Cause E", "Cause F"],
  },
  50: {
    id:50,
    name: "Disease 50",
    description: "A detailed description of Disease 50.",
    symptoms: ["Symptom G", "Symptom H"],
    treatment: "Treatment for Disease 50.",
    causes: ["Cause G", "Cause H"],
  },
};



export default function DiseaseDetailPage() {
  const { id } = useParams(); // Getting the dynamic 'id' from the URL
  const [disease, setDisease] = useState<DiseaseInfo | null>(null);

  useEffect(() => {
    if (id) {
      setDisease(diseaseDetails[Number(id)] || null);
    }
  }, [id]);

  if (!disease) {
    return (
      <div className="text-center py-10 text-xl text-gray-700">
        <p>Loading or disease not found...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-teal-600 mb-6">{disease.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{disease.description}</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Symptoms:</h2>
        <ul className="list-disc pl-6 space-y-2">
          {disease.symptoms.map((symptom, index) => (
            <li key={index} className="text-gray-700">{symptom}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Treatment:</h2>
        <p className="text-lg text-gray-700">{disease.treatment}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Causes:</h2>
        <ul className="list-disc pl-6 space-y-2">
          {disease.causes.map((cause, index) => (
            <li key={index} className="text-gray-700">{cause}</li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/diseases"
          className="inline-block bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300"
        >
          Back to Diseases List
        </Link>
      </div>
    </div>
  );
}