import React from 'react';

const members = [
  // UG, 4th Year, Electrical
  { name: "Soumya Ranjan Das", department: "Electrical Engineering", ugpg: "UG", year: "4th" },
  { name: "Harshit Raghuvanshi", department: "Electrical Engineering", ugpg: "UG", year: "4th" },
  { name: "Ayushi Kumari", department: "Electrical Engineering", ugpg: "UG", year: "4th" },
  { name: "Rohit Srivastav", department: "Electrical Engineering", ugpg: "UG", year: "4th" },

  // UG, 4th Year, Electronics
  { name: "Shreya Shradha", department: "Electronics and Communication Engineering", ugpg: "UG", year: "4th" },
  { name: "Dhuruv Goel", department: "Electronics and Communication Engineering", ugpg: "UG", year: "4th" },
  { name: "Shreyashi Chakraborty", department: "Electronics and Communication Engineering", ugpg: "UG", year: "4th" },
  { name: "Sona Kumari", department: "Electronics and Communication Engineering", ugpg: "UG", year: "4th" },

  // UG, 3rd Year, Electrical
  { name: "Arush Srivastava", department: "Electrical Engineering", ugpg: "UG", year: "3rd" },
  { name: "Ryali Sriram", department: "Electrical Engineering", ugpg: "UG", year: "3rd" },
  { name: "Aritra Bera", department: "Electrical Engineering", ugpg: "UG", year: "3rd" },

  // UG, 3rd Year, Electronics
  { name: "Swasti Mishra", department: "Electronics and Communication Engineering", ugpg: "UG", year: "3rd" },
  { name: "Rachit Raj", department: "Electronics and Communication Engineering", ugpg: "UG", year: "3rd" },
  { name: "Tupakulu Harshavardhan", department: "Electronics and Communication Engineering", ugpg: "UG", year: "3rd" },
  { name: "Jami Narendra", department: "Electronics and Communication Engineering", ugpg: "UG", year: "3rd" },
  { name: "Kanishk Gupta", department: "Electronics and Communication Engineering", ugpg: "UG", year: "3rd" },

  // UG, 3rd Year, Rest
  { name: "Gorantla Mokshgna", department: "Computer Science & Engineering", ugpg: "UG", year: "3rd" },
  { name: "Pathan Gulamgaush", department: "Computer Science & Engineering", ugpg: "UG", year: "3rd" },
  { name: "Aditya Pratap Singh", department: "Mathematics and Computing", ugpg: "UG", year: "3rd" },
  { name: "Mudapalli Mounika", department: "Mathematics and Computing", ugpg: "UG", year: "3rd" },

  // UG, 2nd Year, Electrical
  { name: "Nichemetla Sai Vishnu Vardhan", department: "Electrical Engineering", ugpg: "UG", year: "2nd" },
  { name: "Chirag Rangwani", department: "Electrical Engineering", ugpg: "UG", year: "2nd" },
  { name: "Bhavesh Jat", department: "Electrical Engineering", ugpg: "UG", year: "2nd" },

  // UG, 2nd Year, Electronics
  { name: "Pradyumn Agrawal", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Baswaraju Ruthvika", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Poladi Hamsini", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Challa Satya Harshitha", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "T.V. Saravanesh", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Killi Praveen Kumar", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Sirasani Avinash Reddy", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "K Venkatesh", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Bhuvan Kunchum R", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Sukanya", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Piyush Singh", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Yagyesh Agarwal", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Dhananjay Jha", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },
  { name: "Shivang Sharma", department: "Electronics and Communication Engineering", ugpg: "UG", year: "2nd" },

  // UG, 2nd Year, Rest
  { name: "Dipak Gupta", department: "Mining Engineering", ugpg: "UG", year: "2nd" },

  // PG, 2nd Year, Electronics
  { name: "Abir Roy", department: "Electronics and Communication Engineering (VLSI Design)", ugpg: "PG", year: "2nd" },
  { name: "Ishita Visen", department: "Electronics and Communication Engineering (VLSI Design)", ugpg: "PG", year: "2nd" },
];

const NameCard = ({ name, department, ugpg, year }) => (
  <div className="bg-gray-100 rounded-lg p-4 shadow-md text-center w-64">
    <h3 className="font-medium text-lg mb-2">{name}</h3>
    <div className="text-gray-700 text-sm mb-1">{department}</div>
    <div className="flex justify-center gap-2 text-xs text-gray-600">
      <span className="bg-gray-200 rounded px-2 py-0.5">{ugpg}</span>
      <span className="bg-gray-200 rounded px-2 py-0.5">{year} Year</span>
    </div>
  </div>
);

const MembersSection = () => (
  <section className="w-full max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-semibold mb-8 text-center">MEMBERS</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {members.map((m, idx) => (
        <NameCard key={idx} {...m} />
      ))}
    </div>
  </section>
);

export default MembersSection;