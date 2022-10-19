import React, { useState } from 'react'

export default function SignUp() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("여자");
    
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름: ${name} 성별: ${gender}`);
        event.preventDefault();
    };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
        <label>
            이름:
            <input 
            type='text' 
            value={name} 
            required
            onChange={handleChangeName} />
        </label>
        <button type='submit'>제출</button>
        <br />
        <label>
            성별:
            <select value={gender} onChange={handleChangeGender}>
                <option value={'남자'}>남자</option>
                <option value={'여자'}>여자</option>
            </select>
        </label>
        <button type='submit'>제출</button>
    </form>
  )
}
