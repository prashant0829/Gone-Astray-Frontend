import React from "react";

const MatchResultSection = ({ matches }) => {
  return (
    <div className="mt-2 mb-2">
      {matches.length > 0 ? (
        matches.map((item, i) => {
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
                    {/* <button
                      onClick={() => {
                        console.log("Hello");
                      }}>
                      Search Matches
                    </button> */}
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

export default MatchResultSection;
