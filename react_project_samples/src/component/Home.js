import MyModal from "./MyModal";

const Home = () => {

    //임시 홈 왔을때 스토리지 비움
    //로그인 테스트를 위해서.
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