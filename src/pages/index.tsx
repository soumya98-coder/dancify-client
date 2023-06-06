import { Auth } from "aws-amplify";
import { Button } from "@mui/material";
import AdminGlobalLayout from "@/layouts/AdminGlobalLayout";
import useAuthDrawer from "@/hooks/useAuthDrawer";

export interface ApiError {
  data: null;
  errors: ErrorsEntity[];
}
export interface ErrorsEntity {
  message: string;
  locations: LocationsEntity[];
}
export interface LocationsEntity {
  line: number;
  column: number;
}

export default function Home() {
  const { onOpen } = useAuthDrawer();
  // const { isLoading, error, data } = useQuery("studios", async () => {
  //   try {
  //     const operation = graphqlOperation(listStudios);
  //     const response = await API.graphql<GraphQLQuery<ListStudiosQuery>>(
  //       operation
  //     );
  //     if (response.errors) throw new Error(response.errors[0].message);
  //   } catch (err: any) {
  //     return { error: err.message };
  //   }
  // });

  // const mutation = useMutation(async () => {
  //   try {
  //     const operation = graphqlOperation(createStudio, { input: {} });
  //     const response = await API.graphql<GraphQLQuery<CreateStudioMutation>>(
  //       operation
  //     );
  //     const e = response.errors;
  //     return { data: response.data };
  //   } catch (err: any) {
  //     const messages: any[] = err.errors.map((e: any) => e.message);
  //     return { error: err.message };
  //   }
  // });

  return (
    <AdminGlobalLayout title="Create Studio">
      <Button onClick={() => {}}>Create</Button>
      <Button onClick={() => onOpen()}>Login</Button>
      <Button onClick={() => Auth.signOut()}>Logout</Button>
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
    </AdminGlobalLayout>
  );
}
