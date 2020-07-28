import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const ScheduleForm = props => {

    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [duration, setDuration] = useState(0);
    const [units, setUnits] = useState("minutes");
    const [errors, setErrors] = useState({});

    const CreateSchedule = e => {
        e.preventDefault();
        const scheduleItem = {activity, description, start, duration, units};
        axios.post('http://localhost:8000/api/schedule', scheduleItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }else{
                    navigate('/');
                }
            }).catch(err => console.log(err));
    }

    return(
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={CreateSchedule}>
                <div className="form-group">
                    <label>Activity</label>
                    <input type="text" className="form-control" onChange={e => setActivity(e.target.value)}/>
                    {errors.activity ? <p className="text-danger">{errors.activity.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
                    {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Start</label>
                    <input type="datetime-local" className="form-control" onChange={e => setStart(e.target.value)} />
                    {errors.start ? <p className="text-danger">{errors.start.properties.message}</p>: "" }
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <label>Duration</label>
                        <input type="number" className="form-control" value={duration} onChange={e => setDuration(e.target.value)} />
                        {errors.duration ? <p className="text-danger">{errors.duration.properties.message}</p>: "" }
                    </div>
                    <div className="col-sm-6">
                        <label>Units</label>
                        <select className="form-control" onChange={e => setUnits(e.target.value)}>
                            <option>minutes</option>
                            <option>hours</option>
                            <option>days</option>
                        </select>
                        {errors.units ? <p className="text-danger">{errors.units.properties.message}</p>: "" }
                    </div>
                </div>
                <input type="submit" className="btn btn-success btn-block mt-3" value="Create New Event"/>
            </form>
           
        </div>
    );
}   
export default ScheduleForm;