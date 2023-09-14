import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MovilHeader from "../components/movilHeader/movilHeader";
import UserContentMovil from "../components/userContentMovil/userContentMovil";
import SideBar from "../components/sideBar/SideBar";
import UserNavigation from "../components/userNavigation/userNavigation";

const ProfileSection = () => {
  return (
    <>
      <SideBar />
      <MovilHeader />
      <Header />
      <UserContentMovil/>
      <UserNavigation/>
      <Footer />
    </>
  );
};

export default ProfileSection;
