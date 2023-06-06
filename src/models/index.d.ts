import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum DanceStyle {
  HIPHOP = "HIPHOP",
  POPPING = "POPPING",
  HOUSE = "HOUSE",
  BREAKING = "BREAKING",
  FREESTYLE = "FREESTYLE",
  JAZZ = "JAZZ",
  ZUMBA = "ZUMBA",
  CONTEMPORARY = "CONTEMPORARY"
}

export enum CreativeType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}

export enum PaymentType {
  CASH = "CASH",
  RAZORPAY = "RAZORPAY",
  SUBSCRIPTION = "SUBSCRIPTION"
}

export enum ClassType {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE"
}



type EagerAwward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Awward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly studioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAwward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Awward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly studioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Awward = LazyLoading extends LazyLoadingDisabled ? EagerAwward : LazyAwward

export declare const Awward: (new (init: ModelInit<Awward>) => Awward) & {
  copyOf(source: Awward, mutator: (draft: MutableModel<Awward>) => MutableModel<Awward> | void): Awward;
}

type EagerFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly answe?: string | null;
  readonly studioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly answe?: string | null;
  readonly studioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FAQ = LazyLoading extends LazyLoadingDisabled ? EagerFAQ : LazyFAQ

export declare const FAQ: (new (init: ModelInit<FAQ>) => FAQ) & {
  copyOf(source: FAQ, mutator: (draft: MutableModel<FAQ>) => MutableModel<FAQ> | void): FAQ;
}

type EagerStudentSubscrption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentSubscrption, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startDateTime: string;
  readonly endDateTime: string;
  readonly userID: string;
  readonly subscriptionplanID: string;
  readonly SubscriptionPlan: SubscriptionPlan;
  readonly User: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudentSubscrption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentSubscrption, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startDateTime: string;
  readonly endDateTime: string;
  readonly userID: string;
  readonly subscriptionplanID: string;
  readonly SubscriptionPlan: AsyncItem<SubscriptionPlan>;
  readonly User: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StudentSubscrption = LazyLoading extends LazyLoadingDisabled ? EagerStudentSubscrption : LazyStudentSubscrption

export declare const StudentSubscrption: (new (init: ModelInit<StudentSubscrption>) => StudentSubscrption) & {
  copyOf(source: StudentSubscrption, mutator: (draft: MutableModel<StudentSubscrption>) => MutableModel<StudentSubscrption> | void): StudentSubscrption;
}

type EagerSubscriptionPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubscriptionPlan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly discountedPrice: number;
  readonly maxAllowedClasses: number;
  readonly danceStyles?: DanceStyle[] | keyof typeof DanceStyle | null;
  readonly durationInDays: number;
  readonly studioID: string;
  readonly Studio: Studio;
  readonly StudentSubscrptions?: (StudentSubscrption | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubscriptionPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubscriptionPlan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly discountedPrice: number;
  readonly maxAllowedClasses: number;
  readonly danceStyles?: DanceStyle[] | keyof typeof DanceStyle | null;
  readonly durationInDays: number;
  readonly studioID: string;
  readonly Studio: AsyncItem<Studio>;
  readonly StudentSubscrptions: AsyncCollection<StudentSubscrption>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SubscriptionPlan = LazyLoading extends LazyLoadingDisabled ? EagerSubscriptionPlan : LazySubscriptionPlan

export declare const SubscriptionPlan: (new (init: ModelInit<SubscriptionPlan>) => SubscriptionPlan) & {
  copyOf(source: SubscriptionPlan, mutator: (draft: MutableModel<SubscriptionPlan>) => MutableModel<SubscriptionPlan> | void): SubscriptionPlan;
}

type EagerStudio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Studio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly details: string;
  readonly Location: Location;
  readonly featuredImage: string;
  readonly Creatives?: (Creative | null)[] | null;
  readonly danceStyles?: (DanceStyle | null)[] | keyof typeof DanceStyle | null;
  readonly userID: string;
  readonly User: User;
  readonly SubscriptionPlans?: (SubscriptionPlan | null)[] | null;
  readonly Classes?: (Class | null)[] | null;
  readonly facilities?: (string | null)[] | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly youtube?: string | null;
  readonly FAQS?: (FAQ | null)[] | null;
  readonly Awwards?: (Awward | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studioLocationId: string;
}

type LazyStudio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Studio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly details: string;
  readonly Location: AsyncItem<Location>;
  readonly featuredImage: string;
  readonly Creatives: AsyncCollection<Creative>;
  readonly danceStyles?: (DanceStyle | null)[] | keyof typeof DanceStyle | null;
  readonly userID: string;
  readonly User: AsyncItem<User>;
  readonly SubscriptionPlans: AsyncCollection<SubscriptionPlan>;
  readonly Classes: AsyncCollection<Class>;
  readonly facilities?: (string | null)[] | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly youtube?: string | null;
  readonly FAQS: AsyncCollection<FAQ>;
  readonly Awwards: AsyncCollection<Awward>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studioLocationId: string;
}

export declare type Studio = LazyLoading extends LazyLoadingDisabled ? EagerStudio : LazyStudio

export declare const Studio: (new (init: ModelInit<Studio>) => Studio) & {
  copyOf(source: Studio, mutator: (draft: MutableModel<Studio>) => MutableModel<Studio> | void): Studio;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pincode: string;
  readonly country: string;
  readonly state: string;
  readonly district: string;
  readonly city: string;
  readonly landmark: string;
  readonly lineone: string;
  readonly linetwo: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pincode: string;
  readonly country: string;
  readonly state: string;
  readonly district: string;
  readonly city: string;
  readonly landmark: string;
  readonly lineone: string;
  readonly linetwo: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerCreative = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creative, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: CreativeType | keyof typeof CreativeType;
  readonly description?: string | null;
  readonly link: string;
  readonly studioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreative = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creative, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: CreativeType | keyof typeof CreativeType;
  readonly description?: string | null;
  readonly link: string;
  readonly studioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Creative = LazyLoading extends LazyLoadingDisabled ? EagerCreative : LazyCreative

export declare const Creative: (new (init: ModelInit<Creative>) => Creative) & {
  copyOf(source: Creative, mutator: (draft: MutableModel<Creative>) => MutableModel<Creative> | void): Creative;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly mobile?: string | null;
  readonly birthDate?: string | null;
  readonly profilePicture?: string | null;
  readonly danceStyles?: (DanceStyle | null)[] | keyof typeof DanceStyle | null;
  readonly StudentSubscrptions?: (StudentSubscrption | null)[] | null;
  readonly Bookings?: (Booking | null)[] | null;
  readonly Studios?: (Studio | null)[] | null;
  readonly Classes?: (UserClass | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly mobile?: string | null;
  readonly birthDate?: string | null;
  readonly profilePicture?: string | null;
  readonly danceStyles?: (DanceStyle | null)[] | keyof typeof DanceStyle | null;
  readonly StudentSubscrptions: AsyncCollection<StudentSubscrption>;
  readonly Bookings: AsyncCollection<Booking>;
  readonly Studios: AsyncCollection<Studio>;
  readonly Classes: AsyncCollection<UserClass>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isAttended: boolean;
  readonly paymentType?: PaymentType | keyof typeof PaymentType | null;
  readonly userID: string;
  readonly classID: string;
  readonly Class: Class;
  readonly User: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isAttended: boolean;
  readonly paymentType?: PaymentType | keyof typeof PaymentType | null;
  readonly userID: string;
  readonly classID: string;
  readonly Class: AsyncItem<Class>;
  readonly User: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Booking = LazyLoading extends LazyLoadingDisabled ? EagerBooking : LazyBooking

export declare const Booking: (new (init: ModelInit<Booking>) => Booking) & {
  copyOf(source: Booking, mutator: (draft: MutableModel<Booking>) => MutableModel<Booking> | void): Booking;
}

type EagerClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDateTime: string;
  readonly endDateTime: string;
  readonly price: number;
  readonly danceStyles: DanceStyle[] | keyof typeof DanceStyle;
  readonly classCapacity: number;
  readonly classType: ClassType | keyof typeof ClassType;
  readonly studioID: string;
  readonly Studio: Studio;
  readonly Bookings?: (Booking | null)[] | null;
  readonly users?: (UserClass | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDateTime: string;
  readonly endDateTime: string;
  readonly price: number;
  readonly danceStyles: DanceStyle[] | keyof typeof DanceStyle;
  readonly classCapacity: number;
  readonly classType: ClassType | keyof typeof ClassType;
  readonly studioID: string;
  readonly Studio: AsyncItem<Studio>;
  readonly Bookings: AsyncCollection<Booking>;
  readonly users: AsyncCollection<UserClass>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class>) => Class) & {
  copyOf(source: Class, mutator: (draft: MutableModel<Class>) => MutableModel<Class> | void): Class;
}

type EagerUserClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserClass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly classId?: string | null;
  readonly user: User;
  readonly class: Class;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserClass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly classId?: string | null;
  readonly user: AsyncItem<User>;
  readonly class: AsyncItem<Class>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserClass = LazyLoading extends LazyLoadingDisabled ? EagerUserClass : LazyUserClass

export declare const UserClass: (new (init: ModelInit<UserClass>) => UserClass) & {
  copyOf(source: UserClass, mutator: (draft: MutableModel<UserClass>) => MutableModel<UserClass> | void): UserClass;
}