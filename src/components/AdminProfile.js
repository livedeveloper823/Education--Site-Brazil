import React, { useState } from "react";
import { useDispatch, useSelector } from "../store";
import { changeAdminData } from "../store/reducers/userdata";

const AdminProfile = () => {
  const userdata = useSelector((state) => state.userdata);
  const admin = userdata.admin;
  const dispatch = useDispatch();

  const [newAdminData, setNewAdminData] = useState({
    // file: "",
    avatar: admin.avatar,
    name: admin.name,
    email: admin.email,
    password: "",
    newPassword: "",
    newPassword2: "",
  });


  const [active, setActive] = useState("edit");

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setNewAdminData({
        ...newAdminData,
        // file: file,
        avatar: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const editName = (e) => {
    const name = e.target.value;
    // setName(name);
    setNewAdminData({ ...newAdminData, name: name });
  };

  // const editEmail = (e) => {
  //   const email = e.target.value;
  //   setNewAdminData({ ...newAdminData, email: email });
  // };

  const editPassword = (e) => {
    const password = e.target.value;
    // setName(name);
    setNewAdminData({ ...newAdminData, password: password });
  };

  const editNewPassword = (e) => {
    const newPassword = e.target.value;
    // setName(name);
    setNewAdminData({ ...newAdminData, newPassword: newPassword });
  };

  const editNewPassword2 = (e) => {
    const newPassword2 = e.target.value;
    // setName(name);
    setNewAdminData({ ...newAdminData, newPassword2: newPassword2 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAdminData.newPassword === newAdminData.newPassword2) {
      let activeP = active === "edit" ? "profile" : "edit";
      setActive(activeP);
      dispatch(changeAdminData(newAdminData));
    }
  };

  return (
    <div>
      {active === "edit" ? (
        <div className="w-full card">
          <form onSubmit={handleSubmit}>
            <label htmlFor="photo-upload" className="custom-file-upload fas">
              <div className="img-wrap img-upload">
                <img for="photo-upload" src={newAdminData.avatar} alt="" />
              </div>
              <input id="photo-upload" type="file" onChange={photoUpload} />
            </label>
            <div className="md:flex md:mb-5">
              <div className="field">
                <label htmlFor="name">Seu nome:</label>
                <input
                  className="border-2 outline-none rounded-lg p-2"
                  id="name"
                  type="text"
                  onChange={editName}
                  maxlength="25"
                  value={newAdminData.name}
                  placeholder="Nome"
                  // required
                />
              </div>
              {/* <div className="field">
                <label htmlFor="status">Seu email:</label>
                <input
                  className="border-2 outline-none p-2 rounded-lg"
                  id="status"
                  type="email"
                  onChange={editEmail}
                  maxLength="35"
                  value={newAdminData.email}
                  placeholder="Email"
                  // required
                />
              </div> */}
              <div className="field">
                <label htmlFor="currentPassword">Senha atual:</label>
                <input
                  className="border-2 outline-none rounded-lg p-2"
                  id="password"
                  type="password"
                  onChange={editPassword}
                  value={newAdminData.password}
                  placeholder="Senha atual"
                  required
                />
              </div>
            </div>
            <div className="md:flex mb-5">
              <div className="field">
                <label htmlFor="password">Nova senha:</label>
                <input
                  className="border-2 outline-none p-2 rounded-lg"
                  id="newpassword"
                  type="password"
                  onChange={editNewPassword}
                  value={newAdminData.newPassword}
                  placeholder="Nova senha"
                  // required
                />
              </div>
              <div className="field">
                <label htmlFor="password2">Confirmar senha:</label>
                <input
                  className="border-2 outline-none p-2 rounded-lg"
                  id="newpassword2"
                  type="password"
                  onChange={editNewPassword2}
                  value={newAdminData.newPassword2}
                  placeholder="Confirmar senha"
                  // required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full md:w-48 bg-basicColor hover:bg-hoverColor md:px-10 py-2 md:py-3 text-white rounded-lg"
            >
              Salvar{" "}
            </button>
          </form>
        </div>
      ) : (
        <div className="card">
          <form onSubmit={handleSubmit}>
            <label className="custom-file-upload fas">
              <div className="img-wrap">
                <img for="photo-upload" src={admin.avatar} alt="" />
              </div>
            </label>
            <div className="name">{admin.name}</div>
            <div className="status">{admin.email}</div>
            <button
              type="submit"
              className="w-full md:w-48 bg-basicColor hover:bg-hoverColor md:px-10 py-2 md:py-3 text-white rounded-lg"
            >
              Editar perfil{" "}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AdminProfile;
