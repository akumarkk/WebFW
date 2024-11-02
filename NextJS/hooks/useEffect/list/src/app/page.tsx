
"use client"
import Image from "next/image";
import {useEffect, useState} from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {field:"imdbID" , headerName:"imdbID", width: 150},
  {field:"Type" , headerName:"Type", width: 150},
  {field:"Title" , headerName:"Title", width: 150},
  {field:"Year" , headerName:"Year", width: 150}
];

// "id": 2,

const rows = [ 
  {
    "id": 2,
    "Title": "Mission: Impossible",
    "Year": "1996",
    "imdbID": "tt0117060",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_SX300.jpg"
},
];

const paginationModel = { page: 0, pageSize: 5 };
// import {useEffect} from 'react'
// useEffect(()=> {console.log("useEffect called");}, []);


// <Button onClick={value}> Refresh</Button>

// <Button > Refresh</Button>

// <></>

// <Paper></Paper>
export default function Home() {

  // let value= 10;
  const [value, setValue] = useState(0);
  const [valueT, setValueT] = useState(0);
  useEffect(()=> {
    console.log("useEffect called", value);
  }, [value]);

  console.log("comp called", value);
  const onClick = () => {
    // setValue(value+1);
    setValueT(valueT+1);
    // value = value + 1;
    console.log("onClick called", value);
  }

  // <Paper> <DataGrid rows={rows} columns={columns} initialState={{ pagination: { paginationModel } }} />  </Paper>

  // pageSizeOptions={[0,5]}
  return (
    <>
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          checkboxSelection
          pageSizeOptions={[0,5]}
          sx={{ border: 0 }}
        />
      </Paper>
      <Button onClick={onClick}> Refresh</Button>
    </>
  );
}
