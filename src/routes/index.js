import express from 'express';
import userRoute from './user.route';
import tripsRoute from './trip.route';
import userSettings from './user.settings.route';
import notificationRoute from './notification.route';
import comment from './comment.routes';

const Router = express.Router();
Router.use('/auth', userRoute);
Router.use('/trip', tripsRoute);
Router.use('/users', userSettings);
Router.use('/notifications', notificationRoute);
Router.use('/trip-requests', comment);


export default Router;
