import MyModal from "./MyModal";

const Home = () => {

    //임시 홈 왔을때 스토리지 비움
    localStorage.clear();

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome To My Home</p>
            <MyModal />
        </div>
    )
}

export default Home;