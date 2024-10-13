import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  // const navigation = useNavigation();
  // console.log(navigation);

  // const isPageLoading = navigation.state === 'loading';

  return (
    <div>
      <Navbar />
      <main className="page">
        <section className="page-container">
          <Outlet />
          {/* {isPageLoading ? <div className="loading"></div> : <Outlet />} */}
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default HomeLayout;
