import React from 'react';
import CourseComponent from './CourseComponent';

function Courses({courseNavigationClick,counterEqual}) {
  const courses = [
    {
      name: "SSC CGL",
      fullform: "Combined Graduate Level",
      description: `Prepare for the SSC CGL exam with our comprehensive coaching program, designed to cover all four tiers: Tier-I (Preliminary), Tier-II (Mains), Tier-III (Descriptive Paper), and Tier-IV (Data Entry Skill Test/Computer Proficiency Test). Our experienced faculty, detailed study materials, and regular mock tests will help you excel in every aspect of the exam.`,
      preparationGuide: [
        "Understand the Exam Pattern and Syllabus: Get a clear understanding of the SSC CGL exam pattern and syllabus for all tiers.",
        "Create a Study Plan: Develop a realistic and effective study plan, allocating sufficient time for each subject.",
        "Conceptual Clarity: Focus on understanding concepts rather than rote learning.",
        "Practice Regularly: Solve previous years' papers and take regular mock tests to improve speed and accuracy.",
        "Revision: Regularly revise all topics to ensure retention.",
        "Time Management: Learn to manage your time effectively during preparation and in the exam."
      ]
    },
    {
      name: "SSC GD",
      fullform:"General Duty",
      description: `Our SSC GD coaching program focuses on helping you achieve success in the SSC GD Constable exam. We provide rigorous training for the written exam, physical efficiency test, and medical examination. With our structured curriculum, regular practice sessions, and expert guidance, you'll be well-prepared for each stage of the selection process.`,
      preparationGuide: [
        "Exam Pattern and Syllabus: Understand the detailed exam pattern and syllabus.",
        "Physical Training: Start your physical training early to meet the physical efficiency test standards.",
        "Study Plan: Develop a study plan focusing on all sections of the written exam.",
        "Mock Tests: Regularly take mock tests to assess your preparation level.",
        "Medical Standards: Be aware of the medical standards and work on meeting them.",
        "Consistency: Stay consistent with your preparation and physical training."
      ]
    },
    {
      name: "SSC CHSL",
      fullform:"Combined Higher Secondary Level",
      description: `Join our SSC CHSL coaching to master the Tier-I (Objective Type), Tier-II (Descriptive Paper), and Tier-III (Typing Test/Skill Test) phases of the exam. Our experienced educators provide personalized attention, comprehensive study materials, and continuous assessment to ensure your success.`,
      preparationGuide: [
        "Know the Syllabus and Pattern: Familiarize yourself with the exam syllabus and pattern.",
        "Detailed Study Plan: Create a detailed study plan, focusing on all sections.",
        "Practice Typing: Regularly practice typing to excel in the Typing Test.",
        "Mock Tests and Previous Papers: Solve previous years' papers and take regular mock tests.",
        "Focus on Weak Areas: Identify and work on your weak areas.",
        "Revision and Practice: Regularly revise and practice all topics."
      ]
    },
    {
      name: "SSC MTS",
      fullform:"Multi-Tasking Staff",
      description: `Our SSC MTS coaching program is tailored to help you excel in both Paper-I (Objective Type) and Paper-II (Descriptive Paper). With a focus on fundamental concepts, time management, and regular practice tests, our course equips you with the necessary skills and knowledge to crack the exam.`,
      preparationGuide: [
        "Understand the Exam Pattern: Get a clear understanding of the SSC MTS exam pattern.",
        "Comprehensive Study Plan: Develop a study plan covering all subjects.",
        "Practice Regularly: Regularly solve previous papers and take mock tests.",
        "Focus on Basics: Strengthen your basics and concepts.",
        "Descriptive Paper Practice: Practice writing essays and letters for the descriptive paper.",
        "Regular Revision: Revise regularly to ensure you remember all topics."
      ]
    },
    {
      name: "SSC CPO",
      fullform:"Central Police Organization",
      description: `Prepare for the SSC CPO exam with our expert-led coaching program, covering all sections: Paper-I (Objective Type), Physical Endurance Test (PET)/Physical Standard Test (PST), Paper-II (English Language & Comprehension), and the medical exam. Our targeted approach and extensive practice sessions ensure you are ready for every challenge.`,
      preparationGuide: [
        "Exam Pattern and Syllabus: Understand the detailed exam pattern and syllabus.",
        "Physical Training: Begin physical training early to meet PET/PST standards.",
        "Focused Study Plan: Create a study plan focusing on all sections of the written exams.",
        "Mock Tests and Practice Papers: Regularly take mock tests and practice papers.",
        "Physical and Medical Standards: Be aware of the physical and medical standards required.",
        "Continuous Practice and Revision: Regular practice and revision are key to success."
      ]
    },
    {
      name: "BANK PO and CLERK",
      fullform:"",
      description:`Our Bank PO and Clerk coaching program offers a comprehensive curriculum to prepare you for exams conducted by IBPS, SBI, and other banking organizations. We cover all sections including Quantitative Aptitude, Reasoning Ability, English Language, General Awareness, and Computer Knowledge. Regular mock tests and performance analysis help you identify areas for improvement and track your progress.`,
      preparationGuide: [
        "Exam Pattern and Syllabus: Understand the exam pattern and syllabus for both PO and Clerk exams.",
        "Comprehensive Study Plan: Develop a study plan covering all subjects.",
        "Regular Mock Tests: Take regular mock tests to assess your preparation.",
        "Focus on Speed and Accuracy: Work on improving your speed and accuracy.",
        "General Awareness Preparation: Stay updated with current affairs and banking awareness.",
        "Consistent Revision: Regularly revise all topics to ensure retention."
      ]
    },
    {
      name: "JKSSB",
      fullform:"Jammu and Kashmir Services Selection Board",
      description: `Join our JKSSB coaching program for tailored guidance and support in cracking various JKSSB exams. Our expert faculty provides in-depth coverage of syllabus topics, along with practice tests and personalized feedback to enhance your preparation and performance.`,
      preparationGuide: [
        "Understand Exam Syllabus and Pattern: Familiarize yourself with the JKSSB exam syllabus and pattern.",
        "Study Plan: Create a comprehensive study plan covering all topics.",
        "Regular Practice: Practice regularly with previous papers and mock tests.",
        "Focus on Weak Areas: Identify and work on your weak areas.",
        "Stay Updated: Keep up with current affairs relevant to the exam.",
        "Consistent Revision: Regularly revise to retain all topics."
      ]
    },
    {
      name: "RAILWAYS",
      fullform:"",
      description: `Our Railways exam coaching prepares you for various positions in the Indian Railways, including RRB NTPC, RRB Group D, and other technical and non-technical posts. With a structured curriculum, regular mock tests, and expert guidance, we ensure you are well-prepared to achieve success.`,
      preparationGuide: [
        "Understand the Exam Pattern and Syllabus: Get a clear understanding of the Railways exam pattern and syllabus.",
        "Study Plan: Create a detailed study plan covering all subjects.",
        "Regular Practice: Solve previous papers and take regular mock tests.",
        "Focus on Technical Subjects: Give special attention to technical subjects if applicable.",
        "Current Affairs: Stay updated with current affairs relevant to Railways.",
        "Consistent Revision and Practice: Regularly revise and practice all topics."
      ]
    },
    {
      name: "RIMC",
      fullform:"Rashtriya Indian Military College",
      description: `Prepare for the RIMC entrance exam with our specialized coaching program. We cover all subjects including Mathematics, English, and General Knowledge. Our rigorous training and disciplined approach ensure you are ready for both the written exam and the interview process.`,
      preparationGuide: [
        "Exam Pattern and Syllabus: Understand the RIMC exam pattern and syllabus.",
        "Detailed Study Plan: Develop a study plan covering all subjects.",
        "Practice Regularly: Regularly solve previous papers and take mock tests.",
        "Focus on Weak Areas: Identify and work on your weak areas.",
        "Interview Preparation: Prepare for the interview with mock interviews and practice sessions.",
        "Consistent Revision and Practice: Regularly revise and practice all topics."
      ]
    },
    {
      name: "NVS",
      fullform:"Navodaya Vidyalaya Samiti",
      description: `Our NVS coaching program helps you prepare for various teaching and non-teaching positions in Navodaya Vidyalayas. With a focus on exam pattern, syllabus coverage, and regular practice, our course ensures you have the knowledge and confidence to succeed.`,
      preparationGuide: [
        "Exam Pattern and Syllabus: Understand the NVS exam pattern and syllabus.",
        "Comprehensive Study Plan: Develop a study plan covering all sections.",
        "Regular Practice: Practice regularly with previous papers and mock tests.",
        "Focus on Teaching Aptitude: Give special attention to teaching aptitude if applicable.",
        "Current Affairs: Stay updated with current affairs relevant to NVS.",
        "Consistent Revision and Practice: Regularly revise and practice all topics."
      ]
    },
    {
      name: "JKP Constable & SI",
      fullform:"Jammu and Kashmir Police",
      description: `Join our JKP Constable & SI coaching program to excel in the written exam, physical endurance test, and medical examination. Our experienced faculty provides comprehensive study materials, practice tests, and personalized guidance to help you achieve your goals.`,
      preparationGuide: [
        "Understand the Exam Pattern and Syllabus: Familiarize yourself with the JKP Constable & SI exam pattern and syllabus.",
        "Physical Training: Start your physical training early to meet the physical standards.",
        "Study Plan: Develop a study plan focusing on all sections of the written exam.",
        "Regular Practice: Solve previous papers and take regular mock tests.",
        "Medical Standards: Be aware of the medical standards and work on meeting them.",
        "Consistent Practice and Revision: Regular practice and revision are key to success."
      ]
    },
    {
      name: "SAINIK SCHOOL",
      fullform:"",
      description: `Our Sainik School coaching program prepares you for the All India Sainik Schools Entrance Examination (AISSEE). We cover all subjects including Mathematics, English, General Knowledge, and Intelligence. Our structured curriculum and disciplined approach ensure you are ready for both the written exam and interview.`,
      preparationGuide: [
        "Understand the Exam Pattern and Syllabus: Familiarize yourself with the AISSEE pattern and syllabus.",
        "Comprehensive Study Plan: Develop a study plan covering all subjects.",
        "Regular Practice: Practice regularly with previous papers and mock tests.",
        "Focus on Weak Areas: Identify and work on your weak areas.",
        "Interview Preparation: Prepare for the interview with mock interviews and practice sessions.",
        "Consistent Revision and Practice: Regularly revise and practice all topics."
      ]
    },
    {
      name: "NDA",
      fullform:"National Defence Academy",
      description: `Our NDA coaching program is designed to prepare you for the written exam and SSB interview. We cover all subjects including Mathematics, General Ability, and English. Our experienced faculty, regular mock tests, and personalized guidance ensure you are ready to join the prestigious National Defence Academy.`,
      preparationGuide: [
        "Understand the Exam Pattern and Syllabus: Get a clear understanding of the NDA exam pattern and syllabus.",
        "Detailed Study Plan: Develop a study plan covering all subjects.",
        "Regular Mock Tests: Take regular mock tests to assess your preparation.",
        "Focus on Mathematics and General Ability: Give special attention to Mathematics and General Ability sections.",
        "SSB Interview Preparation: Prepare for the SSB interview with mock interviews and practice sessions.",
        "Consistent Revision and Practice: Regularly revise and practice all topics."
      ]
    },
    {
      name: "CDS",
      fullform:"Combined Defence Services",
      description: `Prepare for the CDS exam with our comprehensive coaching program. We cover all subjects including English, General Knowledge, and Elementary Mathematics. Our structured approach, regular practice tests, and expert guidance help you excel in both the written exam and SSB interview.`,
      preparationGuide: [
        "Understand the Exam Pattern and Syllabus: Familiarize yourself with the CDS exam pattern and syllabus.",
        "Comprehensive Study Plan: Develop a study plan covering all subjects.",
        "Regular Practice: Solve previous papers and take regular mock tests.",
        "Focus on Weak Areas: Identify and work on your weak areas.",
        "SSB Interview Preparation: Prepare for the SSB interview with mock interviews and practice sessions.",
        "Consistent Revision and Practice: Regularly revise and practice all topics."
      ]
    },
    {
      name: "AFCAT",
      fullform:"Air Force Common Admission Test",
      description: `Our AFCAT coaching program offers in-depth preparation for all sections including General Awareness, Verbal Ability in English, Numerical Ability, and Reasoning and Military Aptitude. With regular mock tests, personalized feedback, and expert guidance, we ensure you are ready to achieve your dream of joining the Indian Air Force.`,
      preparationGuide: [
        "Understand the Exam Pattern and Syllabus: Get a clear understanding of the AFCAT exam pattern and syllabus.",
        "Detailed Study Plan: Develop a study plan covering all sections.",
        "Regular Mock Tests: Take regular mock tests to assess your preparation.",
        "Focus on Weak Areas: Identify and work on your weak areas.",
        "Consistent Revision and Practice: Regularly revise and practice all topics.",
        "SSB Interview Preparation: Prepare for the SSB interview with mock interviews and practice sessions."
      ]
    }
  ];

  return (
    <div className='grid lg:grid-cols-3 lg:grid-rows-5 sm:grid-cols-2 sm:grid-rows-7 grid-cols-1 grid-rows-14 gap-4 w-[80vw] m-auto py-6'>
      {courses.map((course, index) => (
        <CourseComponent
          key={index}
          name={course.name}
          description={course.description}
          preparationGuide={course.preparationGuide}
          fullform={course.fullform}
          courseNavigationClick={courseNavigationClick}
          counterEqual={counterEqual}
        />
      ))}
    </div>
  );
}

export default Courses;
