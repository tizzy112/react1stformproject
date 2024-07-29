import React, { useState, ChangeEvent, FormEvent } from 'react';

const getYears = (): number[] => {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let year = currentYear; year >= currentYear - 100; year--) {
    years.push(year);
  }
  return years;
};

const getMonths = (): string[] => [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getDays = (month: number, year: number): number[] => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

type Gender = 'Male' | 'Female' | 'Other';

const DateOfBirthForm: React.FC = () => {
  const [year, setYear] = useState<number | ''>('');
  const [month, setMonth] = useState<string | ''>('');
  const [day, setDay] = useState<number | ''>('');
  const [gender, setGender] = useState<Gender | ''>('');

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setYear(Number(event.target.value));
  };

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setDay(Number(event.target.value));
  };

  const handleGenderChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setGender(event.target.value as Gender);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(`Selected date of birth: ${month} ${day}, ${year}`);
    console.log(`Selected gender: ${gender}`);
  };

  const months = getMonths();
  const years = getYears();
  const days = year && month ? getDays(months.indexOf(month) + 1, year) : [];

  return (
    <form onSubmit={handleSubmit}>
      <div className='selectLabel'>
        <label htmlFor="month">Month:</label>
        <select id="month" value={month} onChange={handleMonthChange} required>
          <option value="">Select Month</option>
          {months.map((m, index) => (
            <option key={index} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div className='selectLabel'>
        <label htmlFor="day">Day:</label>
        <select id="day" value={day} onChange={handleDayChange} required>
          <option value="">Select Day</option>
          {days.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div className='selectLabel'>
        <label htmlFor="year">Year:</label>
        <select id="year" value={year} onChange={handleYearChange} required>
          <option value="">Select Year</option>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </form>
  );
};

export default DateOfBirthForm;
