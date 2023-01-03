import chair from '../../assets/images/dental-chair.jpg';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns/esm';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={chair} className="lg:w-[594px] lg:h-[355px] rounded-lg shadow-2xl lg:mr-8" />
                    <div className='lg:pl-10'>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        ></DayPicker>
                        <p>You have selected : {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;