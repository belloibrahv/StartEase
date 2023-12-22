import { useEffect } from "react";
import { fetchSchool } from "../services/fetchSchool";

const SchoolPage = () => {
  useEffect(() => {
    const getSchool = async () => {
      try {
        await fetchSchool.get("school");
      } catch (err) {
        console.log("Something Went Wrong!!!");
      }
    };

    getSchool();
  }, []);

  return (
    <div>
      <h2>List Of Schools</h2>
    </div>
  );
};

export default SchoolPage;
