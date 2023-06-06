/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudentSubscrption = /* GraphQL */ `
  mutation CreateStudentSubscrption(
    $input: CreateStudentSubscrptionInput!
    $condition: ModelStudentSubscrptionConditionInput
  ) {
    createStudentSubscrption(input: $input, condition: $condition) {
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
export const updateStudentSubscrption = /* GraphQL */ `
  mutation UpdateStudentSubscrption(
    $input: UpdateStudentSubscrptionInput!
    $condition: ModelStudentSubscrptionConditionInput
  ) {
    updateStudentSubscrption(input: $input, condition: $condition) {
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
export const deleteStudentSubscrption = /* GraphQL */ `
  mutation DeleteStudentSubscrption(
    $input: DeleteStudentSubscrptionInput!
    $condition: ModelStudentSubscrptionConditionInput
  ) {
    deleteStudentSubscrption(input: $input, condition: $condition) {
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
export const createSubscriptionPlan = /* GraphQL */ `
  mutation CreateSubscriptionPlan(
    $input: CreateSubscriptionPlanInput!
    $condition: ModelSubscriptionPlanConditionInput
  ) {
    createSubscriptionPlan(input: $input, condition: $condition) {
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
export const updateSubscriptionPlan = /* GraphQL */ `
  mutation UpdateSubscriptionPlan(
    $input: UpdateSubscriptionPlanInput!
    $condition: ModelSubscriptionPlanConditionInput
  ) {
    updateSubscriptionPlan(input: $input, condition: $condition) {
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
export const deleteSubscriptionPlan = /* GraphQL */ `
  mutation DeleteSubscriptionPlan(
    $input: DeleteSubscriptionPlanInput!
    $condition: ModelSubscriptionPlanConditionInput
  ) {
    deleteSubscriptionPlan(input: $input, condition: $condition) {
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
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
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
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
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
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createStudio = /* GraphQL */ `
  mutation CreateStudio(
    $input: CreateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    createStudio(input: $input, condition: $condition) {
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
export const updateStudio = /* GraphQL */ `
  mutation UpdateStudio(
    $input: UpdateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    updateStudio(input: $input, condition: $condition) {
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
export const deleteStudio = /* GraphQL */ `
  mutation DeleteStudio(
    $input: DeleteStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    deleteStudio(input: $input, condition: $condition) {
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
export const createCreative = /* GraphQL */ `
  mutation CreateCreative(
    $input: CreateCreativeInput!
    $condition: ModelCreativeConditionInput
  ) {
    createCreative(input: $input, condition: $condition) {
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
export const updateCreative = /* GraphQL */ `
  mutation UpdateCreative(
    $input: UpdateCreativeInput!
    $condition: ModelCreativeConditionInput
  ) {
    updateCreative(input: $input, condition: $condition) {
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
export const deleteCreative = /* GraphQL */ `
  mutation DeleteCreative(
    $input: DeleteCreativeInput!
    $condition: ModelCreativeConditionInput
  ) {
    deleteCreative(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserClass = /* GraphQL */ `
  mutation CreateUserClass(
    $input: CreateUserClassInput!
    $condition: ModelUserClassConditionInput
  ) {
    createUserClass(input: $input, condition: $condition) {
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
export const updateUserClass = /* GraphQL */ `
  mutation UpdateUserClass(
    $input: UpdateUserClassInput!
    $condition: ModelUserClassConditionInput
  ) {
    updateUserClass(input: $input, condition: $condition) {
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
export const deleteUserClass = /* GraphQL */ `
  mutation DeleteUserClass(
    $input: DeleteUserClassInput!
    $condition: ModelUserClassConditionInput
  ) {
    deleteUserClass(input: $input, condition: $condition) {
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
