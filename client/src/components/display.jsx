import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import moment from 'moment';;

const Display = props => {

    const [activities, setActivities] = useState([]);
    // const [pastActivities, setPastActivities] = useState([]);

    const fetchActivities = () => {
        axios.get("http://localhost:8000/api/schedule")
            .then(res => {
                console.log(res);
                setActivities(res.data);
                //this will filter out past activities
                // setActivities(res.data(a => new Date(a.start) > new Date()));
                // console.log(new Date(activity.start) > new Date());
            }).catch(err => console.log(err));
            
    }

    useEffect( () => {
       fetchActivities();
    }, []);

    const remove = _id => {
        console.log(_id);
        axios.delete(`http://localhost:8000/api/schedule/${_id}`)
        .then(res => {
            console.log(res);
            fetchActivities();
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            {activities.map( (act, i) =>
                <div className="card mt-3" key={i}>
                    <div className="card-header bg-primary text-light">{act.activity}</div>
                    <div className="card-body">
                        <p>Description: {act.description}</p>
                        <p>Start: {moment(act.start).format('MMMM Do YYYY, h:mm a')}</p>
                        <p>Duration: {act.duration} {act.units}</p>
                        <Link className="btn btn-outline-primary" to={`/edit/${act._id}`}>Edit</Link>
                        <button onClick={e => remove(act._id)} className="btn btn-outline-danger float-right">Remove</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Display;