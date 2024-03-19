import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faDisease, faLaptopMedical, faKitMedical, faArrowRotateBack, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Depression"
          description="One of the worst mental health issues Gen Z has to deal with is depression.
          Born in the mid-'90s through the early 2010s, Gen Zers have high rates of stress, anxiety, and depression but less stigma around therapy and mental health.
          Our skilled specialists cure you through this."
          icon={faKitMedical}
        />

        <InformationCard
          title="Anxiety"
          description="Anxiety is a mental health condition that can affect individuals of all ages, including those in the Gen Z demographic. 
          Our team encourages healthy lifestyle habits such as regular exercise, adequate sleep, stress management techniques (such as mindfulness and relaxation exercises), and a balanced diet can help reduce anxiety symptoms."
          icon={faHeartPulse}
        />

          <InformationCard
          title="Stress"
          description="Our team of experienced psychologists certainly play a crucial role in helping individuals, including those in the Gen Z demographic, manage and reduce their stress levels.
          Our doctors teach individuals coping strategies and stress management techniques, such as mindfulness meditation, deep breathing exercises, progressive muscle relaxation, and guided imagery."
          icon={faLaptopMedical}
        />
         <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        />
        
         <InformationCard
          title="Insomnia"
          description="One of the worst mental health issues Gen Z has to deal with is depression and insomnia.
          Born in the mid-'90s through the early 2010s, Gen Zers have high rates of stress, anxiety, and depression but less stigma around therapy and mental health.
          Our skilled specialists cure you through this."
          icon={faDisease}
        />

        <InformationCard
          title="Difficulty concentrating"
          description="Smile with confidence with our super supportive doctors. Being unable to concentrate can affect people of all ages for many reasons.
             Possible causes include sleep deprivation, stress, or a mood disorder. Underlying conditions, such as ADHD, OCD, or a thyroid problem, may also cause difficulty concentrating."
          icon={faTruckMedical}
        />
      </div>
    </div>
  );
}

export default Info;
