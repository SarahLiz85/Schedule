console.log("schedule.controllers.js");

const Schedule = require("../models/schedule.models");


class ScheduleController {
    create(req, res) {
        const newSchedule = new Schedule(req.body);
        newSchedule.save()
            .then( () => res.json(newSchedule))
            .catch (errors => res.json(errors));
    }
    getAll(req, res) {
        Schedule.find().sort("start")
            .then( (schedule) => res.json(schedule))
            .catch (errors => res.json(errors));
    }
    getOne(req, res) {
        Schedule.findOne({_id: req.params._id})
            .then(activity => res.json(activity))
            .catch (errors => res.json(errors));
    }
    update(req, res) {
        Schedule.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators:true})
            .then( () => res.json({msg: "ok"}))
            .catch (errors => res.json(errors));
    }
    remove(req, res) {
        Schedule.findByIdAndRemove({_id: req.params._id})
            .then( () => res.json({msg: "ok"}))
            .catch (errors => res.json(errors));
    }

}

module.exports = new ScheduleController();