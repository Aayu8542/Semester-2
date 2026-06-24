import React from "react";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5",
      }}
    >
      <form
        style={{
          backgroundColor: "#f5f5f5",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "blue",
            marginBottom: "30px",
          }}
        >
          Student Registration Form
        </h1>

        <input
          type="text"
          placeholder="Student Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Course"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "14px",
            border: "none",
            borderRadius: "6px",
            fontSize: "18px",
            cursor: "pointer",
            width: "100%",
            marginTop: "10px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  border: "2px solid #666",
  borderRadius: "6px",
  fontSize: "18px",
  outline: "none",
  boxSizing: "border-box",
};

export default App;