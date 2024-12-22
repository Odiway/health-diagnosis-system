// app/diseases/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";



const diseases = [
    // Infectious Diseases
    { id: 1, name: "Influenza (Flu)", description: "A viral infection causing fever, chills, cough, and fatigue." },
    { id: 2, name: "Tuberculosis (TB)", description: "A bacterial infection that mainly affects the lungs, causing cough, chest pain, and weight loss." },
    { id: 3, name: "Malaria", description: "A mosquito-borne parasitic infection causing fever, chills, and flu-like symptoms." },
    { id: 4, name: "COVID-19", description: "A highly contagious viral infection that causes fever, cough, and respiratory issues, caused by the SARS-CoV-2 virus." },
    { id: 5, name: "HIV/AIDS", description: "A virus that weakens the immune system, making the body vulnerable to infections, leading to acquired immune deficiency syndrome (AIDS)." },
    { id: 6, name: "Hepatitis A", description: "A viral liver infection caused by the Hepatitis A virus, leading to fever, fatigue, and jaundice." },
    { id: 7, name: "Hepatitis B", description: "A viral infection that causes inflammation of the liver, leading to chronic liver disease and liver cancer." },
    { id: 8, name: "Hepatitis C", description: "A viral infection that affects the liver, causing chronic liver damage, cirrhosis, and liver cancer." },
    { id: 9, name: "Dengue Fever", description: "A mosquito-borne viral infection causing high fever, severe headache, and joint pain." },
    { id: 10, name: "Typhoid Fever", description: "A bacterial infection causing fever, abdominal pain, and weakness, caused by Salmonella Typhi bacteria." },
    { id: 11, name: "Measles", description: "A highly contagious viral disease characterized by a rash, cough, and fever." },
    { id: 12, name: "Chickenpox", description: "A highly contagious viral infection causing itchy rashes and flu-like symptoms." },
    { id: 13, name: "Mumps", description: "A contagious viral infection that primarily affects the salivary glands, causing swelling and fever." },
    { id: 14, name: "Rubella", description: "A contagious viral infection that causes a rash and mild fever, with potential risks to unborn babies." },
    { id: 15, name: "Cholera", description: "A bacterial infection caused by Vibrio cholerae, leading to severe diarrhea and dehydration." },
    { id: 16, name: "Syphilis", description: "A sexually transmitted infection caused by the bacterium Treponema pallidum, leading to sores and rashes." },
    { id: 17, name: "Gonorrhea", description: "A sexually transmitted bacterial infection causing discharge, painful urination, and pelvic pain." },
    { id: 18, name: "Leprosy", description: "A chronic infectious disease caused by Mycobacterium leprae, affecting the skin, nerves, and mucous membranes." },
    { id: 19, name: "Yellow Fever", description: "A viral infection transmitted by mosquitoes, causing fever, jaundice, and organ failure." },
    { id: 20, name: "Rabies", description: "A viral disease that affects the nervous system, causing aggressive behavior, paralysis, and death if untreated." },
  
    // Chronic/Non-Communicable Diseases
    { id: 21, name: "Hypertension (High Blood Pressure)", description: "A condition where the force of the blood against the artery walls is too high, leading to heart disease and stroke." },
    { id: 22, name: "Coronary Artery Disease", description: "A condition where the coronary arteries become narrowed or blocked, leading to heart attacks." },
    { id: 23, name: "Stroke", description: "A medical emergency where the blood supply to part of the brain is interrupted, leading to brain damage." },
    { id: 24, name: "Diabetes Mellitus (Type 1 and Type 2)", description: "A metabolic disorder where the body cannot properly regulate blood sugar levels." },
    { id: 25, name: "Chronic Obstructive Pulmonary Disease (COPD)", description: "A group of lung diseases causing airflow blockage and breathing difficulties, often due to smoking." },
    { id: 26, name: "Asthma", description: "A chronic respiratory condition where the airways narrow and swell, causing difficulty breathing." },
    { id: 27, name: "Alzheimer's Disease", description: "A neurodegenerative disorder causing memory loss, confusion, and changes in behavior." },
    { id: 28, name: "Parkinson's Disease", description: "A neurological disorder that causes tremors, stiffness, and difficulty with movement." },
    { id: 29, name: "Osteoarthritis", description: "A degenerative joint disease causing pain, stiffness, and loss of function, especially in the knees and hips." },
    { id: 30, name: "Rheumatoid Arthritis", description: "An autoimmune disease causing joint inflammation, pain, and potential deformity." },
    { id: 31, name: "Chronic Kidney Disease (CKD)", description: "A condition where the kidneys gradually lose function over time, leading to kidney failure." },
    { id: 32, name: "Liver Cirrhosis", description: "A progressive liver disease caused by long-term damage, leading to scarring and loss of liver function." },
    { id: 33, name: "Peptic Ulcer Disease", description: "A condition where open sores form on the inner lining of the stomach or duodenum." },
    { id: 34, name: "Hyperthyroidism", description: "A condition where the thyroid gland overproduces hormones, leading to symptoms like weight loss, anxiety, and rapid heartbeat." },
    { id: 35, name: "Hypothyroidism", description: "A condition where the thyroid gland produces insufficient hormones, leading to symptoms like fatigue, weight gain, and depression." },
    { id: 36, name: "Obesity", description: "A condition where excessive body fat increases the risk of chronic diseases such as heart disease, diabetes, and hypertension." },
  
    // Cancers
    { id: 37, name: "Lung Cancer", description: "A type of cancer that begins in the lungs, often linked to smoking and environmental toxins." },
    { id: 38, name: "Breast Cancer", description: "A cancer that forms in the cells of the breast, often presenting as a lump or change in breast appearance." },
    { id: 39, name: "Colorectal Cancer", description: "Cancer that starts in the colon or rectum, typically characterized by changes in bowel habits and abdominal pain." },
    { id: 40, name: "Prostate Cancer", description: "Cancer that forms in the prostate, often growing slowly, with symptoms including difficulty urinating." },
    { id: 41, name: "Pancreatic Cancer", description: "A cancer of the pancreas, often diagnosed at later stages due to lack of early symptoms." },
    { id: 42, name: "Stomach Cancer", description: "Cancer that forms in the stomach lining, often leading to symptoms like nausea, weight loss, and abdominal pain." },
    { id: 43, name: "Liver Cancer", description: "Cancer that starts in the liver, often caused by cirrhosis or chronic hepatitis infections." },
    { id: 44, name: "Cervical Cancer", description: "Cancer that forms in the cervix, often caused by human papillomavirus (HPV) infection." },
    { id: 45, name: "Skin Cancer (Melanoma)", description: "A type of skin cancer that begins in the melanocytes, often resulting from overexposure to UV radiation." },
    { id: 46, name: "Leukemia", description: "A cancer of the blood or bone marrow, causing the rapid production of abnormal white blood cells." },
    { id: 47, name: "Lymphoma", description: "A cancer of the lymphatic system, leading to symptoms such as swollen lymph nodes and fatigue." },
  
    // Other Conditions
    { id: 48, name: "Depression", description: "A mental health disorder causing persistent feelings of sadness, hopelessness, and loss of interest in activities." },
    { id: 49, name: "Anxiety Disorders", description: "A group of mental health disorders characterized by excessive fear, worry, and nervousness." },
    { id: 50, name: "Epilepsy", description: "A neurological disorder characterized by recurrent seizures caused by abnormal brain activity." },
  ];
  

export default function DiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiseases = diseases.filter(
    (disease) => disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Top Diseases</h1>
      
      <input
        type="text"
        placeholder="Search diseases..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiseases.map((disease) => (
          <div key={disease.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{disease.name}</h2>
            <p>{disease.description}</p>
            <Link
              href={`/diseases/${disease.id}`}
              className="text-teal-600 hover:text-teal-800 mt-4"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
