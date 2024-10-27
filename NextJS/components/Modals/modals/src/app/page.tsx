"use client"
import Image from "next/image";
import React, {useState} from "react"

// Button, Modal
import {Modal, ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter} from "@nextui-org/modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
    <button onClick={()=> setIsOpen(true)}>
      Open Model
    </button>
    
    <Modal isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
            title="Rollback">
            <>
            <ModalContent>
            <ModalHeader className="flex flex-col gap-1"> 

              Model header
            </ModalHeader>
            <ModalBody>
            Modals have higher z-index

            </ModalBody>

            <ModalFooter>

              click to close
            </ModalFooter>

            </ModalContent>
            </>
      

    </Modal>
    </>
    
  );
}
