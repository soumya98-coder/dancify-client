/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentSubscrptionInput = {
  id?: string | null,
  startDateTime: string,
  endDateTime: string,
  userID: string,
  subscriptionplanID: string,
};

export type ModelStudentSubscrptionConditionInput = {
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  subscriptionplanID?: ModelIDInput | null,
  and?: Array< ModelStudentSubscrptionConditionInput | null > | null,
  or?: Array< ModelStudentSubscrptionConditionInput | null > | null,
  not?: ModelStudentSubscrptionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type StudentSubscrption = {
  __typename: "StudentSubscrption",
  id: string,
  startDateTime: string,
  endDateTime: string,
  userID: string,
  subscriptionplanID: string,
  SubscriptionPlan: SubscriptionPlan,
  User: User,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type SubscriptionPlan = {
  __typename: "SubscriptionPlan",
  id: string,
  name: string,
  description: string,
  price: number,
  discountedPrice: number,
  maxAllowedClasses: number,
  danceStyles?: Array< DanceStyle > | null,
  durationInDays: number,
  studioID: string,
  Studio: Studio,
  StudentSubscrptions?: ModelStudentSubscrptionConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum DanceStyle {
  HIPHOP = "HIPHOP",
  POPPING = "POPPING",
  HOUSE = "HOUSE",
  BREAKING = "BREAKING",
  FREESTYLE = "FREESTYLE",
  JAZZ = "JAZZ",
  ZUMBA = "ZUMBA",
  CONTEMPORARY = "CONTEMPORARY",
}


export type Studio = {
  __typename: "Studio",
  id: string,
  name: string,
  details: string,
  Location: Location,
  featuredImage: string,
  Creatives?: ModelCreativeConnection | null,
  danceStyles?: Array< DanceStyle | null > | null,
  userID: string,
  User: User,
  SubscriptionPlans?: ModelSubscriptionPlanConnection | null,
  Classes?: ModelClassConnection | null,
  createdAt: string,
  updatedAt: string,
  studioLocationId: string,
  owner?: string | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  pincode: string,
  country: string,
  state: string,
  district: string,
  city: string,
  landmark: string,
  lineone: string,
  linetwo: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCreativeConnection = {
  __typename: "ModelCreativeConnection",
  items:  Array<Creative | null >,
  nextToken?: string | null,
};

export type Creative = {
  __typename: "Creative",
  id: string,
  type: CreativeType,
  description?: string | null,
  link: string,
  studioID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum CreativeType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}


export type User = {
  __typename: "User",
  id: string,
  name: string,
  email?: string | null,
  mobile?: string | null,
  birthDate?: string | null,
  profilePicture?: string | null,
  danceStyles?: Array< DanceStyle | null > | null,
  StudentSubscrptions?: ModelStudentSubscrptionConnection | null,
  Bookings?: ModelBookingConnection | null,
  Studios?: ModelStudioConnection | null,
  Classes?: ModelUserClassConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStudentSubscrptionConnection = {
  __typename: "ModelStudentSubscrptionConnection",
  items:  Array<StudentSubscrption | null >,
  nextToken?: string | null,
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection",
  items:  Array<Booking | null >,
  nextToken?: string | null,
};

export type Booking = {
  __typename: "Booking",
  id: string,
  isAttended: boolean,
  paymentType?: PaymentType | null,
  userID: string,
  classID: string,
  Class: Class,
  User: User,
  createdAt: string,
  updatedAt: string,
};

export enum PaymentType {
  CASH = "CASH",
  RAZORPAY = "RAZORPAY",
  SUBSCRIPTION = "SUBSCRIPTION",
}


export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  description: string,
  startDateTime: string,
  endDateTime: string,
  price: number,
  danceStyles: Array< DanceStyle >,
  classCapacity: number,
  classType: ClassType,
  studioID: string,
  Studio: Studio,
  Bookings?: ModelBookingConnection | null,
  users?: ModelUserClassConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum ClassType {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}


export type ModelUserClassConnection = {
  __typename: "ModelUserClassConnection",
  items:  Array<UserClass | null >,
  nextToken?: string | null,
};

export type UserClass = {
  __typename: "UserClass",
  id: string,
  classId: string,
  userId: string,
  class: Class,
  user: User,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStudioConnection = {
  __typename: "ModelStudioConnection",
  items:  Array<Studio | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPlanConnection = {
  __typename: "ModelSubscriptionPlanConnection",
  items:  Array<SubscriptionPlan | null >,
  nextToken?: string | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type UpdateStudentSubscrptionInput = {
  id: string,
  startDateTime?: string | null,
  endDateTime?: string | null,
  userID?: string | null,
  subscriptionplanID?: string | null,
};

export type DeleteStudentSubscrptionInput = {
  id: string,
};

export type CreateSubscriptionPlanInput = {
  id?: string | null,
  name: string,
  description: string,
  price: number,
  discountedPrice: number,
  maxAllowedClasses: number,
  danceStyles?: Array< DanceStyle > | null,
  durationInDays: number,
  studioID: string,
};

export type ModelSubscriptionPlanConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  discountedPrice?: ModelFloatInput | null,
  maxAllowedClasses?: ModelIntInput | null,
  danceStyles?: ModelDanceStyleListInput | null,
  durationInDays?: ModelIntInput | null,
  studioID?: ModelIDInput | null,
  and?: Array< ModelSubscriptionPlanConditionInput | null > | null,
  or?: Array< ModelSubscriptionPlanConditionInput | null > | null,
  not?: ModelSubscriptionPlanConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelDanceStyleListInput = {
  eq?: Array< DanceStyle | null > | null,
  ne?: Array< DanceStyle | null > | null,
  contains?: DanceStyle | null,
  notContains?: DanceStyle | null,
};

export type UpdateSubscriptionPlanInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  discountedPrice?: number | null,
  maxAllowedClasses?: number | null,
  danceStyles?: Array< DanceStyle > | null,
  durationInDays?: number | null,
  studioID?: string | null,
};

export type DeleteSubscriptionPlanInput = {
  id: string,
};

export type CreateBookingInput = {
  id?: string | null,
  isAttended: boolean,
  paymentType?: PaymentType | null,
  userID: string,
  classID: string,
};

export type ModelBookingConditionInput = {
  isAttended?: ModelBooleanInput | null,
  paymentType?: ModelPaymentTypeInput | null,
  userID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPaymentTypeInput = {
  eq?: PaymentType | null,
  ne?: PaymentType | null,
};

export type UpdateBookingInput = {
  id: string,
  isAttended?: boolean | null,
  paymentType?: PaymentType | null,
  userID?: string | null,
  classID?: string | null,
};

export type DeleteBookingInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  description: string,
  startDateTime: string,
  endDateTime: string,
  price: number,
  danceStyles: Array< DanceStyle >,
  classCapacity: number,
  classType: ClassType,
  studioID: string,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  danceStyles?: ModelDanceStyleInput | null,
  classCapacity?: ModelIntInput | null,
  classType?: ModelClassTypeInput | null,
  studioID?: ModelIDInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
};

export type ModelDanceStyleInput = {
  eq?: DanceStyle | null,
  ne?: DanceStyle | null,
};

export type ModelClassTypeInput = {
  eq?: ClassType | null,
  ne?: ClassType | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  startDateTime?: string | null,
  endDateTime?: string | null,
  price?: number | null,
  danceStyles?: Array< DanceStyle > | null,
  classCapacity?: number | null,
  classType?: ClassType | null,
  studioID?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateStudioInput = {
  id?: string | null,
  name: string,
  details: string,
  featuredImage: string,
  danceStyles?: Array< DanceStyle | null > | null,
  userID: string,
  studioLocationId: string,
};

export type ModelStudioConditionInput = {
  name?: ModelStringInput | null,
  details?: ModelStringInput | null,
  featuredImage?: ModelStringInput | null,
  danceStyles?: ModelDanceStyleListInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelStudioConditionInput | null > | null,
  or?: Array< ModelStudioConditionInput | null > | null,
  not?: ModelStudioConditionInput | null,
  studioLocationId?: ModelIDInput | null,
};

export type UpdateStudioInput = {
  id: string,
  name?: string | null,
  details?: string | null,
  featuredImage?: string | null,
  danceStyles?: Array< DanceStyle | null > | null,
  userID?: string | null,
  studioLocationId?: string | null,
};

export type DeleteStudioInput = {
  id: string,
};

export type CreateCreativeInput = {
  id?: string | null,
  type: CreativeType,
  description?: string | null,
  link: string,
  studioID: string,
};

export type ModelCreativeConditionInput = {
  type?: ModelCreativeTypeInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  studioID?: ModelIDInput | null,
  and?: Array< ModelCreativeConditionInput | null > | null,
  or?: Array< ModelCreativeConditionInput | null > | null,
  not?: ModelCreativeConditionInput | null,
};

export type ModelCreativeTypeInput = {
  eq?: CreativeType | null,
  ne?: CreativeType | null,
};

export type UpdateCreativeInput = {
  id: string,
  type?: CreativeType | null,
  description?: string | null,
  link?: string | null,
  studioID?: string | null,
};

export type DeleteCreativeInput = {
  id: string,
};

export type CreateLocationInput = {
  id?: string | null,
  pincode: string,
  country: string,
  state: string,
  district: string,
  city: string,
  landmark: string,
  lineone: string,
  linetwo: string,
};

export type ModelLocationConditionInput = {
  pincode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  state?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  landmark?: ModelStringInput | null,
  lineone?: ModelStringInput | null,
  linetwo?: ModelStringInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type UpdateLocationInput = {
  id: string,
  pincode?: string | null,
  country?: string | null,
  state?: string | null,
  district?: string | null,
  city?: string | null,
  landmark?: string | null,
  lineone?: string | null,
  linetwo?: string | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  mobile?: string | null,
  birthDate?: string | null,
  profilePicture?: string | null,
  danceStyles?: Array< DanceStyle | null > | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  danceStyles?: ModelDanceStyleListInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  mobile?: string | null,
  birthDate?: string | null,
  profilePicture?: string | null,
  danceStyles?: Array< DanceStyle | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserClassInput = {
  id?: string | null,
  classId: string,
  userId: string,
};

export type ModelUserClassConditionInput = {
  classId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserClassConditionInput | null > | null,
  or?: Array< ModelUserClassConditionInput | null > | null,
  not?: ModelUserClassConditionInput | null,
};

export type UpdateUserClassInput = {
  id: string,
  classId?: string | null,
  userId?: string | null,
};

export type DeleteUserClassInput = {
  id: string,
};

export type ModelStudentSubscrptionFilterInput = {
  id?: ModelIDInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  subscriptionplanID?: ModelIDInput | null,
  and?: Array< ModelStudentSubscrptionFilterInput | null > | null,
  or?: Array< ModelStudentSubscrptionFilterInput | null > | null,
  not?: ModelStudentSubscrptionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionPlanFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  discountedPrice?: ModelFloatInput | null,
  maxAllowedClasses?: ModelIntInput | null,
  danceStyles?: ModelDanceStyleListInput | null,
  durationInDays?: ModelIntInput | null,
  studioID?: ModelIDInput | null,
  and?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  not?: ModelSubscriptionPlanFilterInput | null,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  isAttended?: ModelBooleanInput | null,
  paymentType?: ModelPaymentTypeInput | null,
  userID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  danceStyles?: ModelDanceStyleInput | null,
  classCapacity?: ModelIntInput | null,
  classType?: ModelClassTypeInput | null,
  studioID?: ModelIDInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelStudioFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  details?: ModelStringInput | null,
  featuredImage?: ModelStringInput | null,
  danceStyles?: ModelDanceStyleListInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelStudioFilterInput | null > | null,
  or?: Array< ModelStudioFilterInput | null > | null,
  not?: ModelStudioFilterInput | null,
  studioLocationId?: ModelIDInput | null,
};

export type ModelCreativeFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelCreativeTypeInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  studioID?: ModelIDInput | null,
  and?: Array< ModelCreativeFilterInput | null > | null,
  or?: Array< ModelCreativeFilterInput | null > | null,
  not?: ModelCreativeFilterInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  pincode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  state?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  landmark?: ModelStringInput | null,
  lineone?: ModelStringInput | null,
  linetwo?: ModelStringInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  danceStyles?: ModelDanceStyleListInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserClassFilterInput = {
  id?: ModelIDInput | null,
  classId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserClassFilterInput | null > | null,
  or?: Array< ModelUserClassFilterInput | null > | null,
  not?: ModelUserClassFilterInput | null,
};

export type ModelSubscriptionStudentSubscrptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startDateTime?: ModelSubscriptionStringInput | null,
  endDateTime?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  subscriptionplanID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStudentSubscrptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentSubscrptionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSubscriptionPlanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  discountedPrice?: ModelSubscriptionFloatInput | null,
  maxAllowedClasses?: ModelSubscriptionIntInput | null,
  danceStyles?: ModelSubscriptionStringInput | null,
  durationInDays?: ModelSubscriptionIntInput | null,
  studioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubscriptionPlanFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isAttended?: ModelSubscriptionBooleanInput | null,
  paymentType?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  classID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookingFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  startDateTime?: ModelSubscriptionStringInput | null,
  endDateTime?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  danceStyles?: ModelSubscriptionStringInput | null,
  classCapacity?: ModelSubscriptionIntInput | null,
  classType?: ModelSubscriptionStringInput | null,
  studioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
};

export type ModelSubscriptionStudioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  featuredImage?: ModelSubscriptionStringInput | null,
  danceStyles?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStudioFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudioFilterInput | null > | null,
};

export type ModelSubscriptionCreativeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  studioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCreativeFilterInput | null > | null,
  or?: Array< ModelSubscriptionCreativeFilterInput | null > | null,
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pincode?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  district?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  landmark?: ModelSubscriptionStringInput | null,
  lineone?: ModelSubscriptionStringInput | null,
  linetwo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  mobile?: ModelSubscriptionStringInput | null,
  birthDate?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  danceStyles?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionUserClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  classId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserClassFilterInput | null > | null,
};

export type CreateStudentSubscrptionMutationVariables = {
  input: CreateStudentSubscrptionInput,
  condition?: ModelStudentSubscrptionConditionInput | null,
};

export type CreateStudentSubscrptionMutation = {
  createStudentSubscrption?:  {
    __typename: "StudentSubscrption",
    id: string,
    startDateTime: string,
    endDateTime: string,
    userID: string,
    subscriptionplanID: string,
    SubscriptionPlan:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentSubscrptionMutationVariables = {
  input: UpdateStudentSubscrptionInput,
  condition?: ModelStudentSubscrptionConditionInput | null,
};

export type UpdateStudentSubscrptionMutation = {
  updateStudentSubscrption?:  {
    __typename: "StudentSubscrption",
    id: string,
    startDateTime: string,
    endDateTime: string,
    userID: string,
    subscriptionplanID: string,
    SubscriptionPlan:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentSubscrptionMutationVariables = {
  input: DeleteStudentSubscrptionInput,
  condition?: ModelStudentSubscrptionConditionInput | null,
};

export type DeleteStudentSubscrptionMutation = {
  deleteStudentSubscrption?:  {
    __typename: "StudentSubscrption",
    id: string,
    startDateTime: string,
    endDateTime: string,
    userID: string,
    subscriptionplanID: string,
    SubscriptionPlan:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSubscriptionPlanMutationVariables = {
  input: CreateSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type CreateSubscriptionPlanMutation = {
  createSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description: string,
    price: number,
    discountedPrice: number,
    maxAllowedClasses: number,
    danceStyles?: Array< DanceStyle > | null,
    durationInDays: number,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSubscriptionPlanMutationVariables = {
  input: UpdateSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type UpdateSubscriptionPlanMutation = {
  updateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description: string,
    price: number,
    discountedPrice: number,
    maxAllowedClasses: number,
    danceStyles?: Array< DanceStyle > | null,
    durationInDays: number,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSubscriptionPlanMutationVariables = {
  input: DeleteSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type DeleteSubscriptionPlanMutation = {
  deleteSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description: string,
    price: number,
    discountedPrice: number,
    maxAllowedClasses: number,
    danceStyles?: Array< DanceStyle > | null,
    durationInDays: number,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking?:  {
    __typename: "Booking",
    id: string,
    isAttended: boolean,
    paymentType?: PaymentType | null,
    userID: string,
    classID: string,
    Class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking?:  {
    __typename: "Booking",
    id: string,
    isAttended: boolean,
    paymentType?: PaymentType | null,
    userID: string,
    classID: string,
    Class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking?:  {
    __typename: "Booking",
    id: string,
    isAttended: boolean,
    paymentType?: PaymentType | null,
    userID: string,
    classID: string,
    Class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    price: number,
    danceStyles: Array< DanceStyle >,
    classCapacity: number,
    classType: ClassType,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    price: number,
    danceStyles: Array< DanceStyle >,
    classCapacity: number,
    classType: ClassType,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    price: number,
    danceStyles: Array< DanceStyle >,
    classCapacity: number,
    classType: ClassType,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudioMutationVariables = {
  input: CreateStudioInput,
  condition?: ModelStudioConditionInput | null,
};

export type CreateStudioMutation = {
  createStudio?:  {
    __typename: "Studio",
    id: string,
    name: string,
    details: string,
    Location:  {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    featuredImage: string,
    Creatives?:  {
      __typename: "ModelCreativeConnection",
      items:  Array< {
        __typename: "Creative",
        id: string,
        type: CreativeType,
        description?: string | null,
        link: string,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    danceStyles?: Array< DanceStyle | null > | null,
    userID: string,
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    SubscriptionPlans?:  {
      __typename: "ModelSubscriptionPlanConnection",
      items:  Array< {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studioLocationId: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudioMutationVariables = {
  input: UpdateStudioInput,
  condition?: ModelStudioConditionInput | null,
};

export type UpdateStudioMutation = {
  updateStudio?:  {
    __typename: "Studio",
    id: string,
    name: string,
    details: string,
    Location:  {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    featuredImage: string,
    Creatives?:  {
      __typename: "ModelCreativeConnection",
      items:  Array< {
        __typename: "Creative",
        id: string,
        type: CreativeType,
        description?: string | null,
        link: string,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    danceStyles?: Array< DanceStyle | null > | null,
    userID: string,
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    SubscriptionPlans?:  {
      __typename: "ModelSubscriptionPlanConnection",
      items:  Array< {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studioLocationId: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudioMutationVariables = {
  input: DeleteStudioInput,
  condition?: ModelStudioConditionInput | null,
};

export type DeleteStudioMutation = {
  deleteStudio?:  {
    __typename: "Studio",
    id: string,
    name: string,
    details: string,
    Location:  {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    featuredImage: string,
    Creatives?:  {
      __typename: "ModelCreativeConnection",
      items:  Array< {
        __typename: "Creative",
        id: string,
        type: CreativeType,
        description?: string | null,
        link: string,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    danceStyles?: Array< DanceStyle | null > | null,
    userID: string,
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    SubscriptionPlans?:  {
      __typename: "ModelSubscriptionPlanConnection",
      items:  Array< {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studioLocationId: string,
    owner?: string | null,
  } | null,
};

export type CreateCreativeMutationVariables = {
  input: CreateCreativeInput,
  condition?: ModelCreativeConditionInput | null,
};

export type CreateCreativeMutation = {
  createCreative?:  {
    __typename: "Creative",
    id: string,
    type: CreativeType,
    description?: string | null,
    link: string,
    studioID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCreativeMutationVariables = {
  input: UpdateCreativeInput,
  condition?: ModelCreativeConditionInput | null,
};

export type UpdateCreativeMutation = {
  updateCreative?:  {
    __typename: "Creative",
    id: string,
    type: CreativeType,
    description?: string | null,
    link: string,
    studioID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCreativeMutationVariables = {
  input: DeleteCreativeInput,
  condition?: ModelCreativeConditionInput | null,
};

export type DeleteCreativeMutation = {
  deleteCreative?:  {
    __typename: "Creative",
    id: string,
    type: CreativeType,
    description?: string | null,
    link: string,
    studioID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    pincode: string,
    country: string,
    state: string,
    district: string,
    city: string,
    landmark: string,
    lineone: string,
    linetwo: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    pincode: string,
    country: string,
    state: string,
    district: string,
    city: string,
    landmark: string,
    lineone: string,
    linetwo: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    pincode: string,
    country: string,
    state: string,
    district: string,
    city: string,
    landmark: string,
    lineone: string,
    linetwo: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    mobile?: string | null,
    birthDate?: string | null,
    profilePicture?: string | null,
    danceStyles?: Array< DanceStyle | null > | null,
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Studios?:  {
      __typename: "ModelStudioConnection",
      items:  Array< {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    mobile?: string | null,
    birthDate?: string | null,
    profilePicture?: string | null,
    danceStyles?: Array< DanceStyle | null > | null,
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Studios?:  {
      __typename: "ModelStudioConnection",
      items:  Array< {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    mobile?: string | null,
    birthDate?: string | null,
    profilePicture?: string | null,
    danceStyles?: Array< DanceStyle | null > | null,
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Studios?:  {
      __typename: "ModelStudioConnection",
      items:  Array< {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserClassMutationVariables = {
  input: CreateUserClassInput,
  condition?: ModelUserClassConditionInput | null,
};

export type CreateUserClassMutation = {
  createUserClass?:  {
    __typename: "UserClass",
    id: string,
    classId: string,
    userId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserClassMutationVariables = {
  input: UpdateUserClassInput,
  condition?: ModelUserClassConditionInput | null,
};

export type UpdateUserClassMutation = {
  updateUserClass?:  {
    __typename: "UserClass",
    id: string,
    classId: string,
    userId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserClassMutationVariables = {
  input: DeleteUserClassInput,
  condition?: ModelUserClassConditionInput | null,
};

export type DeleteUserClassMutation = {
  deleteUserClass?:  {
    __typename: "UserClass",
    id: string,
    classId: string,
    userId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetStudentSubscrptionQueryVariables = {
  id: string,
};

export type GetStudentSubscrptionQuery = {
  getStudentSubscrption?:  {
    __typename: "StudentSubscrption",
    id: string,
    startDateTime: string,
    endDateTime: string,
    userID: string,
    subscriptionplanID: string,
    SubscriptionPlan:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentSubscrptionsQueryVariables = {
  filter?: ModelStudentSubscrptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentSubscrptionsQuery = {
  listStudentSubscrptions?:  {
    __typename: "ModelStudentSubscrptionConnection",
    items:  Array< {
      __typename: "StudentSubscrption",
      id: string,
      startDateTime: string,
      endDateTime: string,
      userID: string,
      subscriptionplanID: string,
      SubscriptionPlan:  {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentSubscrptionsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentSubscrptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentSubscrptionsByUserIDQuery = {
  studentSubscrptionsByUserID?:  {
    __typename: "ModelStudentSubscrptionConnection",
    items:  Array< {
      __typename: "StudentSubscrption",
      id: string,
      startDateTime: string,
      endDateTime: string,
      userID: string,
      subscriptionplanID: string,
      SubscriptionPlan:  {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentSubscrptionsBySubscriptionplanIDQueryVariables = {
  subscriptionplanID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentSubscrptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentSubscrptionsBySubscriptionplanIDQuery = {
  studentSubscrptionsBySubscriptionplanID?:  {
    __typename: "ModelStudentSubscrptionConnection",
    items:  Array< {
      __typename: "StudentSubscrption",
      id: string,
      startDateTime: string,
      endDateTime: string,
      userID: string,
      subscriptionplanID: string,
      SubscriptionPlan:  {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubscriptionPlanQueryVariables = {
  id: string,
};

export type GetSubscriptionPlanQuery = {
  getSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description: string,
    price: number,
    discountedPrice: number,
    maxAllowedClasses: number,
    danceStyles?: Array< DanceStyle > | null,
    durationInDays: number,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSubscriptionPlansQueryVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubscriptionPlansQuery = {
  listSubscriptionPlans?:  {
    __typename: "ModelSubscriptionPlanConnection",
    items:  Array< {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubscriptionPlansByStudioIDQueryVariables = {
  studioID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubscriptionPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubscriptionPlansByStudioIDQuery = {
  subscriptionPlansByStudioID?:  {
    __typename: "ModelSubscriptionPlanConnection",
    items:  Array< {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking?:  {
    __typename: "Booking",
    id: string,
    isAttended: boolean,
    paymentType?: PaymentType | null,
    userID: string,
    classID: string,
    Class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      isAttended: boolean,
      paymentType?: PaymentType | null,
      userID: string,
      classID: string,
      Class:  {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      },
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BookingsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookingsByUserIDQuery = {
  bookingsByUserID?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      isAttended: boolean,
      paymentType?: PaymentType | null,
      userID: string,
      classID: string,
      Class:  {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      },
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BookingsByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookingsByClassIDQuery = {
  bookingsByClassID?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      isAttended: boolean,
      paymentType?: PaymentType | null,
      userID: string,
      classID: string,
      Class:  {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      },
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    price: number,
    danceStyles: Array< DanceStyle >,
    classCapacity: number,
    classType: ClassType,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ClassesByStudioIDQueryVariables = {
  studioID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClassesByStudioIDQuery = {
  classesByStudioID?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudioQueryVariables = {
  id: string,
};

export type GetStudioQuery = {
  getStudio?:  {
    __typename: "Studio",
    id: string,
    name: string,
    details: string,
    Location:  {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    featuredImage: string,
    Creatives?:  {
      __typename: "ModelCreativeConnection",
      items:  Array< {
        __typename: "Creative",
        id: string,
        type: CreativeType,
        description?: string | null,
        link: string,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    danceStyles?: Array< DanceStyle | null > | null,
    userID: string,
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    SubscriptionPlans?:  {
      __typename: "ModelSubscriptionPlanConnection",
      items:  Array< {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studioLocationId: string,
    owner?: string | null,
  } | null,
};

export type ListStudiosQueryVariables = {
  filter?: ModelStudioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudiosQuery = {
  listStudios?:  {
    __typename: "ModelStudioConnection",
    items:  Array< {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudiosByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudiosByUserIDQuery = {
  studiosByUserID?:  {
    __typename: "ModelStudioConnection",
    items:  Array< {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCreativeQueryVariables = {
  id: string,
};

export type GetCreativeQuery = {
  getCreative?:  {
    __typename: "Creative",
    id: string,
    type: CreativeType,
    description?: string | null,
    link: string,
    studioID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCreativesQueryVariables = {
  filter?: ModelCreativeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreativesQuery = {
  listCreatives?:  {
    __typename: "ModelCreativeConnection",
    items:  Array< {
      __typename: "Creative",
      id: string,
      type: CreativeType,
      description?: string | null,
      link: string,
      studioID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreativesByStudioIDQueryVariables = {
  studioID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCreativeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreativesByStudioIDQuery = {
  creativesByStudioID?:  {
    __typename: "ModelCreativeConnection",
    items:  Array< {
      __typename: "Creative",
      id: string,
      type: CreativeType,
      description?: string | null,
      link: string,
      studioID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    pincode: string,
    country: string,
    state: string,
    district: string,
    city: string,
    landmark: string,
    lineone: string,
    linetwo: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    mobile?: string | null,
    birthDate?: string | null,
    profilePicture?: string | null,
    danceStyles?: Array< DanceStyle | null > | null,
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Studios?:  {
      __typename: "ModelStudioConnection",
      items:  Array< {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserClassQueryVariables = {
  id: string,
};

export type GetUserClassQuery = {
  getUserClass?:  {
    __typename: "UserClass",
    id: string,
    classId: string,
    userId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserClassesQueryVariables = {
  filter?: ModelUserClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserClassesQuery = {
  listUserClasses?:  {
    __typename: "ModelUserClassConnection",
    items:  Array< {
      __typename: "UserClass",
      id: string,
      classId: string,
      userId: string,
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserClassesByClassIdQueryVariables = {
  classId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserClassesByClassIdQuery = {
  userClassesByClassId?:  {
    __typename: "ModelUserClassConnection",
    items:  Array< {
      __typename: "UserClass",
      id: string,
      classId: string,
      userId: string,
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserClassesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserClassesByUserIdQuery = {
  userClassesByUserId?:  {
    __typename: "ModelUserClassConnection",
    items:  Array< {
      __typename: "UserClass",
      id: string,
      classId: string,
      userId: string,
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentSubscrptionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSubscrptionFilterInput | null,
  owner?: string | null,
};

export type OnCreateStudentSubscrptionSubscription = {
  onCreateStudentSubscrption?:  {
    __typename: "StudentSubscrption",
    id: string,
    startDateTime: string,
    endDateTime: string,
    userID: string,
    subscriptionplanID: string,
    SubscriptionPlan:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentSubscrptionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSubscrptionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStudentSubscrptionSubscription = {
  onUpdateStudentSubscrption?:  {
    __typename: "StudentSubscrption",
    id: string,
    startDateTime: string,
    endDateTime: string,
    userID: string,
    subscriptionplanID: string,
    SubscriptionPlan:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentSubscrptionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSubscrptionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStudentSubscrptionSubscription = {
  onDeleteStudentSubscrption?:  {
    __typename: "StudentSubscrption",
    id: string,
    startDateTime: string,
    endDateTime: string,
    userID: string,
    subscriptionplanID: string,
    SubscriptionPlan:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description: string,
      price: number,
      discountedPrice: number,
      maxAllowedClasses: number,
      danceStyles?: Array< DanceStyle > | null,
      durationInDays: number,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
  owner?: string | null,
};

export type OnCreateSubscriptionPlanSubscription = {
  onCreateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description: string,
    price: number,
    discountedPrice: number,
    maxAllowedClasses: number,
    danceStyles?: Array< DanceStyle > | null,
    durationInDays: number,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSubscriptionPlanSubscription = {
  onUpdateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description: string,
    price: number,
    discountedPrice: number,
    maxAllowedClasses: number,
    danceStyles?: Array< DanceStyle > | null,
    durationInDays: number,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSubscriptionPlanSubscription = {
  onDeleteSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description: string,
    price: number,
    discountedPrice: number,
    maxAllowedClasses: number,
    danceStyles?: Array< DanceStyle > | null,
    durationInDays: number,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking?:  {
    __typename: "Booking",
    id: string,
    isAttended: boolean,
    paymentType?: PaymentType | null,
    userID: string,
    classID: string,
    Class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking?:  {
    __typename: "Booking",
    id: string,
    isAttended: boolean,
    paymentType?: PaymentType | null,
    userID: string,
    classID: string,
    Class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking?:  {
    __typename: "Booking",
    id: string,
    isAttended: boolean,
    paymentType?: PaymentType | null,
    userID: string,
    classID: string,
    Class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    price: number,
    danceStyles: Array< DanceStyle >,
    classCapacity: number,
    classType: ClassType,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    price: number,
    danceStyles: Array< DanceStyle >,
    classCapacity: number,
    classType: ClassType,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    price: number,
    danceStyles: Array< DanceStyle >,
    classCapacity: number,
    classType: ClassType,
    studioID: string,
    Studio:  {
      __typename: "Studio",
      id: string,
      name: string,
      details: string,
      Location:  {
        __typename: "Location",
        id: string,
        pincode: string,
        country: string,
        state: string,
        district: string,
        city: string,
        landmark: string,
        lineone: string,
        linetwo: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      featuredImage: string,
      Creatives?:  {
        __typename: "ModelCreativeConnection",
        nextToken?: string | null,
      } | null,
      danceStyles?: Array< DanceStyle | null > | null,
      userID: string,
      User:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        mobile?: string | null,
        birthDate?: string | null,
        profilePicture?: string | null,
        danceStyles?: Array< DanceStyle | null > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      SubscriptionPlans?:  {
        __typename: "ModelSubscriptionPlanConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studioLocationId: string,
      owner?: string | null,
    },
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudioSubscriptionVariables = {
  filter?: ModelSubscriptionStudioFilterInput | null,
  owner?: string | null,
};

export type OnCreateStudioSubscription = {
  onCreateStudio?:  {
    __typename: "Studio",
    id: string,
    name: string,
    details: string,
    Location:  {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    featuredImage: string,
    Creatives?:  {
      __typename: "ModelCreativeConnection",
      items:  Array< {
        __typename: "Creative",
        id: string,
        type: CreativeType,
        description?: string | null,
        link: string,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    danceStyles?: Array< DanceStyle | null > | null,
    userID: string,
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    SubscriptionPlans?:  {
      __typename: "ModelSubscriptionPlanConnection",
      items:  Array< {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studioLocationId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudioSubscriptionVariables = {
  filter?: ModelSubscriptionStudioFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStudioSubscription = {
  onUpdateStudio?:  {
    __typename: "Studio",
    id: string,
    name: string,
    details: string,
    Location:  {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    featuredImage: string,
    Creatives?:  {
      __typename: "ModelCreativeConnection",
      items:  Array< {
        __typename: "Creative",
        id: string,
        type: CreativeType,
        description?: string | null,
        link: string,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    danceStyles?: Array< DanceStyle | null > | null,
    userID: string,
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    SubscriptionPlans?:  {
      __typename: "ModelSubscriptionPlanConnection",
      items:  Array< {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studioLocationId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudioSubscriptionVariables = {
  filter?: ModelSubscriptionStudioFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStudioSubscription = {
  onDeleteStudio?:  {
    __typename: "Studio",
    id: string,
    name: string,
    details: string,
    Location:  {
      __typename: "Location",
      id: string,
      pincode: string,
      country: string,
      state: string,
      district: string,
      city: string,
      landmark: string,
      lineone: string,
      linetwo: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    featuredImage: string,
    Creatives?:  {
      __typename: "ModelCreativeConnection",
      items:  Array< {
        __typename: "Creative",
        id: string,
        type: CreativeType,
        description?: string | null,
        link: string,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    danceStyles?: Array< DanceStyle | null > | null,
    userID: string,
    User:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    SubscriptionPlans?:  {
      __typename: "ModelSubscriptionPlanConnection",
      items:  Array< {
        __typename: "SubscriptionPlan",
        id: string,
        name: string,
        description: string,
        price: number,
        discountedPrice: number,
        maxAllowedClasses: number,
        danceStyles?: Array< DanceStyle > | null,
        durationInDays: number,
        studioID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        price: number,
        danceStyles: Array< DanceStyle >,
        classCapacity: number,
        classType: ClassType,
        studioID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studioLocationId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCreativeSubscriptionVariables = {
  filter?: ModelSubscriptionCreativeFilterInput | null,
  owner?: string | null,
};

export type OnCreateCreativeSubscription = {
  onCreateCreative?:  {
    __typename: "Creative",
    id: string,
    type: CreativeType,
    description?: string | null,
    link: string,
    studioID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCreativeSubscriptionVariables = {
  filter?: ModelSubscriptionCreativeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCreativeSubscription = {
  onUpdateCreative?:  {
    __typename: "Creative",
    id: string,
    type: CreativeType,
    description?: string | null,
    link: string,
    studioID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCreativeSubscriptionVariables = {
  filter?: ModelSubscriptionCreativeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCreativeSubscription = {
  onDeleteCreative?:  {
    __typename: "Creative",
    id: string,
    type: CreativeType,
    description?: string | null,
    link: string,
    studioID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
  owner?: string | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    pincode: string,
    country: string,
    state: string,
    district: string,
    city: string,
    landmark: string,
    lineone: string,
    linetwo: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    pincode: string,
    country: string,
    state: string,
    district: string,
    city: string,
    landmark: string,
    lineone: string,
    linetwo: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    pincode: string,
    country: string,
    state: string,
    district: string,
    city: string,
    landmark: string,
    lineone: string,
    linetwo: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    mobile?: string | null,
    birthDate?: string | null,
    profilePicture?: string | null,
    danceStyles?: Array< DanceStyle | null > | null,
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Studios?:  {
      __typename: "ModelStudioConnection",
      items:  Array< {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    mobile?: string | null,
    birthDate?: string | null,
    profilePicture?: string | null,
    danceStyles?: Array< DanceStyle | null > | null,
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Studios?:  {
      __typename: "ModelStudioConnection",
      items:  Array< {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    mobile?: string | null,
    birthDate?: string | null,
    profilePicture?: string | null,
    danceStyles?: Array< DanceStyle | null > | null,
    StudentSubscrptions?:  {
      __typename: "ModelStudentSubscrptionConnection",
      items:  Array< {
        __typename: "StudentSubscrption",
        id: string,
        startDateTime: string,
        endDateTime: string,
        userID: string,
        subscriptionplanID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Bookings?:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        isAttended: boolean,
        paymentType?: PaymentType | null,
        userID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Studios?:  {
      __typename: "ModelStudioConnection",
      items:  Array< {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Classes?:  {
      __typename: "ModelUserClassConnection",
      items:  Array< {
        __typename: "UserClass",
        id: string,
        classId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserClassSubscriptionVariables = {
  filter?: ModelSubscriptionUserClassFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserClassSubscription = {
  onCreateUserClass?:  {
    __typename: "UserClass",
    id: string,
    classId: string,
    userId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserClassSubscriptionVariables = {
  filter?: ModelSubscriptionUserClassFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserClassSubscription = {
  onUpdateUserClass?:  {
    __typename: "UserClass",
    id: string,
    classId: string,
    userId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserClassSubscriptionVariables = {
  filter?: ModelSubscriptionUserClassFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserClassSubscription = {
  onDeleteUserClass?:  {
    __typename: "UserClass",
    id: string,
    classId: string,
    userId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      startDateTime: string,
      endDateTime: string,
      price: number,
      danceStyles: Array< DanceStyle >,
      classCapacity: number,
      classType: ClassType,
      studioID: string,
      Studio:  {
        __typename: "Studio",
        id: string,
        name: string,
        details: string,
        featuredImage: string,
        danceStyles?: Array< DanceStyle | null > | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        studioLocationId: string,
        owner?: string | null,
      },
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      mobile?: string | null,
      birthDate?: string | null,
      profilePicture?: string | null,
      danceStyles?: Array< DanceStyle | null > | null,
      StudentSubscrptions?:  {
        __typename: "ModelStudentSubscrptionConnection",
        nextToken?: string | null,
      } | null,
      Bookings?:  {
        __typename: "ModelBookingConnection",
        nextToken?: string | null,
      } | null,
      Studios?:  {
        __typename: "ModelStudioConnection",
        nextToken?: string | null,
      } | null,
      Classes?:  {
        __typename: "ModelUserClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
