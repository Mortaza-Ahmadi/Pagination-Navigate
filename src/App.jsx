import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button, Container, MantineProvider } from "@mantine/core";
// import TodoPages from "./pages/TodoPages";
// import React from "react";
import "@mantine/core/styles.css";
import TodoPages from "./pages/TodoPages";

const queryClient = new QueryClient();

function App() {
  // const peoples = data
  //   .filter((value) => value.completed === false)
  //   .map((value, index) => {
  //     return (
  //       <div key={index}>
  //         <h2>{value.title}</h2>
  //         {/* <h3>{person.accomplishment}</h3>
  //         <p>{person.profession}</p> */}
  //       </div>
  //     );
  //   });
  // // console.log(peoples);
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalClasses withNormalizeCSS>
        <Container>
          <TodoPages />
        </Container>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
