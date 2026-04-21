import Image from "next/image";
import { Form } from "react-hook-form";
export default function Registration() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <Image src='/registrationPic.png'
                 alt="registrationIllustration"
                 width={233}
                 height={452}
          />
        </div>
        <div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
          
           
            
        </div>
      </div>
    </>
  );
}
