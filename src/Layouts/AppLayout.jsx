import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "../shared/components/NavBar";

const AppLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />

      <NavBar />

      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default AppLayout;
