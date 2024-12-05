import axios from 'axios';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';

import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react'

const Appointment = () => {
    const toast = useRef(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState(null);
    
    const clearData = () => {
        setUsername("");
        setPhone("");
        setEmail("");
        setDate(null);
    }
    const handleSubmit = () => {
        const data = {
            username: username,
            email: email,
            phone: phone,
            date: date,
        }
        // I used the host directly for faster develpement
        // I cam use ENV variables for productions
        axios.post('http://localhost:3000/api/appointment', data)
        .then((response)=> {
            if (response.status === 200)
            {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Your Appointment is Validated' });
                clearData()
            }
            else
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Your Appointment is not Validated' });
        })
        .catch((error)=>{
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error in the server' });
        })
    }
  return (
    <div className='flex flex-col border border-white rounded-xl w-80 gap-4 py-6'>
        <Toast ref={toast} position="bottom-left" />
        <div className='pl-4 pt-4'><p className='text-white text-xl'>Make an appointment</p></div>
        <div className='flex flex-col gap-2'>
            <div className='flex'>
                <div className='w-full px-4'>
                    <InputText className='w-full pl-2 py-2 bg-transparent border-white border text-white rounded-md' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Fullname' name='fullname' id='fullname'/>
                </div>
            </div>
            <div className='flex'>
                <div className='w-full px-4'>
                    <InputText className='w-full pl-2 py-2 bg-transparent border-white border text-white rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name='email' id='email'/>
                </div>
            </div>
            <div className='flex'>
                <div className='w-full px-4'>
                    <InputText className='w-full pl-2 py-2 bg-transparent border-white border text-white rounded-md' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' name='phone' id='phone'/>
                </div>
            </div>
            <div className='flex px-4 justify-between items-center'>
                <div>
                    <Calendar className='border w-36 py-2 rounded-md px-1' placeholder='12/13/2024 09:00' value={date} onChange={(e) => setDate(e.value)} showTime hourFormat='24'/>
                </div>
                <div>
                    <Button onClick={handleSubmit} label='Submit request' className='w-32 text-xs font-bold text-black bg-orange-200 rounded-md p-3'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment;