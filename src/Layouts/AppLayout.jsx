import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "../shared/components/NavBar";
import AlertBox from "../shared/components/AlertBox";

const AppLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />

      <NavBar />

      <main>
        <div>{children}</div>
      </main>

      <AlertBox />
    </>
  );
};

export default AppLayout;
