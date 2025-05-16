import React from 'react';

const NameCard = ({ name }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md text-center w-48">
      <h3 className="font-medium text-lg">{name}</h3>
    </div>
  );
};

const MembersSection  =()=> {
  const memberNames = [
    "Soumya Ranjan Das",
    "Prantik Basu",
    "Gorantla Mokshgna",
    "Tupakulu Harshavardhan",
    "Pradyumn Agrawal",
    "Pathan Gulamgaush",
    "Baswaraju Ruthvika",
    "Poladi Hamsini",
    "Nichemetla Sai Vishnu Vardhan",
    "Aritra Bera",
    "Arush Srivastava",
    "Ashutosh Rath",
    "Aditya Pratap Singh",
    "Challa Satya Harshitha",
    "T.V. Saravanesh",
    "Abir Roy",
    "Chirag Rangwani",
    "Ishita Visen",
    "Swasti Mishra",
    "Killi Praveen Kumar",
    "Kanishk Gupta",
    "Sirasani Avinash Reddy",
    "K Venkatesh",
    "Ryali Sriram",
    "Rachit Raj",
    "Bhuvan Kunchum",
    "R Sukanya",
    "Bhavesh Jat",
    "Dipak Gupta",
    "Piyush Singh",
    "Dhuruv Goel",
    "Yagyesh Agarwal",
    "Shreyashi Chakraborty",
    "Mudapalli Mounika",
    "Dhananjay Jha",
    "Shivang Sharma"
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-8 text-center">MEMBERS</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {memberNames.map((name, index) => (
          <NameCard key={index} name={name} />
        ))}
      </div>
    </section>
  );
}
export default MembersSection;