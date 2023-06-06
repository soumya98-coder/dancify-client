/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudentSubscrption = /* GraphQL */ `
  query GetStudentSubscrption($id: ID!) {
    getStudentSubscrption(id: $id) {
      id
      startDateTime
      endDateTime
      userID
      subscriptionplanID
      SubscriptionPlan {
        id
        name
        description
        price
        discountedPrice
        maxAllowedClasses
        danceStyles
        durationInDays
        studioID
        Studio {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        StudentSubscrptions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      User {
        id
        name
        email
        mobile
        birthDate
        profilePicture
        danceStyles
        StudentSubscrptions {
          nextToken
        }
        Bookings {
          nextToken
        }
        Studios {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStudentSubscrptions = /* GraphQL */ `
  query ListStudentSubscrptions(
    $filter: ModelStudentSubscrptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentSubscrptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startDateTime
        endDateTime
        userID
        subscriptionplanID
        SubscriptionPlan {
          id
          name
          description
          price
          discountedPrice
          maxAllowedClasses
          danceStyles
          durationInDays
          studioID
          createdAt
          updatedAt
          owner
        }
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const studentSubscrptionsByUserID = /* GraphQL */ `
  query StudentSubscrptionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentSubscrptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentSubscrptionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startDateTime
        endDateTime
        userID
        subscriptionplanID
        SubscriptionPlan {
          id
          name
          description
          price
          discountedPrice
          maxAllowedClasses
          danceStyles
          durationInDays
          studioID
          createdAt
          updatedAt
          owner
        }
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const studentSubscrptionsBySubscriptionplanID = /* GraphQL */ `
  query StudentSubscrptionsBySubscriptionplanID(
    $subscriptionplanID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentSubscrptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentSubscrptionsBySubscriptionplanID(
      subscriptionplanID: $subscriptionplanID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startDateTime
        endDateTime
        userID
        subscriptionplanID
        SubscriptionPlan {
          id
          name
          description
          price
          discountedPrice
          maxAllowedClasses
          danceStyles
          durationInDays
          studioID
          createdAt
          updatedAt
          owner
        }
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSubscriptionPlan = /* GraphQL */ `
  query GetSubscriptionPlan($id: ID!) {
    getSubscriptionPlan(id: $id) {
      id
      name
      description
      price
      discountedPrice
      maxAllowedClasses
      danceStyles
      durationInDays
      studioID
      Studio {
        id
        name
        details
        Location {
          id
          pincode
          country
          state
          district
          city
          landmark
          lineone
          linetwo
          createdAt
          updatedAt
          owner
        }
        featuredImage
        Creatives {
          nextToken
        }
        danceStyles
        userID
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        SubscriptionPlans {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        studioLocationId
        owner
      }
      StudentSubscrptions {
        items {
          id
          startDateTime
          endDateTime
          userID
          subscriptionplanID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSubscriptionPlans = /* GraphQL */ `
  query ListSubscriptionPlans(
    $filter: ModelSubscriptionPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        price
        discountedPrice
        maxAllowedClasses
        danceStyles
        durationInDays
        studioID
        Studio {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        StudentSubscrptions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const subscriptionPlansByStudioID = /* GraphQL */ `
  query SubscriptionPlansByStudioID(
    $studioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriptionPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subscriptionPlansByStudioID(
      studioID: $studioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        price
        discountedPrice
        maxAllowedClasses
        danceStyles
        durationInDays
        studioID
        Studio {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        StudentSubscrptions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      isAttended
      paymentType
      userID
      classID
      Class {
        id
        name
        description
        startDateTime
        endDateTime
        price
        danceStyles
        classCapacity
        classType
        studioID
        Studio {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        Bookings {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      User {
        id
        name
        email
        mobile
        birthDate
        profilePicture
        danceStyles
        StudentSubscrptions {
          nextToken
        }
        Bookings {
          nextToken
        }
        Studios {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isAttended
        paymentType
        userID
        classID
        Class {
          id
          name
          description
          startDateTime
          endDateTime
          price
          danceStyles
          classCapacity
          classType
          studioID
          createdAt
          updatedAt
        }
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bookingsByUserID = /* GraphQL */ `
  query BookingsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        isAttended
        paymentType
        userID
        classID
        Class {
          id
          name
          description
          startDateTime
          endDateTime
          price
          danceStyles
          classCapacity
          classType
          studioID
          createdAt
          updatedAt
        }
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bookingsByClassID = /* GraphQL */ `
  query BookingsByClassID(
    $classID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByClassID(
      classID: $classID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        isAttended
        paymentType
        userID
        classID
        Class {
          id
          name
          description
          startDateTime
          endDateTime
          price
          danceStyles
          classCapacity
          classType
          studioID
          createdAt
          updatedAt
        }
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      name
      description
      startDateTime
      endDateTime
      price
      danceStyles
      classCapacity
      classType
      studioID
      Studio {
        id
        name
        details
        Location {
          id
          pincode
          country
          state
          district
          city
          landmark
          lineone
          linetwo
          createdAt
          updatedAt
          owner
        }
        featuredImage
        Creatives {
          nextToken
        }
        danceStyles
        userID
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        SubscriptionPlans {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        studioLocationId
        owner
      }
      Bookings {
        items {
          id
          isAttended
          paymentType
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          classId
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        startDateTime
        endDateTime
        price
        danceStyles
        classCapacity
        classType
        studioID
        Studio {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        Bookings {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const classesByStudioID = /* GraphQL */ `
  query ClassesByStudioID(
    $studioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesByStudioID(
      studioID: $studioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        startDateTime
        endDateTime
        price
        danceStyles
        classCapacity
        classType
        studioID
        Studio {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        Bookings {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudio = /* GraphQL */ `
  query GetStudio($id: ID!) {
    getStudio(id: $id) {
      id
      name
      details
      Location {
        id
        pincode
        country
        state
        district
        city
        landmark
        lineone
        linetwo
        createdAt
        updatedAt
        owner
      }
      featuredImage
      Creatives {
        items {
          id
          type
          description
          link
          studioID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      danceStyles
      userID
      User {
        id
        name
        email
        mobile
        birthDate
        profilePicture
        danceStyles
        StudentSubscrptions {
          nextToken
        }
        Bookings {
          nextToken
        }
        Studios {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      SubscriptionPlans {
        items {
          id
          name
          description
          price
          discountedPrice
          maxAllowedClasses
          danceStyles
          durationInDays
          studioID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Classes {
        items {
          id
          name
          description
          startDateTime
          endDateTime
          price
          danceStyles
          classCapacity
          classType
          studioID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      studioLocationId
      owner
    }
  }
`;
export const listStudios = /* GraphQL */ `
  query ListStudios(
    $filter: ModelStudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        details
        Location {
          id
          pincode
          country
          state
          district
          city
          landmark
          lineone
          linetwo
          createdAt
          updatedAt
          owner
        }
        featuredImage
        Creatives {
          nextToken
        }
        danceStyles
        userID
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        SubscriptionPlans {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        studioLocationId
        owner
      }
      nextToken
    }
  }
`;
export const studiosByUserID = /* GraphQL */ `
  query StudiosByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studiosByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        details
        Location {
          id
          pincode
          country
          state
          district
          city
          landmark
          lineone
          linetwo
          createdAt
          updatedAt
          owner
        }
        featuredImage
        Creatives {
          nextToken
        }
        danceStyles
        userID
        User {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        SubscriptionPlans {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        studioLocationId
        owner
      }
      nextToken
    }
  }
`;
export const getCreative = /* GraphQL */ `
  query GetCreative($id: ID!) {
    getCreative(id: $id) {
      id
      type
      description
      link
      studioID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCreatives = /* GraphQL */ `
  query ListCreatives(
    $filter: ModelCreativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreatives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        description
        link
        studioID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const creativesByStudioID = /* GraphQL */ `
  query CreativesByStudioID(
    $studioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCreativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creativesByStudioID(
      studioID: $studioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        description
        link
        studioID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      pincode
      country
      state
      district
      city
      landmark
      lineone
      linetwo
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pincode
        country
        state
        district
        city
        landmark
        lineone
        linetwo
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      mobile
      birthDate
      profilePicture
      danceStyles
      StudentSubscrptions {
        items {
          id
          startDateTime
          endDateTime
          userID
          subscriptionplanID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Bookings {
        items {
          id
          isAttended
          paymentType
          userID
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      Studios {
        items {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        nextToken
      }
      Classes {
        items {
          id
          classId
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        birthDate
        profilePicture
        danceStyles
        StudentSubscrptions {
          nextToken
        }
        Bookings {
          nextToken
        }
        Studios {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserClass = /* GraphQL */ `
  query GetUserClass($id: ID!) {
    getUserClass(id: $id) {
      id
      classId
      userId
      class {
        id
        name
        description
        startDateTime
        endDateTime
        price
        danceStyles
        classCapacity
        classType
        studioID
        Studio {
          id
          name
          details
          featuredImage
          danceStyles
          userID
          createdAt
          updatedAt
          studioLocationId
          owner
        }
        Bookings {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        email
        mobile
        birthDate
        profilePicture
        danceStyles
        StudentSubscrptions {
          nextToken
        }
        Bookings {
          nextToken
        }
        Studios {
          nextToken
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserClasses = /* GraphQL */ `
  query ListUserClasses(
    $filter: ModelUserClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classId
        userId
        class {
          id
          name
          description
          startDateTime
          endDateTime
          price
          danceStyles
          classCapacity
          classType
          studioID
          createdAt
          updatedAt
        }
        user {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userClassesByClassId = /* GraphQL */ `
  query UserClassesByClassId(
    $classId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userClassesByClassId(
      classId: $classId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        classId
        userId
        class {
          id
          name
          description
          startDateTime
          endDateTime
          price
          danceStyles
          classCapacity
          classType
          studioID
          createdAt
          updatedAt
        }
        user {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userClassesByUserId = /* GraphQL */ `
  query UserClassesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userClassesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        classId
        userId
        class {
          id
          name
          description
          startDateTime
          endDateTime
          price
          danceStyles
          classCapacity
          classType
          studioID
          createdAt
          updatedAt
        }
        user {
          id
          name
          email
          mobile
          birthDate
          profilePicture
          danceStyles
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
