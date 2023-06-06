// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DanceStyle = {
  "HIPHOP": "HIPHOP",
  "POPPING": "POPPING",
  "HOUSE": "HOUSE",
  "BREAKING": "BREAKING",
  "FREESTYLE": "FREESTYLE",
  "JAZZ": "JAZZ",
  "ZUMBA": "ZUMBA",
  "CONTEMPORARY": "CONTEMPORARY"
};

const CreativeType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const PaymentType = {
  "CASH": "CASH",
  "RAZORPAY": "RAZORPAY",
  "SUBSCRIPTION": "SUBSCRIPTION"
};

const ClassType = {
  "ONLINE": "ONLINE",
  "OFFLINE": "OFFLINE"
};

const { Awward, FAQ, StudentSubscrption, SubscriptionPlan, Studio, Location, Creative, User, Booking, Class, UserClass } = initSchema(schema);

export {
  Awward,
  FAQ,
  StudentSubscrption,
  SubscriptionPlan,
  Studio,
  Location,
  Creative,
  User,
  Booking,
  Class,
  UserClass,
  DanceStyle,
  CreativeType,
  PaymentType,
  ClassType
};