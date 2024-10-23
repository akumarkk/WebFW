// import Image from "next/image";
'use client';
import {Divider, Card, CardHeader, CardBody, CardFooter, Link, Image, Checkbox,} from "@nextui-org/react"
import {FormControlLabel} from '@mui/material'
import styles from "./styles/app.css"
// {}

import {useState} from "react"
// 'use client';
export default function Home() {

  // delRL, setDelRL
  const [delRL, setDelRL] = useState(true)

  const onChangeHandle = () => {
    console.log(delRL)  
    setDelRL(!delRL)
  }

  // <FormControlLabel label="Delete RL" control={<Checkbox className="checkbox" defaultChecked onChange={onChangeHandle} label ="Delete RL"\> }> </FormControlLabel>
  // const [delete, setDelete] = useState(true)
  return (
    
    <Card className={"max-w-[400px] card " + styles.card}>
      <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        Welcome to wlenz
      </div>
      
        
      </CardHeader>
      <Divider></Divider>
      <CardBody>
        <Checkbox className="checkbox" css={{ marginRight: '8px !important' }} defaultChecked onChange={onChangeHandle} label ="Delete RL"> 
        
        {/*  */}
        </Checkbox>
        
        
        {/* <FormControlLabel 
        label="Delete RL" 
        control={<Checkbox className="checkbox" css={{ marginRight: '8px !important' }} defaultChecked onChange={onChangeHandle} label ="Delete RL"> }> 
        </FormControlLabel> */}

        <span style={{ margin: '8px' }}>Delete RL</span>
{delRL && <div >
        wlenz observability tool
        </div> }

        <FormControlLabel 
        label="Delete RL" control={<Checkbox className="checkbox" defaultChecked onChange={onChangeHandle}></Checkbox> }> </FormControlLabel>
      
      </CardBody>
      <Divider></Divider>
      <CardFooter>
      wlenz observability tool  - contact us
      
      </CardFooter>
      
    </Card>
    
  );
}
