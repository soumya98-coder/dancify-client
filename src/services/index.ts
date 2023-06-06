import { graphqlOperation } from "aws-amplify";
import * as ApiTypes from "@/API";
import * as Mutations from "@/graphql/mutations";
import * as Queries from "@/graphql/queries";
import { apiErrorHandler } from "@/utils";
import { ClassTab } from "@/pages/admin/classes/all";
import dayjs from "dayjs";

export class Services {
  static getUserHandler = apiErrorHandler<string, ApiTypes.GetUserQuery>(id => {
    console.log(id, "id received");
    return graphqlOperation(Queries.getUser, { id });
  });

  static createUserHandler = apiErrorHandler<
    ApiTypes.CreateUserInput,
    ApiTypes.CreateUserMutation
  >(data => graphqlOperation(Mutations.createUser, { input: data }));

  static updateUserHandler = apiErrorHandler<
    ApiTypes.UpdateUserInput,
    ApiTypes.UpdateUserMutation
  >(data => graphqlOperation(Mutations.updateUser, { input: data }));

  static createLocationHandler = apiErrorHandler<
    ApiTypes.CreateLocationInput,
    ApiTypes.CreateLocationMutation
  >(data => graphqlOperation(Mutations.createLocation, { input: data }));

  static createStudioHandler = apiErrorHandler<
    ApiTypes.CreateStudioInput,
    ApiTypes.CreateStudioMutation
  >(data => graphqlOperation(Mutations.createStudio, { input: data }));

  static listStudiosHandler = apiErrorHandler<
    string,
    ApiTypes.ListStudiosQuery
  >(userId =>
    graphqlOperation(Queries.listStudios, {
      filter: { userID: { eq: userId } },
    })
  );

  static updateStudioHandler = apiErrorHandler<
    ApiTypes.UpdateStudioInput,
    ApiTypes.UpdateStudioMutation
  >(data => graphqlOperation(Mutations.updateStudio, { input: data }));

  static listClassesHandler = apiErrorHandler<
    { studioId: string; filterType: ClassTab },
    ApiTypes.ListClassesQuery
  >(({ studioId, filterType }) => {
    const filter: any = {
      studioID: { eq: studioId },
    };
    if (filterType === "UPCOMING") {
      filter.startDateTime = { gt: dayjs().toISOString() };
    } else if (filterType === "HISTORY") {
      filter.endDateTime = {
        lt: dayjs().toISOString(),
      };
    } else {
      filter.startDateTime = {
        lt: dayjs().toISOString(),
      };
      filter.endDateTime = {
        gt: dayjs().toISOString(),
      };
    }

    return graphqlOperation(Queries.listClasses, { filter });
  });

  static getClassHandler = apiErrorHandler<string, ApiTypes.GetClassQuery>(id =>
    graphqlOperation(Queries.getClass, { id })
  );

  static createClassHandler = apiErrorHandler<
    ApiTypes.CreateClassInput,
    ApiTypes.CreateClassMutation
  >(data => graphqlOperation(Mutations.createClass, { input: data }));

  static createSubscriptionPlanHandler = apiErrorHandler<
    ApiTypes.CreateSubscriptionPlanInput,
    ApiTypes.CreateSubscriptionPlanMutation
  >(data =>
    graphqlOperation(Mutations.createSubscriptionPlan, { input: data })
  );

  static listSubscriptionPlansHandler = apiErrorHandler<
    string,
    ApiTypes.ListSubscriptionPlansQuery
  >(studioId =>
    graphqlOperation(Queries.listSubscriptionPlans, {
      filter: { studioID: { eq: studioId } },
    })
  );
}
