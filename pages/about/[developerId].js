import { useRouter } from "next/router";
const DeveloperPage = () => {
  const router = useRouter();

  const developerId = router.query.developerId;
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const devloper = details.find((data) => data.id === parseInt(developerId));

  return (
    <>
      {devloper ? (
        <div>
          <h1>name : {devloper.name}</h1>
          <h3>role : {devloper.role}</h3>
        </div>
      ) : (
        <span>Developer doesn't exist</span>
      )}
    </>
  );
};

export default DeveloperPage;
