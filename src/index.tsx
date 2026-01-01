import React, { useState } from 'react';

const SAMPLE_FONTS = [
  'Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana',
  'Courier New', 'Comic Sans MS', 'Impact', 'Trebuchet MS', 'Palatino',
  'Garamond', 'Bookman', 'Avant Garde', 'Monaco', 'Menlo',
  'SF Pro', 'SF Mono', 'New York', 'Futura', 'Gill Sans'
];

const FontBook: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState(SAMPLE_FONTS[0]);
  const [sampleText, setSampleText] = useState('The quick brown fox jumps over the lazy dog');
  const [fontSize, setFontSize] = useState(48);

  return (
    <div className="h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r bg-gray-50 flex flex-col">
        <div className="p-2 border-b">
          <input
            type="text"
            placeholder="Search fonts..."
            className="w-full px-3 py-1.5 text-sm border rounded"
          />
        </div>
        <div className="flex-1 overflow-auto">
          {SAMPLE_FONTS.map(font => (
            <div
              key={font}
              onClick={() => setSelectedFont(font)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedFont === font ? 'bg-blue-100 text-blue-800' : ''
              }`}
              style={{ fontFamily: font }}
            >
              {font}
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b bg-gray-50 flex items-center gap-4">
          <label className="text-sm">Size:</label>
          <input
            type="range"
            min="12"
            max="120"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-32"
          />
          <span className="text-sm text-gray-600">{fontSize}px</span>
        </div>
        
        <div className="flex-1 p-8 overflow-auto">
          <h1 
            className="mb-8"
            style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}
          >
            {selectedFont}
          </h1>
          
          <textarea
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            style={{ fontFamily: selectedFont, fontSize: `${fontSize * 0.5}px` }}
            className="w-full h-32 border rounded p-4 resize-none"
          />
          
          <div className="mt-8 space-y-4">
            <div style={{ fontFamily: selectedFont }}>
              <div className="text-gray-500 text-sm mb-1">Regular</div>
              <div className="text-2xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
              <div className="text-2xl">abcdefghijklmnopqrstuvwxyz</div>
              <div className="text-2xl">0123456789 !@#$%^&*()</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontBook;
