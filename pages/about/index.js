import React from "react";
import Link from "next/link";
const Aboutus = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <>
      <h1>Name of our teams </h1>

      {details.map((data) => (
        <div>
          <Link href={`about/${data.id}`}>Name:{data.name}</Link>
        </div>
      ))}
      {/* {details.map((data) => (
        <div>
          <Link href={`about/${data.id}`}>Name : {data.name}</Link>
        </div>
      ))} */}
    </>
  );
};

export default Aboutus;
