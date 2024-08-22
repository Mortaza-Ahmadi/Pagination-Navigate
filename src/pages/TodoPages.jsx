import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  Card,
  LoadingOverlay,
  Table,
  Center,
  Select,
  Container,
  Title,
} from "@mantine/core";
import { getTodo } from "../utils/getTodo";
import { useState } from "react";

function TodoPages() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState("10");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetch-todo", page, limit],
    queryFn: () => getTodo(page, Number(limit)),
  });

  if (isLoading) {
    return <LoadingOverlay visible overlayBlur={2} />;
  }

  if (isError) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Alert color="red" title="Error">
          Error Occurred. Please try again.
        </Alert>
      </Card>
    );
  }

  return (
    <Container size="md" sx={{ padding: "20px" }}>
      <Title order={2} align="center" mb="lg">
        Pagination
      </Title>
      <Select
        onChange={(value) => setLimit(value)}
        value={limit}
        label="Items per page"
        placeholder="Pick value"
        data={[
          { value: "10", label: "10 items per page" },
          { value: "20", label: "20 items per page" },
          { value: "30", label: "30 items per page" },
          { value: "50", label: "50 items per page" },
        ]}
        sx={{ maxWidth: 200, marginBottom: "20px" }}
      />

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Table striped withColumnBorders highlightOnHover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.completed ? "✔" : "×"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <Center mt="lg">
        <Pagination
          total={Math.ceil(200 / Number(limit))}
          onChange={setPage}
          value={page}
          color="blue"
          size="md"
        />
      </Center>
    </Container>
  );
}

export default TodoPages;
