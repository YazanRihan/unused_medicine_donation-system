import React from 'react'; // Importing React library
import Homepage from './Homepage'; // Importing Homepage component
import About from './About'; // Importing About component
import MainBar from './MainBar'; // Importing MainBar component
import Donate from './Donate'; // Importing Donate component
import { Route, Routes, Navigate} from 'react-router-dom'; // Importing Route, Routes and Navigate components from react-router-dom library
import SignIn from './SignIn' // Importing SignIn component

export const AppRoutes = () => { // Creating a functional component called AppRoutes
  return (
    <div>
      <MainBar /> {/*Rendering the MainBar component */}

      <Routes>
        <Route path="/Homepage" element={<Homepage/>} /> {/*If the path is '/Homepage', render the Homepage component */}
        <Route path="/" element={<Navigate to="/Homepage"/>} /> {/*If the path is '/', navigate to '/Homepage' */}
        <Route path="/About" element={<About/>} /> {/*If the path is '/About', render the About component */}
        <Route path="/SignIn" element={<SignIn/>} /> {/*If the path is '/SignIn', render the SignIn component */}
        <Route path="/Donate" element={<Donate/>} /> {/*If the path is '/Donate', render the Donate component */}
      </Routes>
    </div>
  );
};
