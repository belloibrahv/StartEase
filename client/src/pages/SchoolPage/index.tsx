import { useState, useEffect } from "react";
import { Button } from "antd";
import Table from "components/Table";
import { columns } from "pages/SchoolPage/libs";
import { fetchSchools } from "services/fetchSchools";
import { SchoolsTypes } from "pages/SchoolPage/types";

const SchoolsPage = () => {
  const [schoolsData, setSchoolsData] = useState<SchoolsTypes[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const getSchools = async () => {
      try {
        const response = await fetchSchools.get("school");
        setSchoolsData(response.data);
      } catch (err) {
        setErrorMessage(`No School was not found!`);
      }
    };

    getSchools();
  }, []);

  return (
    <div>
      <h2>List Of Schools</h2>
      <Button type="primary">Create School</Button>
      {!schoolsData ? (
        <div>{errorMessage}</div>
      ) : (
        <div>
          <Table
            data={schoolsData.map((item, index) => ({
              ...item,
              key: item.id || index,
            }))}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
};

export default SchoolsPage;
