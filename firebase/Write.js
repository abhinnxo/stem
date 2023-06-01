import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const WriteToCloudFirestore = ({ formData }) => {
  const sendData = () => {
    try {
      firebase.firestore().collection("myCollection").add(formData);
      // .set({ test: "data hi hello", feffefe: "data hi hello" });
    } catch (error) {
      console.log("Error in WriteToCloudFirestore", error);
    }
  };
  return (
    <>
      <button type="submit" className="register-button" onClick={sendData}>
        Register
      </button>

      <style jsx>{`
        .register-button {
          background-color: #008080; /* color accent */
          color: #fff;
          padding: 10px 16px;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .register-button:hover {
          background-color: #006666; /* darker shade of color accent */
        }
      `}</style>
    </>
  );
};

export default WriteToCloudFirestore;
