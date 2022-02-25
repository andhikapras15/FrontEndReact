import React, { Component, useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Text from "./components/text";
// import Title from "./components/title";
// import { ButtonPrimary, ButtonSecondary, API_URL } from "./components/buttons";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Fade,
} from "reactstrap";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [isOpenDel, setisOpenDel] = useState(false);
  const [isOpenEd, setisOpenEd] = useState(false);
  // data awal
  const [dataKegiatan, setdataKegiatan] = useState([
    {
      kegiatan: "belajar",
      hari: "Senin",
    },
    {
      kegiatan: "berenang",
      hari: "Rabu",
    },
  ]);
  // add feature
  const [input, setInput] = useState({
    kegiatan: "",
    hari: "",
  });
  // del feature
  const [indexdel, setindexdel] = useState(-1);
  // edit feature
  const [indexed, setindexded] = useState(-1);
  const [inputEdit, setinputEdit] = useState({
    kegiatan: "",
    hari: "",
  });

  const toggle = () => {
    setisOpen(!isOpen);
  };
  const toggleDel = () => {
    setisOpenDel(!isOpenDel);
  };
  const toggleEd = () => {
    setisOpenEd(isOpenEd)
  }

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleEdit = (e) => {
    setinputEdit({ ...inputEdit, [e.target.name]: e.target.value });
  };

  const onSaveDatahandle = (e) => {
    e.preventDefault();
    let { hari, kegiatan } = input;
    if ([hari, kegiatan].includes("")) {
      alert("tidak boleh save");
    } else {
      let dataKegiatanMut = dataKegiatan;
      dataKegiatanMut.push(input);
      setdataKegiatan(dataKegiatanMut);
      setisOpen(false);
      setInput({
        kegiatan: "",
        hari: "",
      });

    }
  };

  const onDeleteClick = (index) => {
    setindexdel(index);
    setisOpenDel(true);
  };

  const onEditClick = (index) => {
    setindexded(index)
    setisOpenEd(true)
  }

  const onYesDeleteClick = () => {
    let dataKegiatanMut = dataKegiatan;
    dataKegiatanMut.splice(indexdel, 1);
    setdataKegiatan(dataKegiatanMut);
    setindexdel(-1);
    setisOpenDel(false);
  };

  const onYesEditClick = () => {
    let dataKegiatanMut = dataKegiatan;
    dataKegiatanMut.splice(indexed, 1, inputEdit);
    setdataKegiatan(dataKegiatanMut);
    setinputEdit(-1);
    setisOpenEd(false);
  };

  const renderData = () => {
    return dataKegiatan.map((val, index) => {
      return (
        <Fade key={index}>
          <div className="shadow-lg p-3 kotak rounded w-100 bg-white my-3">
            <div className="hari mb-2 text-success text-capitalize">
              {val.hari}
            </div>
            <div className="d-flex justify-content-between ">
              <div>
                <h3 className="text-capitalize">{val.kegiatan}</h3>
              </div>
              <div>
                <Button color="warning me-2" onClick={() => onEditClick(index)}>Edit</Button>
                <Button color="danger" onClick={() => onDeleteClick(index)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      );
    });
  };

  const renderModalEd = () => {
    if (indexed < 0) {
      return null;
    }
    return (
      <Modal isOpen={isOpenEd} toggle={toggleEd}>
        <ModalHeader toggle={toggleEd}>Edit Data</ModalHeader>
        <ModalBody>
          <form onSubmit={onSaveDatahandle}>
            <div className="my-2">
              <label>Kegiatan</label>
              <input
                value={inputEdit.kegiatan}
                name="kegiatan"
                type="text"
                placeholder="masukkan Kegiatan"
                className="form-control mt-2"
                onChange={handleEdit}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onYesEditClick}>
            Edit Data
          </Button>
          <Button onClick={toggleEd}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  };

  const renderModalDel = () => {
    if (indexdel < 0) {
      return null;
    }
    return (
      <Modal isOpen={isOpenDel} toggle={toggleDel}>
        <ModalHeader toggle={toggleDel}>Delete Data</ModalHeader>
        <ModalBody>
          apakah anda yakin menghapus {dataKegiatan[indexdel].kegiatan}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onYesDeleteClick}>
            Delete Data
          </Button>
          <Button onClick={toggleDel}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div>
      {renderModalDel()}
      {renderModalEd()}

      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Tambah Data</ModalHeader>
        <ModalBody>
          <form onSubmit={onSaveDatahandle}>
            <div className="my-2">
              <label>Kegiatan</label>
              <input
                value={input.kegiatan}
                name="kegiatan"
                type="text"
                placeholder="masukkan Kegiatan"
                className="form-control mt-2"
                onChange={handleInput}
              />
            </div>
            <div className="my-2">
              <label>Hari</label>
              <select
                value={input.hari}
                name="hari"
                onChange={handleInput}
                className="form-control mt-2"
              >
                <option hidden value={""}>
                  Pilih hari
                </option>
                <option value={"Senin"}>Senin</option>
                <option value={"Selasa"}>Selasa</option>
                <option value={"Rabu"}>Rabu</option>
                <option value={"Kamis"}>Kamis</option>
                <option value={"Jum'at"}>Jum'at</option>
                <option value={"Sabtu"}>Sabtu</option>
                <option value={"Minggu"}>Minggu</option>
              </select>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSaveDatahandle}>
            Save Data
          </Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <div className=" pt-5 main-container">
        <div>
          <Button onClick={toggle} className="w-100" color="primary">
            Tambah Data
          </Button>
        </div>
        <div>{renderData()}</div>
      </div>
    </div>
  );
}

export default App;