import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
      />
      <ReactMarkdown children={markdown} />
    </div>
  );
};

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  const names = data.flatMap(arr => arr.map(obj => obj.name));
  console.log(names); // Outputs: ['John', 'Jane', 'Bob']
  }

function reverseSentence(sentence) {
    let reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
  }

  function getNames(data) {
    return data.map(subArray => subArray.map(obj => obj.name));
  }


export default MarkdownEditor;
