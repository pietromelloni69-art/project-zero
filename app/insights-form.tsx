"use client";

import { useRef, useState } from "react";

const careerLevels = ["Entry level", "Manager level", "Leadership level", "C-level"];
const skillChoices = ["Skills required", "Skills to develop"];

export default function InsightsForm() {
  const [careerOpen, setCareerOpen] = useState(true);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const mentorRef = useRef<HTMLFieldSetElement>(null);

  function handleCareerChange() {
    setCareerOpen(false);
    setSkillsOpen(true);
  }

  function handleSkillsChange() {
    setSkillsOpen(false);
    requestAnimationFrame(() => {
      mentorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      mentorRef.current?.focus({ preventScroll: true });
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-medium sm:text-3xl">What insights would you like?</h2>

      <div className="mt-8 space-y-4">
        <div className="border-b border-[#101010]/20 pb-4">
          <button
            type="button"
            aria-expanded={careerOpen}
            onClick={() => setCareerOpen((open) => !open)}
            className="flex w-full items-center justify-between text-left text-lg font-medium"
          >
            Career Paths
            <span aria-hidden="true">{careerOpen ? "−" : "+"}</span>
          </button>
          {careerOpen && (
            <div className="mt-4 space-y-3 pl-6">
              {careerLevels.map((level) => (
                <label key={level} className="flex items-center gap-3 text-lg">
                  <input
                    type="radio"
                    name="career-seniority"
                    value={level}
                    required
                    onChange={handleCareerChange}
                    className="h-5 w-5 accent-[#101010]"
                  />
                  {level}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-[#101010]/20 pb-4">
          <button
            type="button"
            aria-expanded={skillsOpen}
            onClick={() => setSkillsOpen((open) => !open)}
            className="flex w-full items-center justify-between text-left text-lg font-medium"
          >
            Skills for the role
            <span aria-hidden="true">{skillsOpen ? "−" : "+"}</span>
          </button>
          {skillsOpen && (
            <div className="mt-4 space-y-3 pl-6">
              {skillChoices.map((skillChoice) => (
                <label key={skillChoice} className="flex items-center gap-3 text-lg">
                  <input
                    type="radio"
                    name="skills-focus"
                    value={skillChoice}
                    required
                    onChange={handleSkillsChange}
                    className="h-5 w-5 accent-[#101010]"
                  />
                  {skillChoice}
                </label>
              ))}
            </div>
          )}
        </div>

        <label className="flex items-center gap-3 text-lg">
          <input
            type="checkbox"
            name="insights"
            value="Market trends"
            className="h-5 w-5 accent-[#101010]"
          />
          Market trends
        </label>

        <fieldset
          ref={mentorRef}
          tabIndex={-1}
          className="space-y-3 border-t border-[#101010]/20 pt-4 outline-none"
        >
          <legend className="text-lg">
            One-to-one mentor recommendations <span>(Premium)</span>
          </legend>
          <label className="flex items-center gap-3 text-lg">
            <input
              type="radio"
              name="mentor-recommendations"
              value="Yes"
              required
              className="h-5 w-5 accent-[#101010]"
            />
            Yes
          </label>
          <label className="flex items-center gap-3 text-lg">
            <input
              type="radio"
              name="mentor-recommendations"
              value="No"
              required
              className="h-5 w-5 accent-[#101010]"
            />
            No
          </label>
        </fieldset>
      </div>
    </div>
  );
}
