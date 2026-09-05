import { useState, useEffect } from 'react'
import './App.css'

function StudentCard({ name, course, semester, email, phone, city }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div style={{border:'1px solid #00d8ff', padding:'20px', borderRadius:'10px', margin:'20px', background:'#1a1a1a', color:'white'}}>
      <h2>{name}</h2>
      <p><b>Course:</b> {course}</p>
      <p><b>Semester:</b> {semester}</p>
      <p><b>Email:</b> {email}</p>
      <button onClick={() => setShowDetails(!showDetails)} style={{background:'#00d8ff', padding:'8px 15px', border:'none', borderRadius:'5px', cursor:'pointer', marginTop:'10px'}}>
        {showDetails? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div style={{marginTop:'10px', borderTop:'1px solid #333', paddingTop:'10px'}}>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>City: {city}</p>
        </div>
      )}
    </div>
  )
}

function TextStats({ charCount, wordCount }) {
  return (
    <div>
      <p>Number Of Characters: {charCount}</p>
      <p>Number Of Words: {wordCount}</p>
    </div>
  )
}

function TextAnalyzer() {
  const [text, setText] = useState("");
  const charCount = text.length;
  const wordCount = text.trim() === ""? 0 : text.trim().split(/\s+/).length;

  useEffect(() => {
    document.title = `Chars: ${charCount}`;
  }, [charCount]);

  return (
    <div style={{border:'1px solid #00d8ff', padding:'20px', borderRadius:'10px', margin:'20px', background:'#1a1a1a', color:'white'}}>
      <h2>Q2: Text Analyzer</h2>
      <textarea
        rows="5"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{width:'100%', padding:'10px'}}
      ></textarea>
      <p><b>Entered Text:</b> {text}</p>
      <TextStats charCount={charCount} wordCount={wordCount} />
    </div>
  )
}

function App() {
  return (
    <div style={{background:'#000', minHeight:'100vh', padding:'20px'}}>
      <h1 style={{color:'#00d8ff', textAlign:'center'}}>ADVANCED WEB DESIGNING - REACT</h1>
      <h2 style={{color:'white'}}>Q1: Student Profile Card</h2>
      <StudentCard
        name="Pradip"
        course="BCA"
        semester="5th"
        email="pradip@gmail.com"
        phone="9429896347"
        city="navsari"
      />
      <TextAnalyzer />
    </div>
  )
}

export default App
