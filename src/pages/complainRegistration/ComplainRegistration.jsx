import axios from "axios";
import React, { useState } from "react";
import ComplainRegistrationSection from "../../components/complainRegistrationSection/ComplainRegistrationSection";
import MatchResultSection from "../../components/matchResultSection/MatchResultSection";
import Navigation from "../../components/Navigation";
import PreviousComplaintsSection from "../../components/previousComplaints/PreviousComplaintsSection";

const ComplainRegistration = ({ isLoggedIn, setIsLoggedIn }) => {
  const [complaints, setComplaints] = useState([]);
  const [matches, setMatches] = useState([]);

  const getComplaints = async () => {
    let data = await axios.post("/complaints", {
      user: localStorage.getItem("user"),
    });
    let imageData = data.data.images;
    imageData = imageData.map((data) => {
      return JSON.parse(data);
    });
    console.log(imageData);
    setComplaints(imageData);
  };

  const searchMatches = async (image) => {
    try {
      const data = await axios.get(`/getresultimages/${image}`);
      let imageData = data.data.images;
      imageData = imageData.map((data) => {
        return JSON.parse(data);
      });
      setMatches(imageData);
      console.log(imageData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section id="entry-page" style={{ maxHeight: "50px" }}>
        <div className="grid-nav-box">
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
      </section>
      <div className="container">
        <div className="row mt-2">
          <div className="col-4 border rounded ">
            <h4 className="text-center">Register Complaint</h4>
            <ComplainRegistrationSection />
          </div>
          <div className="col-4 border rounded">
            <h4 className="text-center">Previous Complaints</h4>
            <PreviousComplaintsSection
              complaints={complaints}
              searchMatches={searchMatches}
            />
            <button
              onClick={() => {
                getComplaints();
              }}>
              Get Complaints
            </button>
          </div>
          <div className="col-4 border rounded">
            <h4 className="text-center">Match Results</h4>
            <MatchResultSection matches={matches} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainRegistration;
