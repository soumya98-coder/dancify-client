/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudentSubscrption = /* GraphQL */ `
  subscription OnCreateStudentSubscrption(
    $filter: ModelSubscriptionStudentSubscrptionFilterInput
    $owner: String
  ) {
    onCreateStudentSubscrption(filter: $filter, owner: $owner) {
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
export const onUpdateStudentSubscrption = /* GraphQL */ `
  subscription OnUpdateStudentSubscrption(
    $filter: ModelSubscriptionStudentSubscrptionFilterInput
    $owner: String
  ) {
    onUpdateStudentSubscrption(filter: $filter, owner: $owner) {
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
export const onDeleteStudentSubscrption = /* GraphQL */ `
  subscription OnDeleteStudentSubscrption(
    $filter: ModelSubscriptionStudentSubscrptionFilterInput
    $owner: String
  ) {
    onDeleteStudentSubscrption(filter: $filter, owner: $owner) {
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
export const onCreateSubscriptionPlan = /* GraphQL */ `
  subscription OnCreateSubscriptionPlan(
    $filter: ModelSubscriptionSubscriptionPlanFilterInput
    $owner: String
  ) {
    onCreateSubscriptionPlan(filter: $filter, owner: $owner) {
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
export const onUpdateSubscriptionPlan = /* GraphQL */ `
  subscription OnUpdateSubscriptionPlan(
    $filter: ModelSubscriptionSubscriptionPlanFilterInput
    $owner: String
  ) {
    onUpdateSubscriptionPlan(filter: $filter, owner: $owner) {
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
export const onDeleteSubscriptionPlan = /* GraphQL */ `
  subscription OnDeleteSubscriptionPlan(
    $filter: ModelSubscriptionSubscriptionPlanFilterInput
    $owner: String
  ) {
    onDeleteSubscriptionPlan(filter: $filter, owner: $owner) {
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
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
    onCreateBooking(filter: $filter) {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
    onUpdateBooking(filter: $filter) {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
    onDeleteBooking(filter: $filter) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
export const onCreateStudio = /* GraphQL */ `
  subscription OnCreateStudio(
    $filter: ModelSubscriptionStudioFilterInput
    $owner: String
  ) {
    onCreateStudio(filter: $filter, owner: $owner) {
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
export const onUpdateStudio = /* GraphQL */ `
  subscription OnUpdateStudio(
    $filter: ModelSubscriptionStudioFilterInput
    $owner: String
  ) {
    onUpdateStudio(filter: $filter, owner: $owner) {
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
export const onDeleteStudio = /* GraphQL */ `
  subscription OnDeleteStudio(
    $filter: ModelSubscriptionStudioFilterInput
    $owner: String
  ) {
    onDeleteStudio(filter: $filter, owner: $owner) {
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
export const onCreateCreative = /* GraphQL */ `
  subscription OnCreateCreative(
    $filter: ModelSubscriptionCreativeFilterInput
    $owner: String
  ) {
    onCreateCreative(filter: $filter, owner: $owner) {
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
export const onUpdateCreative = /* GraphQL */ `
  subscription OnUpdateCreative(
    $filter: ModelSubscriptionCreativeFilterInput
    $owner: String
  ) {
    onUpdateCreative(filter: $filter, owner: $owner) {
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
export const onDeleteCreative = /* GraphQL */ `
  subscription OnDeleteCreative(
    $filter: ModelSubscriptionCreativeFilterInput
    $owner: String
  ) {
    onDeleteCreative(filter: $filter, owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateUserClass = /* GraphQL */ `
  subscription OnCreateUserClass(
    $filter: ModelSubscriptionUserClassFilterInput
    $owner: String
  ) {
    onCreateUserClass(filter: $filter, owner: $owner) {
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
export const onUpdateUserClass = /* GraphQL */ `
  subscription OnUpdateUserClass(
    $filter: ModelSubscriptionUserClassFilterInput
    $owner: String
  ) {
    onUpdateUserClass(filter: $filter, owner: $owner) {
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
export const onDeleteUserClass = /* GraphQL */ `
  subscription OnDeleteUserClass(
    $filter: ModelSubscriptionUserClassFilterInput
    $owner: String
  ) {
    onDeleteUserClass(filter: $filter, owner: $owner) {
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
