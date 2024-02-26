import React, { useState, useEffect } from "react";
import { TfiPencilAlt } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";

const TagTable = () => {
  const [tags, setTags] = useState([]);
  const updateTag = () => {};
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/tag/");
      const data = await response.json();
      setTags(data.tags);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <div className="tag-header col-12" style={{ display: "flex", padding: "20px" }}>
        <div className="tag-title col-6">
          <h2 style={{ fontSize: "30px" }}>Tags</h2>
        </div>
        <div className="tag-button col-6">
          <button className="create-tagbtn col-2">New Tag</button>
        </div>
      </div>

      <div style={{ width: "50rem" }}>
        <h1>Tags Table</h1>
        <table style={{ width: "90rem" }}>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Accounts</th>
              <th>Archived accounts</th>
              <th>Pending tasks</th>
              <th>Completed tasks</th>
              <th>Pipelines</th>
              <FiSettings />{" "}
            </tr>
          </thead>
          <tbody>
            {tags.map((tag) => (
              <tr key={tag._id}>
                <td style={{ backgroundColor: tag.tagColour, color: "#fff", borderRadius: "10px", width: "70px", textAlign: "center" }}>{tag.tagName}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td>
                  <button
                    onClick={() => {
                      updateTag(tag._id);
                    }}
                    style={{ marginLeft: "10px" }}
                    className="btn btn-success"
                  >
                    {" "}
                    <CiMenuKebab />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TagTable;
