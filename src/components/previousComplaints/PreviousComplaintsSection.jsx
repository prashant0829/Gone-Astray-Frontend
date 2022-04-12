import React from "react";

const PreviousComplaintsSection = ({ complaints, searchMatches }) => {
  return (
    <div className="mt-2 mb-2">
      {complaints.length > 0 ? (
        complaints.map((item, i) => {
          return (
            <>
              <div key={i}>
                <div className="row">
                  <div className="col-4">
                    <img
                      className="w-100 "
                      src={
                        `http://localhost:5000/static/uploads/` + item.imageName
                      }
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <button onClick={() => searchMatches(item.imageName)}>
                      Search Matches
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default PreviousComplaintsSection;
