import React, { useState } from "react";
import TextArea from "../components/TextArea";
import Dropdown from "../components/Dropdown";
import "./../styles/main-tool.css";

const MainTool = () => {
  // States
  const [songLyrics, setSongLyrics] = useState("");
  const [workingStanza, setWorkingStanza] = useState("");
  const [stanzaType, setStanzaType] = useState("Quatrain (4 lines)");
  const [syllables, setSyllables] = useState([8, 8, 8, 8]); // Default 4 lines with 8 syllables each

  // Handle stanza type change
  const handleStanzaTypeChange = (value) => {
    const numberOfLines = parseInt(value.match(/\d+/)[0], 10); // Extract the number from "Quatrain (4 lines)"
    setStanzaType(value);
    setSyllables(Array(numberOfLines).fill(8)); // Default syllables to 8 per line
  };

  // Handle syllable change for each line
  const handleSyllableChange = (index, value) => {
    const updatedSyllables = [...syllables];
    updatedSyllables[index] = parseInt(value, 10);
    setSyllables(updatedSyllables);
  };

  return (
    <div className="main-tool">
      {/* Left Section: Lyrics and Stanza */}
      <div className="lyrics-section">
        <TextArea
          label="Song Lyrics"
          placeholder="Write your song here..."
          value={songLyrics}
          onChange={(e) => setSongLyrics(e.target.value)}
        />
        <TextArea
          label="Working Stanza"
          placeholder="Edit your stanza here..."
          value={workingStanza}
          onChange={(e) => setWorkingStanza(e.target.value)}
        />
      </div>

      {/* Right Section: Instructions and Configuration */}
      <div className="config-section">
        <div className="instructions">
          <h3>Instructions</h3>
          <p>Follow the prompts to configure your stanza and structure.</p>
        </div>

        <h3>Configuration</h3>

        {/* Dropdown for Stanza Type */}
        <Dropdown
          label="Stanza Type"
          options={[
            "Monostich (1 line)",
            "Couplet (2 lines)",
            "Tercet (3 lines)",
            "Quatrain (4 lines)",
            "Quintain (5 lines)",
            "Sestet (6 lines)",
            "Septet (7 lines)",
            "Octave (8 lines)",
            "Nonet (9 lines)",
            "Decastich (10 lines)",
            "Hendecastich (11 lines)",
            "Dodecastich (12 lines)",
            "Tridecastich (13 lines)",
            "Tetradecastich (14 lines)",
            "Pentadecasyllabic (15 lines)",
            "Hexadecasyllabic (16 lines)",
            "Heptadecasyllabic (17 lines)",
            "Octadecasyllabic (18 lines)",
            "Enneadecasyllabic (19 lines)",
            "Icosastich (20 lines)",
          ]}
          value={stanzaType}
          onChange={(e) => handleStanzaTypeChange(e.target.value)}
        />

        {/* Dropdowns for Syllables per Line */}
        <div className="syllable-config">
          <h4>Syllables per Line</h4>
          {syllables.map((syllable, index) => (
            <Dropdown
              key={index}
              label={`Line ${index + 1}`}
              options={Array.from({ length: 30 }, (_, i) => i + 1)} // Numbers from 1 to 30
              value={syllable}
              onChange={(e) => handleSyllableChange(index, e.target.value)}
            />
          ))}
        </div>

        {/* Additional Configuration */}
        <textarea
          className="techniques-textarea"
          placeholder="Techniques, Theme, Rhyme Structure, etc."
          rows="6"
        ></textarea>
      </div>

      {/* Prompt Bar at the Bottom */}
      <div className="prompt-bar">
        <textarea
          placeholder="Enter your prompt here..."
          className="prompt-input"
        ></textarea>
        <button className="prompt-button">Submit</button>
      </div>
    </div>
  );
};

export default MainTool;
