import React from "react";

const Form = ({ newUser, handleGetData, handleAddUser }) => {
  return (
    <form>
      <label>
        <input
          type="text"
          value={newUser.name}
          onChange={handleGetData}
          name="name"
          placeholder="Name"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={newUser.job}
          onChange={handleGetData}
          name="job"
          placeholder="Job"
        />
      </label>
      <br />
      <button onClick={handleAddUser}>Add User</button>
    </form>
  );
};

export default Form;
